import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import MagneticBtn from "./ui/MagneticBtn";

export default function FooterPro() {
  const links = {
    Servicios: ["Agentes de Ventas", "Agentes de Operaciones", "Agentes de Finanzas", "Consultoría"],
    Recursos: ["Blog", "Casos de éxito", "Guía de automatización", "Newsletter"],
    Empresa: ["Sobre nosotros", "Contacto", "Trabaja con nosotros", "Partners"],
  };

  const socials = [
    { label: "LinkedIn", icon: "in" },
    { label: "Twitter", icon: "𝕏" },
    { label: "YouTube", icon: "▶" },
  ];

  return (
    <footer>
      {/* Final CTA block */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <Reveal>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              ¿Listo para dejar de{" "}
              <span
                className="italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  color: "var(--accent)",
                }}
              >
                trabajar de más
              </span>
              ?
            </h2>
            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              En 30 minutos podemos decirte si la automatización tiene sentido
              para tu caso específico. Sin compromiso, sin pitch de ventas.
              Solo un análisis honesto de tu operación.
            </p>
            <div className="mt-10">
              <MagneticBtn primary className="text-base px-10 py-4">
                Agendar diagnóstico gratuito →
              </MagneticBtn>
            </div>
            <p
              className="mt-6 text-xs"
              style={{ color: "var(--text-dim)" }}
            >
              Respondemos en menos de 24 horas · Sin compromiso · 100% confidencial
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer proper */}
      <div
        className="px-6 pt-16 pb-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                  style={{ background: "var(--gradient)", color: "var(--bg)" }}
                >
                  D
                </div>
                <span className="text-lg font-semibold tracking-tight">
                  Diverum
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-6 max-w-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Automatización y consultoría para empresas que quieren operar
                mejor. Menos tareas repetitivas, más tiempo para lo que importa.
              </p>

              {/* Socials */}
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    whileHover={{ y: -2 }}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                    }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-4"
                  style={{ color: "var(--text-dim)" }}
                >
                  {category}
                </p>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm transition-colors duration-300 hover:opacity-100"
                        style={{
                          color: "var(--text-muted)",
                          textDecoration: "none",
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <p className="text-xs" style={{ color: "var(--text-dim)" }}>
              © 2025 Diverum. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {["Privacidad", "Términos", "Cookies"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs transition-colors duration-300"
                  style={{
                    color: "var(--text-dim)",
                    textDecoration: "none",
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}