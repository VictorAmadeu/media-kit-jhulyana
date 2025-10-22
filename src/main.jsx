// src/main.jsx
// -------------------------------------------------------------
// Punto de entrada de la app (React + Vite).
// - Importa los estilos globales (Tailwind v4 + tokens de marca).
// - Monta el componente <App /> dentro del div#root de index.html.
// - Usamos <StrictMode> para ayudarte a detectar posibles problemas
//   durante el desarrollo.
// - Nota: en la Etapa 7 envolveremos <App /> con <HashRouter> para
//   que GitHub Pages maneje bien las rutas.
// -------------------------------------------------------------

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Tailwind v4 + variables de marca (definidas en :root)
import "./index.css";

// Componente raíz de la aplicación
import App from "./App.jsx";

// Busca el contenedor #root que definimos en public/index.html
const rootElement = document.getElementById("root");

// Crea la raíz de React 18 y renderiza la aplicación
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// -------------------------------------------------------------
// HMR (Hot Module Replacement) lo gestiona Vite automáticamente
// en modo desarrollo: al guardar cambios, verás la UI actualizarse
// sin recargar toda la página.
// -------------------------------------------------------------
