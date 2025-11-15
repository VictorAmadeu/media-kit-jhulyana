// src/components/Header.jsx

// Importa React para definir el componente de cabecera
import React from "react";
// Importa Link para tener navegación interna sin recargar la página (SPA)
import { Link } from "react-router-dom";

export function Header() {
  return (
    // Cabecera fija con fondo semitransparente, blur y borde inferior sutil
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5">
      {/* Contenedor que alinea logo y menú, con padding extra en pantallas grandes */}
      <div className="mx-auto max-w-5xl w-full px-4 py-3 flex items-center justify-between lg:max-w-none lg:w-full lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo JF (se mantiene EXACTAMENTE igual que en tu versión) */}
        <Link
          to="/"
          aria-label="Ir al inicio"
          className="flex items-center gap-2 rounded-full
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white font-display bg-[var(--cherry)]"
            aria-hidden="true"
          >
            JF
          </span>
          <span className="sr-only">Jhulyana Ferreira</span>
        </Link>

        {/* Menú de navegación principal (usa Link para cambiar de ruta sin recargar la página) */}
        <nav
          className="flex items-center gap-6 text-sm font-body"
          aria-label="Navegación principal"
        >
          {/* Ruta Home / Sobre Mí */}
          <Link
            to="/"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Sobre Mí
          </Link>

          {/* Ruta Colaboraciones */}
          <Link
            to="/colaboraciones"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Colaboraciones
          </Link>

          {/* Ruta Paquetes */}
          <Link
            to="/paquetes"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Paquetes
          </Link>
        </nav>
      </div>
    </header>
  );
}
