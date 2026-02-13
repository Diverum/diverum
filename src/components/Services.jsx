import { motion } from "framer-motion";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import { Stagger, StaggerItem } from "./ui/Stagger";

const AgentCard = ({ icon, title, desc, capabilities, accentBorder = false }) => (
  <StaggerItem>
    <div
      className="p-7 rounded-2xl h-full flex flex-col transition-all duration-300 hover:translate-y-[-2px]"
      style={{
        background: "var(--surface)",
        border: accentBorder
          ? "1px solid rgba(200, 255, 0, 0.2)"
          : "1px solid var(--border)",
        boxShadow: accentBorder ? "0 0 40px var(--accent-glow)" : "none",
      }}
    >
      {accentBorder && (
        <span
          className="inline-block self-start px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-3"
          style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
        >
          Más solicitado
        </span>
      )}
      <span className="text-4xl block mb-5">{icon}</span>
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6 flex-1"
        style={{ color: "var(--text-muted)" }}
      >
        {desc}
      </p>
      <div className="space-y-2">
        {capabilities.map((cap, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "var(--accent)" }}
            />
            <span className="text-xs" style={{ color: "var(--text-dim)" }}>
              {cap}
            </span>
          </div>
        ))}
      </div>
    </div>
  </StaggerItem>
);

export default function Services() {
  const agents = [
    {
      icon: "🎯",
      title: "Agentes de Ventas",
      desc: "Tu fuerza de ventas digital que no duerme. Captura, clasifica y da seguimiento a cada lead automáticamente. Cero oportunidades perdidas.",
      capabilities: [
        "Seguimiento automático de leads en CRM",
        "Respuesta instantánea a formularios",
        "Generación automática de contratos",
        "Scoring y priorización de prospectos",
        "Alertas de deals estancados",
      ],
    },
    {
      icon: "⚙️",
      title: "Agentes de Operaciones",
      desc: "El engranaje invisible que conecta todos tus sistemas. Datos sincronizados, inventarios al día, reportes que se generan solos cada lunes a las 7am.",
      capabilities: [
        "Conexión ERP con herramientas internas",
        "Gestión automática de inventarios",
        "Reportes operativos sin intervención",
        "Sincronización de datos entre sistemas",
        "Alertas de anomalías operativas",
      ],
      accentBorder: true,
    },
    {
      icon: "💰",
      title: "Agentes de Finanzas",
      desc: "Facturación, conciliación y cobros en piloto automático. Tu equipo financiero se enfoca en estrategia, no en perseguir pagos ni cuadrar planillas.",
      capabilities: [
        "Facturación automática post-venta",
        "Conciliación bancaria diaria",
        "Seguimiento de cobros y recordatorios",
        "Reportes financieros automáticos",
        "Alertas de flujo de caja",
      ],
    },
    {
      icon: "🧠",
      title: "Consultoría Estratégica",
      desc: "El cerebro que diseña la jugada antes de ejecutar. No automatizamos por moda — diagnosticamos, priorizamos y construimos con retorno medible.",
      capabilities: [
        "Mapeo de procesos actuales",
        "Identificación de cuellos de botella",
        "Análisis de ROI por automatización",
        "Roadmap de implementación",
        "Selección de herramientas óptimas",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="py-24 px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Badge>Tu escuadrón de agentes</Badge>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            No vendes código.{" "}
            <span
              className="italic"
              style={{
                fontFamily: "'Instrument Serif', serif",
                color: "var(--accent)",
              }}
            >
              Vendes empleados digitales
            </span>{" "}
            que no duermen
          </h2>
          <p
            className="mt-4 text-base max-w-2xl"
            style={{ color: "var(--text-muted)" }}
          >
            Cada agente se especializa en un área de tu negocio. Trabajan 24/7,
            no cometen errores y escalan sin que tengas que contratar a nadie más.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <AgentCard key={i} {...agent} />
          ))}
        </Stagger>

        {/* Integrations strip */}
        <Reveal delay={0.2}>
          <div
            className="mt-14 p-6 rounded-2xl"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Herramientas que dominamos
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Zapier", "Make", "n8n", "OpenAI", "LangChain",
                "HubSpot", "Salesforce", "Stripe", "Shopify",
                "Slack", "Google Sheets", "Airtable", "Notion",
                "Twilio", "AWS", "Python", "PostgreSQL",
              ].map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-3 py-1.5 rounded-lg"
                  style={{
                    background: "var(--surface)",
                    color: "var(--text-dim)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}