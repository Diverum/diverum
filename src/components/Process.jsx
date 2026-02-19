import { motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";

const COLORS = {
  eggshell: "#F0EAD6",
  sage: "#E2DAC2", // Este será nuestro fondo para diferenciar
  deepSage: "#4A5D4E",
  charcoal: "#2D332D",
  white: "#FFFFFF",
};

const steps = [
  {
    number: "01",
    title: "Auditoría de Datos",
    desc: "No adivinamos. Mapeamos cada flujo de información para encontrar dónde la IA generará el mayor ROI inmediato.",
    outcome: "Blueprint Operativo",
  },
  {
    number: "02",
    title: "Despliegue de Agentes",
    desc: "Instalamos la arquitectura lógica. Conectamos tus herramientas y lanzamos agentes que ejecutan tareas 24/7.",
    outcome: "Sistemas Autónomos Activos",
  },
  {
    number: "03",
    title: "Transferencia Total",
    desc: "Tu equipo toma el control. Entregamos documentación y optimizamos los flujos para tu independencia total.",
    outcome: "Independencia Operativa",
  },
];

const StepNode = ({ number, title, desc, outcome, index }) => (
  <Motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-16 last:pb-0"
  >
    {/* El Eje Numérico */}
    <div className="md:col-span-2 flex flex-col items-center">
      <div 
        className="w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-serif italic z-10"
        style={{ 
          borderColor: COLORS.deepSage,
          background: COLORS.white,
          color: COLORS.deepSage 
        }}
      >
        {number}
      </div>
      {/* Línea conectora */}
      <div className="hidden md:block w-[1px] h-full bg-[var(--deep-sage)] opacity-20 absolute top-14" 
           style={{ backgroundColor: COLORS.deepSage }} />
    </div>

    {/* El Contenido Estructurado */}
    <div className="md:col-span-10 group">
      <div 
        className="p-8 md:p-10 rounded-[2.5rem] border border-white/40 transition-all duration-500 hover:bg-white/40"
        style={{ background: "rgba(255, 255, 255, 0.2)" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4" style={{ color: COLORS.charcoal }}>
          {title}
        </h3>
        <p className="text-base md:text-lg opacity-70 leading-relaxed max-w-2xl mb-6" style={{ color: COLORS.charcoal }}>
          {desc}
        </p>
        
        {/* Resultado Tangible (Lo que el cliente compra) */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-[1px]" style={{ background: COLORS.deepSage }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50" style={{ color: COLORS.charcoal }}>
            Resultado: {outcome}
          </span>
        </div>
      </div>
    </div>
  </Motion.div>
);

export default function Process() {
  return (
    <section id="proceso" className="py-32 px-6" style={{ background: COLORS.sage }}>
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado con contraste alto */}
        <div className="mb-24 text-center md:text-left">
          <Reveal>
            <Badge style={{ background: COLORS.deepSage, color: COLORS.white }}>Metodología</Badge>
            <h2 className="mt-8 text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]" style={{ color: COLORS.charcoal }}>
              Ingeniería con <br />
              <span className="italic font-light" style={{ fontFamily: "'Instrument Serif', serif", color: COLORS.deepSage }}>
                sentido humano.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* El Flujo Logístico */}
        <div className="relative">
          {steps.map((step, i) => (
            <StepNode key={i} index={i} {...step} />
          ))}
        </div>

        {/* CTA de Cierre de Sección */}
        <Reveal delay={0.6}>
          <div className="mt-24 text-center">
            <h4 className="text-xl font-bold mb-8" style={{ color: COLORS.charcoal }}>
              ¿Listo para el primer Blueprint?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="px-10 py-4 rounded-full font-bold text-white shadow-xl hover:scale-105 transition-transform"
                style={{ background: COLORS.charcoal }}
              >
                Agendar Auditoría
              </button>
              <p className="text-xs font-medium opacity-40 uppercase tracking-widest">
                Tiempo estimado: 2-6 semanas
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}