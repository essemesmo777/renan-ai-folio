import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Bot,
  Workflow,
  Megaphone,
  Layers,
  Rocket,
  ShieldCheck,
  GraduationCap,
  Github,
  Brain,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Renan Augusto Costa Brum — Dev No-Code & IA Generativa" },
      {
        name: "description",
        content:
          "Desenvolvedor No-Code, especialista em IA Generativa, automação inteligente, front-end e marketing digital. Disponível para novas oportunidades.",
      },
      { property: "og:title", content: "Renan Augusto Costa Brum — Portfólio" },
      {
        property: "og:description",
        content:
          "IA Generativa • Automação • No-Code • Front-end • Marketing Digital",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const WA_LINK =
  "https://wa.me/5551997643562?text=Olá%20Renan!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade.";
const LINKEDIN = "https://www.linkedin.com/in/SEU-USUARIO";
const EMAIL = "renanac21@gmail.com";
const CV = "/curriculo.pdf";

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticlesBg />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Differentials />
      <Courses />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------- Particles ---------- */
function ParticlesBg() {
  const reduce = useReducedMotion();
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.18),transparent_55%)]" />
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#2563EB]/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[26rem] w-[26rem] rounded-full bg-[#06B6D4]/15 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-[#10B981]/10 blur-[120px]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {!reduce &&
        dots.map((_, i) => {
          const left = (i * 37) % 100;
          const top = (i * 53) % 100;
          const delay = (i % 8) * 0.4;
          const duration = 6 + (i % 5);
          return (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/40"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#tecnologias", label: "Stack" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="brand-gradient grid h-8 w-8 place-items-center rounded-lg font-display text-sm font-bold text-white">
            R
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Renan Brum
          </span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="brand-gradient inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03] sm:text-sm"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Contratar
        </a>
      </nav>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative px-4 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            <span className="text-muted-foreground">
              Disponível para novas oportunidades
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-gradient">Renan Augusto</span>
            <br />
            <span className="text-foreground">Costa Brum</span>
          </h1>

          <p className="mt-5 font-display text-base font-medium text-[#06B6D4] sm:text-lg">
            Desenvolvedor No-Code • IA Generativa • Automação • Front-end • Marketing Digital
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transformo ideias em soluções digitais utilizando Inteligência
            Artificial, Desenvolvimento Front-end, No-Code, automações
            inteligentes e tecnologias modernas.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] glow-ring"
            >
              <Phone className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-white/20 hover:bg-white/5"
            >
              <Linkedin className="h-4 w-4" /> Ver LinkedIn
            </a>
            <a
              href={CV}
              download
              className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-white/20 hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Baixar Currículo
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Eldorado do Sul — RS
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> (51) 99764-3562
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> {EMAIL}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="brand-gradient absolute -inset-1 rounded-3xl opacity-40 blur-2xl" />
          <div className="glass glow-ring relative overflow-hidden rounded-3xl p-2">
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img
                src={profileImg}
                alt="Renan Augusto Costa Brum"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-semibold">Renan Brum</p>
                  <p className="text-[11px] text-muted-foreground">
                    AI · No-Code · Front-end
                  </p>
                </div>
                <span className="brand-gradient grid h-9 w-9 place-items-center rounded-full text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Floating tags */}
          <FloatingChip className="-top-3 -left-3" delay={0.4}>
            <Brain className="h-3.5 w-3.5 text-[#06B6D4]" /> IA Generativa
          </FloatingChip>
          <FloatingChip className="-bottom-3 -right-2" delay={0.6}>
            <Workflow className="h-3.5 w-3.5 text-[#10B981]" /> Automação
          </FloatingChip>
          <FloatingChip className="top-1/3 -right-6 hidden sm:flex" delay={0.8}>
            <Code2 className="h-3.5 w-3.5 text-[#2563EB]" /> Front-end
          </FloatingChip>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`glass absolute inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Section Wrapper ---------- */
function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#06B6D4]">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const items = [
    { icon: Bot, label: "IA Generativa & Prompt Engineering" },
    { icon: Code2, label: "Front-end (HTML, CSS, JS)" },
    { icon: Layers, label: "No-Code & Vibe Coding" },
    { icon: Workflow, label: "Automação com n8n & APIs" },
    { icon: Megaphone, label: "Marketing Digital & Tráfego" },
    { icon: Rocket, label: "Criação de MVPs" },
  ];
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="Tecnologia, IA e resultado em produção."
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Profissional com experiência em vendas, atendimento ao cliente,
            marketing digital e desenvolvimento de soluções utilizando
            Inteligência Artificial.
          </p>
          <p>
            Possuo conhecimentos em HTML, CSS, JavaScript, Git, GitHub,
            desenvolvimento Front-end, Landing Pages, automações, IA
            Generativa, Prompt Engineering, desenvolvimento No-Code, Vibe
            Coding e criação de MVPs.
          </p>
          <p>
            Atualmente busco oportunidades para atuar em projetos de
            tecnologia, automação, desenvolvimento web e Inteligência
            Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group flex items-center gap-3 rounded-xl p-3.5 transition-all hover:-translate-y-0.5 hover:border-white/20"
            >
              <span className="brand-gradient grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
function Experience() {
  const jobs = [
    {
      company: "Agropecuária Micheli",
      period: "2021 — Atual",
      role: "Vendedor",
      bullets: [
        "Atendimento",
        "Vendas consultivas",
        "Relacionamento com clientes",
        "Organização comercial",
      ],
      icon: Briefcase,
    },
    {
      company: "Gestor de Tráfego — Freelancer",
      period: "2023 — Atual",
      role: "Marketing Digital",
      bullets: ["Google Ads", "Facebook Ads", "Estratégias Digitais"],
      icon: Megaphone,
    },
    {
      company: "Projetos Independentes",
      period: "2024 — Atual",
      role: "Dev No-Code & IA",
      bullets: [
        "Landing Pages",
        "Aplicativos",
        "Automações",
        "IA / Agentes Inteligentes",
        "Vibe Coding",
      ],
      icon: Rocket,
    },
    {
      company: "Exército Brasileiro",
      period: "2014 — 2017",
      role: "3º Sargento",
      bullets: ["Liderança", "Gestão de Pessoas", "Disciplina"],
      icon: ShieldCheck,
    },
  ];

  return (
    <Section
      id="experiencia"
      eyebrow="Experiência"
      title="Uma trajetória multidisciplinar."
      description="Anos de vendas e liderança somados a uma forte vivência em tecnologia, automação e IA."
    >
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {jobs.map(({ company, period, role, bullets, icon: Icon }, i) => (
          <motion.li
            key={company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative"
          >
            <span className="brand-gradient absolute -left-[34px] sm:-left-[42px] top-1 grid h-7 w-7 place-items-center rounded-full text-white ring-4 ring-[#0B1120]">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <div className="glass rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">{company}</h3>
                  <p className="text-sm text-[#06B6D4]">{role}</p>
                </div>
                <span className="glass rounded-full px-3 py-1 text-[11px] font-medium text-muted-foreground">
                  {period}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#10B981]" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Tech ---------- */
function Tech() {
  const techs = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Git", icon: Github },
    { name: "GitHub", icon: Github },
    { name: "ChatGPT", icon: Bot },
    { name: "IA Generativa", icon: Brain },
    { name: "Prompt Engineering", icon: Sparkles },
    { name: "Vibe Coding", icon: Zap },
    { name: "n8n", icon: Workflow },
    { name: "Bubble", icon: Layers },
    { name: "Emergent", icon: Rocket },
    { name: "APIs", icon: Globe },
    { name: "JSON", icon: Code2 },
    { name: "Google Ads", icon: Megaphone },
    { name: "Facebook Ads", icon: Megaphone },
    { name: "Landing Pages", icon: Layers },
    { name: "MVP", icon: Rocket },
    { name: "No-Code", icon: Layers },
    { name: "Automação", icon: Workflow },
  ];
  return (
    <Section
      id="tecnologias"
      eyebrow="Stack"
      title="Tecnologias e ferramentas."
      description="Ferramentas que utilizo para construir produtos digitais, automações e experiências de IA."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techs.map(({ name, icon: Icon }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (i % 10) * 0.04 }}
            className="glass group flex items-center gap-2.5 rounded-xl p-3 transition-all hover:-translate-y-0.5 hover:border-white/20"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.05] text-[#06B6D4] transition-colors group-hover:text-[#2563EB]">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Differentials ---------- */
function Differentials() {
  const items = [
    { t: "IA Generativa", d: "Modelos, prompts e fluxos para produtos reais.", i: Brain },
    { t: "Front-end", d: "Interfaces modernas, performáticas e responsivas.", i: Code2 },
    { t: "No-Code", d: "Bubble, n8n, Emergent e Vibe Coding na prática.", i: Layers },
    { t: "Automação", d: "Workflows que economizam horas todo dia.", i: Workflow },
    { t: "Landing Pages", d: "Páginas focadas em conversão.", i: Rocket },
    { t: "Marketing Digital", d: "Google Ads, Meta Ads e estratégia.", i: Megaphone },
    { t: "Atendimento", d: "Comunicação clara e foco no cliente.", i: Sparkles },
    { t: "Liderança", d: "Background militar como 3º Sargento.", i: ShieldCheck },
    { t: "Aprendizado Contínuo", d: "Atualização constante em IA e dev.", i: Zap },
    { t: "Transformação Digital", d: "Tecnologia como motor de mudança.", i: Globe },
  ];
  return (
    <Section
      id="diferenciais"
      eyebrow="Diferenciais"
      title="O que entrego de diferente."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ t, d, i: Icon }, idx) => (
          <motion.article
            key={t}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-white/20"
          >
            <div className="brand-gradient absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
            <span className="brand-gradient mb-4 inline-grid h-10 w-10 place-items-center rounded-xl text-white">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold">{t}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Courses ---------- */
function Courses() {
  const courses = [
    { school: "Cisco", title: "Introdução à Cibersegurança" },
    { school: "Cisco Academy", title: "Defesa Cibernética" },
    { school: "DIO", title: "Lógica de Programação" },
  ];
  return (
    <Section id="cursos" eyebrow="Formação" title="Cursos & Certificações">
      <div className="grid gap-4 sm:grid-cols-3">
        {courses.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20"
          >
            <span className="brand-gradient grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#06B6D4]">
                {c.school}
              </p>
              <h3 className="mt-1 font-display text-base font-semibold">{c.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="contato" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass glow-ring relative overflow-hidden rounded-3xl p-8 text-center sm:p-14"
        >
          <div className="brand-gradient absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#06B6D4]">
              Vamos conversar
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Vamos construir algo <span className="text-gradient">incrível?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Estou disponível para oportunidades em Tecnologia, Inteligência
              Artificial, Desenvolvimento Front-end, Automação, No-Code,
              Marketing Digital e Transformação Digital.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="brand-gradient inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-white/20 hover:bg-white/5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={CV}
                download
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors hover:border-white/20 hover:bg-white/5"
              >
                <Download className="h-4 w-4" /> Baixar Currículo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold">
            Renan Augusto Costa Brum
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Eldorado do Sul — RS · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:border-white/20 hover:text-[#10B981]"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:border-white/20 hover:text-[#2563EB]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:border-white/20 hover:text-[#06B6D4]"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={CV}
            download
            aria-label="Currículo PDF"
            className="glass grid h-10 w-10 place-items-center rounded-xl transition-colors hover:border-white/20 hover:text-foreground"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
