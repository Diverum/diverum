import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";

/* Animated counter */
const AnimatedCounter = ({ target, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      style={{ color: "var(--accent)", fontFamily: "'Space Mono', monospace" }}
    >
      {count}{suffix}
    </span>
  );
};

const TestimonialCard = ({ quote, author, role }) => (
  <StaggerItem>
    <div
      className="p-6 rounded-2xl h-full flex flex-col justify-between"
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Quote mark */}
      <div>
        <span
          className="text-3xl font-bold block mb-3"
          style={{
            color: "var(--accent)",
            fontFamily: "'Instrument Serif', serif",
            lineHeight: 1,
          }}
        >
          "
        </span>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {quote}
        </p>
      </div>
      <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
          {author}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
          {role}
        </p>
      </div>
    </div>
  </StaggerItem>
);

export default function SocialProof() {
  const metrics = [
    { value: 40, suffix: "h", label: "ahorradas por semana en promedio" },
    { value: 80, suffix: "%", label: "reducción en trabajo manual repetitivo" },
    { value: 0, suffix: "%", label: "errores en facturación automatizada", display: "0%" },
    { value: 3, suffix: "x", label: "retorno sobre inversión en Q1" },
  ];

  const testimonials = [
    {
      quote:
        "Redujimos el tiempo que el equipo dedicaba a reportes semanales en más de un 70%. Lo que antes tomaba horas ahora corre solo. Fue como contratar 3 personas sin contratar a nadie.",
      author: "Director de Operaciones",
      role: "Empresa de logística · 45 empleados",
    },
    {
      quote:
        "Conectaron nuestro CRM con facturación y soporte. Eliminamos errores de carga manual y el equipo dejó de pelear con Excel. Ahora peleamos con cosas que sí importan.",
      author: "Founder & CEO",
      role: "Empresa de servicios B2B · 20 empleados",
    },
    {
      quote:
        "No nos vendieron automatización por moda. Nos ayudaron a priorizar qué procesos sí valía la pena tocar. Eso se agradece en un mercado lleno de humo.",
      author: "Gerente Administrativo",
      role: "PyME del sector salud · 30 empleados",
    },
  ];

  const tools = [
    "Zapier", "Make", "n8n", "OpenAI", "AWS",
    "Google Cloud", "HubSpot", "Salesforce", "Stripe",
  ];

  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Badge>Resultados reales</Badge>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Números que{" "}
            <span
              className="italic"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "var(--accent)",
              }}
            >
              hablan solos
            </span>
          </h2>
        </Reveal>

        {/* Metrics grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <p className="text-4xl md:text-5xl font-bold">
                  {m.display ? (
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      {m.display}
                    </span>
                  ) : (
                    <AnimatedCounter target={m.value} suffix={m.suffix} />
                  )}
                </p>
                <p
                  className="mt-2 text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials */}
        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Stagger>

        {/* Tools / logos strip */}
        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <p
              className="text-xs uppercase tracking-widest mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Tecnologías y plataformas que dominamos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="px-5 py-2.5 rounded-xl text-sm"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text-dim)",
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}