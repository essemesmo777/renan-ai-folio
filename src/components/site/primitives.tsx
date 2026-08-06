import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full surface px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span className="size-1.5 rounded-full grad-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function GlowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-float absolute -left-32 top-[-10%] size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_65%)] blur-2xl" />
      <div className="animate-float absolute right-[-14%] top-[18%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,46,154,0.16),transparent_65%)] blur-2xl [animation-delay:-4s]" />
      <div className="animate-float absolute bottom-[-18%] left-[26%] size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_65%)] blur-2xl [animation-delay:-8s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
    </div>
  );
}

/** Mockup abstrato exclusivo — representa o layout do modelo sem usar imagens externas. */
export function Mockup({ hue, label }: { hue: number; label: string }) {
  const a = `hsl(${hue} 90% 62%)`;
  const b = `hsl(${(hue + 55) % 360} 90% 62%)`;
  return (
    <div className="relative overflow-hidden rounded-xl hairline bg-[#0a0a0d]">
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
        <span className="size-2 rounded-full bg-white/25" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/10" />
        <span className="ml-2 truncate text-[10px] text-muted-foreground">{label}</span>
      </div>
      <div className="relative aspect-[16/10] p-3">
        <div
          className="absolute inset-0 opacity-45"
          style={{ background: `radial-gradient(120% 90% at 10% 0%, ${a}33, transparent 60%)` }}
        />
        <div className="relative flex h-full flex-col gap-2">
          <div
            className="h-1/2 w-full rounded-lg"
            style={{ background: `linear-gradient(120deg, ${a}55, ${b}33)` }}
          />
          <div className="flex gap-2">
            <div className="h-3 w-20 rounded-full" style={{ background: a }} />
            <div className="h-3 w-10 rounded-full bg-white/12" />
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2">
            <div className="rounded-md bg-white/[0.06]" />
            <div className="rounded-md bg-white/[0.06]" />
            <div className="rounded-md bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}
