// src/App.jsx
// App raíz de la SPA (aún sin router; se añadirá HashRouter en la etapa de routing).
// - Integra los componentes globales: Header y Footer.
// - MODO PRUEBAS ETAPA 6: renderiza <PackagesPage /> para testear el formulario.
// - Semántica: evitamos anidar <main> aquí porque cada página ya expone su propio <main>.
// - Branding: fondo beige y texto ink vía custom properties (Tailwind).

import React from "react";
import "./App.css"; // Resets del template de Vite (#root 100% alto, etc.)
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// ⚠️ Modo pruebas: importamos la página de Paquetes
import { PackagesPage } from "./pages/PackagesPage";
// Si quieres volver a la portada, descomenta esta línea y usa <HomePage />:
// import { HomePage } from "./pages/HomePage";

function App() {
  // Datos oficiales de redes (usados por Footer y, si quieres, por otras páginas).
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
    <div className="min-h-screen w-full flex flex-col bg-[--beige] text-[--ink]">
      {/* Cabecera global */}
      <Header />

      {/* ===== MODO PRUEBAS (Etapa 6) =====
         Cambia <PackagesPage /> por <HomePage social={SOCIAL} />
         cuando termines de testear el formulario. */}
      <PackagesPage />
      {/* <HomePage social={SOCIAL} /> */}

      {/* Pie global: orden de iconos (TT-PT → IG → TT-ES) */}
      <Footer
        instagramUrl={SOCIAL.instagram.url}
        tiktokPtUrl={SOCIAL.tiktokPt.url}
        tiktokEsUrl={SOCIAL.tiktokEs.url}
      />
    </div>
  );
}

export default App;
