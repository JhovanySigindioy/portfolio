import React from "react";

export interface CardSkillProps {
    name: string;
    urlIcon: string;
}

export const CardSkill: React.FC<CardSkillProps> = ({ name, urlIcon }) => {
    return (
        <div
            className=" group flex flex-col items-center text-center rounded-lg md:shadow-md hover:bg-[#0F172A] p-2 sm:p-5 transition duration-100 cursor-pointer md:w-36"
        >
            {/* Icono */}
            <img
                src={urlIcon}
                alt={name}
                className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:translate-y-3 transition-transform duration-200 mb-1"
                style={{
                    filter: name === "Express" || name === "React RouterV6" ? "drop-shadow(0px 4px 4px rgba(255, 255, 255, 2))" : "",
                }}
            />
            {/* Línea y texto */}
            <div className="flex flex-col items-center justify-center w-full mt-4 group-hover:-translate-y-3 transition-transform duration-200">
                {/* Línea */}
                <div className="w-12 sm:w-16 h-1 bg-[#0F172A] group-hover:bg-white group-hover:translate-y-16 transform transition duration-300 mt-1 mb-3"></div>
                {/* Texto */}
                <span  translate="no" className="font-medium text-[#0F172A] group-hover:text-white group-hover:-translate-y-4 transform transition duration-300 mt-1">
                    {name}
                </span>
            </div>
        </div>
    );
};
