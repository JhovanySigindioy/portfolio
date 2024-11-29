import { StackTechnical } from "./StackTechnical";

export interface CardProyectProp {
    urlVideo: string; // URL del video (debe ser corto, alrededor de 5 segundos)
    nameProyect: string; // Nombre del proyecto
    description: string;
    stack: StackTechnical[]; // Tecnologías usadas en el proyecto
    linksProyect: {
        urlGitHub: string; // Enlace al repositorio de GitHub
        urlWebSite: string; // Enlace al sitio web desplegado
    };
}