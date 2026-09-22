import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import type { SearchResults as SearchResultsModel } from "@/lib/search";
import { Button } from "@/components/ui/button";

const SearchResults = lazy(() =>
  import("@/components/site/SearchResults").then((module) => ({ default: module.SearchResults })),
);

const EMPTY_RESULTS: SearchResultsModel = { photos: [], videos: [], blog: [], total: 0 };

const MOBILE_PANEL_ID = "nav-mobile-panel";

type Item = { to: string; label: string; hint?: string };
type Entry = { label: string; to?: string; items?: Item[] };

const NAV: Entry[] = [
  {
    label: "Serviços",
    items: [
      { to: "/foto-profissional", label: "Retrato profissional", hint: "Ensaio individual com direção" },
      { to: "/foto-profissional-para-linkedin", label: "Foto para LinkedIn", hint: "Headshot de perfil" },
      { to: "/fotografia-executiva", label: "Fotografia executiva", hint: "Retratos de liderança" },
      { to: "/fotos-corporativas", label: "Retratos de equipe", hint: "Times e ambiente de escritório" },
      { to: "/fotos-profissionais-medicos", label: "Médicos", hint: "Retratos para saúde" },
      { to: "/fotografia-para-advogados", label: "Advogados", hint: "Sócios e escritórios" },
      { to: "/fotografia-para-clinicas", label: "Clínicas", hint: "Equipe e ambientes" },
      { to: "/eventos-corporativos", label: "Pessoas em eventos", hint: "Retratos e fotos de time" },
      { to: "/portfolio", label: "Ver todos os serviços", hint: "Panorama completo com fotos" },
    ],
  },
  {
    label: "Portfólio",
    items: [
      { to: "/fotografo-corporativo", label: "Galerias por segmento", hint: "Fotos por especialidade" },
      { to: "/portfolio", label: "Portfólio", hint: "Trabalhos selecionados" },
      { to: "/depoimentos", label: "Depoimentos", hint: "O que dizem os clientes" },
    ],
  },
  { label: "Vídeos", to: "/videos" },
  { label: "Blog", to: "/blog" },
  {
    label: "Sobre",
    items: [
      { to: "/quem-e-o-ale", label: "Quem é o Alê" },
      { to: "/sobre", label: "Sobre o estúdio" },
      { to: "/faq", label: "Perguntas frequentes" },
    ],
  },
  { label: "Contato", to: "/contato" },
];

/** Marca o grupo ativo quando a rota atual pertence a ele. */
function isEntryActive(entry: Entry, pathname: string) {
  const p = pathname.replace(/\/+$/, "") || "/";
  const match = (to: string) => p === to || p.startsWith(`${to}/`);
  if (entry.to) return entry.to === "/" ? p === "/" : match(entry.to);
  return (entry.items ?? []).some((i) => match(i.to));
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState<SearchResultsModel>(EMPTY_RESULTS);
  const navRef = useRef<HTMLElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const mobileInputRef = useRef<HTMLInputElement | null>(null);
  const desktopSearchTriggerRef = useRef<HTMLButtonElement | null>(null);
  const menuTriggerRef = useRef<HTMLButtonElement | null>(null);
  const panelCloseRef = useRef<HTMLButtonElement | null>(null);
  const wasPanelOpen = useRef(false);

  const closeSearch = () => {
    setSearchOpen(false);
    if (window.matchMedia("(min-width: 1280px)").matches) {
      desktopSearchTriggerRef.current?.focus();
    } else if (mobileOpen) {
      mobileInputRef.current?.focus();
    }
  };

  const submitSearch = () => {
    const q = term.trim();
    if (!q) return;
    setSearchOpen(false);
    setMobileOpen(false);
    navigate({ to: "/busca", search: { q } });
  };

  // fecha tudo ao trocar de rota
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
    setMobileGroup(null);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedTerm(term.trim().slice(0, 120)), 300);
    return () => window.clearTimeout(timer);
  }, [term]);

  useEffect(() => {
    let active = true;
    if ((!searchOpen && !mobileOpen) || debouncedTerm.length < 2) {
      setResults(EMPTY_RESULTS);
      return () => {
        active = false;
      };
    }

    void import("@/lib/search").then(({ searchSite, trackSearch }) => {
      if (!active) return;
      const nextResults = searchSite(debouncedTerm);
      setResults(nextResults);
      trackSearch(debouncedTerm, nextResults.total);
    });

    return () => {
      active = false;
    };
  }, [debouncedTerm, searchOpen, mobileOpen]);

  // trava a página com o painel mobile aberto. Fixa o body para que a rolagem
  // de fundo pare em qualquer browser (incl. iOS) sem perder a posição de scroll.
  useEffect(() => {
    if (!mobileOpen) return;
    const scrollY = window.scrollY;
    const openedPath = window.location.pathname;
    const body = document.body;
    const prevPosition = body.style.position;
    const prevTop = body.style.top;
    const prevLeft = body.style.left;
    const prevRight = body.style.right;
    const prevWidth = body.style.width;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = prevPosition;
      body.style.top = prevTop;
      body.style.left = prevLeft;
      body.style.right = prevRight;
      body.style.width = prevWidth;
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  // foco: ao abrir, entra no painel (botão fechar); ao fechar, volta ao hamburger
  useEffect(() => {
    if (mobileOpen) {
      wasPanelOpen.current = true;
      panelCloseRef.current?.focus();
    } else if (wasPanelOpen.current) {
      wasPanelOpen.current = false;
      menuTriggerRef.current?.focus({ preventScroll: true });
    }
  }, [mobileOpen]);

  // mantém o Tab circulando dentro do painel
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panel.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Esc fecha; clique fora fecha o submenu de desktop
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      // o campo de busca do painel cuida do próprio Escape (limpa + tira o foco)
      if ((e.target as HTMLElement | null)?.id === "mobile-menu-search") return;
      setOpenGroup(null);
      setMobileOpen(false);
      closeSearch();
    };
    // mousedown (e não click): o React re-renderiza de forma síncrona no
    // click e o alvo original sai do DOM, o que faria o contains() falhar.
    const onPointerDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenGroup(null);
      if (!searchRef.current?.contains(e.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  // foco automático na busca desktop ao abrir
  useEffect(() => {
    if (!searchOpen) return;
    if (window.matchMedia("(min-width: 1280px)").matches) inputRef.current?.focus();
  }, [searchOpen]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-3 sm:px-5 md:gap-4 md:py-4 xl:gap-6 xl:px-8">
          <Link
            to="/"
            className="flex min-w-0 shrink-0 items-center"
            aria-label="Alê Fotógrafo — Início"
          >
            <picture>
              <source srcSet="/img/logo-alefotografo-112.webp 112w, /img/logo-alefotografo-192.webp 192w" sizes="(max-width: 639px) 57px, (max-width: 1023px) 72px, 86px" type="image/webp" />
              <img
                src="/img/logo-alefotografo-192.webp"
                alt="Alê Fotógrafo"
                width={192}
                height={109}
                fetchPriority="auto"
                loading="eager"
                decoding="async"
                className="h-8 w-auto sm:h-10 lg:h-12"
              />
            </picture>
          </Link>

          {/* Menu horizontal a partir de 1280px (desktop) */}
          <nav
            ref={navRef}
            className="hidden min-w-0 items-center justify-end gap-1 xl:flex xl:gap-2"
            aria-label="Principal"
          >
            {NAV.map((entry) => {
              const active = isEntryActive(entry, pathname);
              if (!entry.items) {
                return (
                  <Link
                    key={entry.label}
                    to={entry.to ?? "/"}
                    className={`whitespace-nowrap rounded-sm px-2 py-2 text-[13px] transition-colors hover:text-foreground xl:px-3 xl:text-sm ${
                      active ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {entry.label}
                  </Link>
                );
              }
              const open = openGroup === entry.label;
              return (
                <div
                  key={entry.label}
                  className="relative"
                  onMouseEnter={() => setOpenGroup(entry.label)}
                  onMouseLeave={() => setOpenGroup((g) => (g === entry.label ? null : g))}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenGroup(open ? null : entry.label)}
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2 py-2 text-[13px] transition-colors hover:text-foreground xl:px-3 xl:text-sm ${
                      active || open ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {entry.label}
                    <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  {open && (
                    <div className="absolute right-0 top-full z-50 w-[min(20rem,calc(100vw-2rem))] pt-2">
                      <ul className="overflow-hidden rounded-sm border border-border bg-background shadow-xl shadow-black/40">
                        {entry.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              onClick={() => setOpenGroup(null)}
                              className="block border-b border-border/40 px-4 py-3 last:border-0 hover:bg-surface"
                            >
                              <span className="block text-sm text-foreground">{item.label}</span>
                              {item.hint && (
                                <span className="mt-0.5 block text-xs text-muted-foreground">{item.hint}</span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="relative" ref={searchRef}>
              {searchOpen ? (
                <form
                  role="search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    submitSearch();
                  }}
                  className="flex items-center gap-2 rounded-sm border border-border bg-surface px-2 focus-within:border-ember"
                >
                  <Search size={14} className="shrink-0 text-muted-foreground" aria-hidden="true" />
                  <label htmlFor="header-search" className="sr-only">
                    Buscar no site
                  </label>
                  <input
                    id="header-search"
                    ref={inputRef}
                    type="text"
                    inputMode="search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value.slice(0, 120))}
                    placeholder="Buscar no site"
                    className="w-40 bg-transparent py-2 text-[13px] text-foreground outline-none placeholder:text-muted-foreground xl:w-52"
                  />
                  {term ? <Button type="button" variant="ghost" size="icon" aria-label="Limpar busca" onClick={() => setTerm("")}><X size={14} /></Button> : null}
                </form>
              ) : (
                <button
                  type="button"
                  aria-label="Abrir busca"
                  aria-expanded={false}
                  onClick={() => setSearchOpen(true)}
                  ref={desktopSearchTriggerRef}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Search size={16} />
                </button>
              )}
              {searchOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 max-h-[min(70vh,42rem)] w-[min(32rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-sm border border-border bg-background shadow-xl shadow-background/60">
                  <Suspense fallback={<p className="p-5 text-sm text-muted-foreground">Preparando busca…</p>}>
                    <SearchResults query={debouncedTerm} results={results} compact onSelect={closeSearch} />
                  </Suspense>
                </div>
              )}
            </div>

            <Link
              to="/contato"
              className="ml-1 whitespace-nowrap rounded-sm bg-ember px-3 py-2 text-[13px] font-medium text-accent-foreground hover:bg-ember-glow xl:px-4 xl:text-sm"
            >
              Orçamento
            </Link>
          </nav>

          {/* Ações mobile/tablet (< 1280px): só Orçamento + Menu */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/contato"
              className="flex min-h-12 items-center whitespace-nowrap rounded-sm bg-ember px-3 py-2 text-xs font-medium text-accent-foreground hover:bg-ember-glow"
            >
              Orçamento
            </Link>
            <button
              type="button"
              ref={menuTriggerRef}
              className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-border text-foreground"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_PANEL_ID}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Painel de navegação em tela cheia (< 1280px) */}
      {mobileOpen && (
        <div
          id={MOBILE_PANEL_ID}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-[60] flex h-dvh flex-col bg-background xl:hidden"
          style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
            <span className="text-sm font-medium text-muted-foreground">Menu</span>
            <button
              type="button"
              ref={panelCloseRef}
              onClick={() => setMobileOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-sm text-foreground"
            >
              <X size={26} />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            <div className="mx-auto flex max-w-7xl flex-col px-4 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-3">
              <form
                role="search"
                onSubmit={(e) => {
                  e.preventDefault();
                  submitSearch();
                }}
                className="flex items-center gap-2 rounded-sm border border-border bg-surface px-3 focus-within:border-ember"
              >
                <Search size={18} className="shrink-0 text-muted-foreground" aria-hidden="true" />
                <label htmlFor="mobile-menu-search" className="sr-only">
                  Buscar no site
                </label>
                <input
                  ref={mobileInputRef}
                  id="mobile-menu-search"
                  type="text"
                  inputMode="search"
                  value={term}
                  onChange={(e) => setTerm(e.target.value.slice(0, 120))}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.stopPropagation();
                      setTerm("");
                      e.currentTarget.blur();
                    }
                  }}
                  placeholder="Buscar no site"
                  className="min-h-12 min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
                />
                {term ? (
                  <Button type="button" variant="ghost" size="icon" aria-label="Limpar busca" onClick={() => setTerm("")}>
                    <X size={18} />
                  </Button>
                ) : null}
              </form>

              {debouncedTerm.length >= 2 && (
                <div className="mt-2 overflow-hidden rounded-sm border border-border" aria-live="polite">
                  <Suspense fallback={<p className="p-5 text-sm text-muted-foreground">Preparando busca…</p>}>
                    <SearchResults query={debouncedTerm} results={results} compact onSelect={() => setMobileOpen(false)} />
                  </Suspense>
                </div>
              )}

              <nav className="mt-2 flex flex-col" aria-label="Menu">
                {NAV.map((entry) => {
                  if (!entry.items) {
                    return (
                      <Link
                        key={entry.label}
                        to={entry.to ?? "/"}
                        className="flex min-h-12 items-center border-b border-border/40 text-foreground"
                      >
                        {entry.label}
                      </Link>
                    );
                  }
                  const open = mobileGroup === entry.label;
                  const groupId = `mobile-group-${entry.label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
                  return (
                    <div key={entry.label} className="border-b border-border/40">
                      <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={groupId}
                        onClick={() => setMobileGroup(open ? null : entry.label)}
                        className="flex min-h-12 w-full items-center justify-between text-left text-foreground"
                      >
                        {entry.label}
                        <ChevronDown size={18} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
                      </button>
                      {open && (
                        <ul id={groupId} className="pb-1">
                          {entry.items.map((item) => (
                            <li key={item.to}>
                              <Link
                                to={item.to}
                                className="flex min-h-11 items-center py-1 pl-4 text-sm text-muted-foreground hover:text-foreground"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </nav>

              <Link
                to="/contato"
                className="mt-6 flex min-h-12 items-center justify-center rounded-sm bg-ember px-4 py-3 text-sm font-medium text-accent-foreground"
              >
                Solicitar orçamento
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
