import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";

const PainCard = ({ icon, question, detail }) => (
  <StaggerItem>
    <div
      className="p-6 rounded-2xl h-full group transition-all duration-300 hover:translate-y-[-2px]"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <span className="text-3xl block mb-4">{icon}</span>
      <h3
        className="text-base font-semibold mb-2 leading-snug"
        style={{ color: "var(--text)" }}
      >
        {question}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {detail}
      </p>
    </div>
  </StaggerItem>
);

 function PainPoints() {
  const pains = [
    {
      icon: "📋",
      question: "¿Tu equipo pierde horas copiando y pegando en Excel?",
      detail:
        "Cada dato que se mueve a mano es un error esperando a pasar. Tu gente más valiosa no debería ser un puente entre dos sistemas.",
    },
    {
      icon: "🚨",
      question: "¿Se pierden leads por falta de respuesta rápida?",
      detail:
        "Un lead que espera 2 horas ya está hablando con tu competencia. Sin automatización, la velocidad depende de quién esté disponible.",
    },
    {
      icon: "🤒",
      question: "¿Tu operación depende de que una persona no se enferme?",
      detail:
        "Si el proceso vive en la cabeza de alguien y no en un sistema, no tienes un proceso. Tienes un riesgo disfrazado de empleado.",
    },
    {
      icon: "🔥",
      question: "¿Creces pero el caos crece más rápido?",
      detail:
        "Cada persona nueva hereda los mismos flujos rotos. Más gente no resuelve un problema de arquitectura operativa.",
    },
    {
      icon: "📉",
      question: "¿Tus reportes siempre llegan tarde o con errores?",
      detail:
        "Si necesitas 3 personas y 4 horas para armar un reporte semanal, el problema no es el reporte. Es cómo se genera.",
    },
    {
      icon: "💸",
      question: "¿Pagas salarios para mover datos entre sistemas?",
      detail:
        "Contratar talento para hacer trabajo mecánico es la forma más cara de no automatizar. Ese presupuesto debería ir a decisiones, no a data entry.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl">
            <Badge>El costo del caos</Badge>
            <h2
              className="mt-4 text-3xl md:text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Si esto te suena,{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "var(--accent)",
                }}
              >
                no es coincidencia
              </span>
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--text-muted)" }}>
              Estos son los síntomas de una operación que creció más rápido que sus
              procesos. La buena noticia: todos tienen solución.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <PainCard key={i} {...p} />
          ))}
        </Stagger>

        {/* Storytelling bridge */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p
              className="text-xl md:text-2xl font-medium leading-snug"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <span style={{ color: "var(--text-dim)" }}>
                No es un problema de gente.
              </span>{" "}
              Es un problema de{" "}
              <span style={{ color: "var(--accent)" }}>
                arquitectura operativa.
              </span>
            </p>
            <motion.div
              className="w-16 h-[2px] mx-auto mt-6"
              style={{ background: "var(--gradient)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PainPoints;