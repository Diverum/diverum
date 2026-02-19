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
const ArticleCard = ({ tag, num, title, excerpt, readTime, accent, index }) => {
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

/* ─── Newsletter ───────────────────────────────────────────── */
const Newsletter = () => {
  const [email, setEmail]         = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [focused, setFocused]     = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes("@")) setSubscribed(true);
  };

  return (
    <Reveal delay={0.3}>
      <div
        className="relative mt-20 md:mt-28 rounded-[2.5rem] overflow-hidden"
        style={{ background: C.charcoal }}
      >
        {/* Organic blob */}
        <Motion.div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
          style={{ background: C.deepSage, opacity: 0.35, filter: "blur(60px)" }}
          animate={{ scale: [1, 1.12, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full"
          style={{ background: C.midSage, opacity: 0.2, filter: "blur(50px)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <div className="relative z-10 px-8 py-16 md:px-20 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left copy */}
          <div className="max-w-sm">
            <p
              className="text-[9px] font-black uppercase tracking-[0.25em] mb-5"
              style={{ color: C.midSage }}
            >
              Newsletter semanal
            </p>
            <h3
              className="text-3xl md:text-4xl font-bold leading-[1.15] mb-4"
              style={{ color: C.white, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Lógica sin ruido,
              <br />
              <span style={{ color: C.midSage, fontStyle: "italic", fontWeight: 300 }}>
                directo a ti.
              </span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Estrategias reales de automatización. Sin hype, sin relleno.
            </p>
          </div>

          {/* Right form */}
          <div className="md:w-auto w-full max-w-sm">
            {subscribed ? (
              <Motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3"
              >
                <span className="text-2xl">✓</span>
                <p className="text-sm font-bold" style={{ color: C.eggshell }}>
                  Bienvenido al laboratorio. Revisa tu bandeja.
                </p>
              </Motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Motion.div
                  className="flex-1 relative"
                  animate={{ scale: focused ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: `1px solid ${focused ? C.midSage : "rgba(255,255,255,0.12)"}`,
                      color: C.white,
                      caretColor: C.midSage,
                    }}
                  />
                </Motion.div>
                <Motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-colors"
                  style={{ background: C.deepSage, color: C.eggshell }}
                >
                  Unirse
                </Motion.button>
              </form>
            )}
            <p
              className="mt-4 text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Cero spam. Solo ingeniería orgánica.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
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

        {/* ── Newsletter ── */}
        <Newsletter />

      </div>
    </section>
  );
}