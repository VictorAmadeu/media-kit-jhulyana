// src/components/Footer.jsx
// Footer global de producción.
// - Orden de iconos: TikTok (PT) → Instagram → TikTok (ES)
// - Enlaces en la MISMA pestaña (requisito del proyecto).
// - Accesibilidad: aria-label en icon-only + focus-visible rings.
// - Branding: uso CONSISTENTE de variables CSS con sintaxis canónica Tailwind:
//     bg-[--stone], text-[--cherry], hover:bg-[--cherry], ring-[--cherry], etc.

import React from "react";
import { Instagram } from "lucide-react";
import { TikTokIcon } from "./icons/TikTokIcon"; // icono centralizado

/**
 * Footer
 * @param {string} instagramUrl - URL del perfil de Instagram
 * @param {string} tiktokPtUrl  - URL del TikTok (PT)
 * @param {string} tiktokEsUrl  - URL del TikTok (ES)
 */
export function Footer({ instagramUrl, tiktokPtUrl, tiktokEsUrl }) {
  return (
    <footer className="mt-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body">
        {/* Firma con leve desplazamiento a la derecha (según guía) */}
        <p className="text-sm ml-3">Jhulyana Ferreira</p>

        {/* Iconos (solo iconos) en el orden acordado */}
        <div className="flex items-center gap-3">
          {/* TikTok PT */}
          <a
            href={tiktokPtUrl}
            aria-label="TikTok (Portugués)"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--stone] text-[--ink] transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                       hover:bg-[--cherry] hover:text-white"
            // Sin target="_blank": abrir en la MISMA pestaña (convención del proyecto)
          >
            <TikTokIcon className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            aria-label="Instagram"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--stone] text-[--ink] transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                       hover:bg-[--cherry] hover:text-white"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>

          {/* TikTok ES */}
          <a
            href={tiktokEsUrl}
            aria-label="TikTok (Español)"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--stone] text-[--ink] transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--cherry] focus-visible:ring-offset-2 focus-visible:ring-offset-white
                       hover:bg-[--cherry] hover:text-white"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
