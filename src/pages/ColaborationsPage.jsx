// src/pages/ColaborationsPage.jsx
// Página 2 — Colaboraciones con Marcas (mockups + insights).

import React, { useEffect } from "react";

// Imports locales de las imágenes utilizadas en la página:
// - Fotos del mock-up en iPhone.
// - Capturas de insights de cada colaboración.
import shopSollerPhoto from "../assets/jhulyana/colaboraciones/shop-soller.jpg";
import shopSollerInsights from "../assets/jhulyana/colaboraciones/shop-soller-insights.jpg";
import naturaeuropePhoto from "../assets/jhulyana/colaboraciones/naturaeurope.jpg";
import naturaeuropeInsights from "../assets/jhulyana/colaboraciones/naturaeurope-insights.jpg";
import thaisPhoto from "../assets/jhulyana/colaboraciones/thaisrodrigues.jpg";
import thaisInsights from "../assets/jhulyana/colaboraciones/thaisrodrigues-insights.jpg";

// Mock-up de iPhone (ratio 9:19 usando aspect-9/19)
// Muestra la publicación dentro de un marco que simula un iPhone.
// Añadimos un zoom/parallax sutil sobre la foto (no sobre el marco).
function IPhoneMock({ src, alt }) {
  return (
    <div
      className="relative w-full max-w-[340px] md:max-w-[380px] mx-auto"
      aria-label="Publicación renderizada dentro de un iPhone"
    >
      {/* Marco exterior del teléfono */}
      <div className="relative rounded-[3rem] bg-black p-2 shadow-xl ring-1 ring-black/10">
        {/* Borde interior suave del teléfono */}
        <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/10 pointer-events-none" />
        {/* `group` permite aplicar la animación solo a la imagen interna */}
        <div className="relative rounded-[2.6rem] overflow-hidden bg-black aspect-9/19 group">
          {/* Isla dinámica (notch) del iPhone */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-28 rounded-full bg-black ring-1 ring-white/10"
            aria-hidden="true"
          />
          {/* Imagen de la colaboración dentro del mock-up */
          /* La animación de zoom se aplica en hover/focus, pero siempre mantiene
   el encuadre completo gracias a `object-cover` y al contenedor fijo. */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover select-none transition-transform duration-300 ease-out transform-gpu will-change-transform group-hover:scale-110 focus-visible:scale-110"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Tarjeta de insights:
 * - En móvil **y también en pantallas medianas/grandes** usamos `object-contain`
 *   para que se vea la captura COMPLETA (sin recortar números ni gráficos).
 * - Lupa: hover (desktop), active (móvil) y focus-visible (teclado).
 * - Microinteracción extra: sombra suave al hacer zoom (hover/focus).
 */
function InsightCard({ src, alt }) {
  return (
    <div className="mt-3 rounded-xl overflow-hidden ring-1 ring-black/5 bg-white group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        tabIndex={0} /* accesible: permite focus con teclado */
        className="
          w-full h-152 md:h-176         /* alturas fijas para que todas las tarjetas se alineen */
          object-contain md:object-contain /* SIEMPRE imagen completa, en móvil y en md+ */
          transition-transform duration-300 ease-out
          transform-gpu will-change-transform
          group-hover:scale-110          /* lupa en desktop */
          active:scale-110               /* lupa al tocar en móvil */
          focus-visible:scale-110        /* lupa con teclado */
          group-hover:shadow-lg focus-visible:shadow-lg /* sombra sutil al interactuar */
          cursor-zoom-in select-none
        "
      />
    </div>
  );
}

// Componente principal de la página de colaboraciones.
// Muestra 3 colaboraciones con enlace, mock-up y tarjeta de insights.
export function ColaborationsPage() {
  // Configuración estática de las colaboraciones mostradas.
  const COLABS = [
    {
      handle: "@shop.soller",
      url: "https://www.instagram.com/p/C07Mo2NtnjR/?igsh=MTJwOGZ2ZXBkbTY2eQ==",
      photo: shopSollerPhoto,
      insights: shopSollerInsights,
      altPhoto: "Publicación de Jhulyana con Shop Soller (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Shop Soller.",
    },
    {
      handle: "@natura.europe",
      url: "https://www.instagram.com/p/DQXr4X9CEUp/?igsh=bjdrczhqM3RyMjg0",
      photo: naturaeuropePhoto,
      insights: naturaeuropeInsights,
      altPhoto: "Publicación de Jhulyana para Natura Europe (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Natura Europe.",
    },
    {
      handle: "@thaisrodrigues",
      url: "https://www.instagram.com/p/C_JOLz3t-I8/?igsh=MWZka3FvODMzbWRrNQ==",
      photo: thaisPhoto,
      insights: thaisInsights,
      altPhoto: "Publicación de Jhulyana con Thais Rodrigues (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Thais Rodrigues.",
    },
  ];

  // Tests mínimos en desarrollo para asegurar datos de colaboraciones.
  // Solo se ejecutan en entorno de navegador y modo desarrollo.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (import.meta.env.DEV) {
      console.group("ColaborationsPage::checks");
      console.assert(COLABS.length === 3, "Deben existir 3 colaboraciones");
      console.assert(
        COLABS.every((c) => !!c.photo && !!c.insights),
        "Cada colaboración debe tener photo e insights"
      );
      console.groupEnd();
    }
  }, []);

  return (
    <main className="font-body max-w-5xl mx-auto px-6 py-8">
      {/* Título principal de la sección de colaboraciones */}
      <h2
        className="font-display text-2xl md:text-3xl text-center mb-6"
        style={{ color: "var(--cherry)" }}
      >
        Colaboraciones con Marcas
      </h2>

      {/* Grid responsivo: 1 columna en móvil → 3 columnas en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {COLABS.map((c) => (
          <article key={c.handle} className="w-full">
            {/* Nombre/handle de la marca con enlace al post original */}
            <p
              className="text-base md:text-lg text-center mb-2"
              style={{ color: "var(--muted)" }}
            >
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:underline focus-visible:underline outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--muted)] rounded"
              >
                {c.handle}
              </a>
            </p>

            {/* Mock-up de la publicación en un iPhone con zoom sutil en la foto */}
            <IPhoneMock src={c.photo} alt={c.altPhoto} />

            {/* Tarjeta de insights con microinteracción de zoom + sombra */}
            <InsightCard src={c.insights} alt={c.altInsights} />
          </article>
        ))}
      </div>
    </main>
  );
}
