// src/main.jsx

// Importa el modo estricto de React (ayuda a detectar problemas en desarrollo)
import { StrictMode } from "react";
// Importa la API de React 18 para crear la raíz de la aplicación
import { createRoot } from "react-dom/client";
// Importa el enrutador basado en hash para gestionar las rutas en la SPA
import { HashRouter } from "react-router-dom";

// Importa los estilos globales (Tailwind + variables de marca)
import "./index.css";
// Importa el componente raíz de la aplicación
import App from "./App.jsx";

// Obtiene el elemento del DOM donde se montará la aplicación
const rootElement = document.getElementById("root");

// Crea la raíz de React y renderiza la aplicación envuelta en HashRouter
createRoot(rootElement).render(
  <StrictMode>
    {/* HashRouter usa URLs con # para que las rutas funcionen correctamente en GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
