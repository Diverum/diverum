import { motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import { useState} from "react";

/* ─── Palette ─────────────────────────────────────────────── */
const C = {
  eggshell: "#F0EAD6",
  sage:     "#D6CCB0",
  midSage:  "#8A9E8D",
  deepSage: "#3D5140",
  charcoal: "#1E231E",
  white:    "#FFFFFF",
};

/* ─── Data ─────────────────────────────────────────────────── */
const articles = [
  {
    tag:     "Agentes IA",
    num:     "01",
    title:   "Agentes en VPS vs No-Code tradicional",
    excerpt: "La lógica compleja no cabe en flujos visuales. Por qué el control real exige servidores propios.",
    readTime:"7 min",
    accent:  C.deepSage,
  },
  {
    tag:     "Estrategia",
    num:     "02",
    title:   "Tu CRM te está haciendo perder dinero",
    excerpt: "Los leads se enfrían mientras esperas. La automatización humana cierra la brecha que el software no ve.",
    readTime:"5 min",
    accent:  C.midSage,
  },
  {
    tag:     "Operaciones",
    num:     "03",
    title:   "El fin del Excel eterno en la empresa",
    excerpt: "Migrar de procesos manuales a una arquitectura escalable no tiene por qué ser traumático.",
    readTime:"6 min",
    accent:  C.charcoal,
  },
];

/* ─── Article Card ─────────────────────────────────────────── */
const ArticleCard = ({ tag, num, title, excerpt, readTime, accent }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <StaggerItem>
      <Motion.article
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ cursor: "pointer" }}
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden"
      >
        {/* Background panel */}
        <Motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{ backgroundColor: hovered ? accent : C.white }}
          transition={{ duration: 0.4 }}
        />

        {/* Top border accent */}
        <Motion.div
          className="absolute top-0 left-0 h-[3px] w-full"
          style={{ background: accent, opacity: 0.35 }}
          animate={{ opacity: hovered ? 1 : 0.35 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative flex flex-col h-full p-8 md:p-9">
          {/* Row: tag + number */}
          <div className="flex items-center justify-between mb-10">
            <Motion.span
              className="text-[9px] font-black uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
              animate={{
                backgroundColor: hovered ? "rgba(255,255,255,0.12)" : C.eggshell,
                color: hovered ? C.white : accent,
              }}
              transition={{ duration: 0.3 }}
            >
              {tag}
            </Motion.span>

            <Motion.span
              className="text-[11px] font-black tabular-nums"
              animate={{ opacity: hovered ? 0.6 : 0.2, color: hovered ? C.white : C.charcoal }}
              transition={{ duration: 0.3 }}
            >
              {num}
            </Motion.span>
          </div>

          {/* Title */}
          <Motion.h3
            className="text-[1.35rem] leading-[1.25] font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            animate={{ color: hovered ? C.white : C.charcoal }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </Motion.h3>

          {/* Excerpt */}
          <Motion.p
            className="text-sm leading-relaxed flex-1 mb-8"
            animate={{ color: hovered ? "rgba(255,255,255,0.72)" : "rgba(30,35,30,0.55)" }}
            transition={{ duration: 0.3 }}
          >
            {excerpt}
          </Motion.p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Motion.span
                className="text-[10px] font-black uppercase tracking-[0.18em]"
                animate={{ color: hovered ? "rgba(255,255,255,0.9)" : accent }}
                transition={{ duration: 0.3 }}
              >
                Leer artículo
              </Motion.span>
              <Motion.span
                animate={{
                  x: hovered ? 6 : 0,
                  color: hovered ? C.white : accent,
                }}
                transition={{ duration: 0.3 }}
                className="text-sm"
              >
                →
              </Motion.span>
            </div>

            <Motion.span
              className="text-[9px] font-bold uppercase tracking-widest"
              animate={{ color: hovered ? "rgba(255,255,255,0.4)" : "rgba(30,35,30,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {readTime}
            </Motion.span>
          </div>
        </div>
      </Motion.article>
    </StaggerItem>
  );
};


/* ─── Main Export ──────────────────────────────────────────── */
export default function Blog() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8" style={{ background: C.eggshell }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <Reveal>
            <div>
              <Badge>Pensamiento</Badge>
              <h2
                className="mt-6 text-[clamp(3rem,8vw,6rem)] font-bold tracking-tight leading-[0.9]"
                style={{ color: C.charcoal, fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ideas para
                <br />
                <Motion.span
                  className="inline-block italic font-light"
                  style={{ color: C.deepSage }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  líderes lógicos.
                </Motion.span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Motion.a
              href="/blog"
              whileHover={{ gap: "16px" }}
              className="flex items-center gap-2 group"
              style={{ textDecoration: "none" }}
            >
              <span
                className="text-[10px] font-black uppercase tracking-[0.28em]"
                style={{ color: C.charcoal }}
              >
                Ver biblioteca
              </span>
              <Motion.span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: C.charcoal,
                  color: C.eggshell,
                  fontSize: 14,
                }}
                whileHover={{ scale: 1.15, backgroundColor: C.deepSage }}
                transition={{ duration: 0.25 }}
              >
                →
              </Motion.span>
            </Motion.a>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <Motion.div
          className="w-full h-px mb-16 md:mb-20"
          style={{ background: C.sage }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
        />

        {/* ── Cards ── */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <ArticleCard key={i} index={i} {...article} />
          ))}
        </Stagger>

      </div>
    </section>
  );
}