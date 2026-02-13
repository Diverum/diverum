import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import MagneticBtn from "./ui/MagneticBtn";

export default function ForWhom() {
  const idealFor = [
    {
      icon: "🚀",
      title: "Founders que quieren escalar sin escalar el caos",
      desc: "Tu empresa crece, pero no quieres contratar a 20 personas más para mover datos entre sistemas. Quieres crecer la facturación, no la nómina operativa.",
    },
    {
      icon: "📊",
      title: "Empresas que ya facturan pero están enredadas",
      desc: "Los procesos existen, pero viven en la cabeza de alguien, en correos sueltos o en un Excel que nadie quiere tocar. Ya es hora de que eso funcione solo.",
    },
    {
      icon: "⚡",
      title: "Equipos que quieren eficiencia real, no presentaciones",
      desc: "Estás cansado de consultores que entregan slides bonitas sobre 'transformación digital'. Quieres que alguien se siente, entienda tu problema y lo resuelva.",
    },
    {
      icon: "🎯",
      title: "Gerentes que necesitan tiempo para decidir, no ejecutar",
      desc: "Tu rol es tomar decisiones estratégicas, pero terminas el día haciendo follow-up manual, armando reportes y apagando incendios operativos.",
    },
  ];

  const notFor = [
    "Empresas que aún no tienen procesos definidos",
    "Negocios que buscan 'la herramienta mágica' sin compromiso",
    "Equipos que no están dispuestos a cambiar flujos ineficientes",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - ideal for */}
          <div>
            <Reveal>
              <Badge>¿Es para ti?</Badge>
              <h2
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Esto es para quienes ya{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "var(--accent)",
                  }}
                >
                  están listos
                </span>
              </h2>
            </Reveal>

            <Stagger className="mt-10 space-y-5">
              {idealFor.map((item, i) => (
                <StaggerItem key={i}>
                  <div
                    className="flex gap-4 p-5 rounded-xl transition-all duration-300 hover:translate-x-1"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h4
                        className="text-sm font-semibold mb-1"
                        style={{ color: "var(--text)" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right - honesty card */}
          <Reveal delay={0.2}>
            <div
              className="p-8 rounded-2xl sticky top-28"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--text)" }}
              >
                Honestidad ante todo
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                La automatización mal planteada no sirve de nada. Por eso empezamos
                siempre con un diagnóstico real. Si no hay impacto claro, te lo
                decimos. No ganamos nada construyendo automatizaciones que no te
                ahorren tiempo o dinero.
              </p>

              <div
                className="p-5 rounded-xl mb-6"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest mb-3 font-semibold"
                  style={{ color: "var(--text-dim)" }}
                >
                  Probablemente no es para ti si:
                </p>
                <div className="space-y-2">
                  {notFor.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-dim)" }}
                      >
                        ✕
                      </span>
                      <span
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-dim)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                ¿No estás seguro si aplica? Esa duda es razonable. Agendemos 30
                minutos y te decimos con honestidad si tiene sentido o no.
              </p>

              <MagneticBtn primary className="w-full text-center">
                Agendar evaluación gratuita →
              </MagneticBtn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}