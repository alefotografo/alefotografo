/**
 * Exporta o site como HTML estático para hospedagem compartilhada (Hostinger).
 *
 * Uso:
 *   1) bun run build
 *   2) bunx vite preview --port 4173   (em outro terminal)
 *   3) node scripts/export-static.mjs  -> gera ./hostinger/
 *
 * O resultado em ./hostinger/ pode ser enviado por FTP / Gerenciador de
 * Arquivos da Hostinger para a pasta public_html.
 */
import fs from "node:fs/promises";
import path from "node:path";

const ORIGIN = process.env.EXPORT_ORIGIN || "http://localhost:4173";
const OUT = path.resolve("hostinger");
const CLIENT_DIR = path.resolve("dist/client");

const XML_ROUTES = [
  "/sitemap.xml",
  "/sitemap-index.xml",
  "/sitemap-videos.xml",
  "/blog/rss.xml",
];

async function fetchText(url) {
  const res = await fetch(url, { redirect: "manual" });
  if (res.status >= 400) throw new Error(`${res.status} ${url}`);
  return { status: res.status, body: await res.text(), headers: res.headers };
}

async function collectUrls() {
  const urls = new Set(["/"]);
  const { body } = await fetchText(`${ORIGIN}/sitemap.xml`);
  for (const m of body.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const p = new URL(m[1]).pathname;
    urls.add(p === "" ? "/" : p);
  }
  // Rotas extras que podem não estar no sitemap
  for (const extra of ["/auth", "/contato", "/faq"]) urls.add(extra);
  return [...urls];
}

async function copyDir(from, to) {
  await fs.cp(from, to, { recursive: true });
}

async function writeFileSafe(file, content) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

/** Assets externalizados (/__l5e/...) precisam ser baixados para o Hostinger. */
async function downloadExternalAssets(htmlFiles) {
  const cdnBase = process.env.CDN_BASE || "https://alefotografos.com.br";
  const paths = new Set();
  for (const file of htmlFiles) {
    const html = await fs.readFile(file, "utf8");
    for (const m of html.matchAll(/\/__l5e\/[^"'\s)]+/g)) paths.add(m[0]);
  }
  for (const p of paths) {
    const dest = path.join(OUT, p.replace(/^\//, ""));
    if (await fs.stat(dest).catch(() => null)) continue;
    const res = await fetch(`${cdnBase}${p}`);
    if (!res.ok) {
      console.log(`aviso: não baixei ${p} (${res.status})`);
      continue;
    }
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
  }
  return paths.size;
}

async function listHtml(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await listHtml(full)));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

const LEGACY_301 = [
  ["videos-para-empresas", "videos"],
  ["videos-corporativos", "videos"],
  ["portfolio-do-fotografo", "fotografo-corporativo"],
  ["loja", "contato"],
  ["orcamento", "contato"],
  ["fale-conosco", "contato"],
  ["sobre-o-ale", "quem-e-o-ale"],
  ["fotografia-corporativa-sao-paulo", "fotos-corporativas"],
  ["foto-profissional-sao-paulo", "foto-profissional"],
  ["foto-para-linkedin", "foto-profissional-para-linkedin"],
  ["fotos-para-medicos", "fotos-profissionais-medicos"],
  ["fotografia-para-medicos", "fotos-profissionais-medicos"],
  ["fotos-para-advogados", "fotografia-para-advogados"],
  ["retrato-executivo", "fotografia-executiva"],
]
  .map(([from, to]) => `RewriteRule ^${from}/?$ /${to} [R=301,L]`)
  .join("\n");

const HTACCESS = `# Hostinger — Alê Fotógrafo
Options -MultiViews
RewriteEngine On

# Força HTTPS
RewriteCond %{HTTPS} !=on
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Força domínio sem www
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Remove barra final duplicada (mantém URLs canônicas sem "/")
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.+)/$ /$1 [R=301,L]

# Redirecionamentos 301 do site antigo
${LEGACY_301}

# Categorias antigas do WordPress
RewriteRule ^blog/(categoria|category|tag)/.*$ /blog [R=301,L]
RewriteRule ^blog/page/[0-9]+/?$ /blog [R=301,L]
RewriteRule ^portfolio-do-fotografo/(.+)$ /fotografo-corporativo/$1 [R=301,L]


# Serve o HTML pré-gerado de cada rota
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
RewriteRule ^(.*)$ /$1/index.html [L]

# Fallback SPA
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

ErrorDocument 404 /404.html

# Cache de assets com hash
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  <FilesMatch "\\.(js|css|woff2|jpg|jpeg|png|webp|svg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`;

async function main() {
  await fs.rm(OUT, { recursive: true, force: true });
  await fs.mkdir(OUT, { recursive: true });

  // 1. assets do build (js/css/imagens) + arquivos de public/
  await copyDir(CLIENT_DIR, OUT);
  await fs.rm(path.join(OUT, "_headers"), { force: true });

  // 2. HTML de cada rota
  const urls = await collectUrls();
  let ok = 0;
  const failed = [];
  for (const url of urls) {
    try {
      const { body } = await fetchText(`${ORIGIN}${url}`);
      const file =
        url === "/"
          ? path.join(OUT, "index.html")
          : path.join(OUT, url.replace(/^\//, ""), "index.html");
      await writeFileSafe(file, body);
      ok++;
    } catch (err) {
      failed.push(`${url} -> ${err.message}`);
    }
  }

  // 3. sitemaps e RSS
  for (const route of XML_ROUTES) {
    try {
      const { body } = await fetchText(`${ORIGIN}${route}`);
      await writeFileSafe(path.join(OUT, route.replace(/^\//, "")), body);
    } catch (err) {
      failed.push(`${route} -> ${err.message}`);
    }
  }

  // 4. página 404
  try {
    const { body } = await fetchText(`${ORIGIN}/pagina-inexistente-404`).catch(
      async () => ({ body: (await fetchText(`${ORIGIN}/`)).body }),
    );
    await writeFileSafe(path.join(OUT, "404.html"), body);
  } catch {
    /* noop */
  }

  // 5. .htaccess
  await writeFileSafe(path.join(OUT, ".htaccess"), HTACCESS);

  // 6. assets externalizados
  const assets = await downloadExternalAssets(await listHtml(OUT));
  console.log(`Assets externos baixados: ${assets}`);

  console.log(`HTML gerado: ${ok}/${urls.length} rotas`);
  if (failed.length) console.log("Falhas:\n" + failed.join("\n"));
  console.log(`Pasta pronta para upload: ${OUT}`);
}

main();
