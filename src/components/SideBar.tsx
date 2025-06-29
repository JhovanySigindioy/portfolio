import React, { useState } from "react";
import { SideBarItemLink } from "./SideBarItemLink";
import { SideBarProps } from "../interfaces";
import { FaBars, FaDownload, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import PdfModal from "./PdfModal";

export const SideBar: React.FC<SideBarProps> = ({ title, subtitle, links }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú
    const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* Botón hamburguesa visible solo en pantallas pequeñas */}
            <button
                onClick={toggleSidebar}
                className="block md:hidden fixed top-2 left-2 z-50 p-2 text-2xl rounded-md bg-white shadow-lg "
                aria-label="Toggle Menu"
            >
                {isOpen ? <IoClose size={20} /> : <FaBars size={20} />}
            </button>

            <div className={`z-40 fixed top-0 left-0 w-[20rem] h-full flex flex-col items-center  bg-[#0F172A] text-[#C5D0DC] font-bold transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0`}>

                {/* Header */}
                <div className="texture w-full">
                    <div className="flex flex-col items-center p-8">
                        {/* Foto de Perfil */}
                        <div className="mb-5">
                            <img
                                src="/logo.webp"
                                alt="Foto de perfil"
                                className="w-24 h-24  hover:scale-125 transition duration-150"
                            />
                        </div>
                        {/* Título y subtítulo */}
                        <h1 className="text-[#E2E8F0] text-lg font-bold">{title}</h1>
                        <h2 className="text-sm font-medium">{subtitle}</h2>
                    </div>
                    {/* Línea divisora */}
                    <hr className="w-full border-[#C5D0DC]" />
                </div>
                {/* Lista de enlaces */}
                <ul className="flex justify-start flex-col py-8 px-10 w-full">
                    {links.length > 0 ? (
                        links.map((link) => (
                            <SideBarItemLink
                                key={link.id} // Clave única
                                id={link.id}
                                text={link.text}
                                icon={link.icon}
                                toggle={toggleSidebar}

                            />
                        ))
                    ) : (
                        <p className="text-[#C5D0DC] text-sm text-center">
                            No hay enlaces disponibles.
                        </p>
                    )}
                </ul>

                <div className="fixed top-[80vh] flex gap-4 justify-center md:justify-start">
                    <div className={`flex gap-4`}>
                        <a
                            href="https://www.linkedin.com/in/jhovany-sigindioy/"
                            target="_blank"
                            title="Linkedin"
                            rel="noopener noreferrer"
                            className="text-4xl hover:scale-125 transition duration-200 shadow-lg rounded-sm"
                        >
                            <FaLinkedin
                                className={`text-orange-600 border-2 border-white rounded-md`}
                            />
                        </a>
                        <a
                            href="https://github.com/JhovanySigindioy"
                            target="_blank"
                            title="GitHub"
                            rel="noopener noreferrer"
                            className="text-4xl hover:scale-125 transition duration-200 shadow-lg rounded-full"
                        >
                            <FaGithub
                                className={`text-orange-600 border-2 border-white rounded-full`}
                            />
                        </a>
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-2 border-2 border-gray-200 hover:scale-110 rounded-lg bg-orange-600 text-white px-3 py-1 shadow-lg transition-all duration-200"
                        >
                            <FaDownload className="text-xl" />
                            <p>Ver CV</p>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10 md:hidden"
                ></div>
            )}

            <PdfModal
                show={showModal}
                onClose={() => setShowModal(false)}
                pdfUrl="/CV_Wiliam_Sigindioy.pdf"
            />
        </>
    );
}
    ;  
