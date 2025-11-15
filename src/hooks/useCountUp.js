// src/hooks/useCountUp.js
// Hook genérico para animar un número desde 0 hasta un valor objetivo
// en un tiempo determinado usando requestAnimationFrame.

import { useEffect, useState } from "react";

export function useCountUp(target, duration = 1000) {
  // Valor actual animado (empieza en 0)
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = null;
    let frameId = null;

    // Función que se ejecuta en cada frame de la animación
    const step = (timestamp) => {
      if (start === null) start = timestamp;

      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1); // entre 0 y 1

      // Calculamos el valor interpolado
      const nextValue = Math.floor(progress * target);
      setValue(nextValue);

      // Si aún no hemos llegado al final, pedimos otro frame
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);

    // Limpieza: cancelamos la animación si el componente se desmonta
    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [target, duration]);

  return value;
}
