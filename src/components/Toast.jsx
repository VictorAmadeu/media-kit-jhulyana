// src/components/Toast.jsx
// Toast de feedback: muestra un mensaje flotante que se cierra solo tras unos segundos.

import React, { useEffect } from "react";

export function Toast({ message, type = "success", onClose }) {
  // Auto-cierra el toast después de 5 segundos.
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Borde verde para éxito, rojo para error.
  const borderClass =
    type === "success" ? "border-green-300" : "border-red-300";

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-2 rounded-md shadow-lg bg-white border ${borderClass} text-[var(--ink)]`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
