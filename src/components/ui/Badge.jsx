export default function Badge({ children }) {
    return (
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase select-none backdrop-blur-md"
        style={{
          background: "rgba(151, 199, 192, 0.1)", // Un toque de Pearl Aqua muy transparente
          color: "var(--accent)",
          border: "1px solid var(--accent-dim)", // Borde sutil para definición
          boxShadow: "0 0 20px -5px var(--accent-glow)", // Glow suave
        }}
      >
        {children}
      </span>
    );
  }