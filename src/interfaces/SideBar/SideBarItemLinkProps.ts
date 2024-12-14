import { ReactNode } from "react";

export interface SideBarItemLinkProps {
    id: string;
    text: string;
    icon: ReactNode;
    toggle?: () => void;
}