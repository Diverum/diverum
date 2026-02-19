import { motion as Motion } from "framer-motion"

export default function MagneticBtn({
  children,
  primary = false,
  onClick,
  className = "",
  href,
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: '100px',
    padding: '13px 30px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    letterSpacing: '0.01em',
    transition: 'box-shadow 0.2s ease',
  }

  const primaryStyle = {
    ...baseStyle,
    background: 'var(--accent)',
    color: '#FFFFFF',
    boxShadow: '0 2px 8px rgba(45, 51, 45, 0.15)',
  }

  const secondaryStyle = {
    ...baseStyle,
    background: 'transparent',
    color: 'var(--accent)',
    border: '1.5px solid rgba(45, 51, 45, 0.25)',
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Motion.a
      as={Tag}
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03, translateY: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={className}
      style={primary ? primaryStyle : secondaryStyle}
    >
      {children}
    </Motion.a>
  )
}