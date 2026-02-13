import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";

const StepCard = ({ number, codename, title, desc, details, isActive = false }) => (
  <StaggerItem>
    <div
      className="relative p-8 rounded-2xl h-full transition-all duration-300"
      style={{
        background: isActive ? "var(--surface)" : "var(--bg)",
        border: isActive
          ? "1px solid rgba(200, 255, 0, 0.15)"
          : "1px solid var(--border)",
        boxShadow: isActive ? "0 0 60px var(--accent-glow)" : "none",
      }}
    >
      {/* Step number */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
          style={{
            background: isActive ? "var(--gradient)" : "var(--accent-dim)",
            color: isActive ? "var(--bg)" : "var(--accent)",
            fontFamily: "'Space Mono', monospace",
          }}
        >
          {number}
        </div>
        <div>
          <span
            className="text-[10px] uppercase tracking-widest font-semibold block"
            style={{ color: "var(--accent)" }}
          >
            {codename}
          </span>
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {title}
          </h3>
        </div>
      </div>

      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </p>

      <div className="space-y-2.5">
        {details.map((d, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent)" }}
            />
            <span className="text-xs leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {d}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom accent line for active */}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full"
          style={{ background: "var(--gradient)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}
    </div>
  </StaggerItem>
);

export default function Process() {
  const steps = [
    {
      number: "01",
      codename: "Blueprint",
      title: "Diagnóstico",
      desc: "Mapeamos tus cuellos de botella reales. No los del manual que nadie lee, sino los que tu equipo vive todos los días. Entrevistas cortas, acceso a herramientas, y en 5 días tenemos el mapa completo.",
      details: [
        "Entrevistas con stakeholders clave",
        "Mapeo de flujos actuales vs. ideales",
        "Identificación de quick wins inmediatos",
        "Reporte con priorización por impacto",
      ],
    },
    {
      number: "02",
      codename: "Deployment",
      title: "Montaje",
      desc: "Conectamos tus herramientas y lanzamos los agentes. Elegimos la tecnología correcta para cada caso: no-code cuando funciona, agentes en VPS cuando se necesita potencia real.",
      details: [
        "Diseño de flujos automatizados",
        "Implementación en sprints semanales",
        "Testing con datos reales desde día uno",
        "Tu equipo ve resultados cada semana",
      ],
      isActive: true,
    },
    {
      number: "03",
      codename: "Care",
      title: "Soporte",
      desc: "Optimización constante para que nada se rompa. Tu equipo queda con todo documentado y entrenado. Sin dependencia eterna de nosotros — a menos que quieras soporte continuo.",
      details: [
        "Documentación completa y transferencia",
        "Monitoreo proactivo de flujos",
        "Ajustes y optimizaciones mensuales",
        "Nuevas automatizaciones según necesidad",
      ],
    },
  ];

  return (
    <section id="proceso" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge>Proceso</Badge>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              De 0 a 100{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "var(--accent)",
                }}
              >
                en 3 pasos
              </span>
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: "var(--text-muted)" }}
            >
              Para que no sientas que esto es algo complejo. Nosotros nos encargamos
              de la complejidad. Tú ves resultados.
            </p>
          </div>
        </Reveal>

        {/* Connection line */}
        <div className="hidden md:block relative">
          <div
            className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 z-0"
            style={{ background: "var(--border)" }}
          />
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </Stagger>

        {/* Timeline callout */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: "var(--text-dim)" }}>
              ⏱️ Tiempo promedio de implementación:{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>
                2 a 6 semanas
              </span>{" "}
              dependiendo de la complejidad
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}