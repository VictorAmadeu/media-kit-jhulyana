// src/components/ScrollIndicator.jsx
// Pequeño botón flotante que invita a hacer scroll hacia la sección "Sobre mí".

import React from "react";

export default function ScrollIndicator() {
  // Maneja el click en el botón del indicador.
  // Busca el elemento con id="about-section" y hace scroll suave hasta él.
  const handleClick = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      aria-label="Desplazar hacia la sección Sobre mí"
      onClick={handleClick}
      className="absolute left-1/2 bottom-6 -translate-x-1/2 p-2 animate-bounce text-[var(--cherry)]"
    >
      {/* Icono de flecha hacia abajo (decorativo) */}
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
