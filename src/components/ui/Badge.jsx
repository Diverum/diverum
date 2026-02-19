export default function Badge({ children }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: 'rgba(74, 93, 78, 0.08)',
        color: 'var(--accent)',
        border: '1px solid rgba(74, 93, 78, 0.20)',
        borderRadius: '100px',
        padding: '5px 14px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        userSelect: 'none',
      }}
    >
      {children}
    </span>
  )
}