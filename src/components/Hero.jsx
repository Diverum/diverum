import { motion as Motion, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Badge from "./ui/Badge";
import MagneticBtn from "./ui/MagneticBtn";

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
const capabilities = [
  {
    label: "Agentes Autónomos",
    desc:  "Procesos que se ejecutan solos, 24/7, sin supervisión.",
    icon:  (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <circle cx="10" cy="10" r="3" />
        <path d="M10 2v3M10 15v3M2 10h3M15 10h3" />
        <path d="M4.93 4.93l2.12 2.12M12.95 12.95l2.12 2.12M4.93 15.07l2.12-2.12M12.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    label: "Arquitectura de Datos",
    desc:  "Flujos limpios entre herramientas, sin fricciones.",
    icon:  (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <rect x="2" y="3" width="5" height="5" rx="1" />
        <rect x="13" y="3" width="5" height="5" rx="1" />
        <rect x="7.5" y="12" width="5" height="5" rx="1" />
        <path d="M4.5 8v2.5H10M15.5 8v2.5H10M10 10.5V12" />
      </svg>
    ),
  },
  {
    label: "Integración Total",
    desc:  "CRM, ERP, facturación y más, sincronizados en tiempo real.",
    icon:  (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path d="M2 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" />
        <path d="M10 6v4l3 3" />
        <path d="M2 14h4M4 12v4" />
      </svg>
    ),
  },
  {
    label: "Consultoría de Impacto",
    desc:  "Diagnóstico real, soluciones medibles. Sin hype.",
    icon:  (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path d="M3 14l4-4 3 3 4-5 3 3" />
        <path d="M17 5h-4M17 5v4" />
      </svg>
    ),
  },
];

/* ─── Live Ticker Number ───────────────────────────────────── */
const LiveTicker = ({ value, suffix }) => {
  const [display, setDisplay] = useState(0);
  const inited = useRef(false);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;
    const controls = animate(0, value, {
      duration: 2,
      delay: 1.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [value]);

  return <>{display}{suffix}</>;
};

/* ─── System Panel (right side) ────────────────────────────── */
const SystemPanel = () => {
  const [activeLine, setActiveLine] = useState(-1);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setActiveLine(i % capabilities.length);
      i++;
    }, 1400);
    return () => clearInterval(iv);
  }, []);

  return (
    <Motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full rounded-3xl overflow-hidden"
      style={{ background: C.charcoal }}
    >
      {/* Ambient glow inside panel */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: C.deepSage, filter: "blur(80px)", opacity: 0.3 }}
      />

      {/* Panel header */}
      <div
        className="relative z-10 flex items-center justify-between px-7  py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: C.midSage, boxShadow: `0 0 8px ${C.midSage}` }}
          />
          <Motion.span
            className="text-[10px] font-black uppercase tracking-[0.25em]"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Sistema activo
          </Motion.span>
        </div>
        <span
          className="text-[9px] font-bold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          24 / 7
        </span>
      </div>

      {/* Capabilities list */}
      <div className="relative z-10 px-7 py-6 space-y-1">
        {capabilities.map((cap, i) => (
          <div key={i}>
            <Motion.div
              className="flex items-start gap-4 py-4 px-4 rounded-xl cursor-default"
              animate={{
                background: activeLine === i
                  ? "rgba(255,255,255,0.07)"
                  : "transparent",
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Icon + connector */}
              <div className="flex flex-col items-center gap-0 shrink-0">
                <Motion.div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  animate={{
                    background: activeLine === i ? C.deepSage : "rgba(255,255,255,0.05)",
                    color: activeLine === i ? C.eggshell : C.midSage,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {cap.icon}
                </Motion.div>
              </div>

              <div className="flex-1 min-w-0">
                <Motion.p
                  className="text-sm font-bold leading-tight"
                  animate={{
                    color: activeLine === i ? C.white : "rgba(255,255,255,0.5)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {cap.label}
                </Motion.p>
                <Motion.p
                  className="text-xs mt-0.5 leading-relaxed"
                  animate={{
                    color: activeLine === i
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {cap.desc}
                </Motion.p>
              </div>

              {/* Active indicator */}
              <Motion.div
                className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                animate={{
                  background: activeLine === i ? C.midSage : "rgba(255,255,255,0.08)",
                  boxShadow: activeLine === i ? `0 0 8px ${C.midSage}` : "none",
                }}
                transition={{ duration: 0.4 }}
              />
            </Motion.div>

            {/* Connector line between items */}
            {i < capabilities.length - 1 && (
              <div
                className="ml-8 w-px h-3"
                style={{ background: "rgba(255,255,255,0.05)", marginLeft: "2.25rem" }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Panel footer: metrics */}
      <div
        className="relative z-10 grid grid-cols-2 gap-px"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.03)" }}
      >
        {[
          { value: 40, suffix: "h", label: "ahorradas / semana" },
          { value: 3,  suffix: "×", label: "retorno promedio" },
        ].map((m, i) => (
          <div key={i} className="px-7 py-5" style={{ background: C.charcoal }}>
            <p
              className="text-2xl font-bold tracking-tight"
              style={{
                color: C.sage,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              <LiveTicker value={m.value} suffix={m.suffix} />
            </p>
            <p
              className="text-[10px] uppercase tracking-widest mt-1"
              style={{ color: "rgba(255,255,255,0.2)" }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </Motion.div>
  );
};

/* ─── Main Export ──────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-20 md:py-0 overflow-hidden"
      style={{ background: C.eggshell }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Organic blobs */}
        <Motion.div
          className="absolute rounded-full"
          style={{
            top: "-20%", right: "-12%",
            width: "55vw", height: "55vw",
            background: C.deepSage,
            filter: "blur(150px)",
            opacity: 0.15,
          }}
          animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute rounded-full"
          style={{
            bottom: "-15%", left: "-8%",
            width: "45vw", height: "45vw",
            background: C.sage,
            filter: "blur(120px)",
            opacity: 0.5,
          }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${C.deepSage}18 1px, transparent 1px), linear-gradient(90deg, ${C.deepSage}18 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 w-full">

        {/* ── Badge ── */}
        <Motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mt-8 flex justify-center lg:justify-start"
        >
          <Badge>Laboratorio de Automatización</Badge>
        </Motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center md:mb-8">

          {/* ── LEFT: Copy ── */}
          <div className="lg:col-span-6 text-center lg:text-left">

            {/* Headline */}
            <Motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold tracking-tight leading-[0.88]"
              style={{
                color: C.charcoal,
                fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Diverum Labs
              <br />
              <Motion.span
                className="italic font-light block"
                style={{ color: C.deepSage }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                Escala más.
              </Motion.span>
            </Motion.h1>

            {/* Subhead */}
            <Motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-8 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ color: `${C.charcoal}99` }}
            >
              Conectamos tus herramientas, eliminamos tareas repetitivas y construimos sistemas que trabajan 24/7 para que tu empresa escale sin aumentar estructura.
            </Motion.p>

            {/* CTA block */}
            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              <MagneticBtn primary>
                <span className="px-3">Agendar diagnóstico gratuito</span>
              </MagneticBtn>

              <Motion.a
                href="#metodologia"
                className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: C.charcoal, textDecoration: "none" }}
                whileHover={{ gap: "16px" }}
              >
                <Motion.span
                  className="block h-px"
                  style={{ background: C.deepSage, width: 28 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
                Ver metodología
              </Motion.a>
            </Motion.div>
          </div>

          {/* ── RIGHT: System Panel ── */}
          <div className="lg:col-span-6">
            <SystemPanel />
          </div>
        </div>
      </div>
    </section>
  );
}