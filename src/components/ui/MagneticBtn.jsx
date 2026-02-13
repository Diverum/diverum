import { motion as Motion } from "framer-motion";

export default function MagneticBtn({ children, primary = false, onClick, className = "" }) {
  return (
    <Motion.button
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${className}`}
      style={
        primary
          ? {
              background: "var(--gradient)",
              color: "var(--bg)",
              fontWeight: 600,
              boxShadow: "0 0 32px var(--accent-dim)",
            }
          : {
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }
      }
    >
      {children}
    </Motion.button>
  );
}