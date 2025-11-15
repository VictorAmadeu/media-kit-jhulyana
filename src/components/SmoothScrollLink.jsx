// src/components/SmoothScrollLink.jsx
// Enlace con scroll suave para anchors internos (#section).
// - Si el href empieza por "#", evita el salto brusco
//   y hace scroll suave hasta el elemento con ese id.
// - Si NO empieza por "#", se comporta como un <a> normal.

import React from "react";

export default function SmoothScrollLink({ href, children, ...rest }) {
  // Manejador de clic para aplicar el scroll suave en enlaces internos.
  const handleClick = (event) => {
    // Solo intervenimos si el href es un id interno (#algo).
    if (href && href.startsWith("#")) {
      event.preventDefault();

      // Elimina el "#" inicial para obtener el id del elemento destino.
      const id = href.substring(1);
      const element = document.getElementById(id);

      // Si encontramos el elemento, usamos scrollIntoView con behavior: "smooth".
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Si no existe ese id, no hacemos nada más (evitamos romper navegación).
    }
    // Si no es un enlace interno, el <a> funciona de forma normal.
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
