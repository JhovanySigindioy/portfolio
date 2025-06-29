import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import PdfModal from "../components/PdfModal"; // Ajusta el path si es diferente

const AboutPage: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center p-2 md:px-20 gap-10">
      {/* Contenido textual */}
      <div className={`order-2 md:order-1 ${animate ? "custom-slide-in-left" : "opacity-0"}`}>
        <header className="flex flex-col gap-1 mb-6 text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hola, soy Wiliam Sigindioy<br />
            <span className="text-gray-500">Software Developer</span>
          </h1>
        </header>

        <p className="mb-2 text-center md:text-start md:pr-10 text-gray-600">
          Soy un desarrollador de software apasionado por construir aplicaciones modernas utilizando tecnologías como React, Node.js y Docker.
        </p>

        <div className="mb-5 text-center md:text-start md:pr-10 text-gray-600">
          <p>Correo: wiliamjsm1989@gmail.com</p>
          <p>Contacto: 3106631613</p>
        </div>

        {/* Iconos y Botones */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/jhovany-sigindioy/"
            target="_blank"
            title="Linkedin"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition duration-200 shadow-lg rounded-sm"
          >
            <FaLinkedin className="border-2 border-white rounded-md" />
          </a>

          <a
            href="https://github.com/JhovanySigindioy"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
            className="text-4xl hover:scale-125 transition duration-200 shadow-lg rounded-full"
          >
            <FaGithub className="border-2 border-white rounded-full" />
          </a>

          {/* Botón para abrir el modal del CV */}
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 border-2 border-gray-200 hover:scale-110 rounded-lg bg-orange-600 text-white px-3 py-1 shadow-lg transition-all duration-200"
          >
            <FaDownload className="text-xl" />
            <p>Ver CV</p>
          </button>
           <a 
            href="/CV_Wiliam_Sigindioy.pdf"
            download="Hoja_de_vida_Wiliam_Sigindioy.pdf"
            className="flex items-center gap-2 border-2 border-gray-200 hover:scale-110 rounded-lg bg-blue-900 text-white px-3 py-1 shadow-lg transition-all duration-200"
          >
            <FaDownload className="text-xl" />
          </a>

        </div>
      </div>

      {/* Imagen */}
      <div className={`flex-shrink-1 order-1 md:order-2 ${animate ? "custom-slide-in-right" : ""}`}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/hiosvbicicleteria-c3391.appspot.com/o/images%2Ffoto-cv.webp?alt=media&token=a0d93977-27f3-4f09-b10b-60b5e655cf7e"
          alt="Foto personal"
          className="img_dev max-w-[200px] h-auto rounded-full md:max-w-[350px]"
        />
      </div>

      {/* Modal de visualización del PDF */}
      <PdfModal
        show={showModal}
        onClose={() => setShowModal(false)}
        pdfUrl="/CV_Wiliam_Sigindioy.pdf"
      />
    </div>
  );
};

export default AboutPage;
