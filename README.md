# Media Kit interactivo de Jhulyana

Bienvenido al repositorio del media kit digital de **Jhulyana**, una creadora de contenido centrada en moda urbana, lifestyle y viajes. El proyecto está construido con **React 19**, **Vite 5**, **React Router 7** y estilos basados en utilidades (Tailwind CSS vía `@tailwindcss/vite`) combinadas con tokens de diseño propios. Además, integra un formulario conectado a **Supabase** para recopilar propuestas de marcas.

El objetivo del proyecto es ofrecer una experiencia inmersiva y totalmente responsiva donde las marcas puedan conocer la identidad, datos de audiencia, casos de éxito y paquetes de colaboración disponibles. El código está orientado a su mantenimiento a largo plazo: utiliza componentes reutilizables, hooks específicos y una estructura clara que facilita nuevas iteraciones.

---

## 🧭 Tabla de contenidos

1. [Características principales](#-características-principales)
2. [Requisitos previos](#-requisitos-previos)
3. [Instalación y puesta en marcha](#-instalación-y-puesta-en-marcha)
   - [Variables de entorno](#variables-de-entorno-para-supabase)
   - [Scripts disponibles](#scripts-disponibles)
4. [Arquitectura del proyecto](#-arquitectura-del-proyecto)
   - [Estructura de carpetas](#estructura-de-carpetas)
   - [Componentes destacados](#componentes-destacados)
   - [Hooks personalizados](#hooks-personalizados)
5. [Guía de estilos y diseño](#-guía-de-estilos-y-diseño)
6. [Integración con Supabase](#-integración-con-supabase)
   - [Esquema recomendado de la tabla `propuestas`](#esquema-recomendado-de-la-tabla-propuestas)
   - [Flujo de validación y envío](#flujo-de-validación-y-envío)
7. [Buenas prácticas y recomendaciones](#-buenas-prácticas-y-recomendaciones)
8. [Resolución de problemas comunes](#-resolución-de-problemas-comunes)
9. [Licencia](#-licencia)

---

## ✨ Características principales

- **Single Page Application** con React Router que divide el contenido en tres secciones clave: Home/Sobre mí, Colaboraciones y Paquetes.
- **Diseño responsivo y accesible**, con animaciones suaves, indicadores de scroll y tarjetas accesibles mediante teclado.
- **Contadores animados** para audiencias y datos sociales gracias al hook `useCountUp` y al uso de `IntersectionObserver`.
- **Formulario conectado a Supabase** con validaciones en tiempo real, toasts de feedback y persistencia en la tabla `propuestas`.
- **Tokens de color globales** definidos en `:root` (`--cherry`, `--ink`, `--beige`, etc.) para mantener coherencia visual.
- **Componentización clara**: cabecera, pie, barra flotante de redes, tarjetas reutilizables y utilidades para scroll suave.
- **Preparado para despliegues rápidos** gracias a Vite: recarga en caliente, build optimizado y preview integrado.

---

## 🧑‍💻 Requisitos previos

Asegúrate de tener instalados en tu máquina:

- [Node.js](https://nodejs.org/) **>= 18.18** (recomendado LTS vigente).
- [npm](https://www.npmjs.com/) (se instala junto con Node). Si prefieres `pnpm` o `yarn`, adapta los comandos.
- Una cuenta en [Supabase](https://supabase.com/) para el almacenamiento de propuestas (opcional si sólo quieres ejecutar la parte estática).

> 💡 Comprueba tu versión con `node -v` y `npm -v`.

---

## 🚀 Instalación y puesta en marcha

1. Clona este repositorio:
   ```bash
   git clone https://github.com/<TU-USUARIO>/media-kit-jhulyana.git
   cd media-kit-jhulyana
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Crea el fichero de variables de entorno (ver sección siguiente) y arranca el entorno de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre el navegador en la URL que indica la terminal (por defecto `http://localhost:5173`).

### Variables de entorno para Supabase

El formulario de la página **Paquetes** necesita dos variables expuestas al cliente:

```bash
# .env.local (no se versiona)
VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
VITE_SUPABASE_ANON_KEY=<clave-anon-publica>
```

- Ambas variables deben comenzar por `VITE_` para que Vite las exponga en tiempo de ejecución.
- Si no defines estas variables, la UI seguirá funcionando pero el formulario mostrará un mensaje de error al intentar enviar.

Guarda el fichero como `.env.local` (Vite lo carga automáticamente). Nunca subas este archivo al repositorio público.

### Scripts disponibles

| Comando        | Descripción                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `npm run dev`  | Inicia el servidor de desarrollo con recarga en caliente.                   |
| `npm run build`| Genera la compilación optimizada en `dist/`.                                |
| `npm run preview` | Sirve la build estática para pruebas locales (`npm run build` previo). |
| `npm run lint` | Ejecuta ESLint con la configuración recomendada para React 19.             |

---

## 🏗️ Arquitectura del proyecto

### Estructura de carpetas

```
src/
├─ assets/                # Imágenes locales del media kit (hero, estilo, etc.)
├─ components/            # Componentes UI reutilizables (Header, Footer, FormInput...)
├─ hooks/                 # Hooks personalizados (useCountUp)
├─ pages/                 # Páginas de la SPA (HomePage, ColaborationsPage, PackagesPage)
├─ App.jsx                # Definición de rutas y layout global
├─ main.jsx               # Punto de entrada: ReactDOM + BrowserRouter
├─ App.css / index.css    # Estilos globales y tokens
```

### Componentes destacados

- **`Header`** y **`Footer`**: navegación principal y enlaces a redes sociales.
- **`FloatingSocialBar`**: barra lateral visible en escritorio con acceso directo a Instagram y TikTok.
- **`ScrollIndicator`** y **`SmoothScrollLink`**: guían la interacción hacia secciones inferiores y habilitan anclas suaves.
- **`FormInput`**: input estilizado con gestión de errores en línea y variantes por tipo.
- **`Toast`**: notificaciones flotantes para confirmar el resultado del formulario.
- **`TikTokIcon`**: icono SVG personalizado para mantener coherencia con el resto del branding.

La página `PackagesPage` consume `FormInput` y `Toast` para generar una experiencia de contacto consistente.

### Hooks personalizados

- **`useCountUp`** (`src/hooks/useCountUp.js`): encapsula un contador animado basado en `requestAnimationFrame`, ideal para destacar cifras (seguidores, colaboraciones, etc.). Se combina con `IntersectionObserver` para lanzar la animación sólo cuando el elemento entra en viewport.

---

## 🎨 Guía de estilos y diseño

- El proyecto utiliza **Tailwind CSS 4** a través del plugin oficial para Vite, lo que permite clases utilitarias (`flex`, `grid`, `rounded-2xl`, etc.) sin necesidad de un fichero de configuración extenso.
- En `src/index.css` y `src/App.css` se definen **variables CSS personalizadas** para colores y tipografías (`--cherry`, `--muted`, `--stone`, `--display`, `--body`). Esto facilita ajustes globales rápidos.
- Las fuentes se gestionan mediante `@font-face` (si procede) o fuentes del sistema para garantizar buena legibilidad.
- Las imágenes se optimizan con `loading="lazy"`, `decoding="async"` y `sizes` para mejorar rendimiento.
- Se ha prestado atención a la **accesibilidad**: etiquetas `aria-label`, foco visible (`focus-visible`), `tabIndex` en tarjetas y mensajes de error descriptivos.

---

## 🔗 Integración con Supabase

La página **Paquetes** incluye un formulario que envía la información a la tabla `propuestas` dentro de tu proyecto Supabase. El cliente se inicializa en `src/pages/PackagesPage.jsx` utilizando las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`.

### Esquema recomendado de la tabla `propuestas`

Crea la tabla en Supabase con los siguientes campos (tipos sugeridos):

| Columna  | Tipo            | Notas                                    |
| -------- | --------------- | ---------------------------------------- |
| `id`     | `uuid` (PK)     | Generado automáticamente (`uuid_generate_v4()`). |
| `created_at` | `timestamp` | Valor por defecto `now()`.               |
| `nombre` | `text`          | Obligatorio.                             |
| `email`  | `text`          | Obligatorio, valida formato en frontend. |
| `marca`  | `text`          | Opcional.                                |
| `mensaje`| `text`          | Obligatorio (mínimo 10 caracteres).      |
| `origen` | `text`          | Se rellena con `"pagina_paquetes"` para trazar el embudo. |

> 📌 Habilita Row Level Security (RLS) y define una **política de inserción** que permita `anon` insertar registros si lo deseas. También puedes usar funciones edge para más control.

### Flujo de validación y envío

1. El formulario controla el estado de cada campo (`nombre`, `email`, `marca`, `mensaje`).
2. Las validaciones básicas se ejecutan en cada `onChange` y antes de enviar:
   - Nombre: mínimo 2 caracteres.
   - Email: regex simple `\S+@\S+\.\S+`.
   - Mensaje: mínimo 10 caracteres.
3. Si faltan datos o hay errores, se muestra un toast en rojo indicando que se revisen los campos.
4. Si todo es correcto, se llama a `supabase.from("propuestas").insert(...)` y se muestra un toast verde de éxito.
5. Ante errores de red o configuración se captura la excepción, se registra en consola y se muestra un toast con el mensaje adecuado.

---

## ✅ Buenas prácticas y recomendaciones

- **Tipado opcional con TypeScript**: el proyecto está listo para migrar a TS. Puedes usar la plantilla oficial de Vite como referencia.
- **Limpia la consola en producción**: los `console.log` de Supabase son útiles en desarrollo; elimínalos o protégelos con condiciones antes de desplegar.
- **Optimiza imágenes**: las fotos del media kit pesan; considera usar formatos `webp/avif` y un CDN si el tráfico aumenta.
- **Analítica**: integra herramientas como Plausible o Google Analytics para medir interacciones con los paquetes.
- **SEO y metadatos**: añade títulos dinámicos y meta tags según la ruta mediante `react-helmet` o `@tanstack/router` si migras a SSR.

---

## 🛠️ Resolución de problemas comunes

| Problema | Causa probable | Solución |
| -------- | --------------- | -------- |
| La app no arranca (`npm run dev`). | Versión antigua de Node o dependencias corruptas. | Actualiza Node a >=18.18 y ejecuta `rm -rf node_modules package-lock.json && npm install`. |
| Al enviar el formulario aparece un toast rojo. | Variables de Supabase ausentes o tabla sin permisos. | Revisa `.env.local`, verifica la URL/clave y las políticas RLS. |
| Los contadores animados no se mueven. | El componente no entra en el viewport o `IntersectionObserver` no está disponible. | Comprueba el layout, revisa la consola y considera un polyfill para navegadores muy antiguos. |
| El build falla por ESLint. | Reglas de hooks o dependencias de efectos incumplidas. | Ejecuta `npm run lint` y corrige los warnings siguiendo los mensajes detallados. |

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el fichero [`LICENSE`](LICENSE) si decides añadirlo. Si reutilizas el diseño o el código, atribuye al autor original del media kit (Victor Amadeu) y respeta las marcas registradas.

---

¿Tienes dudas o quieres contribuir? ¡Abre un issue o contacta al equipo técnico! 💌