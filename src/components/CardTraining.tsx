import React from "react";
import { CardTrainingProps } from "../interfaces";

export const CardTraining: React.FC<CardTrainingProps> = ({ logo, title, description, status, year }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-1 rounded-full w-[80%]">
                        <img src={logo} alt={title} />
                    </div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                <p className="text-sm text-gray-400 mb-4">{description}</p>
            </div>
            <div className="flex justify-between items-center">
                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${status === "En curso"
                        ? "bg-orange-600 text-white"
                        : "bg-green-600 text-white"
                        }`}
                >
                    {status}
                </span>
                <span className="text-sm text-gray-300">{year}</span>
            </div>
        </div>
    );
};
