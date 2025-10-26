// src/components/Header.jsx
// Header accesible listo para prod.
// - Sticky con blur y borde inferior sutil.
// - Logo “JF” en círculo cereza (bg-[var(--cherry)]).
// - Corrección SOLO en pantallas grandes: añadimos padding lateral para
//   meter ligeramente el logo hacia la derecha y el menú hacia la izquierda.
//   En móvil/tablet NO se toca (cambios con prefijo lg:).

import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5">
      {/*
        Base (mobile/tablet): centrado con ancho máximo.
        En pantallas grandes:
        - lg:max-w-none + lg:w-full → contenedor se estira a todo el viewport.
        - lg:px-8 xl:px-12 2xl:px-16 → un “acolchado” sutil en los lados.
        Resultado: JF un poco más a la derecha y enlaces un poco más a la izquierda.
      */}
      <div className="mx-auto max-w-5xl w-full px-4 py-3 flex items-center justify-between lg:max-w-none lg:w-full lg:px-8 xl:px-12 2xl:px-16">
        {/* Logo JF (enlace a Inicio) */}
        <a
          href="/"
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
        </a>

        {/* Menú de navegación */}
        <nav
          className="flex items-center gap-6 text-sm font-body"
          aria-label="Navegación principal"
        >
          <a
            href="/"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Sobre Mí
          </a>
          <a
            href="/colaboraciones"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Colaboraciones
          </a>
          <a
            href="/paquetes"
            className="rounded transition hover:text-[--cherry]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Paquetes
          </a>
        </nav>
      </div>
    </header>
  );
}
