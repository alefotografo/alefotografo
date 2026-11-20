#!/usr/bin/env node
/**
 * Migração do acervo: Rackspace → Supabase Storage.
 *
 * - Lê scripts/acervo-urls.txt (uma URL por linha, gerado do grep no código).
 * - Garante o bucket público `acervo` (cria se não existir).
 * - Para cada URL: baixa o original e faz upload preservando o caminho
 *   (`GaleriaImagem/102590/foto.jpg` → objeto de mesmo nome). Idempotente:
 *   pula objetos que já existem (HEAD na URL pública).
 * - Relatório JSON em ./migrate-report.json + log de progresso.
 *
 * Regenerar o inventário:
 *   grep -rhoE "https://[a-z0-9.-]+\.rackcdn\.com/[^\"') ]+" src/ public/ scripts/ \
 *     | sed 's/[?&].*$//' | sort -u > scripts/acervo-urls.txt
 *
 * Env:
 *   SUPABASE_URL                 ex.: https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY    secreta; bypass de RLS p/ escrita
 *   LIMIT / OFFSET               fatia do inventário (testes)
 *   DRY_RUN=1                    só conta, não transfere
 *   CONCURRENCY                  padrão 8
 *   ALLOW_FAILURES=1             não falha o processo com erros parciais
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BUCKET = "acervo";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIST_FILE = join(ROOT, "scripts", "acervo-urls.txt");
const REPORT_FILE = join(ROOT, "migrate-report.json");

const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const LIMIT = Number.parseInt(process.env.LIMIT || "0", 10);
const OFFSET = Number.parseInt(process.env.OFFSET || "0", 10);
const DRY_RUN = process.env.DRY_RUN === "1";
const CONCURRENCY = Math.max(1, Number.parseInt(process.env.CONCURRENCY || "8", 10));
const ALLOW_FAILURES = process.env.ALLOW_FAILURES === "1";

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Faltam SUPABASE_URL e/ou SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(2);
}

const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

function contentTypeFor(path) {
  const m = path.toLowerCase().match(/\.[a-z]+$/);
  return CONTENT_TYPES[m?.[0]] ?? "application/octet-stream";
}

function objectPathFromUrl(raw) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  return decodeURIComponent(u.pathname).replace(/^\/+/, "");
}

async function api(pathname, init = {}) {
  const res = await fetch(`${SUPABASE_URL}/storage/v1${pathname}`, {
    ...init,
    headers: {
      apikey: SERVICE_KEY,
      authorization: `Bearer ${SERVICE_KEY}`,
      ...(init.body ? { "content-type": "application/octet-stream" } : {}),
      ...init.headers,
    },
  });
  return res;
}

async function ensureBucket() {
  const probe = await api(`/bucket/${BUCKET}`);
  if (probe.ok) {
    console.log(`Bucket ${BUCKET}: já existe.`);
    return;
  }
  const create = await api(`/bucket`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ id: BUCKET, name: BUCKET, public: true }),
  });
  if (!create.ok) {
    console.error(`Falha criando bucket: ${create.status} ${await create.text()}`);
    process.exit(1);
  }
  console.log(`Bucket ${BUCKET}: criado (público).`);
}

async function existsPublic(objectPath) {
  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${encodeURI(objectPath)}`,
    { method: "HEAD", signal: AbortSignal.timeout(15000) },
  );
  return res.ok;
}

async function downloadWithRetry(url, tries = 3) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(60000) });
      if (!res.ok) throw new Error(`download HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) throw new Error("download vazio");
      return buf;
    } catch (e) {
      lastErr = e;
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw lastErr;
}

async function upload(objectPath, buf) {
  const res = await api(`/object/${BUCKET}/${encodeURI(objectPath)}?upsert=false`, {
    method: "POST",
    body: buf,
  });
  // 409/400 com "Duplicate" = já existe (corrida benigna) — tratar como ok.
  if (res.ok) return "uploaded";
  const text = await res.text();
  if (res.status === 409 || /duplicate/i.test(text)) return "skipped";
  throw new Error(`upload HTTP ${res.status}: ${text.slice(0, 200)}`);
}

async function main() {
  const all = readFileSync(LIST_FILE, "utf8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const slice = LIMIT > 0 ? all.slice(OFFSET, OFFSET + LIMIT) : all.slice(OFFSET);
  console.log(
    `Inventário: ${all.length} URLs | fatia: ${slice.length} (offset=${OFFSET}, limit=${LIMIT}) | concorrência=${CONCURRENCY} | dry_run=${DRY_RUN}`,
  );

  // Dry-run não toca no Supabase — serve para validar o inventário/fatia.
  if (!DRY_RUN) await ensureBucket();

  const report = { total: slice.length, uploaded: 0, skipped: 0, failed: 0, failures: [] };
  let idx = 0;

  async function worker() {
    while (idx < slice.length) {
      const url = slice[idx++];
      const objectPath = objectPathFromUrl(url);
      const n = idx;
      if (!objectPath) {
        report.failed++;
        report.failures.push({ url, error: "URL inválida" });
        continue;
      }
      try {
        if (DRY_RUN) {
          report.skipped++;
          if (n % 100 === 0) console.log(`[dry-run] ${n}/${slice.length}`);
          continue;
        }
        if (await existsPublic(objectPath)) {
          report.skipped++;
          continue;
        }
        const buf = await downloadWithRetry(url);
        const status = await upload(objectPath, buf);
        report[status === "uploaded" ? "uploaded" : "skipped"]++;
        if (n % 50 === 0) {
          console.log(
            `${n}/${slice.length} | up=${report.uploaded} skip=${report.skipped} fail=${report.failed}`,
          );
        }
      } catch (e) {
        report.failed++;
        report.failures.push({ url, error: String(e?.message ?? e).slice(0, 300) });
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  console.log(
    `FIM: ${report.uploaded} enviados, ${report.skipped} pulados, ${report.failed} falhas → ${REPORT_FILE}`,
  );
  if (report.failed > 0 && !ALLOW_FAILURES) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
