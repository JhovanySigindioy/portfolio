import React, { Suspense, useEffect, useState } from "react";
import { SideBar } from "./";
import { DashboardLayoutProps } from "../interfaces";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({sectionsDashboard, dataSideBar}) => {
    const [visibleSections, setVisibleSections] = useState<string[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [...new Set([...prev, entry.target.id])]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll("section").forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="md:grid md:grid-cols-[20rem_1fr]">
            <div>
                <SideBar title={dataSideBar.title} subtitle={dataSideBar.subtitle} links={dataSideBar.links} />
            </div>
            <div className="w-full">
                <Suspense fallback={<div>Cargando...</div>}>
                    {sectionsDashboard.map(({ id, component: Component }) => (
                        <section id={id} key={id} className="min-h-screen">
                            {visibleSections.includes(id) && <Component />}
                        </section>
                    ))}
                </Suspense>
            </div>
        </div>
    );
};
