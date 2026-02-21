import { motion as Motion } from "framer-motion";

const C = {
  eggshell: "#F0EAD6",
  deepSage: "#3D5140",
  charcoal: "#1E231E",
  white: "#FFFFFF",
};

export default function AgendarPage() {
  return (
    <main
      className="min-h-screen px-6 py-14 md:py-20"
      style={{ background: C.eggshell, color: C.charcoal }}
    >
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em]"
          style={{ color: C.deepSage, textDecoration: "none" }}
        >
          Volver al inicio
        </a>

        <Motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8 text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Agenda tu diagnostico
          <span className="block italic font-light" style={{ color: C.deepSage }}>
            gratuito
          </span>
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-7 text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgba(30,35,30,0.7)" }}
        >
          En 30 minutos identificamos dónde tu empresa pierde tiempo, dinero o foco. Si no hay encaje, te lo decimos.
        </Motion.p>

        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 rounded-3xl p-8 md:p-10"
          style={{
            background: C.white,
            border: "1px solid rgba(61,81,64,0.15)",
            boxShadow: "0 20px 40px rgba(45,51,45,0.08)",
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold" style={{ color: C.charcoal }}>
            Reserva tu horario
          </h2>
          <p className="mt-3 text-sm md:text-base" style={{ color: "rgba(30,35,30,0.65)" }}>
            Elige un horario de 30 minutos para revisar tu caso y definir
            oportunidades concretas de automatizacion.
          </p>
          <Motion.a
            href="https://calendly.com/sayr/30min"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex mt-6 px-7 py-3 rounded-full text-sm font-semibold"
            style={{
              background: C.deepSage,
              color: C.white,
              textDecoration: "none",
            }}
          >
            Agendar una reunión
          </Motion.a>
        </Motion.section>
      </div>
    </main>
  );
}
