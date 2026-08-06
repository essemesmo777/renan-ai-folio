import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { DEFAULT_WA_MESSAGE, waLink } from "@/lib/site-data";

const HIGHLIGHTS = [
  "Landing pages",
  "Aplicativos",
  "Sistemas SaaS",
  "Automações",
  "Agentes de IA",
  "Integrações",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full surface px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              <Sparkles className="size-3.5 text-violet" />
              Agência digital de tecnologia e inteligência artificial
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              <span className="text-shine">Tecnologia, design e IA</span>
              <br />
              para empresas que querem{" "}
              <span className="bg-[linear-gradient(120deg,#a855f7,#ff2e9a,#3b82f6)] bg-clip-text text-transparent">
                crescer no digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Criamos landing pages, sites, aplicativos, sistemas SaaS, automações e agentes de
              inteligência artificial — com projeto sob medida, design profissional e integração
              com as ferramentas que a sua empresa já usa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl grad-brand px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-4" />
                Solicitar orçamento
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl surface px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/[0.07]"
              >
                Ver projetos
                <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted-foreground"
                >
                  {h}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl surface glow-violet p-4">
              <div className="rounded-2xl bg-[#08080b] p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-neon/80" />
                  <span className="size-2.5 rounded-full bg-violet/80" />
                  <span className="size-2.5 rounded-full bg-electric/80" />
                  <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground">
                    rankbrum.ai
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-24 rounded-xl bg-[linear-gradient(120deg,rgba(168,85,247,0.4),rgba(255,46,154,0.25),rgba(59,130,246,0.3))]" />
                  <div className="grid grid-cols-3 gap-3">
                    {["Leads", "Automações", "Agentes"].map((k, i) => (
                      <div key={k} className="rounded-xl hairline bg-white/[0.04] p-3">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {k}
                        </p>
                        <p className="mt-1 font-display text-lg font-bold">
                          {["+37%", "24/7", "12"][i]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 rounded-xl hairline bg-white/[0.03] p-3">
                    {[85, 62, 44].map((w) => (
                      <div key={w} className="h-2.5 rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full grad-brand"
                          style={{ width: `${w}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl surface px-4 py-3 sm:block"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Agente de IA
              </p>
              <p className="font-display text-sm font-semibold">Atendimento ativo</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
