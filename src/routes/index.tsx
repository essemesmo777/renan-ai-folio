import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Benefits, WhatWeCreate } from "@/components/site/Benefits";
import { PortfolioModels, Showcase } from "@/components/site/Portfolio";
import { TechStack } from "@/components/site/TechStack";
import { Process, Solutions } from "@/components/site/Process";
import { Simulator } from "@/components/site/Simulator";
import { LeadForm } from "@/components/site/LeadForm";
import { Faq, CtaBand } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { GlowBackdrop } from "@/components/site/primitives";
import { FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RankBrum.AI | Landing pages, sistemas e agentes de IA" },
      {
        name: "description",
        content:
          "Agência digital que cria landing pages, sites, aplicativos, sistemas SaaS, automações e agentes de inteligência artificial sob medida para empresas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "RankBrum.AI | Tecnologia, design e IA para empresas" },
      {
        property: "og:description",
        content:
          "Landing pages, aplicativos, sistemas SaaS, automações e agentes de IA com projeto personalizado.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "RankBrum.AI",
          description:
            "Agência digital de landing pages, sistemas, automações e agentes de inteligência artificial.",
          areaServed: "BR",
          email: "augustocostabrum@gmail.com",
          telephone: "+5551997643562",
          sameAs: ["https://www.instagram.com/rankbrum/"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative min-h-screen">
      <GlowBackdrop />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhatWeCreate />
        <Benefits />
        <PortfolioModels />
        <Showcase />
        <TechStack />
        <Process />
        <Simulator />
        <Solutions />
        <CtaBand />
        <LeadForm />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
