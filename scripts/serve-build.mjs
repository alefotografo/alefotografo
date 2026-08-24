/**
 * Roda o build de produção localmente (Node) para permitir o export estático.
 * node scripts/serve-build.mjs  -> http://localhost:4173
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";

const PORT = Number(process.env.PORT || 4173);
const CLIENT = path.resolve("dist/client");
const mod = await import(path.resolve("dist/server/index.mjs"));
const handler = mod.default?.fetch ? mod.default : mod;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const staticFile = path.join(CLIENT, decodeURIComponent(url.pathname));
  if (
    url.pathname !== "/" &&
    fs.existsSync(staticFile) &&
    fs.statSync(staticFile).isFile()
  ) {
    res.writeHead(200, {
      "content-type": MIME[path.extname(staticFile)] || "application/octet-stream",
    });
    fs.createReadStream(staticFile).pipe(res);
    return;
  }

  const body =
    req.method === "GET" || req.method === "HEAD"
      ? undefined
      : Readable.toWeb(req);
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body,
    duplex: body ? "half" : undefined,
  });

  try {
    const response = await handler.fetch(request, process.env, {
      waitUntil() {},
      passThroughOnException() {},
    });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "content-type": "text/plain" });
    res.end(String(err));
  }
});

server.listen(PORT, () => console.log(`build servindo em http://localhost:${PORT}`));
