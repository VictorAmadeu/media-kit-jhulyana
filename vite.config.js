//vite.config.js

// Importa la función de Vite para definir la configuración del proyecto
import { defineConfig } from "vite";
// Plugin oficial de React para Vite (JSX, Fast Refresh, etc.)
import react from "@vitejs/plugin-react";
// Plugin de Tailwind CSS v4 para integrar Tailwind en el pipeline de Vite
import tailwindcss from "@tailwindcss/vite";

// Exporta la configuración de Vite
export default defineConfig({
  // base vacío → genera rutas y assets con paths relativos.
  // Esto es importante para que la app funcione correctamente
  // cuando GitHub Pages sirva el sitio desde /media-kit-jhulyana/ usando la carpeta /docs.
  base: "",
  // Lista de plugins que Vite debe usar (React + Tailwind CSS)
  plugins: [react(), tailwindcss()],
});
