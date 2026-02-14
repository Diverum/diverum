import { motion as Motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import Badge from "./ui/Badge";
import MagneticBtn from "./ui/MagneticBtn";

/* ═══════════════════════════════════════════ */
/* ══  NEURAL NETWORK CANVAS BACKGROUND   ══ */
/* ═══════════════════════════════════════════ */

const NeuralNetwork = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef([]);
  const animFrameRef = useRef(null);

  const initNodes = useCallback((width, height) => {
    const count = Math.floor((width * height) / 18000);
    const nodes = [];
    for (let i = 0; i < Math.min(count, 80); i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.3 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width, height;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
      nodesRef.current = initNodes(width, height);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const mouseRadius = 180;
      const connectionDist = 140;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (mouseRadius - dist) / mouseRadius;
          node.x += dx * force * 0.008;
          node.y += dy * force * 0.008;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.15;
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const mDx = mouse.x - midX;
            const mDy = mouse.y - midY;
            const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
            const boost = mDist < mouseRadius ? (1 - mDist / mouseRadius) * 0.6 : 0;
            const finalAlpha = alpha + boost;

            ctx.strokeStyle = boost > 0.1
              ? `rgba(200, 255, 0, ${finalAlpha})`
              : `rgba(138, 166, 163, ${finalAlpha})`;
            ctx.lineWidth = boost > 0.1 ? 1 : 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pulse = Math.sin(time * node.pulseSpeed + node.pulseOffset) * 0.5 + 0.5;
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const near = dist < mouseRadius;

        const alpha = near
          ? node.baseAlpha + (1 - dist / mouseRadius) * 0.7
          : node.baseAlpha + pulse * 0.15;
        const radius = near
          ? node.radius + (1 - dist / mouseRadius) * 2
          : node.radius + pulse * 0.5;

        if (near) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius + 4, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius + 4);
          glow.addColorStop(0, `rgba(200, 255, 0, ${alpha * 0.3})`);
          glow.addColorStop(1, "rgba(200, 255, 0, 0)");
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = near
          ? `rgba(200, 255, 0, ${alpha})`
          : `rgba(138, 166, 163, ${alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

/* ═══════════════════════════════════════════ */
/* ══  ANIMATION VARIANTS                  ══ */
/* ═══════════════════════════════════════════ */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ═══════════════════════════════════════════ */
/* ══  SHOWCASE SUBCOMPONENTS              ══ */
/* ═══════════════════════════════════════════ */

const ToolNode = ({ icon, label, delay = 0 }) => (
  <Motion.div
    initial={{ opacity: 0, scale: 0.7, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay: 1.4 + delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.25 } }}
    className="group relative flex flex-col items-center gap-2.5 p-4 md:p-5 rounded-2xl border cursor-default"
    style={{ background: "var(--bg)", borderColor: "var(--border)" }}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: "radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 70%)" }}
    />
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ boxShadow: "inset 0 0 0 1px var(--accent)" }}
    />
    <span className="text-2xl md:text-3xl relative z-10">{icon}</span>
    <span
      className="text-[10px] md:text-xs font-semibold uppercase tracking-wider relative z-10 group-hover:text-[var(--accent)] transition-colors duration-300"
      style={{ color: "var(--text-dim)" }}
    >
      {label}
    </span>
  </Motion.div>
);

const AgentHub = () => (
  <Motion.div
    initial={{ opacity: 0, scale: 0.4 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
    className="relative flex items-center justify-center w-40 h-40 md:w-52 md:h-52"
  >
    <Motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full"
      style={{ border: "1px dashed var(--border)" }}
    >
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
        style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}
      />
    </Motion.div>

    <Motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full"
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--accent)", opacity: 0.6 }}
      />
    </Motion.div>

    <Motion.div
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(200,255,0,0)",
          "0 0 40px 8px rgba(200,255,0,0.06)",
          "0 0 0 0 rgba(200,255,0,0)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    />

    <Motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
      style={{
        background: "var(--gradient)",
        boxShadow: "0 8px 40px rgba(200,255,0,0.15), 0 0 0 1px rgba(200,255,0,0.2)",
      }}
    >
      <span className="text-3xl md:text-4xl">⚡</span>
    </Motion.div>

    {["left", "right"].map((side) => (
      <Motion.div
        key={side}
        className="hidden md:block absolute top-1/2 -translate-y-1/2"
        style={{ [side]: "-52px" }}
        animate={{ opacity: [0.2, 0.8, 0.2], x: side === "left" ? [4, 0, 4] : [-4, 0, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="28" height="2" viewBox="0 0 28 2">
          <line x1="0" y1="1" x2="28" y2="1" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </Motion.div>
    ))}
  </Motion.div>
);

const MetricPanel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 2000, 1);
        setCount(Math.floor((1 - Math.pow(1 - p, 3)) * 80));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.6, duration: 0.9 }}
      className="flex flex-col items-center md:items-end gap-3"
    >
      <div className="flex items-baseline gap-0.5">
        <span
          className="text-5xl md:text-7xl font-bold leading-none"
          style={{ color: "var(--accent)", fontFamily: "'Space Mono', monospace" }}
        >
          +{count}
        </span>
        <span className="text-2xl md:text-3xl font-bold" style={{ color: "var(--accent)" }}>%</span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ color: "var(--text-dim)" }}>
        Eficiencia Operativa
      </span>
      <div className="flex items-end gap-[3px] h-8 mt-1">
        {[25, 40, 35, 55, 48, 72, 65, 88, 80].map((h, i) => (
          <Motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 2.2 + i * 0.08, duration: 0.5, ease: "easeOut" }}
            className="w-[5px] rounded-full"
            style={{ background: i >= 7 ? "var(--accent)" : "var(--border-light)" }}
          />
        ))}
      </div>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="flex items-center gap-2 mt-1"
      >
        <Motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <span className="text-[10px]" style={{ color: "var(--text-dim)" }}>Agentes activos</span>
      </Motion.div>
    </Motion.div>
  );
};

const StatusTicker = () => {
  const statuses = [
    { text: "Lead capturado → CRM actualizado", icon: "🎯" },
    { text: "Inventario sincronizado con Shopify", icon: "📦" },
    { text: "Reporte semanal generado y enviado", icon: "📊" },
    { text: "3 facturas procesadas automáticamente", icon: "💰" },
    { text: "Anomalía detectada → alerta enviada", icon: "🚨" },
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setIdx((p) => (p + 1) % statuses.length), 3000);
    return () => clearInterval(iv);
  }, []);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.6, duration: 0.6 }}
      className="w-full flex justify-center mt-6"
    >
      <div
        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full overflow-hidden"
        style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
      >
        <Motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }}
        />
        <AnimatePresence mode="wait">
          <Motion.span
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-medium whitespace-nowrap"
            style={{ color: "var(--text-muted)" }}
          >
            {statuses[idx].icon} {statuses[idx].text}
          </Motion.span>
        </AnimatePresence>
      </div>
    </Motion.div>
  );
};

const ToolChip = ({ icon, label }) => (
  <Motion.div
    whileHover={{ y: -3, backgroundColor: "var(--surface-hover)" }}
    className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm border transition-all duration-300"
    style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
  >
    <span>{icon}</span>
    <span className="font-medium">{label}</span>
  </Motion.div>
);

/* ════════════════════════════════════════ */
/* ══  HERO MAIN COMPONENT             ══ */
/* ════════════════════════════════════════ */

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-12 md:pt-16 pb-16 overflow-hidden bg-[var(--bg)]">
      {/* Neural Network Background */}
      <div className="absolute inset-0 pointer-events-auto">
        <NeuralNetwork />
      </div>

      {/* Gradient orbs + vignette for readability */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] md:w-[45rem] md:h-[45rem] rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: "#8AA6A3" }}
        />
        <div
          className="absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] md:w-[35rem] md:h-[35rem] rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(10,10,11,0.4) 0%, rgba(10,10,11,0.85) 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto  lg:px-8 relative w-full mt-0 md:mt-4" style={{ zIndex: 2 }}>
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start"
        >
          <Motion.div variants={itemVariants}>
            <Badge>Agentes Digitales & Automatización</Badge>
          </Motion.div>

          <Motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl sm:text-6xl md:text-[5.5rem] font-bold leading-[1.08] tracking-tighter text-center md:text-left"
          >
            Escala tu negocio con
            <br className="hidden md:block" />
            <span
              className="italic font-light"
              style={{ fontFamily: "'Instrument Serif', serif", color: "var(--accent)" }}
            >
              Automatizaciones
            </span>
          </Motion.h1>

          <Motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-center md:text-left max-w-2xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Automatización real para empresas que ya están cansadas del trabajo manual.
          </Motion.p>

          <Motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <MagneticBtn primary>Agendar Consultoría →</MagneticBtn>
            <MagneticBtn>Ver servicios</MagneticBtn>
          </Motion.div>

          {/* VISUAL SHOWCASE */}
         {/*  <Motion.div variants={itemVariants} className="mt-16 md:mt-20 w-full">
            <div
              className="rounded-3xl p-[1px]"
              style={{ background: "linear-gradient(180deg, var(--border-light) 0%, transparent 50%)" }}
            >
              <div
                className="rounded-[calc(1.5rem-1px)] p-6 md:p-10 lg:p-12 relative overflow-hidden"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(var(--text-dim) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 lg:gap-16">
                  <div className="grid grid-cols-2 gap-3 w-full md:w-auto md:min-w-[200px]">
                    {[
                      { icon: "🛍️", label: "Shopify", delay: 0 },
                      { icon: "🔗", label: "n8n", delay: 0.12 },
                      { icon: "⚡", label: "Make", delay: 0.24 },
                      { icon: "🤖", label: "OpenAI", delay: 0.36 },
                    ].map((t) => (
                      <ToolNode key={t.label} {...t} />
                    ))}
                  </div>

                  <div className="relative flex flex-col items-center py-4 md:py-0 md:flex-1 md:flex md:justify-center">
                    <AgentHub />
                  </div>

                  <div className="md:min-w-[180px]">
                    <MetricPanel />
                  </div>
                </div>

                <StatusTicker />

                <Motion.div
                  className="absolute bottom-0 left-0 right-0 h-[1px]"
                  style={{ background: "var(--gradient)" }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 2, ease: "easeOut" }}
                />
              </div>
            </div>
          </Motion.div> */}

          {/* Tags */}
          <Motion.div variants={itemVariants} className="mt-12 w-full">
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {[
                { icon: "🤖", label: "Agentes personalizados" },
                { icon: "📈", label: "Escala tu negocio" },
                { icon: "🧠", label: "Consultoría de IA" },
                { icon: "⚙️", label: "Automatización de procesos" },
              ].map((item) => (
                <ToolChip key={item.label} icon={item.icon} label={item.label} />
              ))}
            </div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
}