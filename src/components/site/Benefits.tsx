import * as Icons from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { BENEFITS } from "@/lib/site-data";

const CREATIONS = [
  "Landing pages de alta conversão",
  "Sites institucionais",
  "Aplicativos web",
  "Sistemas SaaS",
  "Painéis administrativos",
  "Automações de processos",
  "Agentes de IA para atendimento",
  "Integrações entre sistemas",
  "Catálogos digitais",
  "Sistemas de agendamento",
];

export function WhatWeCreate() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="overflow-hidden rounded-3xl surface">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance font-display text-2xl font-bold sm:text-3xl">
              O que desenvolvo
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Soluções digitais completas, do primeiro rascunho até o projeto publicado e
              integrado à rotina da empresa.
            </p>
          </div>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {CREATIONS.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <li className="flex items-center gap-2.5 rounded-xl hairline bg-white/[0.03] px-4 py-3 text-sm text-muted-foreground">
                  <span className="size-1.5 shrink-0 rounded-full grad-brand" />
                  {c}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Benefits() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Por que a RankBrum.AI"
        title="Por que desenvolver seu projeto com a RankBrum.AI?"
        description="Atendimento direto, projeto personalizado e um processo completo, do planejamento à publicação."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((b, i) => {
          const Cmp =
            (Icons as unknown as Record<string, Icons.LucideIcon>)[b.icon] ?? Icons.Sparkles;
          return (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl surface card-hover p-6">
                <Cmp className="size-6 text-neon" />
                <h3 className="mt-4 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
