import React from "react";
import { SideBar } from "./";
import { DashboardLayoutProps } from "../interfaces";

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ sectionsDashboard, dataSideBar }) => {
    return (
        <div className="md:grid md:grid-cols-[20rem_1fr]">
            <div>
                <SideBar title={dataSideBar.title} subtitle={dataSideBar.subtitle} links={dataSideBar.links} />
            </div>
            <div className="w-full">
                {sectionsDashboard.map(({ id, component }) => (
                    <section id={id} key={id} className="min-h-screen">
                       {component}
                    </section>
                ))}
            </div>
        </div>
    );
};