import React from "react";

export const Loading: React.FC = () => {
    return (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-12 w-12 mb-2"></div>
            <h1 className="text-2xl">Cargando...</h1>
        </div>
    );
};
