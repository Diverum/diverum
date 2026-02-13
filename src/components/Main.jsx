export function Main() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-900">
      <Card 
        title="Meta: 1% Club" 
        description="Enfocado en Ing. Telemática, código real y máquinas de alto CC. La disciplina no se negocia."
      />
    </main>
  );
}

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-black border border-orange-500 p-6">
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2 text-white uppercase tracking-widest">
          {title}
        </div>
        <p className="text-gray-400 text-base">
          {description}
        </p>
      </div>
      <div className="pt-4">
        <button className="bg-orange-600 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Subir Vibración
        </button>
      </div>
    </div>
  );
};