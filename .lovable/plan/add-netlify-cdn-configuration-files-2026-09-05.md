# Add Netlify CDN configuration files

## Goal
Configure Netlify CDN caching and redirects by adding two static configuration files to `/public`.

## What will be done
1. Create `/public/_headers` with security headers and cache-control rules:
   - Global: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection: 1; mode=block`
   - `/assets/*`: cache 1 year (immutable, content-hashed JS/CSS)
   - `/img/*`: cache 30 days
   - `/*.webp`: cache 30 days
   - `/index.html`: no-cache, no-store, must-revalidate (instant deploy propagation)
2. Create `/public/_redirects` with a single rule:
   - `/public/img* /img/:splat 301`

## Current state
- `/public` exists and contains `favicon.png`, `img/`, and `robots.txt`.
- Neither `_headers` nor `_redirects` currently exists.

## Expected result
Netlify will serve the specified security headers and cache policies, and redirect any `/public/img*` requests to `/img/*` with a 301.
