// src/pages/ColaborationsPage.jsx
import React, { useEffect } from "react";

/**
 * Página 2 — Colaboraciones con Marcas
 * Corrección (solo responsividad móvil):
 *  - Insights completos en pantallas pequeñas (object-contain SOLO en móvil).
 *  - Lupa también en móvil (active) y accesible por teclado (focus-visible).
 *  - No se tocan tamaños (tus alturas se mantienen).
 *  - iPhone: sin cambios de tamaño (ya ajustado previamente).
 */

// 🖼️ Imports locales (6 imágenes)
import shopSollerPhoto from "../assets/jhulyana/colaboraciones/shop-soller.jpg";
import shopSollerInsights from "../assets/jhulyana/colaboraciones/shop-soller-insights.jpg";
import naturaeuropePhoto from "../assets/jhulyana/colaboraciones/naturaeurope.jpg";
import naturaeuropeInsights from "../assets/jhulyana/colaboraciones/naturaeurope-insights.jpg";
import thaisPhoto from "../assets/jhulyana/colaboraciones/thaisrodrigues.jpg";
import thaisInsights from "../assets/jhulyana/colaboraciones/thaisrodrigues-insights.jpg";

/** Mock-up de iPhone (ratio 9:19, Tailwind v4 con aspect-9/19) */
function IPhoneMock({ src, alt }) {
  return (
    <div
      // Mantengo el tamaño que definiste (NO modificado)
      className="relative w-full max-w-[340px] md:max-w-[380px] mx-auto"
      aria-label="Publicación renderizada dentro de un iPhone"
    >
      <div className="relative rounded-[3rem] bg-black p-2 shadow-xl ring-1 ring-black/10">
        <div className="absolute inset-0 rounded-[3rem] ring-1 ring-white/10 pointer-events-none" />
        <div className="relative rounded-[2.6rem] overflow-hidden bg-black aspect-9/19">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-2 h-4 w-28 rounded-full bg-black ring-1 ring-white/10"
            aria-hidden="true"
          />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover select-none"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Tarjeta de insights:
 * - En móvil: object-contain (para ver la imagen ENTERA sin recortes).
 * - En md+: volvemos a object-cover (look lleno como tenías).
 * - Lupa: hover (desktop), active (móvil) y focus-visible (teclado).
 * - ⚠️ NO cambio tus alturas (h-152 / md:h-176) como pediste.
 */
function InsightCard({ src, alt }) {
  return (
    <div className="mt-3 rounded-xl overflow-hidden ring-1 ring-black/5 bg-white group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        tabIndex={0} /* accesible: permite focus para teclado */
        className="
          w-full h-152 md:h-176         /* tamaños originales: NO tocar */
          object-contain md:object-cover /* móvil: entero; md+: look lleno */
          transition-transform duration-300 ease-out
          transform-gpu will-change-transform
          group-hover:scale-110          /* lupa en desktop */
          active:scale-110               /* lupa al tocar en móvil */
          focus-visible:scale-110        /* lupa con teclado */
          cursor-zoom-in select-none
        "
      />
    </div>
  );
}

export function ColaborationsPage() {
  const COLABS = [
    {
      handle: "@shop.soller",
      photo: shopSollerPhoto,
      insights: shopSollerInsights,
      altPhoto: "Publicación de Jhulyana con Shop Soller (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Shop Soller.",
    },
    {
      handle: "@natura.europe",
      photo: naturaeuropePhoto,
      insights: naturaeuropeInsights,
      altPhoto: "Publicación de Jhulyana para Natura Europe (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Natura Europe.",
    },
    {
      handle: "@thaisrodrigues",
      photo: thaisPhoto,
      insights: thaisInsights,
      altPhoto: "Publicación de Jhulyana con Thais Rodrigues (mock-up iPhone).",
      altInsights: "Print de insights de la colaboración con Thais Rodrigues.",
    },
  ];

  // Tests mínimos (solo en desarrollo)
  useEffect(() => {
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
      <h2
        className="font-display text-2xl md:text-3xl text-center mb-6"
        style={{ color: "var(--cherry)" }}
      >
        Colaboraciones con Marcas
      </h2>

      {/* 1 columna (móvil) → 3 columnas (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {COLABS.map((c) => (
          <article key={c.handle} className="w-full">
            <p
              className="text-base md:text-lg text-center mb-2"
              style={{ color: "var(--muted)" }}
            >
              {c.handle}
            </p>

            <IPhoneMock src={c.photo} alt={c.altPhoto} />
            <InsightCard src={c.insights} alt={c.altInsights} />
          </article>
        ))}
      </div>
    </main>
  );
}
