import { motion as Motion } from "framer-motion";

export default function MagneticBtn({ children, primary = false, onClick, className = "" }) {
  return (
    <Motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden w-full sm:w-auto ${className}`}
      style={
        primary
          ? {
              background: "var(--accent)", // Pearl Aqua (Claro)
              color: "var(--dark-teal)",   // Texto Oscuro para contraste máximo
              border: "1px solid var(--accent)",
              boxShadow: "0 0 20px var(--accent-glow)", // Resplandor externo
            }
          : {
              background: "rgba(255, 255, 255, 0.03)", // Glass oscuro
              color: "var(--text)",
              border: "1px solid var(--border-light)",
              backdropFilter: "blur(10px)", // Efecto vidrio
            }
      }
    >
      {/* Brillo interno sutil para efecto 3D en el botón primario */}
      {primary && (
        <div 
          className="absolute inset-0 bg-white opacity-20"
          style={{ mixBlendMode: "overlay" }} 
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Motion.button>
  );
}