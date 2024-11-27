import React, { ReactNode } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export interface StackTechnical {
    name: string;
    technologies: ReactNode; // Ícono representativo de la tecnología
}

export interface CardProyectProp {
    urlVideo: string; // URL del video (debe ser corto, alrededor de 5 segundos)
    nameProyect: string; // Nombre del proyecto
    description: string;
    stack: StackTechnical[]; // Tecnologías usadas en el proyecto
    linksProyect: {
        urlGitHub: string; // Enlace al repositorio de GitHub
        urlWebSite: string; // Enlace al sitio web del proyecto
    };
}

export const CardProyect: React.FC<CardProyectProp> = ({ urlVideo, nameProyect, description, stack, linksProyect }) => {
    return (
        <div className="p-4 hover:scale-105 transition duration-150 w-full">
            <div className="shadow-md shadow-blue-300 rounded-lg bg-white md:w-80 ">
                {/* Reproductor de video */}
                <div className="rounded-lg p-1">
                    <video
                        className="w-full h-48 object-cover rounded-lg"
                        src={urlVideo}
                        loop
                        muted
                        autoPlay
                        playsInline
                        title={nameProyect}
                    >
                        Tu navegador no soporta el elemento <code>video</code>.
                    </video>
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-4">
                    {/* Título del proyecto */}
                    <h5 className="mb-2 text-lg font-bold text-neutral-800 dark:text-neutral-50">
                        {nameProyect}
                    </h5>

                    {/* Tecnologías usadas */}
                    <p className="text-sm">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {stack.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full shadow-sm hover:shadow-lg transition duration-150"
                            >
                                {tech.technologies}
                                <span className="text-[10px] font-medium text-gray-800">{tech.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Enlaces al proyecto */}
                    <div className="flex justify-evenly mt-4">
                        <a
                            href={linksProyect.urlGitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Repositorio en GitHub"
                            className="text-2xl text-orange-600 hover:scale-125 transition duration-200"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={linksProyect.urlWebSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Ver sitio web"
                            className="text-2xl text-orange-600 transition duration-200 hover:scale-125 duration-150"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
