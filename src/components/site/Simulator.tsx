import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "./primitives";
import { waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const PROJECTS = [
  { id: "landing", label: "Landing page", weeks: 2, complexity: 1 },
  { id: "site", label: "Site institucional", weeks: 3, complexity: 2 },
  { id: "app", label: "Aplicativo web", weeks: 6, complexity: 4 },
  { id: "saas", label: "Sistema SaaS", weeks: 10, complexity: 5 },
  { id: "automacao", label: "Automação", weeks: 3, complexity: 3 },
  { id: "agente", label: "Agente de IA", weeks: 4, complexity: 3 },
];

const FEATURES = [
  { id: "form", label: "Formulário com banco de dados", weeks: 0.5, complexity: 1 },
  { id: "wpp", label: "Integração com WhatsApp", weeks: 0.5, complexity: 1 },
  { id: "auth", label: "Login de usuários", weeks: 1, complexity: 2 },
  { id: "pay", label: "Pagamentos e assinaturas", weeks: 1.5, complexity: 3 },
  { id: "dash", label: "Painel administrativo", weeks: 2, complexity: 3 },
  { id: "ia", label: "Automação com IA", weeks: 1.5, complexity: 3 },
  { id: "agenda", label: "Agendamento online", weeks: 1, complexity: 2 },
  { id: "api", label: "Integração com outros sistemas", weeks: 1, complexity: 2 },
];

const URGENCY = [
  { id: "flex", label: "Prazo flexível", factor: 1 },
  { id: "medio", label: "Prazo intermediário", factor: 0.85 },
  { id: "alta", label: "Prioridade máxima", factor: 0.7 },
];

export function Simulator() {
  const [project, setProject] = useState(PROJECTS[0]!.id);
  const [selected, setSelected] = useState<string[]>(["form", "wpp"]);
  const [urgency, setUrgency] = useState(URGENCY[0]!.id);

  const result = useMemo(() => {
    const p = PROJECTS.find((x) => x.id === project)!;
    const f = FEATURES.filter((x) => selected.includes(x.id));
    const u = URGENCY.find((x) => x.id === urgency)!;
    const weeks = (p.weeks + f.reduce((a, b) => a + b.weeks, 0)) * u.factor;
    const complexity = Math.min(
      10,
      p.complexity + f.reduce((a, b) => a + b.complexity, 0) * 0.6,
    );
    const min = Math.max(1, Math.round(weeks));
    const max = Math.round(weeks * 1.5);
    return { p, f, u, min, max, complexity };
  }, [project, selected, urgency]);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const message = `Olá! Simulei um projeto no site da RankBrum.AI:
• Tipo: ${result.p.label}
• Funcionalidades: ${result.f.length ? result.f.map((f) => f.label).join(", ") : "a definir"}
• Urgência: ${result.u.label}
• Estimativa indicativa: ${result.min} a ${result.max} semanas
Gostaria de receber uma proposta.`;

  return (
    <Section id="simulador">
      <SectionHeading
        eyebrow="Simulador de projeto"
        title="Monte o seu projeto em segundos"
        description="Selecione o tipo de projeto, as funcionalidades e a urgência para receber uma estimativa indicativa de escopo e prazo."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 rounded-2xl surface p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              1. Tipo de projeto
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROJECTS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setProject(p.id)}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm transition-all hairline",
                    project === p.id
                      ? "grad-brand font-semibold text-white"
                      : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.07]",
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              2. Funcionalidades desejadas
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const on = selected.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(f.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl hairline px-4 py-3 text-left text-sm transition-all",
                      on
                        ? "border-violet/50 bg-violet/10 text-foreground"
                        : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.06]",
                    )}
                  >
                    <span
                      className={cn(
                        "size-4 shrink-0 rounded-md border",
                        on ? "grad-brand border-transparent" : "border-white/20",
                      )}
                    />
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              3. Urgência
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {URGENCY.map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() => setUrgency(u.id)}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm transition-all hairline",
                    urgency === u.id
                      ? "grad-brand font-semibold text-white"
                      : "bg-white/[0.03] text-muted-foreground hover:bg-white/[0.07]",
                  )}
                >
                  {u.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl surface glow-violet p-6">
          <div className="flex items-center gap-2 text-violet">
            <Calculator className="size-4" />
            <p className="text-xs font-semibold uppercase tracking-widest">Estimativa indicativa</p>
          </div>

          <p className="mt-5 font-display text-4xl font-bold">
            {result.min}–{result.max}
            <span className="ml-2 text-base font-medium text-muted-foreground">semanas</span>
          </p>

          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Complexidade estimada</span>
              <span>{result.complexity.toFixed(1)}/10</span>
            </div>
            <div className="mt-2 h-2.5 rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full grad-brand"
                animate={{ width: `${(result.complexity / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Projeto:</strong> {result.p.label}
            </li>
            <li>
              <strong className="text-foreground">Funcionalidades:</strong>{" "}
              {result.f.length ? result.f.length : "nenhuma selecionada"}
            </li>
            <li>
              <strong className="text-foreground">Urgência:</strong> {result.u.label}
            </li>
          </ul>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl grad-brand px-5 py-3.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" />
            Enviar simulação no WhatsApp
          </a>

          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            Estimativa apenas indicativa, gerada a partir das opções selecionadas. O prazo e o
            investimento reais são definidos após o diagnóstico do projeto.
          </p>
        </div>
      </div>
    </Section>
  );
}
