import { Section, SectionHeading, Reveal } from "./primitives";
import { PROCESS_STEPS, SOLUTIONS } from "@/lib/site-data";
import { CircleDot } from "lucide-react";

export function Process() {
  return (
    <Section id="processo">
      <SectionHeading
        eyebrow="Como funciona"
        title="Como desenvolvo cada projeto"
        description="Cada projeto começa com o entendimento do problema e avança por etapas claras, permitindo que você acompanhe o desenvolvimento até a entrega."
      />
      <div className="relative mt-14">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-[linear-gradient(180deg,#a855f7,#ff2e9a,#3b82f6)] opacity-40 sm:block" />
        <ol className="grid gap-5 sm:gap-6">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="flex gap-5">
                <span className="hidden size-10 shrink-0 place-items-center rounded-full surface font-display text-sm font-bold sm:grid">
                  {i + 1}
                </span>
                <div className="flex-1 rounded-2xl surface card-hover p-5">
                  <h3 className="font-display text-lg font-semibold">
                    <span className="mr-2 text-violet sm:hidden">{i + 1}.</span>
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

const STATUS_STYLES: Record<string, string> = {
  Conceito: "text-electric",
  "Protótipo": "text-neon",
  "Em desenvolvimento": "text-signal",
};

export function Solutions() {
  return (
    <Section id="solucoes">
      <SectionHeading
        eyebrow="Soluções em desenvolvimento"
        title="O que a RankBrum.AI está construindo"
        description="Projetos autorais em andamento. São apresentados como conceitos e protótipos — não como produtos finalizados ou casos de clientes."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <div className="h-full rounded-2xl surface card-hover p-6">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest ${STATUS_STYLES[s.status]}`}
              >
                <CircleDot className="size-3" />
                {s.status}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full hairline bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted-foreground"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
