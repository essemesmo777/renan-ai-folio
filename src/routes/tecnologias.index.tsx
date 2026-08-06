import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/site-data";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GlowBackdrop, Section, SectionHeading } from "@/components/site/primitives";

export const Route = createFileRoute("/tecnologias/")({
  head: () => ({
    meta: [
      { title: "Tecnologias que utilizo | RankBrum.AI" },
      {
        name: "description",
        content:
          "Conheça as tecnologias usadas pela RankBrum.AI em landing pages, sistemas, automações e agentes de IA — explicadas em linguagem simples.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Tecnologias que utilizo | RankBrum.AI" },
      {
        property: "og:description",
        content: "IA, automação, banco de dados, pagamentos e publicação explicados de forma simples.",
      },
      { property: "og:url", content: "/tecnologias" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/tecnologias" }],
  }),
  component: TechIndex,
});

function TechIndex() {
  return (
    <div className="relative min-h-screen">
      <GlowBackdrop />
      <Header />
      <main className="pt-28">
        <Section>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Voltar ao início
          </Link>
          <SectionHeading
            eyebrow="Stack completa"
            title="Tecnologias que utilizo nos projetos"
            description="Cada página explica o que a tecnologia é, para que serve, como usamos, o benefício para o cliente e um exemplo prático."
            align="left"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNOLOGIES.map((t) => (
              <Link
                key={t.slug}
                to="/tecnologias/$slug"
                params={{ slug: t.slug }}
                className="group rounded-2xl surface card-hover p-5"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.category}
                </p>
                <h2 className="mt-1.5 font-display text-base font-semibold">{t.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-violet">
                  Abrir página
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
