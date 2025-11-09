// src/pages/PackagesPage.jsx
// Página 3 — Paquetes
// -----------------------------------------------------------------------------
// Objetivo: replicar la página de paquetes mostrada en las referencias visuales
// y en el fichero "media_kit_pagina_3_paquetes_v_5_fix_env_sin_import.jsx".
// Diferencias frente al mock TypeScript:
//   • Este proyecto usa React con JavaScript, por lo que eliminamos tipados.
//   • Conservamos los comentarios didácticos para facilitar el mantenimiento.
//   • Se mantiene la integración con Supabase para almacenar propuestas.
// -----------------------------------------------------------------------------
//
// ⚠️ Cambio solicitado por el usuario (EXCLUSIVO BOTÓN DEL FORMULARIO):
// - Actualizado SOLO el botón de envío del formulario para igualarlo al de "2.jsx":
//   • Fondo con variable CSS: bg-[var(--cherry)]
//   • Misma forma (redondo 48x48), color y dibujo (icono Mail / Loader2)
//   • Misma transición y estados de hover/disabled
//   • No se modifica ninguna otra parte del archivo
// -----------------------------------------------------------------------------

import React, { useEffect, useMemo, useState } from "react";
import { Check, Loader2, Mail } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// ───────────────────────────── Supabase Client ───────────────────────────────
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("SUPABASE_URL:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY);

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ───────────────────────────── Datos de la página ────────────────────────────
// Paquetes y servicios adicionales en arrays inmutables. Mantener texto y orden
// tal como aparecen en las capturas.
const PACKAGES = [
  {
    title: "Contenido para Feed",
    subtitle: "Básico (Marcas Pequeñas)",
    price: "€250 – €350",
    items: [
      "1 Publicación en Feed (Foto)",
      "1 Story destacando la colaboración",
    ],
  },
  {
    title: "Contenido en Movimiento",
    subtitle: "Dinámico (Más Popular)",
    price: "€400 – €550",
    items: [
      "1 Reel (IG) o 1 Video (TikTok)",
      "2 Stories mostrando el producto/experiencia",
    ],
  },
  {
    title: "Paquete Integral",
    subtitle: "Combo Completo",
    price: "€600 – €800",
    items: [
      "1 Foto para Feed",
      "1 Reel (IG y TikTok)",
      "3 Stories (hilo de la experiencia)",
    ],
  },
  {
    title: "Experiencia de Día Completo",
    subtitle: "Lujo (Marcas Premium)",
    price: "€1.000 – €1.500",
    items: [
      "Co-creación por 1 día (hasta 6h)",
      "2 Fotos para Feed",
      "2 Reels/Videos para TikTok",
      "5 Stories a lo largo del día",
      "Mención en bio 1 semana (si aplica)",
    ],
  },
];

const ADDONS = [
  { label: "Historia Destacada (Highlight)", price: "+€50" },
  { label: "Contenido Extra para la Marca (foto o video)", price: "+€100" },
];

// Redes sociales (se usan para tests internos y posibles enlaces contextuales).
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/jhulyanafr?igsh=aHJ5ajJ0N3FwbzR5",
  tiktokPt: "http://www.tiktok.com/@jhulyanaf",
  tiktokEs: "http://www.tiktok.com/@jhulyanafr",
};

// ───────────────────────────── Helpers del formulario ───────────────────────
// Convierte FormDataEntryValue a string limpio (trim). Si no existe, devuelve "".
const readTextField = (formData, name) => {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
};

export function PackagesPage() {
  // Estado de la petición a Supabase.
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [okMsg, setOkMsg] = useState(null);

  // Memoriza si los datos mínimos de redes están configurados.
  const hasSocialLinks = useMemo(
    () => Object.values(SOCIAL_LINKS).every((url) => Boolean(url)),
    []
  );

  // Test rápidos en consola para asegurar que mantenemos la estructura.
  useEffect(() => {
    if (typeof window === "undefined") return; // Evita ejecutar en SSR
    console.group("PackagesPage::checks");
    console.assert(
      PACKAGES.length === 4,
      "Deben existir 4 paquetes de referencia"
    );
    console.assert(
      ADDONS.length >= 2,
      "Se esperan al menos 2 servicios adicionales"
    );
    console.assert(
      hasSocialLinks,
      "Las URLs de redes sociales deben estar definidas"
    );
    console.groupEnd();
  }, [hasSocialLinks]);

  // Envía la propuesta a Supabase. Devuelve true si todo fue bien.
  const submitToSupabase = async (payload) => {
    if (!supabase) {
      console.error(
        "Supabase no está configurado. Revisa las variables de entorno expuestas al navegador."
      );
      setErrorMsg(
        "Servicio de almacenamiento no configurado. Contacta con el equipo técnico."
      );
      return false;
    }
    setErrorMsg(null);
    setOkMsg(null);
    setLoading(true);

    try {
      const { error } = await supabase.from("propuestas").insert({
        nombre: payload.nombre,
        email: payload.email,
        marca: payload.marca || null,
        mensaje: payload.mensaje,
        origen: "pagina_paquetes",
      });

      if (error) throw error;

      setOkMsg("¡Gracias! Tu mensaje fue enviado.");
      return true;
    } catch (err) {
      // Mostramos un mensaje genérico si no hay detalle disponible.
      setErrorMsg(err?.message || "No se pudo enviar. Intenta de nuevo.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Render principal con estructura idéntica al mock proporcionado.
  return (
    <main className="font-body mx-auto max-w-5xl px-4 py-10">
      {/* Cabecera textual (título + explicación) */}
      <h2
        className="font-display text-2xl md:text-4xl text-center"
        style={{ color: "var(--cherry)" }}
      >
        Paquetes de Colaboración
      </h2>
      <p className="mt-2 text-center text-sm md:text-base text-[--muted]">
        Ofrezco diferentes opciones para adaptarme a los objetivos de tu marca.
        Todos los paquetes incluyen revisión y aprobación del contenido, y
        derechos de uso para la marca por 12 meses.
      </p>

      {/* Listado de paquetes (grid responsive 1 → 4 columnas) */}
      <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PACKAGES.map((pkg) => (
          <article
            key={pkg.title}
            className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 flex flex-col"
          >
            <header className="text-center">
              <h3 className="font-body text-xs tracking-[0.12em] font-semibold text-[--muted]">
                {pkg.subtitle}
              </h3>
              <h4 className="mt-1 font-display text-xl text-[--ink]">
                {pkg.title}
              </h4>
              <div
                className="mt-3 border-t border-black/10"
                aria-hidden="true"
              />
              <div
                className="mt-4 font-body text-3xl"
                style={{
                  color: "var(--ink)",
                  fontVariantNumeric: "tabular-nums lining-nums",
                }}
              >
                {pkg.price}
              </div>
            </header>

            <ul className="mt-4 space-y-2 text-sm text-[--ink]">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 text-[--cherry]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Servicios adicionales (bloque independiente) */}
      <section className="mt-10 rounded-2xl bg-white ring-1 ring-black/5 p-6">
        <h3
          className="font-display text-lg text-center"
          style={{ color: "var(--cherry)" }}
        >
          Servicios Adicionales
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {ADDONS.map((addon) => (
            <li
              key={addon.label}
              className="flex items-center justify-between rounded-xl border border-black/5 bg-[--stone] px-4 py-3"
            >
              <span className="text-sm md:text-base">{addon.label}</span>
              <span
                className="font-body"
                style={{ fontVariantNumeric: "tabular-nums lining-nums" }}
              >
                {addon.price}
              </span>
            </li>
          ))}
        </ul>
        <p
          className="mt-4 text-xs text-[--muted] text-center"
          style={{ color: "var(--muted)" }}
        >
          ¿Tienes una idea diferente? ¡Hablemos y creemos un paquete
          personalizado!
        </p>
      </section>

      {/* Formulario de contacto para propuestas */}
      <section
        id="contacto-paquetes"
        className="mt-10 rounded-2xl bg-white ring-1 ring-black/5 p-6"
      >
        <h3
          className="font-display text-lg text-center"
          style={{ color: "var(--cherry)" }}
        >
          Envíame tu propuesta
        </h3>
        <form
          className="mt-4 grid gap-4"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const formData = new FormData(form);
            const payload = {
              nombre: readTextField(formData, "nombre"),
              email: readTextField(formData, "email"),
              marca: readTextField(formData, "marca"),
              mensaje: readTextField(formData, "mensaje"),
            };

            const success = await submitToSupabase(payload);
            if (success) {
              form.reset();
            }
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="nombre"
              required
              placeholder="Tu nombre"
              className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email de contacto"
              className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
              autoComplete="email"
            />
          </div>
          <input
            name="marca"
            placeholder="Marca / Empresa (opcional)"
            className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
            autoComplete="organization"
          />
          <textarea
            name="mensaje"
            required
            rows={5}
            placeholder="Cuéntame sobre el producto/servicio y lo que buscas"
            className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
          />

          {/* ─────────────────────── BOTÓN (VISUAL) — ÚNICO CAMBIO ───────────────────────
              Igual que en 2.jsx: botón redondo 48x48, fondo cereza con var(...),
              icono Mail por defecto y Loader2 girando cuando loading=true.
              (No se toca lógica ni resto de estilos/componentes) */}
          <div className="flex flex-col items-center gap-2">
            <button
              type="submit"
              aria-label="Enviar propuesta"
              disabled={loading}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cherry)] text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Mail className="h-5 w-5" />
              )}
            </button>
            {okMsg && <p className="text-xs text-green-600">{okMsg}</p>}
            {errorMsg && <p className="text-xs text-red-600">{errorMsg}</p>}
          </div>
          {/* ─────────────────────────────────────────────────────────────────────────── */}
        </form>
      </section>
    </main>
  );
}
