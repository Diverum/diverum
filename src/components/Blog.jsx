import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";
import { motion } from "framer-motion";

const ArticleCard = ({ tag, title, excerpt, readTime, featured = false }) => (
  <StaggerItem>
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl h-full flex flex-col overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: "var(--surface)",
        border: featured
          ? "1px solid rgba(200, 255, 0, 0.15)"
          : "1px solid var(--border)",
      }}
    >
      {/* Color strip top */}
      <div
        className="h-1"
        style={{
          background: featured
            ? "var(--gradient)"
            : "var(--border)",
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded"
            style={{
              background: "var(--accent-dim)",
              color: "var(--accent)",
            }}
          >
            {tag}
          </span>
          <span className="text-xs" style={{ color: "var(--text-dim)" }}>
            {readTime}
          </span>
        </div>

        <h3
          className="text-base font-semibold mb-3 leading-snug flex-1"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "var(--text-muted)" }}
        >
          {excerpt}
        </p>

        <span
          className="text-xs font-medium inline-flex items-center gap-1 mt-auto"
          style={{ color: "var(--accent)" }}
        >
          Leer artículo
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.div>
  </StaggerItem>
);

export default function Blog() {
  const articles = [
    {
      tag: "Agentes IA",
      title: "Cómo los agentes en VPS están matando al no-code tradicional",
      excerpt:
        "El no-code tiene límites claros. Cuando tus automatizaciones necesitan lógica compleja, procesamiento de datos pesado o decisiones con IA, los agentes desplegados en servidores propios son el siguiente nivel.",
      readTime: "7 min",
      featured: true,
    },
    {
      tag: "Ventas",
      title: "Por qué tu CRM te está haciendo perder plata",
      excerpt:
        "Tener un CRM no significa que funcione. Si tus leads se enfrían porque nadie hace follow-up a tiempo, el problema no es el CRM — es lo que no está automatizado alrededor de él.",
      readTime: "5 min",
    },
    {
      tag: "Operaciones",
      title: "La verdad sobre el 'Excel eterno' y por qué tu empresa no escala",
      excerpt:
        "Cada empresa tiene ese Excel sagrado que nadie quiere tocar. Acá te explicamos por qué ese archivo es tu cuello de botella más peligroso y cómo reemplazarlo sin trauma.",
      readTime: "6 min",
    },
    {
      tag: "Estrategia",
      title: "Automatizar no es despedir: cómo redistribuir talento humano",
      excerpt:
        "El miedo más común: '¿si automatizo, qué van a hacer mis empleados?' La respuesta correcta es: cosas que de verdad importan. Acá desglosamos el enfoque.",
      readTime: "4 min",
    },
  ];

  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <Badge>Recursos</Badge>
              <h2
                className="mt-4 text-3xl md:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Ideas que{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    color: "var(--accent)",
                  }}
                >
                  sí sirven
                </span>
              </h2>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Sin humo. Artículos directos sobre automatización, operaciones y escalabilidad real.
              </p>
            </div>
            <motion.a
              href="#"
              whileHover={{ x: 3 }}
              className="text-sm font-medium inline-flex items-center gap-1"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              Ver todos los artículos →
            </motion.a>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <ArticleCard key={i} {...article} />
          ))}
        </Stagger>

        {/* Newsletter CTA */}
        <Reveal delay={0.3}>
          <div
            className="mt-14 p-8 rounded-2xl text-center"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--text)" }}
            >
              📬 Recibe insights semanales
            </h3>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              Un correo a la semana con ideas prácticas sobre automatización,
              operaciones y cómo escalar sin perder la cabeza.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@empresa.com"
                className="flex-1 px-4 py-3 rounded-full text-sm outline-none"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-full text-sm font-semibold cursor-pointer"
                style={{
                  background: "var(--gradient)",
                  color: "var(--bg)",
                }}
              >
                Suscribirme
              </motion.button>
            </div>
            <p
              className="text-xs mt-3"
              style={{ color: "var(--text-dim)" }}
            >
              Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}