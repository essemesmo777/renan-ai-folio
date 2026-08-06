import * as Icons from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { CONCEPT_CARDS } from "@/lib/site-data";

export function Concept() {
  return (
    <Section id="conceito">
      <SectionHeading
        eyebrow="O conceito"
        title={
          <>
            Uma <span className="text-shine">EuGência</span> digital
          </>
        }
        description="A RankBrum.AI combina atendimento direto, visão estratégica e tecnologia para desenvolver soluções digitais personalizadas. Você conversa diretamente comigo durante o planejamento, desenvolvimento, revisão e entrega do projeto."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CONCEPT_CARDS.map((c, i) => {
          const Cmp =
            (Icons as unknown as Record<string, Icons.LucideIcon>)[c.icon] ?? Icons.Sparkles;
          return (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl surface card-hover p-6">
                <span className="inline-grid size-12 place-items-center rounded-xl bg-[linear-gradient(140deg,rgba(168,85,247,0.3),rgba(59,130,246,0.22))]">
                  <Cmp className="size-5 text-violet" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
