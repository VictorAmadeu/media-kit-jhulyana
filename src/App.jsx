// src/App.jsx
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

/**
 * App raíz de la SPA (sin router aún).
 * - Integra los componentes globales: Header y Footer.
 * - Define las URLs oficiales de redes para pasarlas al Footer.
 * - Estructura semántica con <main> y layout de altura completa.
 *
 * NOTA DE PRODUCCIÓN:
 * - No importamos App.css ni assets de la plantilla Vite (ya no se usan).
 * - Usamos variables CSS definidas en :root (Etapa 1) mediante clases canónicas
 *   de Tailwind con custom properties: bg-[--beige], text-[--ink].
 * - El contenido de las páginas se añadirá aquí en Etapas siguientes.
 */
function App() {
  // Datos oficiales de redes (también se usarán en la página "Sobre Mí")
  const SOCIAL = {
    instagram: {
      url: "https://www.instagram.com/jhulyanafr?igsh=aHJ5ajJ0N3FwbzR5",
      followers: "61k+",
    },
    tiktokPt: {
      url: "https://www.tiktok.com/@jhulyanaf",
      followers: "88k+",
    },
    tiktokEs: {
      url: "https://www.tiktok.com/@jhulyanafr",
      followers: "8k+",
    },
  };

  return (
    // Layout a pantalla completa: Header fijo, contenido flexible y Footer al final
    <div className="min-h-screen w-full flex flex-col bg-[--beige] text-[--ink]">
      {/* Cabecera global (sticky con blur y borde sutil) */}
      <Header />

      {/* Contenido principal. Aquí montaremos las secciones de cada página:
         - /  (Sobre Mí / Home)
         - /colaboraciones
         - /paquetes
         Más adelante migraremos a <Routes> cuando activemos HashRouter. */}
      <main id="content" className="flex-1">
        {/* TODO (Etapas siguientes): insertar secciones/containers de cada página */}
      </main>

      {/* Pie global: nombre desplazado y orden de iconos (TT-PT → IG → TT-ES) */}
      <Footer
        instagramUrl={SOCIAL.instagram.url}
        tiktokPtUrl={SOCIAL.tiktokPt.url}
        tiktokEsUrl={SOCIAL.tiktokEs.url}
      />
    </div>
  );
}

export default App;
