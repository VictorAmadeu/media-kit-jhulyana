// src/pages/PackagesPage.jsx
// Página 3 — Paquetes
// -----------------------------------------------------------------------------
// Objetivo: mostrar los paquetes de colaboración y un formulario de contacto
// conectado a Supabase para recibir propuestas de marcas.
// -----------------------------------------------------------------------------

import React, { useEffect, useMemo, useState } from "react";
import { Check, Loader2, Mail } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

// ───────────────────────────── Supabase Client ───────────────────────────────
// URL y clave pública de Supabase (se leen desde variables de entorno Vite).
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Logs útiles en desarrollo para verificar configuración (clave pública).
console.log("SUPABASE_URL:", SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY);

// Inicializa el cliente de Supabase con la URL y la clave anónima.
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ───────────────────────────── Datos de la página ────────────────────────────
// Paquetes y servicios adicionales definidos como arrays constantes.
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

// Redes sociales (actualmente sólo para posibles usos/contexto).
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/jhulyanafr?igsh=aHJ5ajJ0N3FwbzR5",
  tiktokPt: "http://www.tiktok.com/@jhulyanaf",
  tiktokEs: "http://www.tiktok.com/@jhulyanafr",
};

// ───────────────────────────── Helpers del formulario ───────────────────────
// Extrae un campo de texto de FormData y devuelve un string limpio.
const readTextField = (formData, name) => {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
};

// Componente principal de la página de paquetes.
export function PackagesPage() {
  // Estado para controlar el envío del formulario.
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [okMsg, setOkMsg] = useState(null);

  // Comprueba una vez si todas las URLs sociales están definidas.
  const hasSocialLinks = useMemo(
    () => Object.values(SOCIAL_LINKS).every((url) => Boolean(url)),
    []
  );

  // Tests mínimos en consola para asegurar que los datos están completos.
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

  // Envía la propuesta a la tabla "propuestas" en Supabase.
  // Devuelve true si la inserción se ha realizado correctamente.
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
      setErrorMsg(err?.message || "No se pudo enviar. Intenta de nuevo.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Render principal de la página (estructura visual y formulario).
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
            // Tarjeta visual de cada paquete con microinteracción:
            // se eleva ligeramente y gana sombra en hover/focus.
            className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-sm p-6 flex flex-col transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
            tabIndex={0} // Permite que la tarjeta reciba foco desde el teclado.
          >
            <header className="text-center">
              <h3
                className="font-body text-xs tracking-[0.12em] font-semibold"
                style={{ color: "var(--muted)" }}
              >
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
                  <Check
                    className="h-4 w-4 mt-0.5"
                    style={{ color: "var(--cherry)" }}
                  />
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
          {/* Campos básicos de contacto */}
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

          {/* Campo opcional de marca/empresa */}
          <input
            name="marca"
            placeholder="Marca / Empresa (opcional)"
            className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
            autoComplete="organization"
          />

          {/* Mensaje con detalles de la propuesta */}
          <textarea
            name="mensaje"
            required
            rows={5}
            placeholder="Cuéntame sobre el producto/servicio y lo que buscas"
            className="rounded-xl border border-black/10 bg-[--stone] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--cherry]"
          />

          {/* Botón de envío (icon-only) con feedback visual de carga */}
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
        </form>
      </section>
    </main>
  );
}
