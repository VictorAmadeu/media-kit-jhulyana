// src/App.jsx
// App raíz de la SPA (aún sin router; se añadirá HashRouter en la etapa de routing).
// - Integra los componentes globales: Header y Footer.
// - Renderiza la página Home (Sobre Mí) completa mediante <HomePage />.
// - Semántica: evitamos anidar <main> aquí porque HomePage ya expone su propio <main>.
// - Branding: fondo beige y texto ink vía custom properties con sintaxis canónica Tailwind.
//
// 🔧 FIX visible (único cambio necesario):
//    Importamos "App.css" para que se apliquen los resets del template de Vite:
//    - eliminar padding/margen/max-width de #root
//    - asegurar html/body/#root a 100% de alto
//    Con esto, el wrapper con bg-[--beige] definido aquí ocupa toda la pantalla
//    y se ve el color beige alrededor del contenedor blanco de la primera página.

import React from "react";
import "./App.css"; // ← IMPORTANTE: activa el fondo beige alrededor del contenedor blanco
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";

function App() {
  // Datos oficiales de redes (se usan en HomePage y Footer).
  // Mantén estos valores en un único lugar para coherencia y fácil actualización.
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
    // Layout a pantalla completa: columna con Header fijo arriba, contenido flexible y Footer al final.
    // bg-[--beige] es el fondo crema global que debe verse alrededor de la “tarjeta” blanca de HomePage.
    <div className="min-h-screen w-full flex flex-col bg-[--beige] text-[--ink]">
      {/* Cabecera global (sticky con blur y borde sutil) */}
      <Header />

      {/* Página Home / Sobre Mí */}
      <HomePage social={SOCIAL} />

      {/* Pie global: orden de iconos (TT-PT → IG → TT-ES) y nombre desplazado */}
      <Footer
        instagramUrl={SOCIAL.instagram.url}
        tiktokPtUrl={SOCIAL.tiktokPt.url}
        tiktokEsUrl={SOCIAL.tiktokEs.url}
      />
    </div>
  );
}

export default App;
