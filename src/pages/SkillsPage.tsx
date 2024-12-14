import React, { useEffect, useState } from "react";
import { CardSkill } from "../components";


const skillsFrontend = [
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "React + Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        name: "Redux Toolkit",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
   
   
    {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Material UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
        name: "React RouterV6",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    {
        name: "Next js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
];

const skillsBackend = [
    {
        name: "Node + Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "Postgres SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
]

const SkillsPage: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Activar la animación cuando el componente se monte
        setAnimate(true);
    }, []);
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
            <h2 className="text-4xl font-bold mb-8 text-[#0F172A] ">Skills</h2>
            <h2 className="text-xl font-bold">Frontend</h2>
            <div className={`shadow-lg rounded-md m-2 mb-10 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 ${animate ? "custom-slide-in-bottom" : ""}`}>
                {skillsFrontend.map((skill, index) => (
                    <CardSkill key={index} name={skill.name} urlIcon={skill.icon} />
                ))}

            </div>

            <h2 className="text-xl font-bold">Backend</h2>
            <div className={`shadow-lg rounded-md m-2 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3 ${animate ? "custom-slide-in-bottom" : ""}`}>
                {skillsBackend.map((skill, index) => (
                    <CardSkill key={index} name={skill.name} urlIcon={skill.icon} />
                ))}
            </div>
            
        </div>
    );
};

export default SkillsPage;
