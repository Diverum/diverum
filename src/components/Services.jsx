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
const services = [
  {
    num:      "01",
    title:    "Ventas Autónomas",
    desc:     "Tu CRM se convierte en un organismo vivo. Los leads se califican, asignan y siguen en segundos, sin intervención humana.",
    benefits: ["Calificación instantánea", "Seguimiento 24/7"],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
        <path d="M13 2L4 11h6l-1 7 8-9h-5l1-7z" />
      </svg>
    ),
  },
  {
    num:      "02",
    title:    "Core Operativo",
    desc:     "Arquitectura que conecta todos tus departamentos. El flujo de información deja de depender de personas para depender de sistemas.",
    benefits: ["Sincronización total", "Alertas de error en tiempo real"],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="13" y="2" width="5" height="5" rx="1" />
        <rect x="7.5" y="13" width="5" height="5" rx="1" />
        <path d="M4.5 7v3H10M15.5 7v3H10M10 10v3" />
      </svg>
    ),
    featured: true,
  },
  {
    num:      "03",
    title:    "Lógica Financiera",
    desc:     "Conciliación, reportes de rentabilidad y cierre diario sin mover un dedo. Visibilidad total de caja integrada con tu banco.",
    benefits: ["Cierre diario automático", "Reportes de ROI"],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
        <path d="M10 2v16M14 5H8a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5H6" />
      </svg>
    ),
  },
  {
    num:      "04",
    title:    "Consultoría de IA",
    desc:     "No implementamos por moda. Diagnosticamos tu estructura y construimos un roadmap con impacto directo en el EBITDA.",
    benefits: ["Auditoría de procesos", "Diseño de lógica"],
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-5 h-5">
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2" />
        <path d="M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
];

/* ─── Service Card ─────────────────────────────────────────── */
const ServiceCard = ({ num, title, desc, benefits, icon, featured, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl overflow-hidden cursor-default"
      style={{
        background: featured ? C.charcoal : C.white,
        border: `1px solid ${featured
          ? hovered ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"
          : hovered ? C.sage : "#E8E2D0"
        }`,
        transition: "border-color 0.35s ease",
      }}
    >
      {/* Top accent */}
      <Motion.div
        className="absolute top-0 left-0 w-full h-[2px]"
        animate={{
          opacity: hovered ? 1 : featured ? 0.4 : 0,
          backgroundColor: featured ? C.midSage : C.deepSage,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ambient glow for featured */}
      {featured && (
        <div
          className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: C.deepSage, filter: "blur(80px)", opacity: 0.3 }}
        />
      )}

      <div className="relative z-10 flex flex-col h-full p-8 md:p-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <Motion.div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            animate={{
              background: featured
                ? hovered ? C.deepSage : "rgba(255,255,255,0.07)"
                : hovered ? C.charcoal : C.eggshell,
              color: featured
                ? hovered ? C.eggshell : C.midSage
                : hovered ? C.white : C.deepSage,
            }}
            transition={{ duration: 0.35 }}
          >
            {icon}
          </Motion.div>

          <Motion.span
            className="text-[10px] font-black tabular-nums"
            animate={{
              color: featured
                ? "rgba(255,255,255,0.18)"
                : "rgba(30,35,30,0.15)",
            }}
          >
            {num}
          </Motion.span>
        </div>

        {/* Title */}
        <Motion.h3
          className="text-xl md:text-2xl font-bold leading-tight mb-3"
          animate={{
            color: featured
              ? hovered ? C.white : "rgba(255,255,255,0.9)"
              : hovered ? C.charcoal : C.charcoal,
          }}
          transition={{ duration: 0.25 }}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </Motion.h3>

        {/* Description */}
        <Motion.p
          className="text-sm leading-relaxed flex-1 mb-8"
          animate={{
            color: featured
              ? hovered ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.35)"
              : hovered ? "rgba(30,35,30,0.65)" : "rgba(30,35,30,0.45)",
          }}
          transition={{ duration: 0.3 }}
        >
          {desc}
        </Motion.p>

        {/* Benefits */}
        <div className="space-y-2.5 mb-10">
          {benefits.map((b, i) => (
            <Motion.div
              key={i}
              className="flex items-center gap-3"
              animate={{
                opacity: hovered ? 1 : 0.5,
              }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <div
                className="w-1 h-1 rounded-full shrink-0"
                style={{ background: featured ? C.midSage : C.deepSage }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: featured ? C.sage : C.deepSage }}
              >
                {b}
              </span>
            </Motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="pt-6 flex items-center justify-between"
          style={{
            borderTop: `1px solid ${featured ? "rgba(255,255,255,0.06)" : "rgba(30,35,30,0.07)"}`,
          }}
        >
          <Motion.button
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ color: featured ? C.midSage : C.deepSage }}
            whileHover={{ gap: "12px" }}
            transition={{ duration: 0.2 }}
          >
            Ver alcance
            <Motion.span
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </Motion.span>
          </Motion.button>

          {featured && (
            <span
              className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: C.deepSage, color: C.eggshell }}
            >
              Core
            </span>
          )}
        </div>
      </div>
    </Motion.article>
  );
};

/* ─── Main Export ──────────────────────────────────────────── */
export default function Services() {
  return (
    <section
      className="py-24 md:py-36 px-5 sm:px-8"
      style={{ background: `linear-gradient(to bottom, ${C.white} 0%, ${C.eggshell} 100%)` }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 md:mb-24">
          <div className="max-w-xl">
            <Reveal>
              <Badge>Capacidades</Badge>
              <h2
                className="mt-6 font-bold tracking-tight leading-[0.9]"
                style={{
                  color: C.charcoal,
                  fontSize: "clamp(2.8rem,7vw,5rem)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                Arquitectura de
                <br />
                <Motion.span
                  className="italic font-light"
                  style={{ color: C.deepSage }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  alto rendimiento.
                </Motion.span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xs"
              style={{ color: `${C.charcoal}70`, fontStyle: "italic" }}
            >
              No herramientas sueltas. El sistema central que hace que tu empresa funcione sola.
            </p>
          </Reveal>
        </div>

        {/* ── Divider ── */}
        <Motion.div
          className="w-full h-px mb-12 md:mb-16"
          style={{ background: C.sage }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        {/* ── 2×2 Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} index={i} {...s} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <Reveal delay={0.35}>
          <div
            className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl"
            style={{
              background: C.charcoal,
              border: `1px solid rgba(255,255,255,0.05)`,
            }}
          >
            {/* Left */}
            <div>
              <p
                className="text-[9px] font-black uppercase tracking-[0.25em] mb-3"
                style={{ color: C.midSage }}
              >
                Próximo paso
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold leading-tight"
                style={{
                  color: C.white,
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}
              >
                ¿Listo para delegar el caos
                <br className="hidden sm:block" />
                <span style={{ color: C.sage, fontStyle: "italic", fontWeight: 300 }}>
                  {" "}a la lógica?
                </span>
              </h3>
            </div>

            {/* Right */}
            <div className="shrink-0 flex flex-col items-center md:items-end gap-3">
              <MagneticBtn primary>
                Agendar diagnóstico operativo
              </MagneticBtn>
              <p
                className="text-[9px] uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                Gratuito · Sin compromiso
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}