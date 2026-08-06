import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, Send, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Section, SectionHeading } from "./primitives";
import { BUDGET_RANGES, DEADLINES, PROJECT_TYPES, CONTACT, waLink } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  company: z.string().trim().max(120, "Nome da empresa muito longo").optional(),
  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido com DDD")
    .max(20, "WhatsApp inválido"),
  email: z.string().trim().email("Informe um e-mail válido").max(255),
  project_type: z.string().min(1, "Selecione o tipo de projeto"),
  budget_range: z.string().max(60).optional(),
  desired_deadline: z.string().max(60).optional(),
  message: z.string().trim().max(1500, "Mensagem muito longa").optional(),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const fieldClass =
  "w-full rounded-xl hairline bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-violet/60";

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = new FormData(e.currentTarget);
    const raw = Object.fromEntries(form.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setStatus("sending");
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      company: parsed.data.company || null,
      whatsapp: parsed.data.whatsapp,
      email: parsed.data.email,
      project_type: parsed.data.project_type,
      budget_range: parsed.data.budget_range || null,
      desired_deadline: parsed.data.desired_deadline || null,
      message: parsed.data.message || null,
    });

    if (error) {
      setStatus("error");
      return;
    }
    setStatus("done");
  }

  return (
    <Section id="contato">
      <SectionHeading
        eyebrow="Solicitar orçamento"
        title="Conte sobre o seu projeto"
        description="Preencha o formulário e retornamos com as próximas etapas. Se preferir, fale direto pelo WhatsApp."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl surface p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="size-12 text-signal" />
              <h3 className="mt-4 font-display text-xl font-semibold">Pedido enviado</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Recebemos as suas informações. Em breve entraremos em contato pelo WhatsApp ou
                e-mail informado.
              </p>
              <a
                href={waLink("Olá! Acabei de enviar o formulário no site da RankBrum.AI.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
              >
                Adiantar conversa no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome" error={errors.name}>
                <input name="name" className={fieldClass} placeholder="Seu nome completo" />
              </Field>
              <Field label="Empresa (opcional)" error={errors.company}>
                <input name="company" className={fieldClass} placeholder="Nome da empresa" />
              </Field>
              <Field label="WhatsApp" error={errors.whatsapp}>
                <input name="whatsapp" className={fieldClass} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="E-mail" error={errors.email}>
                <input name="email" className={fieldClass} placeholder="voce@empresa.com" />
              </Field>
              <Field label="Tipo de projeto" error={errors.project_type}>
                <select name="project_type" className={cn(fieldClass, "appearance-none")}>
                  <option value="">Selecione</option>
                  {PROJECT_TYPES.map((p) => (
                    <option key={p} value={p} className="bg-[#0b0b0f]">
                      {p}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Faixa de investimento" error={errors.budget_range}>
                <select name="budget_range" className={cn(fieldClass, "appearance-none")}>
                  {BUDGET_RANGES.map((b) => (
                    <option key={b} value={b} className="bg-[#0b0b0f]">
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Prazo desejado" error={errors.desired_deadline} full>
                <select name="desired_deadline" className={cn(fieldClass, "appearance-none")}>
                  {DEADLINES.map((d) => (
                    <option key={d} value={d} className="bg-[#0b0b0f]">
                      {d}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Mensagem" error={errors.message} full>
                <textarea
                  name="message"
                  rows={4}
                  className={cn(fieldClass, "resize-none")}
                  placeholder="Descreva brevemente o que você precisa"
                />
              </Field>

              {status === "error" ? (
                <p className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                  <AlertCircle className="size-4" />
                  Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl grad-brand px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "sending" ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                Enviar pedido de orçamento
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl surface p-6">
            <h3 className="font-display text-lg font-semibold">Prefere falar direto?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Atendimento pelo WhatsApp {CONTACT.whatsappLabel} ou pelo e-mail {CONTACT.email}.
            </p>
            <a
              href={waLink("Olá! Vim pelo site da RankBrum.AI e quero conversar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Abrir conversa no WhatsApp
            </a>
          </div>
          <div className="rounded-2xl surface p-6">
            <h3 className="font-display text-lg font-semibold">O que acontece depois</h3>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>1. Retornamos o contato para entender o projeto.</li>
              <li>2. Fazemos o diagnóstico e definimos o escopo.</li>
              <li>3. Enviamos a proposta com etapas, prazos e condições.</li>
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
  full,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={cn("block", full && "sm:col-span-2")}>
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
