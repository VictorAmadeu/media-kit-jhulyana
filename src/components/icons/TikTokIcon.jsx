// src/components/icons/TikTokIcon.jsx
// Componente único del icono de TikTok para reutilizar en todo el proyecto.
// Ventajas:
// - Un solo origen de verdad (evita duplicidades y errores).
// - Usa "currentColor" para heredar el color del contexto (hover blanco, color cereza, etc.)
// - viewBox 256x256 (estándar en muchos sets de iconos), ligero y fiable.

import React from "react";

/**
 * Icono TikTok
 * @param {string} className - Clases Tailwind (tamaño, etc.). Por defecto "h-5 w-5".
 * @returns SVG accesible (aria-hidden para icon-only; el enlace padre debe llevar aria-label).
 */
export const TikTokIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true" // El enlace que contiene este icono debe aportar el aria-label
    viewBox="0 0 256 256"
    className={className}
    fill="currentColor" // Hereda color del contenedor (cereza/white en hover)
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    {/* Trazado compacto inspirado en el logotipo de TikTok (uso de marca no comercial) */}
    <path d="M164.7 24h-28.4v118.6c0 25.2-20.5 45.7-45.7 45.7S45 167.8 45 142.6c0-25.2 20.5-45.7 45.6-45.7 2.6 0 5.2.2 7.7.6V71.6a74.6 74.6 0 0 0-7.7-.4C57.6 71.2 32 96.8 32 127.9c0 31.2 25.6 56.8 56.8 56.8s56.8-25.6 56.8-56.8V76.5c12.5 9.1 27.8 14.6 44.3 14.6V62.7c-22.9 0-41.2-18.6-41.2-41.3V24z" />
  </svg>
);
