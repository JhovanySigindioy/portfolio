import React from "react";
import { CardTraining } from "../components";
import { TrainingDataItem } from "../interfaces";

const TrainingPage: React.FC = () => {

    const TrainingData: TrainingDataItem[] = [
        {
            logo: "/logo-itp.webp",
            title: "Ingeniería en Sistemas - Instituto Tecnológico del Putumayo",
            description: "Formación universitaria con énfasis en desarrollo de software, abarcando fundamentos de programación, bases de datos y tecnologías web.",
            year: "2018",
            status: "Finalizado",
        },
        {
            logo: "/logo-talento-tech.webp",
            title: "Desarrollo Web Full Stack - TalentoTech",
            description: "Bootcamp intensivo especializado en el stack MERN (MongoDB, Express, React, Node.js), incluyendo el uso avanzado de hooks, optimización de rendimiento y buenas prácticas.",
            year: "2024",
            status: "Finalizado",
        },
        {
            logo: "logo-udemy.webp",
            title: "Next.js (App Router) - Udemy",
            description: "Curso práctico sobre desarrollo con App Router de Next.js, enfocado en Server Components, layouts anidados y despliegue en Vercel.",
            year: "2024",
            status: "En curso",
        },
        {
            logo: "logo-sena.webp",
            title: "Despliegue de aplicaciones y servicios en contenedores Docker - SENA",
            description: "Capacitación en creación y gestión de contenedores Docker para aplicaciones escalables y eficientes en producción.",
            year: "2024",
            status: "En curso",
        },
        {
            logo: "logo-sena.webp",
            title: "Scrum para Proyectos de Software - SENA",
            description: "Curso enfocado en la metodología ágil Scrum, abordando la planificación, ejecución y gestión de proyectos de software con equipos multidisciplinarios.",
            year: "2024",
            status: "Finalizado",
        },
        {
            logo: "logo-sena.webp",
            title: "Comunicación en Equipos de Trabajo - SENA",
            description: "Capacitación especializada en habilidades de comunicación asertiva y efectiva para entornos laborales, trabajo en equipo y resolución de conflictos.",
            year: "2024",
            status: "Finalizado",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0F172A] flex justify-center items-center py-10">
            <div className="w-full max-w-5xl px-3">
                <h1 className="text-4xl text-white font-bold text-center mb-12">Formación</h1>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {TrainingData.map((item, index) => (
                        <CardTraining key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainingPage;
