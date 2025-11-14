// src/components/FloatingSocialBar.jsx
// Barra flotante de redes sociales (solo en pantallas grandes).
// Muestra accesos directos a Instagram y TikTok en el lateral derecho.
//
// - Se posiciona fija en el viewport: fixed top-1/3 right-2.
// - Solo aparece en pantallas grandes: hidden en móvil, flex en lg+.
// - Cada icono es un botón redondo con microinteracción al hacer hover.

import React from "react";
import { Instagram } from "lucide-react";
import { TikTokIcon } from "./icons/TikTokIcon";

export function FloatingSocialBar({ social }) {
  return (
    <aside
      className="
        hidden lg:flex              /* Oculta en móvil/tablet, visible en lg+ */
        flex-col items-center
        fixed top-1/3 right-2       /* Posiciona la barra flotando en el lateral */
        z-40
        space-y-4
      "
      aria-label="Redes sociales de Jhulyana"
    >
      {/* TikTok (PT) */}
      <a
        href={social.tiktokPt.url}
        aria-label="TikTok (PT)"
        className="
          p-3 rounded-full
          bg-white text-[--ink]
          shadow-sm ring-1 ring-black/10
          hover:bg-[var(--cherry)] hover:text-white
          transition transform hover:-translate-y-0.5
        "
      >
        <TikTokIcon className="h-5 w-5" />
      </a>

      {/* Instagram */}
      <a
        href={social.instagram.url}
        aria-label="Instagram"
        className="
          p-3 rounded-full
          bg-white text-[--ink]
          shadow-sm ring-1 ring-black/10
          hover:bg-[var(--cherry)] hover:text-white
          transition transform hover:-translate-y-0.5
        "
      >
        <Instagram className="h-5 w-5" aria-hidden="true" />
      </a>

      {/* TikTok (ES) */}
      <a
        href={social.tiktokEs.url}
        aria-label="TikTok (ES)"
        className="
          p-3 rounded-full
          bg-white text-[--ink]
          shadow-sm ring-1 ring-black/10
          hover:bg-[var(--cherry)] hover:text-white
          transition transform hover:-translate-y-0.5
        "
      >
        <TikTokIcon className="h-5 w-5" />
      </a>
    </aside>
  );
}
