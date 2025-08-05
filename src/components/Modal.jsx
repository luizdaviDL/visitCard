import React, { useState, useEffect } from 'react';

export const Modal = ({ isOpen, onClose, screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  if (!isOpen || !screenshots || screenshots.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-white rounded-lg w-full max-w-md p-4 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
        >
          <img src="/close.png" alt="Fechar"  style={{marginRight:"2rem", marginTop:"1rem", width:"1.5rem"}}/>
        </button>
        <h2 className="text-xl font-semibold mb-4 text-center">Imagens do Projeto</h2>

        <div className="relative">
          <img
            src={screenshots[currentIndex]}
            alt={`Screenshot ${currentIndex + 1}`}
            className="rounded w-full h-auto max-h-[400px] object-contain"
          />

          {/* Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded-full hover:bg-black/50"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 text-white px-2 py-1 rounded-full hover:bg-black/50"
          >
            ▶
          </button>
        </div>

        <div className="text-center mt-2 text-sm text-gray-600">
          {currentIndex + 1} / {screenshots.length}
        </div>
      </div>
    </div>
  );
};
