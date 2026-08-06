import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "./primitives";
import { FAQS, DEFAULT_WA_MESSAGE, waLink } from "@/lib/site-data";
import { MessageCircle, Sparkles } from "lucide-react";

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Dúvidas frequentes"
        title="Perguntas que recebemos com frequência"
        description="Respostas objetivas sobre prazos, escopo, integrações e suporte."
      />
      <div className="mx-auto mt-12 max-w-3xl rounded-2xl surface px-5 sm:px-7">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-white/8">
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export function CtaBand() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl surface glow-violet p-8 text-center sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(168,85,247,0.28),transparent_60%)]"
        />
        <span className="inline-flex items-center gap-2 rounded-full hairline bg-white/[0.04] px-4 py-2 text-xs text-muted-foreground">
          <Sparkles className="size-3.5 text-violet" />
          Vagas limitadas por mês para novos projetos
        </span>
        <h2 className="mx-auto mt-6 max-w-2xl text-balance font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Pronto para transformar a sua ideia em um projeto digital?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Conte o que você precisa e receba um plano com escopo, etapas e prazos definidos.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl grad-brand px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="size-4" />
            Falar no WhatsApp
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-xl hairline bg-white/[0.04] px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.08]"
          >
            Preencher formulário
          </a>
        </div>
      </div>
    </Section>
  );
}
