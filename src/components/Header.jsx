// src/components/Header.jsx
import React from "react";

/**
 * Header global (accesible y listo para producción)
 * - Sticky + blur + borde inferior sutil
 * - Logo “JF” en círculo cereza
 * - Menú con 3 enlaces (por ahora <a>, luego migrará a <Link>)
 * - Accesibilidad: aria-label en el logo + sr-only con el nombre
 */
export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        {/* Logo JF */}
        <a href="/" aria-label="Inicio" className="flex items-center gap-2">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white font-display"
            style={{ background: "var(--cherry)" }}
          >
            JF
          </span>
          <span className="sr-only">Jhulyana Ferreira</span>
        </a>

        {/* Menú de navegación (se convertirá a <Link> cuando activemos Router) */}
        <nav className="flex items-center gap-6 text-sm font-body">
          <a href="/" className="hover:text-[--cherry]">
            Sobre Mí
          </a>
          <a href="/colaboraciones" className="hover:text-[--cherry]">
            Colaboraciones
          </a>
          <a href="/paquetes" className="hover:text-[--cherry]">
            Paquetes
          </a>
        </nav>
      </div>
    </header>
  );
}
