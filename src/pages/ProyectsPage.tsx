import React, { useEffect, useState } from "react";
import { FaDatabase, FaFire, FaNodeJs, FaReact } from "react-icons/fa6";
import { CardProyect } from "../components";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaLaravel } from "react-icons/fa";

const project = [
  
  {
    urlVideo: "./contectatech.mp4",
    nameProyect: "ContectaTech",
    description: "Optimiza la comunicación interna y el soporte técnico, centralizando recursos y contactos en una plataforma intuitiva que facilita la colaboración y aumenta la productividad.",
    stack: [
      { name: "React + TS", technologies: <FaReact className="text-blue-500" /> },
      { name: "Firestore", technologies: <FaFire className="text-red-500" /> },
      { name: "indexedDB", technologies: <FaDatabase className="text-blue-800" /> },
    ],
    linksProyect: {
      urlGitHub: "https://github.com/JhovanySigindioy/conectatech",
      urlWebSite: "https://conecta-tech.netlify.app",
    },
  },
  {
    urlVideo: "/construvidaayj.mp4",
    nameProyect: "Gestion Construvidaayj",
    description: "Sitio web responsivo desarrollado para un gestion de afiliaciones a seguridad social, control de ingresos, control de oficinas sucursales",
    stack: [
      { name: "React js", technologies: <FaReact className="text-blue-500" /> },
      { name: "Laravel", technologies: <FaLaravel className="text-red-600" /> },
      { name: "Tailwind css", technologies: <RiTailwindCssFill className="text-indigo-500" /> },
      
    ],
    linksProyect: {
      urlGitHub: "https://github.com/JhovanySigindioy/conectatech",
      urlWebSite: "https://construvidaayj.asesoriapro.com/",
    },
  },
  {
    urlVideo: "./asesorclaro.mp4",
    nameProyect: "Landing page - asesor CLARO",
    description: "Sitio web responsivo desarrollado para un asesor comercial de Claro, con el objetivo de promocionar sus servicios y los planes disponibles de manera clara.",
    stack: [
      { name: "React js", technologies: <FaReact className="text-blue-500" /> },
      { name: "Tailwind css", technologies: <RiTailwindCssFill className="text-indigo-500" /> },
      { name: "Framer Motion", technologies: <TbBrandFramerMotion className="text-purple-800" /> },
    ],
    linksProyect: {
      urlGitHub: "https://github.com/JhovanySigindioy/",
      urlWebSite: "https://josecatama.asesoriapro.com/",
    },
  },
  {
    urlVideo: "./hiosv.mp4",
    nameProyect: "HIOSV Bicicleteria",
    description: "Sistema para la administración HIOSV Bicicletería, la solución está orientada a optimizar la administración de stock y mejorar la visibilidad de las operaciones diarias.",
    stack: [
      { name: "React + TS", technologies: <FaReact className="text-blue-500" /> },
      { name: "Node + TS", technologies: <FaNodeJs className="text-green-500" /> },
      { name: "PostgreSQL", technologies: <FaDatabase className="text-blue-800" /> },
    ],
    linksProyect: {
      urlGitHub: "https://github.com/JhovanySigindioy/stock_bicycle_shop",
      urlWebSite: "https://hiosv-bicicleteria.netlify.app/",
    },
  },
];

const ProyectsPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#0F172A] py-10">
      <div className={`${animate ? "custom-slide-in-right" : ""}`}>
        <h1 className="text-4xl md:text-4xl font-bold mb-6 text-center text-white">Proyectos</h1>
        <h2 className="text-lg md:text-small font-medium text-center italic mb-8 text-gray-400">
          "Si puedes imaginarlo, puedes programarlo"
          <span className="font-bold text-gray-300"> Alejandro Taboada</span>
        </h2>
      </div>

      <div className="w-full px-4 overflow-x-auto overflow-y-hidden">
        <div className={`flex gap-6 w-max ${animate ? "custom-slide-in-left" : ""}`}>
          {project.map((item, index) => (
            <div
              key={index}
              // --- CAMBIO AQUÍ ---
              // Por defecto, la tarjeta ocupará el 90% del ancho de la ventana para móviles,
              // con un máximo de 320px (para que no se estire demasiado en tabletas pequeñas).
              // En pantallas medianas (md) y más grandes, tendrá un ancho mínimo de 320px.
              className="w-[90vw] max-w-[340px] md:min-w-[320px]"
            >
              <CardProyect {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyectsPage;