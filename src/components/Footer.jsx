// src/components/Footer.jsx
import React from "react";
import { Instagram } from "lucide-react";

/**
 * Icono TikTok (vector inline).
 * - Usa currentColor para heredar color (blanco al hover).
 * - Path compacto y ligero.
 */
const TikTokIcon = ({ className }) => (
  <svg
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    fill="currentColor"
  >
    {/* Forma estilizada del logotipo de TikTok */}
    <path d="M164.7 24h-28.4v118.6c0 25.2-20.5 45.7-45.7 45.7S45 167.8 45 142.6c0-25.2 20.5-45.7 45.6-45.7 2.6 0 5.2.2 7.7.6V71.6a74.6 74.6 0 0 0-7.7-.4C57.6 71.2 32 96.8 32 127.9c0 31.2 25.6 56.8 56.8 56.8s56.8-25.6 56.8-56.8V76.5c12.5 9.1 27.8 14.6 44.3 14.6V62.7c-22.9 0-41.2-18.6-41.2-41.3V24z" />
  </svg>
);

/**
 * Footer global
 * - Orden de iconos: TikTok (PT) → Instagram → TikTok (ES)
 * - Nombre levemente desplazado a la derecha (ml-3).
 * - Enlaces en MISMA pestaña.
 */
export function Footer({ instagramUrl, tiktokPtUrl, tiktokEsUrl }) {
  return (
    <footer className="mt-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-body">
        {/* Firma con leve desplazamiento */}
        <p className="text-sm ml-3">Jhulyana Ferreira</p>

        {/* Iconos (solo iconos) en el orden acordado */}
        <div className="flex items-center gap-3">
          {/* TikTok PT */}
          <a
            href={tiktokPtUrl}
            aria-label="TikTok (Portugués)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--stone] hover:bg-[--cherry] hover:text-white transition"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--stone] hover:bg-[--cherry] hover:text-white transition"
          >
            <Instagram className="h-5 w-5" />
          </a>

          {/* TikTok ES */}
          <a
            href={tiktokEsUrl}
            aria-label="TikTok (Español)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--stone] hover:bg-[--cherry] hover:text-white transition"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
