import { Instagram, Mail, MessageCircle } from "lucide-react";
import { CONTACT, DEFAULT_WA_MESSAGE, NAV_LINKS, waLink } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl grad-brand text-sm font-bold text-white">
                R
              </span>
              <span className="font-display text-base font-bold">
                RankBrum<span className="text-violet">.AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Agência digital especializada em landing pages, sistemas, automações e agentes de
              inteligência artificial para empresas.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navegação
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={`/${l.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contato
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <MessageCircle className="size-4 text-signal" />
                  {CONTACT.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4 text-electric" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Instagram className="size-4 text-neon" />
                  {CONTACT.instagramLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} RankBrum.AI. Todos os direitos reservados.</p>
          <p>Projetos personalizados — prazos e valores definidos por escopo.</p>
        </div>
      </div>
    </footer>
  );
}
