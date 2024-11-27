import React from "react";
import { SideBarItemLinkProps } from "../interfaces";

export const SideBarItemLink: React.FC<SideBarItemLinkProps> = ({ id, text, icon }) => {
    return (
        <li className="flex gap-2 hover:bg-[#233663] hover:text-white p-2.5 w-full  border-l rounded-r-sm hover:rounded-md border-l-gray-500 hover:border-l-gray-300">
            <span>{icon}</span>
            <a href={id} className="w-96">
                {text}
            </a>
        </li>
    );
};
