import { motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import MagneticBtn from "./ui/MagneticBtn";
import { useState } from "react";

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
const pains = [
  {
    num:      "01",
    question: "Fugas de datos manuales",
    detail:   "Tu equipo pierde horas moviendo información entre Excels. Lento, caro y propenso a errores que el cliente sí nota.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-4 h-4">
        <path d="M10 2v16M2 10h16" />
        <path d="M5.17 5.17l9.66 9.66M14.83 5.17L5.17 14.83" />
      </svg>
    ),
  },
  {
    num:      "02",
    question: "Leads que se enfrían solos",
    detail:   "Sin respuesta en 5 minutos, la probabilidad de cierre cae un 80%. Tu competencia no espera a que tu equipo despierte.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-4 h-4">
        <path d="M10 2L3 11h6l-1 7 9-10h-6l1-6z" />
      </svg>
    ),
  },
  {
    num:      "03",
    question: "Operación que depende de personas",
    detail:   "Si el proceso se detiene porque alguien falta, no tienes un sistema. Tienes un riesgo crítico de negocio disfrazado de cultura.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-4 h-4">
        <circle cx="10" cy="6" r="3" />
        <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M14 9l2 2M16 9l-2 2" />
      </svg>
    ),
  },
  {
    num:      "04",
    question: "Escalar cuesta cada vez más",
    detail:   "Contratar más gente para arreglar flujos rotos solo hace el problema más costoso. Necesitas arquitectura, no más manos.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-4 h-4">
        <path d="M3 17l4-4 3 3 4-5 3 2" />
        <path d="M15 6h2M17 6v2" />
      </svg>
    ),
  },
];

/* ─── Pain Card ────────────────────────────────────────────── */
const PainCard = ({ num, question, detail, icon, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col p-7 md:p-8 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        transition: "background 0.35s ease, border-color 0.35s ease",
      }}
    >
      {/* Top accent */}
      <Motion.div
        className="absolute top-0 left-0 w-full h-[2px]"
        animate={{ opacity: hovered ? 1 : 0, backgroundColor: C.midSage }}
        transition={{ duration: 0.3 }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <Motion.div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          animate={{
            background: hovered ? C.deepSage : "rgba(255,255,255,0.05)",
            color: hovered ? C.eggshell : C.midSage,
          }}
          transition={{ duration: 0.35 }}
        >
          {icon}
        </Motion.div>

        <Motion.span
          className="text-[10px] font-black tabular-nums"
          animate={{
            color: hovered ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {num}
        </Motion.span>
      </div>

      {/* Content */}
      <Motion.h3
        className="text-base md:text-lg font-bold leading-snug mb-3"
        animate={{ color: hovered ? C.white : "rgba(255,255,255,0.75)" }}
        transition={{ duration: 0.3 }}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {question}
      </Motion.h3>

      <Motion.p
        className="text-sm leading-relaxed"
        animate={{ color: hovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}
        transition={{ duration: 0.3 }}
      >
        {detail}
      </Motion.p>
    </Motion.div>
  );
};

/* ─── Main Export ──────────────────────────────────────────── */
export default function PainPoints() {
  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: C.charcoal }}
    >
      {/* Ambient blobs */}
      <Motion.div
        className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-8%",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: C.deepSage,
          filter: "blur(140px)",
          opacity: 0.12,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "-5%", left: "-5%",
          width: "35vw", height: "35vw",
          borderRadius: "50%",
          background: C.midSage,
          filter: "blur(120px)",
          opacity: 0.07,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

          {/* ── LEFT: Sticky header ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <Badge style={{ background: "rgba(255,255,255,0.05)", color: C.midSage }}>
                El costo de la inacción
              </Badge>

              <h2
                className="mt-6 font-bold tracking-tight leading-[0.9]"
                style={{
                  color: C.white,
                  fontSize: "clamp(2.8rem,7vw,5rem)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Tu empresa está
                <br />
                <Motion.span
                  className="italic font-light block"
                  style={{ color: C.sage }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  perdiendo flujo.
                </Motion.span>
              </h2>

              {/* Divider */}
              <Motion.div
                className="my-8 h-px w-16"
                style={{ background: C.deepSage }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <p
                className="text-base md:text-lg leading-relaxed max-w-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                No es falta de talento. Es falta de sistemas. Identificamos y eliminamos los cuellos de botella que frenan tu crecimiento.
              </p>

              <div className="mt-10">
                <MagneticBtn primary>
                  Eliminar fricción ahora
                </MagneticBtn>
              </div>

              {/* Micro-copy below CTA */}
              <p
                className="mt-4 text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Diagnóstico gratuito · Sin compromiso
              </p>
            </Reveal>
          </div>

          {/* ── RIGHT: Pain cards ── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pains.map((p, i) => (
              <PainCard key={i} index={i} {...p} />
            ))}
          </div>
        </div>

        {/* ── Bottom quote ── */}
        <Reveal delay={0.4}>
          <div
            className="mt-20 md:mt-28 pt-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <p
              className="text-xl md:text-2xl italic font-light max-w-lg leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              "La complejidad es el enemigo de la ejecución."
            </p>
            <Motion.div
              className="flex items-center gap-3 shrink-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: C.deepSage }}
              >
                <svg viewBox="0 0 16 16" fill="none" stroke={C.eggshell} strokeWidth="1.4" className="w-3.5 h-3.5">
                  <path d="M8 2v12M2 8h12" strokeLinecap="round" />
                </svg>
              </div>
              <span
                className="text-[9px] font-black uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Lógica orgánica
              </span>
            </Motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}