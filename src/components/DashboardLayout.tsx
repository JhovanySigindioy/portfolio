import React from "react";
import { SideBar } from "./";
import { DashboardLayoutProps } from "../interfaces";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ sectionsDashboard, dataSideBar }) => {
    return (
        // 1. El contenedor principal de la grilla ahora ocupa toda la altura de la pantalla
        // y oculta cualquier desbordamiento general.
        <div className="md:grid md:grid-cols-[20rem_1fr] h-screen overflow-hidden">
            <div>
                <SideBar title={dataSideBar.title} subtitle={dataSideBar.subtitle} links={dataSideBar.links} />
            </div>
            {/* 2. Este es el contenedor de la segunda columna (1fr) */}
            {/* Le damos toda la altura de la pantalla y le decimos que gestione el scroll vertical */}
            <div className="w-full h-screen overflow-y-auto">
                {sectionsDashboard.map(({ id, component }) => (
                    // La sección individual ya no necesita min-h-screen aquí,
                    // porque su contenedor padre (el div de arriba) ya maneja la altura y el scroll.
                    <section id={id} key={id}>
                        {component}
                    </section>
                ))}
            </div>
        </div>
    );
};