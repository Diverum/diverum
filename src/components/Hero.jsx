import { motion as Motion } from "framer-motion";
import Badge from "./ui/Badge";
import MagneticBtn from "./ui/MagneticBtn.jsx";

const ToolChip = ({ icon, label }) => (
  <Motion.div
    whileHover={{ y: -2, borderColor: "var(--border-light)" }}
    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm transition-colors duration-300"
    style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      color: "var(--text-muted)",
    }}
  >
    <span className="text-base">{icon}</span>
    <span>{label}</span>
  </Motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <Badge>Automatización con sentido</Badge>

          <h1
            className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Automatización real:{" "}
            <span
              className="italic"
              style={{ fontFamily: "'Instrument Serif', serif", color: "var(--accent)" }}
            >
              menos trabajo manual
            </span>
            , más escalabilidad
          </h1>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            Reducimos hasta el 80% de tus procesos operativos con Agentes Digitales.
            Imagina llegar el lunes y que todo ya esté listo: reportes, datos sincronizados,
            cero hojas de cálculo tocadas. Eso construimos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticBtn primary>Agendar diagnóstico gratuito →</MagneticBtn>
            <MagneticBtn>Ver cómo funciona</MagneticBtn>
          </div>

          {/* Animated connection visual */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 p-6 rounded-2xl relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {["CRM", "ERP", "Email", "Sheets"].map((tool, i) => (
                <Motion.div
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                  >
                    {tool[0]}
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-muted)" }}>{tool}</span>
                </Motion.div>
              ))}

              <Motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
                style={{ color: "var(--accent)" }}
              >
                ⚡
              </Motion.div>

              <div
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
              >
                Todo conectado
              </div>
            </div>

            {/* Animated line */}
            <Motion.div
              className="absolute bottom-0 left-0 h-[2px]"
              style={{ background: "var(--gradient)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            />
          </Motion.div>

          {/* Trust bar */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-6"
          >
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "var(--text-dim)" }}
            >
              Conectamos con
            </span>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "⚡", label: "Zapier" },
                { icon: "🔗", label: "Make" },
                { icon: "🔧", label: "n8n" },
                { icon: "🤖", label: "OpenAI" },
                { icon: "📊", label: "Google Sheets" },
                { icon: "💼", label: "HubSpot" },
                { icon: "📦", label: "Notion" },
                { icon: "☁️", label: "AWS" },
              ].map((t) => (
                <ToolChip key={t.label} icon={t.icon} label={t.label} />
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}