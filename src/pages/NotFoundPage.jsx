import { useEffect } from "react";
import { motion as Motion } from "framer-motion";

const C = {
  eggshell: "#F0EAD6",
  deepSage: "#3D5140",
  charcoal: "#1E231E",
  white: "#FFFFFF",
};

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "No encontramos la página - Diverum Labs";
  }, []);

  return (
    <main
      className="min-h-screen px-6 py-14 md:py-20 flex items-center"
      style={{ background: C.eggshell, color: C.charcoal }}
    >
      <div className="max-w-3xl mx-auto w-full">
        <Motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-black uppercase tracking-[0.2em]"
          style={{ color: C.deepSage }}
        >
          Error 404
        </Motion.p>

        <Motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="mt-4 text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Esta página no existe
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-6 text-lg leading-relaxed max-w-2xl"
          style={{ color: "rgba(30,35,30,0.7)" }}
        >
          Puede que la URL esté mal escrita o que el contenido haya cambiado de
          ubicación. Contáctate con nosotros si tienes una solicitud.
        </Motion.p>

        <Motion.a
          href="/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex mt-8 px-7 py-3 rounded-full text-sm font-semibold"
          style={{
            background: C.deepSage,
            color: C.white,
            textDecoration: "none",
          }}
        >
          Volver al inicio
        </Motion.a>
      </div>
    </main>
  );
}
