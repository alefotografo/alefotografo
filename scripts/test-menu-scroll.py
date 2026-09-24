import asyncio, os, sys
from playwright.async_api import async_playwright

BASE = os.environ.get("BASE_URL", "http://localhost:8080").rstrip("/")
VIEWPORTS = {"celular": (390, 844), "tablet": (820, 1180)}
# (grupo ou None, texto do link, caminho esperado)
CASES = [
    (None, "Vídeos", "/videos"),
    (None, "Blog", "/blog"),
    (None, "Contato", "/contato"),
    ("Serviços", "Retrato profissional", "/foto-profissional"),
    ("Portfólio", "Depoimentos", "/depoimentos"),
    ("Sobre", "Quem é o Alê", "/quem-e-o-ale"),
    (None, "Solicitar orçamento", "/contato"),
]


async def prepare(page, target=None):
    await page.goto(BASE + "/", wait_until="load")
    await page.wait_for_timeout(1500)
    await page.evaluate(f"window.scrollTo(0, {target if target is not None else 'document.body.scrollHeight'})")
    await page.wait_for_timeout(400)
    y = await page.evaluate("window.scrollY")
    await page.get_by_role("button", name="Abrir menu").click()
    panel = page.get_by_role("dialog", name="Menu de navegação")
    await panel.wait_for()
    return panel, y


async def run_case(page, group, label, path):
    panel, start_y = await prepare(page)
    if start_y < 200:
        return False, f"home não rolou (y={start_y})"
    if group:
        await panel.get_by_role("button", name=group, exact=True).click()
    await panel.get_by_role("link", name=label, exact=True).first.click()
    await page.wait_for_url(lambda u: u.rstrip("/").endswith(path), timeout=15000)
    await page.wait_for_timeout(800)
    y = await page.evaluate("window.scrollY")
    return y < 5, f"scrollY={y}"


async def control_case(page):
    panel, start_y = await prepare(page, 2000)
    await panel.get_by_role("button", name="Fechar menu").first.click()
    await page.wait_for_timeout(500)
    y = await page.evaluate("window.scrollY")
    return abs(y - start_y) < 5, f"antes={start_y} depois={y}"


async def main():
    failures = 0
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        for name, (w, h) in VIEWPORTS.items():
            ctx = await browser.new_context(viewport={"width": w, "height": h}, has_touch=True)
            page = await ctx.new_page()
            for group, label, path in CASES:
                try:
                    ok, info = await run_case(page, group, label, path)
                except Exception as e:
                    ok, info = False, str(e).splitlines()[0]
                failures += not ok
                print(f"[{name}] {label:22} {'PASSOU' if ok else 'FALHOU'} ({info})")
            try:
                ok, info = await control_case(page)
            except Exception as e:
                ok, info = False, str(e).splitlines()[0]
            failures += not ok
            print(f"[{name}] {'controle (sem navegar)':22} {'PASSOU' if ok else 'FALHOU'} ({info})")
            await ctx.close()
        await browser.close()
    print(f"\n{failures} falha(s)")
    sys.exit(1 if failures else 0)


asyncio.run(main())
