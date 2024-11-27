import React from "react";
import { DashboardLayout } from "../components";
import { SectionConfig, SideBarProps } from "../interfaces";

const sections: SectionConfig[] = [
    { id: "section1", component: React.lazy(() => import("../components/Section1")) },
    { id: "section2", component: React.lazy(() => import("../components/Section2")) },
    { id: "section3", component: React.lazy(() => import("../components/Section3")) },
    { id: "section4", component: React.lazy(() => import("../components/Section4")) },
];


const links: SideBarProps
    = {
    title: "Wiliam Sigindioy",
    subtitle: "Software developer",
    links: [
        { id: "#section1", text: "Sobre mi", icon: "" },
        { id: "#section2", text: "Proyectos", icon: "" },
        { id: "#section3", text: "Skill's", icon: "" },
        { id: "#section4", text: "Formación", icon: "" },
    ]
}

export const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout sectionsDashboard={sections} dataSideBar={links} />
    );
};
