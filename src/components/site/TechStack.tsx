import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Cpu, Layers, MessageCircle } from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";
import { TECHNOLOGIES, type Technology, waLink } from "@/lib/site-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function TechModalContent({ tech }: { tech: Technology }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl hairline bg-white/[0.03] p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet">O que é</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.what}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl hairline bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-neon">Para que serve</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.purpose}</p>
        </div>
        <div className="rounded-xl hairline bg-white/[0.03] p-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-electric">
            Como usamos
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.usage}</p>
        </div>
      </div>
      <div className="rounded-xl hairline bg-white/[0.03] p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-signal">
          Benefício para o cliente
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.benefit}</p>
      </div>
      <div className="rounded-xl hairline bg-white/[0.03] p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Exemplo prático
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tech.example}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Integrações possíveis
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tech.integrations.map((i) => (
            <li
              key={i}
              className="flex items-center gap-1.5 rounded-full hairline bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Check className="size-3 text-signal" />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function TechStack() {
  const [active, setActive] = useState<Technology | null>(null);

  return (
    <Section id="tecnologias">
      <SectionHeading
        eyebrow="Stack tecnológica"
        title="As tecnologias por trás dos projetos"
        description="Clique em qualquer tecnologia para entender, em linguagem simples, o que ela faz e como ela aparece no seu projeto."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TECHNOLOGIES.map((t, i) => (
          <Reveal key={t.slug} delay={i * 0.03}>
            <button
              type="button"
              onClick={() => setActive(t)}
              className="group h-full w-full rounded-2xl surface card-hover p-5 text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold">{t.name}</h3>
                </div>
                <Cpu className="size-4 shrink-0 text-violet opacity-60" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-violet">
                Entenda a tecnologia
                <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/tecnologias"
          className="inline-flex items-center gap-2 rounded-xl surface px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.07]"
        >
          <Layers className="size-4" />
          Ver todas as páginas de tecnologia
        </Link>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-white/10 bg-[#0b0b0f] sm:max-w-2xl">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{active.name}</DialogTitle>
                <DialogDescription>{active.category}</DialogDescription>
              </DialogHeader>
              <TechModalContent tech={active} />
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/tecnologias/$slug"
                  params={{ slug: active.slug }}
                  className="inline-flex items-center gap-2 rounded-xl surface px-5 py-3 text-sm font-semibold"
                >
                  Abrir página completa
                  <ArrowUpRight className="size-4" />
                </Link>
                <a
                  href={waLink(`Olá! Quero usar ${active.name} no meu projeto.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircle className="size-4" />
                  Falar com a equipe
                </a>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
