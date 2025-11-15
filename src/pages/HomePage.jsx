// src/pages/HomePage.jsx
// Página Home / Sobre Mí del media kit de Jhulyana.

import React from "react";
import {
  Instagram,
  MapPin,
  MessageCircle,
  UserRound,
  Venus,
} from "lucide-react";
import { TikTokIcon } from "../components/icons/TikTokIcon";
// Indicador de scroll que anima al usuario a bajar hacia "Sobre mí"
import ScrollIndicator from "../components/ScrollIndicator";
// Barra flotante de redes sociales (solo en pantallas grandes)
import { FloatingSocialBar } from "../components/FloatingSocialBar";
// Enlace con scroll suave para anchors internos (#section)
import SmoothScrollLink from "../components/SmoothScrollLink";

// Importa tus fotos locales (mosaico principal del HERO)
import hero1 from "../assets/jhulyana/home/hero-1.jpg";
import hero2 from "../assets/jhulyana/home/hero-2.jpg";
import hero3 from "../assets/jhulyana/home/hero-3.jpg";

// Importa las fotos de la sección "Mi estilo"
import style1 from "../assets/jhulyana/home/hero-4.jpg";
import style2 from "../assets/jhulyana/home/hero-5.jpg";
import style3 from "../assets/jhulyana/home/hero-6.jpg";

// Tarjeta simple para redes (icon-only + valor).
// Se utiliza para mostrar TikTok PT, Instagram y TikTok ES.
const SocialCard = ({ href, icon, label, value }) => (
  <a
    href={href}
    aria-label={label}
    className="rounded-xl border border-black/5 bg-white p-3 text-center shadow-sm hover:bg-[--cherry] hover:text-white transition"
  >
    <div
      className="mx-auto flex h-10 w-10 items-center justify-center rounded-full"
      style={{ backgroundColor: "var(--beige)", color: "var(--cherry)" }}
    >
      {icon}
    </div>
    <div className="mt-2 text-base font-semibold">{value}</div>
    <div className="text-xs text-[--muted]">{label}</div>
  </a>
);

// Tarjeta de estadística (no clicable).
// Se usa para mostrar datos de audiencia: seguidores, localización, género, engagement.
const Stat = ({ icon, label, value }) => (
  <div className="rounded-xl border border-black/5 bg-white p-3 text-center shadow-sm">
    <div
      className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
      style={{ backgroundColor: "var(--beige)", color: "var(--cherry)" }}
    >
      {icon}
    </div>
    <div className="mt-2 text-base font-semibold">{value}</div>
    <div className="text-xs text-[--muted]">{label}</div>
  </div>
);

// Componente principal de la Home / Sobre Mí.
// Recibe por props el objeto `social` con las URLs y los contadores de seguidores.
export function HomePage({ social }) {
  // Array con las imágenes del mosaico superior (HERO).
  const headerImages = [
    { src: hero1, alt: "Jhulyana — street fashion 1" },
    { src: hero2, alt: "Jhulyana — close-up rizos" },
    { src: hero3, alt: "Jhulyana — lifestyle Madrid" },
  ];

  return (
    <main className="font-body px-4 md:px-6">
      {/* Barra flotante de redes (solo visible en pantallas grandes) */}
      <FloatingSocialBar social={social} />

      {/* CONTENEDOR (tarjeta blanca principal del media kit) */}
      <div className="mx-auto mt-4 md:mt-6 max-w-5xl xl:max-w-7xl 2xl:max-w-[84rem] bg-white rounded-3xl shadow-sm ring-1 ring-black/5 overflow-hidden">
        {/* HERO — Mosaico 3 fotos + indicador de scroll */}
        {/* `relative` permite posicionar el ScrollIndicator de forma absoluta dentro de esta sección */}
        <section className="relative">
          <div className="grid grid-cols-3 gap-0">
            {headerImages.map(({ src, alt }, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover object-bottom"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Indicador de scroll que invita a bajar hasta la sección "Sobre mí" */}
          <ScrollIndicator />
        </section>

        {/* Identidad (nombre, tagline y hashtag principal) */}
        <section className="bg-white text-center py-8 px-6 shadow-sm">
          {/* Nombre principal de Jhulyana */}
          <h1
            className="font-display font-bold text-5xl md:text-6xl leading-tight"
            style={{ color: "var(--cherry)" }}
          >
            Jhulyana Ferreira
          </h1>

          {/* Tagline descriptivo del tipo de contenido */}
          <p
            className="mt-2 text-lg md:text-xl font-medium tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            Lifestyle, beauty and fashion
          </p>

          {/* Subtagline con ubicación y especialidad */}
          <p className="mt-1 text-[--ink] text-base md:text-lg font-medium">
            Brasileña en Madrid <span className="hidden sm:inline">|</span>{" "}
            Especialista en Estilo y Cachos
          </p>

          {/* Hashtag de marca #ARMARIOSINPANTALONES */}
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[--cherry] px-4 py-2 text-sm shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-[--cherry]" />
            <span
              className="uppercase font-semibold tracking-wide"
              style={{ color: "var(--cherry)" }}
            >
              #ARMARIOSINPANTALONES
            </span>
          </div>
        </section>

        {/* Social cards (resumen rápido de redes y seguidores) */}
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
        {/* id="about-section" lo usa ScrollIndicator para hacer scroll suave hasta aquí */}
        <section id="about-section" className="px-6 md:px-10 py-8">
          <div className="grid md:grid-cols-[2fr_3fr] gap-8">
            {/* Columna izquierda: texto "Sobre mí" */}
            <div>
              <h2
                className="font-display text-xl text-center"
                style={{ color: "var(--cherry)" }}
              >
                Sobre mí
              </h2>
              <p className="mt-2 text-sm md:text-base leading-relaxed">
                Soy Jhulyana, una creadora de contenido brasileña con el corazón
                en Madrid. Comparto mi lifestyle, mis viajes y parte de mi
                rutina en el aeropuerto. Es a través de la moda y la belleza
                donde expreso mi esencia.
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

            {/* Columna derecha: Audiencia + Mi estilo */}
            <div>
              {/* Módulo de audiencia con 4 estadísticas clave */}
              <h2
                className="font-display text-xl text-center"
                style={{ color: "var(--cherry)" }}
              >
                Mi audiencia
              </h2>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat
                  icon={<UserRound className="h-6 w-6" aria-hidden="true" />}
                  label="Seguidores"
                  value="61k+"
                />
                <Stat
                  icon={<MapPin className="h-6 w-6" aria-hidden="true" />}
                  label="Localización"
                  value="70% ES / 30% BR"
                />
                <Stat
                  icon={<Venus className="h-6 w-6" aria-hidden="true" />}
                  label="Género"
                  value="90% Mujeres"
                />
                <Stat
                  icon={
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                  }
                  label="Engagement"
                  value="8,9%"
                />
              </div>

              {/* Grid de 3 imágenes que muestran el estilo visual de Jhulyana */}
              <h3 className="mt-6 font-display text-lg text-center">
                Mi estilo
              </h3>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[style1, style2, style3].map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-xl ring-1 ring-black/5"
                  >
                    <img
                      src={src}
                      alt={`Mi estilo ${i + 1}`}
                      className="h-full w-full object-cover object-bottom"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 33vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bloque de destaques (puntos fuertes para marcas) */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-3xl rounded-2xl border border-black/5 bg-white px-8 py-6 text-center shadow-md">
              <h3 className="font-display text-2xl font-semibold tracking-wide text-[#d11c6b]">
                Destaques
              </h3>
              <ul className="mt-4 space-y-3 text-left text-base md:text-lg">
                {[
                  "Comunidad fiel y de alto engagement",
                  "Nicho único: estilo femenino y cuidado de cabello rizado",
                  "Contenido bilingüe (ES/PT) para mayor alcance",
                  "12-15mil visualizaciones orgánicas diarias en stories",
                ].map((txt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-medium text-[#2f2f37]"
                  >
                    <span className="mt-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#d11c6b]" />
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA final (icon-only) que lleva al formulario de contacto mediante scroll suave */}
        <div className="px-6 md:px-10 pb-10 flex flex-col items-center gap-3">
          <SmoothScrollLink
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
          </SmoothScrollLink>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            ¿Interesado en una colaboración personalizada? ¡Hablemos!
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Mis redes sociales están disponibles aquí.
          </p>
        </div>
      </div>
    </main>
  );
}
