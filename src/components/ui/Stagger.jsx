import { useRef } from "react"
import { motion as Motion, useInView } from "framer-motion"

export function Stagger({ children, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <Motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.10 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}

export function StaggerItem({ children, className = "" }) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </Motion.div>
  )
}