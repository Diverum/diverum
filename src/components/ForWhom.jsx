import { motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import MagneticBtn from "./ui/MagneticBtn";
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
const profiles = [
  {
    num: "01",
    title: "Founders escalando",
    desc: "Facturación en crecimiento, estructura que no aguanta. Automatizamos la operación para que crecer no signifique contratar más.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
  {
    num: "02",
    title: "Operaciones en Excel frágil",
    desc: "El proceso vive en la cabeza de alguien o en hojas que nadie entiende. Lo convertimos en sistemas que funcionan solos.",
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </>
    ),
  },
  {
    num: "03",
    title: "Equipos cansados de hype",
    desc: "Ya pasaron por consultoras de 'transformación digital'. Ahora quieren implementaciones que ahorren horas esta semana.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </>
    ),
  },
  {
    num: "04",
    title: "Líderes sin tiempo de líder",
    desc: "Gerentes que apagan incendios manuales todo el día. Los liberamos para que vuelvan a tomar decisiones de alto nivel.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </>
    ),
  },
];

const notFor = [
  "Sin procesos mínimos definidos.",
  "Expectativa de soluciones mágicas.",
  "Equipos cerrados a cambiar sus flujos.",
];

/* ─── Profile Card ─────────────────────────────────────────── */
const ProfileCard = ({ num, title, desc, icon, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex gap-5 p-6 rounded-2xl transition-colors duration-300 cursor-default"
      style={{
        background: hovered ? C.charcoal : "transparent",
        border: `1px solid ${hovered ? C.charcoal : C.sage}`,
      }}
    >
      {/* Number */}
      <Motion.span
        className="absolute top-5 right-5 text-[10px] font-black tabular-nums"
        animate={{ opacity: hovered ? 0.35 : 0.15, color: hovered ? C.white : C.charcoal }}
        transition={{ duration: 0.25 }}
      >
        {num}
      </Motion.span>

      {/* Icon */}
      <Motion.div
        className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
        animate={{
          backgroundColor: hovered ? C.deepSage : C.eggshell,
          color: hovered ? C.white : C.deepSage,
        }}
        transition={{ duration: 0.3 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          {icon}
        </svg>
      </Motion.div>

      {/* Text */}
      <div className="flex-1 pr-6">
        <Motion.h4
          className="text-base font-bold mb-1.5 leading-tight"
          animate={{ color: hovered ? C.white : C.charcoal }}
          transition={{ duration: 0.25 }}
        >
          {title}
        </Motion.h4>
        <Motion.p
          className="text-sm leading-relaxed"
          animate={{ color: hovered ? "rgba(255,255,255,0.55)" : "rgba(30,35,30,0.5)" }}
          transition={{ duration: 0.25 }}
        >
          {desc}
        </Motion.p>
      </div>
    </Motion.div>
  );
};

/* ─── Main Export ──────────────────────────────────────────── */
export default function ForWhom() {
  return (
    <section className="py-24 md:py-36 px-5 sm:px-8" style={{ background: C.white }}>
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">

          {/* ── LEFT: Profiles ── */}
          <div className="lg:col-span-7">
            <Reveal>
              <Badge>Alineación</Badge>
              <h2
                className="mt-6 text-[clamp(2.8rem,7vw,5.5rem)] font-bold tracking-tight leading-[0.9]"
                style={{ color: C.charcoal, fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Para quienes <br />
                <Motion.span
                  className="italic font-light"
                  style={{ color: C.deepSage }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                >
                  ya están hartos de teoría.
                </Motion.span>
              </h2>

              <p
                className="mt-6 text-base leading-relaxed max-w-md"
                style={{ color: "rgba(30,35,30,0.5)" }}
              >
                No es para todos, y ese es el punto. Trabajamos con perfiles específicos donde el impacto es inmediato y medible.
              </p>
            </Reveal>

            {/* Divider */}
            <Motion.div
              className="w-full h-px my-10"
              style={{ background: C.sage }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            />

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profiles.map((p, i) => (
                <ProfileCard key={i} index={i} {...p} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Honesty Panel ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal delay={0.25}>
              <div
                className="rounded-[2rem] overflow-hidden"
                style={{ background: C.charcoal }}
              >
                {/* Top accent band */}
                <div className="h-1.5 w-full" style={{ background: C.deepSage }} />

                <div className="p-8 md:p-10">
                  {/* Label */}
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.25em] mb-5"
                    style={{ color: C.midSage }}
                  >
                    Política de honestidad
                  </p>

                  <h3
                    className="text-2xl md:text-3xl font-bold leading-[1.2] mb-5"
                    style={{ color: C.white, fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Si no hay ROI claro,{" "}
                    <span style={{ color: C.midSage, fontStyle: "italic", fontWeight: 300 }}>
                      te lo decimos el día uno.
                    </span>
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-8"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    La automatización mal planteada es ruido costoso. Después del diagnóstico, si no podemos generar impacto real, no avanzamos. Sin rodeos.
                  </p>

                  {/* Not-for list */}
                  <div
                    className="rounded-xl p-5 mb-8"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p
                      className="text-[9px] font-black uppercase tracking-[0.22em] mb-4"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      Probablemente NO somos para ti si:
                    </p>
                    <ul className="space-y-3">
                      {notFor.map((item, i) => (
                        <Motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.08 }}
                          className="flex items-start gap-3 text-sm"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          <span
                            className="mt-0.5 text-[10px] font-black shrink-0"
                            style={{ color: C.midSage }}
                          >
                            ✕
                          </span>
                          {item}
                        </Motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Closing line */}
                  <p
                    className="text-sm italic mb-7"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    30 minutos. Sales con claridad, trabajemos juntos o no.
                  </p>

                  {/* CTA */}
                  <Motion.button
                    whileHover={{ scale: 1.03, backgroundColor: C.midSage }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-colors"
                    style={{ background: C.deepSage, color: C.eggshell }}
                  >
                    Solicitar evaluación gratuita
                  </Motion.button>

                  {/* Trust micro-copy */}
                  <p
                    className="mt-4 text-center text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.15)" }}
                  >
                    Sin compromiso · Sin spam
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}