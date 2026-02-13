export default function Badge({ children }) {
    return (
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase"
        style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
      >
        {children}
      </span>
    );
  }