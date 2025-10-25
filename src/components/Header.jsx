// src/components/Header.jsx
// Header global accesible y listo para producción.
// - Sticky con blur y borde inferior sutil.
// - Logo “JF” en círculo cereza (usa bg-[--cherry]).
// - Menú con 3 enlaces (<a> por ahora; luego <Link> + HashRouter).
// - Accesibilidad: aria-label en el logo, sr-only, y focus-visible rings.
// - Variables CSS con sintaxis canónica Tailwind: text-[--cherry], ring-[--cherry], etc.

import React from "react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        {/* Logo JF (enlace a Inicio) */}
        <a
          href="/"
          aria-label="Ir al inicio"
          className="flex items-center gap-2 rounded-full
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white font-display bg-[--cherry]"
            aria-hidden="true"
          >
            JF
          </span>
          <span className="sr-only">Jhulyana Ferreira</span>
        </a>

        {/* Menú de navegación (migrará a <Link> cuando activemos Router/HashRouter) */}
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
