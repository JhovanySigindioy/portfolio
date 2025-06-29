import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface PdfModalProps {
  show: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PdfModal: React.FC<PdfModalProps> = ({ show, onClose, pdfUrl }) => {
  // Detectar si es un dispositivo móvil
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Si es móvil y se abre el modal, redirigir al PDF directamente
  useEffect(() => {
    if (show && isMobile) {
      window.open(pdfUrl, "_blank");
      onClose(); // Cierra el modal inmediatamente
    }
  }, [show, isMobile, pdfUrl, onClose]);

  if (!show || isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Contenedor del modal */}
      <div className="relative w-[95%] h-[85%] md:w-[80%] md:h-[90%] bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 
                     bg-gray-700 text-white 
                     hover:bg-red-600 hover:scale-110 
                     transition-all duration-200 
                     p-2 rounded-full 
                     shadow-lg 
                     flex items-center justify-center 
                     text-lg z-10"
          aria-label="Cerrar previsualización de PDF"
        >
          <FaTimes />
        </button>

        {/* PDF embebido */}
        <iframe
          src={pdfUrl}
          title="CV PDF"
          className="w-full h-full"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default PdfModal;
