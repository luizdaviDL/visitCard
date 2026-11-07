
import React, { useState, useEffect } from 'react';

export const Modal = ({ isOpen, onClose, screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  if (!isOpen || !screenshots || screenshots.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? screenshots.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-7xl max-h-[95vh] p-4 sm:p-6 md:p-8 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold text-slate-800">
            Imagens do Projeto
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
            aria-label="Fechar modal"
          >
            <img
              src="/close.png"
              alt=""
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </button>
        </div>

        {/* Área de visualização */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden p-2 sm:p-4">
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="max-w-full max-h-[calc(95vh-180px)] object-contain rounded-md"
          />

          {/* Botão anterior */}
          {screenshots.length > 1 && (
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Imagem anterior"
            >
              &#10094;
            </button>
          )}

          {/* Botão próximo */}
          {screenshots.length > 1 && (
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Próxima imagem"
            >
              &#10095;
            </button>
          )}
        </div>

        {/* Contador */}
        <div className="text-center mt-4 text-sm sm:text-base text-gray-600">
          Imagem {currentIndex + 1} de {screenshots.length}
        </div>
      </div>
    </div>
  );
};
