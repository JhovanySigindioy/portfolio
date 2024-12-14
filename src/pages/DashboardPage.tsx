import React from "react";
import { DashboardLayout } from "../components";
import { SectionConfig, SideBarProps } from "../interfaces";
import AboutPage from "./AboutPage";
import ProyectsPage from "./ProyectsPage";
import SkillsPage from "./SkillsPage";
import TrainingPage from "./TrainingPage";

const sections: SectionConfig[] = [
    { id: "AboutPage", component: <AboutPage /> },
    { id: "ProyectsPage", component: <ProyectsPage /> },
    { id: "SkillsPage", component: <SkillsPage /> },
    { id: "TrainingPage", component: <TrainingPage /> },
];

const links: SideBarProps = {
    title: "Wiliam Sigindioy",
    subtitle: "Software developer",
    links: [
        { id: "AboutPage", text: "Sobre mi", icon: "" },
        { id: "ProyectsPage", text: "Proyectos", icon: "" },
        { id: "SkillsPage", text: "Skill's", icon: "" },
        { id: "TrainingPage", text: "Formación", icon: "" },
    ]
};


export const DashboardPage: React.FC = () => {
    return (
        <DashboardLayout sectionsDashboard={sections} dataSideBar={links} />
    );
};
