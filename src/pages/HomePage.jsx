// src/pages/HomePage.jsx
// Página Home / Sobre Mí
// - Cumple con la guía de estilo (tipografías, cherry, beige, muted, ink)
// - Accesible (alt descriptivos, aria-label en botones/icon-only)
// - Rendimiento: imágenes con loading="lazy" y decoding="async"
// - Tailwind: variables CSS con sintaxis canónica (bg-[--...], text-[--...], etc.)

import React from "react";
import { Instagram } from "lucide-react";
import { TikTokIcon } from "../components/icons/TikTokIcon";

// Importa tus fotos locales (ajusta nombres si cambian)
import hero1 from "../assets/jhulyana/home/hero-1.jpg";
import hero2 from "../assets/jhulyana/home/hero-2.jpg";
import hero3 from "../assets/jhulyana/home/hero-3.jpg";

import style1 from "../assets/jhulyana/home/hero-4.jpg";
import style2 from "../assets/jhulyana/home/hero-5.jpg";
import style3 from "../assets/jhulyana/home/hero-6.jpg";

// Tarjeta simple para redes (icon-only + valor)
// Notas:
// - Enlaces externos en MISMA pestaña (convención del proyecto).
// - Usa currentColor en iconos para heredar color desde el contenedor.
const SocialCard = ({ href, icon, label, value }) => (
  <a
    href={href}
    aria-label={label}
    className="rounded-xl border border-black/5 bg-white p-3 text-center shadow-sm hover:bg-[--cherry] hover:text-white transition"
  >
    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[--beige] text-[--cherry]">
      {icon}
    </div>
    <div className="mt-2 text-base font-semibold">{value}</div>
    <div className="text-xs text-[--muted]">{label}</div>
  </a>
);

// Tarjeta de estadística (no clicable)
const Stat = ({ icon, label, value }) => (
  <div className="rounded-xl border border-black/5 bg-white p-3 text-center shadow-sm">
    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[--beige] text-[--cherry]">
      {icon}
    </div>
    <div className="mt-2 text-base font-semibold">{value}</div>
    <div className="text-xs text-[--muted]">{label}</div>
  </div>
);

export function HomePage({ social }) {
  const headerImages = [
    { src: hero1, alt: "Jhulyana — street fashion 1" },
    { src: hero2, alt: "Jhulyana — close-up rizos" },
    { src: hero3, alt: "Jhulyana — lifestyle Madrid" },
  ];

  return (
    <main className="font-body">
      {/* HERO — Mosaico 3 fotos */}
      <section className="grid grid-cols-3 gap-0">
        {headerImages.map(({ src, alt }, i) => (
          <div key={i} className="aspect-4/3 overflow-hidden">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 33vw, 33vw"
            />
          </div>
        ))}
      </section>

      {/* Identidad */}
      <section className="bg-white text-center py-8 px-6 shadow-sm">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight text-[--cherry]">
          Jhulyana Ferreira
        </h1>
        <p className="text-[--muted] text-base md:text-lg mt-2">
          Lifestyle, beauty and fashion
        </p>
        <p className="text-[--ink] text-sm md:text-base mt-1">
          Brasileña en Madrid <span className="hidden sm:inline">|</span>{" "}
          Especialista en Estilo y Cachos
        </p>

        {/* Hashtag en badge */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[--cherry] px-3 py-1 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-[--cherry]" />
          <span className="font-display text-[--cherry]">
            #ARMARIOSINPANTALONES
          </span>
        </div>
      </section>

      {/* Social cards */}
      <section className="mt-4 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <SocialCard
            href={social.tiktokPt.url}
            icon={<TikTokIcon className="h-5 w-5" />}
            label="TikTok (PT)"
            value={social.tiktokPt.followers}
          />
          <SocialCard
            href={social.instagram.url}
            icon={<Instagram className="h-5 w-5" aria-hidden="true" />}
            label="Instagram"
            value={social.instagram.followers}
          />
          <SocialCard
            href={social.tiktokEs.url}
            icon={<TikTokIcon className="h-5 w-5" />}
            label="TikTok (ES)"
            value={social.tiktokEs.followers}
          />
        </div>
      </section>

      {/* Sobre mí + Audiencia + Estilo + Destaques */}
      <section className="px-6 md:px-10 py-8">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8">
          {/* Sobre mí (columna izquierda) */}
          <div>
            <h2 className="font-display text-xl text-center text-[--cherry]">
              Sobre mí
            </h2>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              Soy Jhulyana, una creadora de contenido brasileña con el corazón
              en Madrid. Comparto mi lifestyle, mis viajes y parte de mi rutina
              en el aeropuerto. Es a través de la moda y la belleza donde
              expreso mi esencia.
            </p>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              Especializada en estilo femenino y como voz para la comunidad de
              cabello rizado, construyo una comunidad leal basada en
              autenticidad y elegancia atemporal con mi{" "}
              <strong>#ArmarioSinPantalones</strong>.
            </p>
            <p className="mt-2 text-sm md:text-base leading-relaxed">
              Mi misión es inspirar a mujeres a abrazar su estilo único y sus
              rizos con confianza.
            </p>
          </div>

          {/* Derecha: Audiencia + Estilo + Destaques */}
          <div>
            {/* Audiencia */}
            <h2 className="font-display text-xl text-center text-[--cherry]">
              Mi audiencia
            </h2>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                }
                label="Seguidores"
                value="61k+"
              />
              <Stat
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                }
                label="Localización"
                value="70% ES / 30% BR"
              />
              <Stat
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 100 14 7 7 0 000-14z" />
                  </svg>
                }
                label="Género"
                value="90% Mujeres"
              />
              <Stat
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="4 13 9 18 20 7" />
                  </svg>
                }
                label="Engagement"
                value="[tasa media]"
              />
            </div>

            {/* Mi estilo (3 imágenes cuadradas) */}
            <h3 className="mt-6 font-display text-lg text-center">Mi estilo</h3>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[style1, style2, style3].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl ring-1 ring-black/5"
                >
                  <img
                    src={src}
                    alt={`Mi estilo ${i + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 33vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Destaques */}
            <div className="md:col-span-2 flex justify-center">
              <div className="mt-6 rounded-xl border border-black/5 bg-white p-6 text-center shadow-sm max-w-2xl">
                <h3 className="font-display text-lg text-[--cherry]">
                  Destaques
                </h3>
                <ul className="mt-3 space-y-2 text-left inline-block text-sm md:text-base">
                  {[
                    "Comunidad fiel y de alto engagement",
                    "Nicho: estilo femenino y cuidado de cabello rizado",
                    "Contenido bilingüe (ES/PT) para mayor alcance",
                    "Viralización orgánica con +[número] de views",
                  ].map((txt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--cherry]" />
                      {txt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final (icon-only) */}
      <div className="px-6 md:px-10 pb-10 flex flex-col items-center gap-3">
        <a
          href="#contacto"
          aria-label="Ir al formulario de contacto"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[--cherry] text-white hover:opacity-90 transition"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 4h16v16H4z" />
          </svg>
        </a>
        <p className="text-sm text-[--muted]">
          ¿Interesado en una colaboración personalizada? ¡Hablemos!
        </p>
        <p className="text-xs text-[--muted]">TikTok e Instagram arriba</p>
      </div>
    </main>
  );
}
