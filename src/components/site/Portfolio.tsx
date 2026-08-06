import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Target, Users } from "lucide-react";
import { Section, SectionHeading, Reveal, Mockup } from "./primitives";
import { SEGMENTS, waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PortfolioModels() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const active = SEGMENTS.find((s) => s.slug === openSlug) ?? null;

  return (
    <Section id="projetos">
      <SectionHeading
        eyebrow="Modelos de projeto"
        title="Como ficaria o seu segmento"
        description="Modelos demonstrativos e conceitos de projeto criados pela RankBrum.AI para mostrar estrutura, funcionalidades e estratégia — sem apresentar clientes fictícios."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SEGMENTS.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setOpenSlug(s.slug)}
              className="group h-full w-full rounded-2xl surface card-hover p-4 text-left"
            >
              <Mockup hue={s.hue} label={`${s.name.toLowerCase()}.rankbrum.ai`} />
              <div className="mt-4 px-1 pb-1">
                <span className="rounded-full hairline bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet">
                  Ver estrutura
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
        Todos os modelos acima são demonstrações autorais criadas para ilustrar possibilidades de
        projeto. Não representam clientes reais nem resultados garantidos.
      </p>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-[#0b0b0f] sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{active.name}</DialogTitle>
                <DialogDescription>{active.short}</DialogDescription>
              </DialogHeader>
              <Mockup hue={active.hue} label={`${active.slug}.rankbrum.ai`} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl hairline bg-white/[0.03] p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet">
                    <Target className="size-3.5" /> Objetivo
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{active.objective}</p>
                </div>
                <div className="rounded-xl hairline bg-white/[0.03] p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neon">
                    <Users className="size-3.5" /> Público
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{active.audience}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Seções sugeridas
                  </p>
                  <ul className="mt-3 space-y-2">
                    {active.sections.map((x) => (
                      <li key={x} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Funcionalidades
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {active.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full hairline bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">{active.strategy}</p>
                </div>
              </div>
              <a
                href={waLink(`Olá! Quero um projeto para o segmento: ${active.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="size-4" />
                Quero um projeto assim
              </a>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

export function Showcase() {
  const [index, setIndex] = useState(0);
  const active = SEGMENTS[index]!;

  return (
    <Section className="py-16 sm:py-20">
      <SectionHeading
        eyebrow="Vitrine interativa"
        title="Escolha um segmento e veja a proposta"
        description="Selecione uma categoria para visualizar objetivo, estrutura e funcionalidades recomendadas."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
          {SEGMENTS.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "shrink-0 rounded-xl px-4 py-3 text-left text-sm transition-all lg:w-full",
                i === index
                  ? "surface font-semibold text-foreground glow-violet"
                  : "text-muted-foreground hover:bg-white/[0.04]",
              )}
            >
              {s.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl surface p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 md:grid-cols-2"
            >
              <Mockup hue={active.hue} label={`${active.slug}.rankbrum.ai`} />
              <div>
                <h3 className="font-display text-xl font-semibold">{active.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{active.objective}</p>
                <ul className="mt-4 space-y-2">
                  {active.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá! Gostei do modelo de ${active.name} e quero um orçamento.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="size-4" />
                  Solicitar proposta
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
