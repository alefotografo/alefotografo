#!/usr/bin/env python3
"""Gera src/data/categoryImageDims.json com as dimensões reais das imagens
de categoryImages.json, via range requests (lê só o cabeçalho do arquivo).
Uso: python3 scripts/gen-category-image-dims.py
Não altera imagens, URLs ou ordem — apenas mede e grava [w, h]."""
import json, struct, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor

RANGE_BYTES = 262143  # 256 KiB cobre o SOF da esmagadora maioria dos JPEGs
WORKERS = 24


def jpeg_dims(data: bytes):
    i = 2
    n = len(data)
    while i < n - 9:
        if data[i] != 0xFF:
            i += 1
            continue
        marker = data[i + 1]
        if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7,
                      0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
            h, w = struct.unpack(">HH", data[i + 5: i + 9])
            return w, h
        if marker in (0xD8, 0x01) or 0xD0 <= marker <= 0xD7:
            i += 2
            continue
        seglen = struct.unpack(">H", data[i + 2: i + 4])[0]
        i += 2 + seglen
    return None


def png_dims(data: bytes):
    if data[:8] == b"\x89PNG\r\n\x1a\n" and data[12:16] == b"IHDR":
        w, h = struct.unpack(">II", data[16:24])
        return w, h
    return None


def webp_dims(data: bytes):
    if data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        return None
    fmt = data[12:16]
    if fmt == b"VP8 ":
        w, h = struct.unpack("<HH", data[26:30])
        return w & 0x3FFF, h & 0x3FFF
    if fmt == b"VP8L":
        bits = struct.unpack("<I", data[21:25])[0]
        return (bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1
    if fmt == b"VP8X":
        w = int.from_bytes(data[24:27], "little") + 1
        h = int.from_bytes(data[27:30], "little") + 1
        return w, h
    return None


def parse_dims(data: bytes):
    if data[:2] == b"\xff\xd8":
        return jpeg_dims(data)
    return png_dims(data) or webp_dims(data)


def fetch_dims(url: str):
    req = urllib.request.Request(
        url, headers={"Range": f"bytes=0-{RANGE_BYTES}", "User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            data = r.read(RANGE_BYTES + 1)
        d = parse_dims(data)
        if d:
            return url, d
        # retry com janela maior (SOF fora do range)
        req = urllib.request.Request(
            url, headers={"Range": f"bytes=0-{RANGE_BYTES * 4}", "User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=45) as r:
            data = r.read(RANGE_BYTES * 4 + 1)
        return url, parse_dims(data)
    except Exception:
        return url, None


def main():
    cats = json.load(open("src/data/categoryImages.json"))
    dims = json.load(open("src/data/imageDims.json"))
    urls = []
    for v in cats.values():
        if isinstance(v, list):
            for item in v:
                u = item if isinstance(item, str) else item.get("src", item.get("url", ""))
                if u and u not in urls:
                    urls.append(u)
    missing = [u for u in urls if not (dims.get(u) and len(dims[u]) >= 2)]
    print(f"total: {len(urls)} | sem dims: {len(missing)}", flush=True)

    result, failed = {}, []
    done = 0
    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        for url, d in ex.map(fetch_dims, missing):
            done += 1
            if d:
                result[url] = [d[0], d[1]]
            else:
                failed.append(url)
            if done % 200 == 0:
                print(f"  {done}/{len(missing)} ok={len(result)} falhas={len(failed)}", flush=True)

    out = {u: result[u] for u in urls if u in result}
    with open("src/data/categoryImageDims.json", "w") as f:
        json.dump(out, f, separators=(",", ":"), ensure_ascii=False)
    print(f"gravado: {len(out)} dims em src/data/categoryImageDims.json | falhas: {len(failed)}")
    for u in failed[:10]:
        print("  FALHOU:", u.split("/")[-1], file=sys.stderr)


if __name__ == "__main__":
    main()
