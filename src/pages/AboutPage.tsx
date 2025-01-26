import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const AboutPage: React.FC = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Activar la animación cuando el componente se monte
        setAnimate(true);
    }, []);

    return (
        <div className={`flex flex-col md:flex-row min-h-screen items-center justify-center p-2 md:px-20 gap-10`}>
            {/* Contenido textual */}
            <div className={`order-2 md:order-1   ${animate ? "custom-slide-in-left" : "opacity-0"}`}>
                <header className="flex flex-col gap-1 mb-6 text-center md:text-start">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Hola, soy Wiliam Sigindioy<br />
                        <span className="text-gray-500">Software Developer</span>
                    </h1>
                </header>
                <p className="mb-2 text-center md:text-start md:pr-10 text-gray-600 ">
                    Soy un desarrollador de software apasionado por construir aplicaciones modernas utilizando tecnologías como React, Node.js y Docker.
                </p>
                <div className="mb-5 text-center md:text-start md:pr-10 text-gray-600">
                    <p>Correo: wiliamjsm1989@gmail.com</p>
                    <p>Contacto: 3106631613</p>
                </div>

                {/* Iconos y Botón */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className={`flex gap-4`}>
                        <a
                            href="https://www.linkedin.com/in/jhovany-sigindioy/"
                            target="_blank"
                            title="Linkedin"
                            rel="noopener noreferrer"
                            className="text-4xl hover:scale-125 transition duration-200 shadow-lg rounded-sm"
                        >
                            <FaLinkedin
                                className={`border-2 border-white rounded-md`}
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
                                className={`border-2 border-white rounded-full`}
                            />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ABtt7i9vy4vkPBC1TI8Ab6wCHDNming4/view?usp=sharing"
                            target="_blank"
                            className={`flex items-center gap-2 border-2 border-gray-200 ease-in-out hover:scale-110 rounded-lg bg-orange-600 text-white px-3 py-1 shadow-lg transition-all duration-200`}
                        >
                            <FaDownload className="text-xl" /> <p>Descarga CV</p>
                        </a>
                    </div>
                </div>

            </div>
            {/* Boton para para seleccionar idioma */}
            {/* <button
                className={`z-50 flex items-center fixed top-3 right-2 border-2 border-gray-200 rounded-2xl bg-orange-600 text-white px-4 py-0.5 shadow-lg `}
            >
                <span
                    className={`w-6 h-6 rounded-full bg-white translate-x-3 hover:-translate-x-3 transition-transform`}
                ></span>
            </button> */}

            {/* Imagen */}
            <div className={`flex-shrink-1 order-1 md:order-2 ${animate ? "custom-slide-in-right" : ""} `}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/hiosvbicicleteria-c3391.appspot.com/o/images%2Ffoto-cv.webp?alt=media&token=a0d93977-27f3-4f09-b10b-60b5e655cf7e"
                    alt="Foto personal"
                    className="img_dev max-w-[200px] h-auto rounded-full md:max-w-[350px]"
                />
            </div>
        </div>
    );
};

export default AboutPage;