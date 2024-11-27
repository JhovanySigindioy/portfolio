import React, { useEffect, useState } from "react";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa6";
import { CardProyect } from "./CardProyect";

const project = {
  urlVideo: "./video.mp4",
  nameProyect: "HIOSV Bicicleteria",
  description: "Sistema para la administración HIOSV Bicicletería, la solución está orientada a optimizar la administración de stock y mejorar la visibilidad de las operaciones diarias.",
  stack: [
    { name: "React + TS", technologies: <FaReact className="text-blue-500" /> },
    { name: "Node + TS", technologies: <FaNodeJs className="text-green-500" /> },
    { name: "PostgreSQL", technologies: <FaDatabase className="text-blue-800" /> },
  ],
  linksProyect: {
    urlGitHub: "www.linkedin.com/in/jhovany-sigindioy",
    urlWebSite: "https://www.ejemplo.com",
  },
};

const Section2: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activar la animación cuando el componente se monte
    setAnimate(true);
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[#0F172A] py-10">
      <div className={`${animate ? "custom-slide-in-right" : ""} `}>
        {/* Título de la sección */}
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-center text-white">Proyectos</h1>

        {/* Subtítulo con cita */}
        <h2 className="text-lg md:text-small font-medium text-center italic mb-8 text-gray-400">
          "Si puedes imaginarlo, puedes programarlo"
          <span className="font-bold text-gray-300"> Alejandro Taboada</span>
        </h2>
      </div>

      {/* Contenedor de proyectos */}
      <div className={`flex flex-col md:flex-row justify-center gap-1 m-4
        imate ? "custom-slide-in-left" : ""}`}>
        <CardProyect {...project} />
      </div>
    </div>
  );
};

export default Section2;