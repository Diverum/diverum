import { motion as Motion } from "framer-motion";

const C = {
  eggshell: "#F0EAD6",
  deepSage: "#3D5140",
  charcoal: "#1E231E",
  white: "#FFFFFF",
};

export default function MetodologiaPage() {
  return (
    <main
      className="min-h-screen px-6 py-14 md:py-20"
      style={{ background: C.eggshell, color: C.charcoal }}
    >
      <div className="max-w-4xl mx-auto">
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
          Nuestra metodología
        </Motion.h1>

        <Motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 rounded-3xl p-8 md:p-10 space-y-6"
          style={{
            background: C.white,
            border: "1px solid rgba(61,81,64,0.15)",
            boxShadow: "0 20px 40px rgba(45,51,45,0.08)",
          }}
        >
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(30,35,30,0.78)" }}>
            Ayudamos a las empresas a operar con menos fricción y a escalar sin
            que la complejidad las ahogue. Nuestro trabajo no consiste en
            instalar herramientas, sino en diseñar sistemas de trabajo que
            conectan datos, procesos y decisiones en un solo flujo operativo.
          </p>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(30,35,30,0.78)" }}>
            Todo comienza con un diagnóstico del negocio. Analizamos cómo
            funciona realmente tu operación en el día a día: dónde se pierde
            tiempo, dónde se repiten tareas, dónde se cometen errores y dónde la
            información se rompe entre áreas como ventas, operaciones,
            facturación o soporte. No partimos de suposiciones. Partimos de
            procesos reales y problemas medibles.
          </p>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(30,35,30,0.78)" }}>
            Con esa información diseñamos la arquitectura del sistema.
            Definimos cómo debe fluir la información dentro de la empresa, qué
            procesos pueden automatizarse, qué decisiones deben seguir en manos
            del equipo y qué tareas repetitivas pueden ejecutarse de forma
            automática. El objetivo es crear una estructura clara, simple y
            escalable que reduzca fricción y aumente la velocidad de operación.
          </p>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(30,35,30,0.78)" }}>
            Después implementamos los procesos automatizados. Conectamos
            sistemas, unificamos datos y construimos flujos que se ejecutan
            solos, en segundo plano, sin depender de intervención manual
            constante. Esto permite que el equipo deje de gastar tiempo en
            tareas operativas y pueda enfocarse en trabajo estratégico, ventas,
            producto y crecimiento.
          </p>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(30,35,30,0.78)" }}>
            Por último, medimos el impacto y optimizamos. Cada sistema se evalúa
            con métricas concretas: tiempo recuperado, reducción de errores,
            mejora en tiempos de respuesta y retorno de inversión. La
            infraestructura no se entrega como algo estático, sino como un
            sistema vivo que se ajusta a medida que la empresa crece y sus
            necesidades cambian.
          </p>

          <p className="text-base md:text-lg leading-relaxed font-semibold" style={{ color: C.charcoal }}>
            Nuestro enfoque es simple: menos operación manual, más control, más
            claridad y más capacidad de escalar sin aumentar el caos interno. Tu
            equipo toma las decisiones. El sistema ejecuta el resto.
          </p>
        </Motion.section>
      </div>
    </main>
  );
}
