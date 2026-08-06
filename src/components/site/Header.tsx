import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, DEFAULT_WA_MESSAGE, waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300",
            scrolled ? "surface glow-violet" : "border border-transparent",
          )}
        >
          <a href="#inicio" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl grad-brand text-sm font-bold text-white">
              R
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              RankBrum<span className="text-violet">.AI</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl grad-brand px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <MessageCircle className="size-4" />
              Conte sobre seu projeto
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-xl surface lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-2 grid gap-1 rounded-2xl surface p-3 lg:hidden">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-lg grad-brand px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Conte sobre seu projeto
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
