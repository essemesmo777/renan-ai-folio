import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/site-data";
import { waLink } from "@/lib/site-data";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TechModalContent } from "@/components/site/TechStack";
import { GlowBackdrop, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/tecnologias/$slug")({
  loader: ({ params }) => {
    const tech = TECHNOLOGIES.find((t) => t.slug === params.slug);
    if (!tech) throw notFound();
    return { tech };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Tecnologia não encontrada | RankBrum.AI" }, { name: "robots", content: "noindex" }],
      };
    }
    const { tech } = loaderData;
    const title = `${tech.name} — como utilizo nos projetos | RankBrum.AI`;
    return {
      meta: [
        { title },
        { name: "description", content: tech.short },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: tech.short },
        { property: "og:url", content: `/tecnologias/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/tecnologias/${params.slug}` }],
    };
  },
  notFoundComponent: TechNotFound,
  errorComponent: TechNotFound,
  component: TechPage,
});

function TechNotFound() {
  return (
    <div className="relative min-h-screen">
      <GlowBackdrop />
      <Header />
      <Section className="pt-40">
        <h1 className="font-display text-3xl font-bold">Tecnologia não encontrada</h1>
        <p className="mt-3 text-muted-foreground">
          Confira a lista completa de tecnologias que utilizo nos projetos.
        </p>
        <Link
          to="/tecnologias"
          className="mt-6 inline-flex rounded-xl grad-brand px-5 py-3 text-sm font-semibold text-white"
        >
          Ver tecnologias
        </Link>
      </Section>
      <Footer />
    </div>
  );
}

function TechPage() {
  const { tech } = Route.useLoaderData();

  return (
    <div className="relative min-h-screen">
      <GlowBackdrop />
      <Header />
      <main className="pt-28">
        <Section>
          <Link
            to="/tecnologias"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Todas as tecnologias
          </Link>
          <p className="text-xs uppercase tracking-widest text-violet">{tech.category}</p>
          <h1 className="mt-3 text-balance font-display text-4xl font-bold sm:text-5xl">
            {tech.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{tech.short}</p>
          <div className="mt-10">
            <TechModalContent tech={tech} />
          </div>
          <a
            href={waLink(`Olá! Quero saber como usar ${tech.name} no meu projeto.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl grad-brand px-6 py-3.5 text-sm font-semibold text-white"
          >
            <MessageCircle className="size-4" />
            Falar com a RankBrum.AI
          </a>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
