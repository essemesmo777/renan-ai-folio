import * as Icons from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { SERVICES, type Service, waLink } from "@/lib/site-data";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Sparkles;
  return <Cmp className={className} />;
}

export function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <Section id="servicos">
      <SectionHeading
        eyebrow="O que fazemos"
        title="Serviços que resolvem problemas reais"
        description="Do primeiro contato do cliente até a operação interna da empresa: cada serviço é planejado para gerar resultado, não apenas presença digital."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.06}>
            <button
              type="button"
              onClick={() => setActive(s)}
              className="group h-full w-full rounded-2xl surface card-hover p-6 text-left"
            >
              <span className="inline-grid size-12 place-items-center rounded-xl bg-[linear-gradient(140deg,rgba(168,85,247,0.3),rgba(59,130,246,0.22))]">
                <Icon name={s.icon} className="size-5.5 text-violet" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet">
                Ver detalhes
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-[#0b0b0f] sm:max-w-xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{active.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {active.details.intro}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet">
                  O que costuma incluir
                </p>
                <ul className="mt-3 space-y-2">
                  {active.details.includes.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl hairline bg-white/[0.03] p-4 text-sm text-muted-foreground">
                  {active.details.ideal}
                </p>
                <a
                  href={waLink(`Olá! Tenho interesse no serviço: ${active.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="size-4" />
                  Falar sobre este serviço
                </a>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
