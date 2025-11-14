// src/App.jsx

// Importa React para poder definir componentes funcionales
import React from "react";
// Importa los estilos base de la plantilla (ajustan html/body/#root a pantalla completa)
import "./App.css";
// Componentes globales
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// Páginas de la SPA
import { HomePage } from "./pages/HomePage";
import { ColaborationsPage } from "./pages/ColaborationsPage";
import { PackagesPage } from "./pages/PackagesPage";
// Utilidades de React Router para definir las rutas
import { Routes, Route } from "react-router-dom";

function App() {
  // Datos oficiales de redes sociales de Jhulyana (reutilizados en varias páginas)
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
    // Contenedor raíz: ocupa toda la altura, aplica el fondo beige global y el color de texto principal
    <div className="min-h-screen w-full flex flex-col bg-[--beige] text-[--ink]">
      {/* Cabecera fija con el logo JF y el menú de navegación */}
      <Header />

      {/* Área principal de contenido: React Router decide qué página mostrar según la ruta */}
      <main className="flex-1 mx-auto max-w-5xl px-4 pb-10">
        <Routes>
          {/* Ruta Home / Sobre Mí */}
          <Route path="/" element={<HomePage social={SOCIAL} />} />

          {/* Ruta Colaboraciones */}
          <Route path="/colaboraciones" element={<ColaborationsPage />} />

          {/* Ruta Paquetes (incluye el formulario conectado a Supabase) */}
          <Route path="/paquetes" element={<PackagesPage />} />
        </Routes>
      </main>

      {/* Pie global con enlaces a TikTok (PT), Instagram y TikTok (ES) */}
      <Footer
        instagramUrl={SOCIAL.instagram.url}
        tiktokPtUrl={SOCIAL.tiktokPt.url}
        tiktokEsUrl={SOCIAL.tiktokEs.url}
      />
    </div>
  );
}

export default App;
