import { useState, useRef} from "react";
import { motion as Motion, AnimatePresence, useInView } from "framer-motion";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const C = {
  bg:       "#1C211C",   // charcoal profundo — base única
  surface:  "#232A23",   // cards elevadas
  line:     "#2E382E",   // separadores
  eggshell: "#F0EAD6",   // texto primario (cálido, no blanco duro)
  sage:     "#C8BFA6",   // texto secundario
  accent:   "#8FA882",   // verde sage activo
  accentDim:"#4A5D4E",   // verde sage oscuro
  white:    "#FAFAF7",
};

const NAV = {
  Sistemas: ["Agentes VPS", "Core Operativo", "Lógica Financiera"],
  Recursos:  ["Blog de IA",  "Casos de Éxito",  "Newsletter"],
  Legal:     ["Privacidad",  "Términos",         "Cookies"],
};

// ─── Animaciones base ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

// ─── Hook: Underline draw al hover ───────────────────────────────────────────
function NavLink({ children }) {
  return (
    <Motion.a
      href="#"
      className="group relative inline-block"
      style={{ color: C.sage, fontSize: 13, fontWeight: 500, letterSpacing: "0.01em" }}
      whileHover={{ color: C.eggshell }}
      transition={{ duration: 0.2 }}
    >
      {children}
      <span
        className="absolute left-0 -bottom-px h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: C.accent }}
      />
    </Motion.a>
  );
}

// ─── Componente Social Icon ────────────────────────────────────────────────────
function SocialIcon({ label, d }) {
  return (
    <Motion.a
      href="#"
      aria-label={label}
      whileHover={{ y: -3, color: C.eggshell }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ color: C.accentDim, display: "flex", alignItems: "center" }}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d={d} />
      </svg>
    </Motion.a>
  );
}

// ─── Newsletter Input ─────────────────────────────────────────────────────────
function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => { setStatus("success"); setEmail(""); }, 1100);
  };

  return (
    <form onSubmit={submit} className="relative mt-6" style={{ maxWidth: 340 }}>
      <div
        className="flex items-center gap-0 overflow-hidden transition-all duration-300"
        style={{
          border: `1px solid ${status === "success" ? C.accent : C.line}`,
          borderRadius: 2,
          background: C.surface,
        }}
      >
        <input
          type="email"
          required
          placeholder="correo@empresa.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "success"}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: C.eggshell,
            fontSize: 13,
            padding: "13px 16px",
            fontFamily: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          style={{
            background: status === "success" ? C.accent : C.accentDim,
            border: "none",
            cursor: status === "idle" ? "pointer" : "default",
            padding: "13px 20px",
            color: C.white,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            transition: "background 0.3s ease",
            whiteSpace: "nowrap",
            minWidth: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "idle" && (
              <Motion.span key="idle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                Unirse
              </Motion.span>
            )}
            {status === "loading" && (
              <Motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <Motion.path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} style={{ transformOrigin: "center" }} />
                </svg>
              </Motion.span>
            )}
            {status === "success" && (
              <Motion.span key="success" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>
                ✓ Listo
              </Motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      {status === "success" && (
        <Motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: C.accent, fontSize: 11, marginTop: 8, letterSpacing: "0.05em" }}
        >
          Ya estás dentro. Próximo reporte: lunes.
        </Motion.p>
      )}
    </form>
  );
}

// ─── Footer Principal ─────────────────────────────────────────────────────────
export default function FooterPro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} style={{ background: C.bg, fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* ── 1. CTA STATEMENT ────────────────────────────────────────────────── */}
      <div style={{ borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          
          {/* Eyebrow */}
          <Motion.p
            {...fadeUp(0.05)}
            animate={inView ? fadeUp(0.05).animate : fadeUp(0.05).initial}
            style={{
              color: C.accentDim,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            ¿Listo para escalar?
          </Motion.p>

          {/* Headline tipográfico — el momento que se recuerda */}
          <div className="overflow-hidden">
            <Motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: C.eggshell,
                marginBottom: 0,
              }}
            >
              Diseñemos tu
            </Motion.h2>
          </div>
          <div className="overflow-hidden">
            <Motion.h2
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                fontWeight: 200,
                fontStyle: "italic",
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: C.accent,
                fontFamily: "'DM Serif Display', Georgia, serif",
                marginBottom: 40,
              }}
            >
              arquitectura real.
            </Motion.h2>
          </div>

          {/* Descripción + CTA en la misma línea */}
          <Motion.div
            {...fadeUp(0.4)}
            animate={inView ? fadeUp(0.4).animate : fadeUp(0.4).initial}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            <p style={{ color: C.sage, fontSize: 15, lineHeight: 1.65, maxWidth: 380 }}>
              Sin presentaciones genéricas. Auditamos tu stack, identificamos los cuellos de botella
              y entregamos un plan de sistemas autónomos ejecutable en 30 días.
            </p>

            {/* Botón con fill animado */}
            <Motion.a
              href="#"
              className="relative overflow-hidden group shrink-0"
              whileHover="hover"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 36px",
                border: `1px solid ${C.accentDim}`,
                color: C.eggshell,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 1,
              }}
            >
              {/* Fill hover */}
              <Motion.span
                variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
                initial="initial"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: C.accent,
                  transformOrigin: "left center",
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>Iniciar Blueprint</span>
              <Motion.span
                variants={{ hover: { x: 6 }, initial: { x: 0 } }}
                style={{ position: "relative", zIndex: 1, fontSize: 18 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                →
              </Motion.span>
            </Motion.a>
          </Motion.div>
        </div>
      </div>

      {/* ── 2. NAVIGATION ───────────────────────────────────────────────────── */}
      <div style={{ borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand + Newsletter */}
          <Motion.div
            {...fadeUp(0.15)}
            animate={inView ? fadeUp(0.15).animate : fadeUp(0.15).initial}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div style={{
                width: 32, height: 32,
                background: C.accent,
                borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900, fontSize: 14, color: C.bg,
              }}>D</div>
              <span style={{
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.eggshell,
              }}>Diverum Labs</span>
            </div>

            <p style={{ color: C.sage, fontSize: 13, lineHeight: 1.7, maxWidth: 300 }}>
              Reportes breves sobre automatización ética y sistemas autónomos.
              Sin ruido, solo señal.
            </p>

            <NewsletterForm />
          </Motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links */}
          <Motion.div
            {...fadeUp(0.25)}
            animate={inView ? fadeUp(0.25).animate : fadeUp(0.25).initial}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10"
          >
            {Object.entries(NAV).map(([category, items]) => (
              <div key={category}>
                <p style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.accentDim,
                  marginBottom: 20,
                }}>
                  {category}
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {items.map((item) => (
                    <li key={item}>
                      <NavLink>{item}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Motion.div>
        </div>
      </div>

      {/* ── 3. BARRA LEGAL ──────────────────────────────────────────────────── */}
      <Motion.div
        {...fadeUp(0.35)}
        animate={inView ? fadeUp(0.35).animate : fadeUp(0.35).initial}
        className="max-w-7xl mx-auto px-6 md:px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p style={{
          fontSize: 10,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: C.accentDim,
        }}>
          © {new Date().getFullYear()} Diverum Labs — Sistemas que escalan solos.
        </p>

        {/* Socials */}
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <SocialIcon label="LinkedIn" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <SocialIcon label="Twitter / X" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          <SocialIcon label="GitHub" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </div>
      </Motion.div>
    </footer>
  );
}