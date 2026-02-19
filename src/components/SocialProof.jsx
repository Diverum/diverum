import { useState, useEffect, useRef } from "react";
import { useInView, motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";

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
const metrics = [
  { value: 40, suffix: "h",  label: "Ahorradas por semana",    sub: "por equipo" },
  { value: 80, suffix: "%",  label: "Menos trabajo manual",    sub: "en procesos repetitivos" },
  { value: 99, suffix: "%",  label: "Precisión en ejecución",  sub: "sin intervención humana" },
  { value: 3,  suffix: "×",  label: "Retorno de inversión",    sub: "en los primeros 90 días" },
];

const testimonials = [
  {
    quote:  "Redujimos el tiempo de reportes en un 70%. Lo que antes tomaba días enteros, ahora se ejecuta en segundos.",
    author: "Director de Operaciones",
    role:   "Logística Global",
    initial:"D",
  },
  {
    quote:  "Conectaron nuestro CRM con facturación de forma quirúrgica. Eliminamos el error humano y recuperamos la paz mental del equipo.",
    author: "Founder & CEO",
    role:   "Fintech B2B",
    initial:"F",
  },
  {
    quote:  "No fue una implementación más. Fue un cambio en cómo entendemos escalar sin perder el control.",
    author: "Gerente General",
    role:   "Healthcare Services",
    initial:"G",
  },
];

const tools = ["n8n", "Make", "OpenAI", "HubSpot", "Stripe", "AWS", "Zapier", "Salesforce"];

/* ─── Animated Counter ─────────────────────────────────────── */
const AnimatedCounter = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Metric Card ──────────────────────────────────────────── */
const MetricCard = ({ value, suffix, label, sub, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center text-center p-8 rounded-2xl overflow-hidden"
      style={{
        background: hovered ? C.deepSage : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? C.deepSage : "rgba(255,255,255,0.06)"}`,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Glow */}
      <Motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: hovered ? 0.35 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle at center, ${C.midSage} 0%, transparent 70%)`,
        }}
      />

      <p
        className="text-[clamp(3rem,6vw,4.5rem)] font-bold tracking-tighter leading-none mb-2 relative z-10"
        style={{
          color: hovered ? C.white : C.sage,
          fontFamily: "'Playfair Display', Georgia, serif",
          transition: "color 0.3s ease",
        }}
      >
        <AnimatedCounter target={value} suffix={suffix} />
      </p>

      <p
        className="text-xs font-bold uppercase tracking-[0.18em] mb-1 relative z-10"
        style={{ color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)", transition: "color 0.3s ease" }}
      >
        {label}
      </p>

      <p
        className="text-[10px] uppercase tracking-widest relative z-10"
        style={{ color: hovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)", transition: "color 0.3s ease" }}
      >
        {sub}
      </p>
    </Motion.div>
  );
};

/* ─── Testimonial Card ─────────────────────────────────────── */
const TestimonialCard = ({ quote, author, role, initial, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col justify-between p-8 md:p-10 rounded-2xl relative overflow-hidden"
      style={{
        background: hovered ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"}`,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Top accent line */}
      <Motion.div
        className="absolute top-0 left-0 w-full h-[2px]"
        animate={{ opacity: hovered ? 1 : 0.2, backgroundColor: C.midSage }}
        transition={{ duration: 0.3 }}
      />

      {/* Opening mark */}
      <p
        className="text-[4rem] font-serif leading-none mb-4"
        style={{ color: C.deepSage, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}
      >
        "
      </p>

      <p
        className="text-base md:text-lg leading-relaxed flex-1 mb-8"
        style={{ color: hovered ? C.eggshell : "rgba(240,234,214,0.7)", transition: "color 0.3s ease" }}
      >
        {quote}
      </p>

      <div
        className="flex items-center gap-4 pt-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-black shrink-0"
          style={{ background: C.deepSage, color: C.eggshell }}
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-bold" style={{ color: C.white }}>
            {author}
          </p>
          <p
            className="text-[10px] uppercase tracking-widest mt-0.5"
            style={{ color: C.midSage, opacity: 0.7 }}
          >
            {role}
          </p>
        </div>
      </div>
    </Motion.div>
  );
};

/* ─── Main Export ──────────────────────────────────────────── */
export default function SocialProof() {
  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: C.charcoal }}
    >
      {/* Ambient blobs */}
      <Motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-15%", left: "-8%",
          width: "55%", height: "55%",
          borderRadius: "50%",
          background: C.deepSage,
          filter: "blur(140px)",
          opacity: 0.12,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%", right: "-5%",
          width: "40%", height: "40%",
          borderRadius: "50%",
          background: C.midSage,
          filter: "blur(120px)",
          opacity: 0.07,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <Reveal>
            <Badge style={{ background: "rgba(255,255,255,0.05)", color: C.midSage }}>
              Impacto Medible
            </Badge>
            <h2
              className="mt-6 text-[clamp(2.8rem,8vw,6.5rem)] font-bold tracking-tight leading-[0.9]"
              style={{ color: C.white, fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Números que
              <br />
              <Motion.span
                className="italic font-light"
                style={{ color: C.sage }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                no necesitan adjetivos.
              </Motion.span>
            </h2>
          </Reveal>
        </div>

        {/* ── Metrics ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-14 md:mb-20">
          {metrics.map((m, i) => (
            <MetricCard key={i} index={i} {...m} />
          ))}
        </div>

        {/* ── Divider ── */}
        <Motion.div
          className="w-full h-px mb-14 md:mb-20"
          style={{ background: "rgba(255,255,255,0.06)" }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* ── Testimonials ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14 md:mb-20">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} index={i} {...t} />
          ))}
        </div>

        {/* ── Tech Stack ── */}
        <Reveal delay={0.3}>
          <div className="text-center">
            <p
              className="text-[9px] font-black uppercase tracking-[0.35em] mb-8"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              Infraestructura tecnológica
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
              {tools.map((tool, i) => (
                <Motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ scale: 1.06, opacity: 1 }}
                  className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: C.midSage,
                    opacity: 0.45,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  {tool}
                </Motion.span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}