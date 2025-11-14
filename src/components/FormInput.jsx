// src/components/FormInput.jsx
// Campo de formulario reutilizable con icono, validación visual y mensaje de error.

import React from "react";
import { Mail, User, Briefcase } from "lucide-react";

// Mapa de iconos según el nombre del campo.
const ICONS = {
  nombre: User,
  email: Mail,
  marca: Briefcase,
};

export function FormInput({
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  error,
  autoComplete,
}) {
  // Selecciona el icono por nombre de campo, o Mail por defecto.
  const Icon = ICONS[name] || Mail;

  // Consideramos "válido" cuando hay valor y no hay error asociado.
  const isValid = !error && value;

  return (
    <div className="relative">
      {/* Icono fijo a la izquierda del campo (decorativo) */}
      <Icon
        aria-hidden="true"
        className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 ${
          isValid ? "text-green-600" : "text-[var(--muted)]"
        }`}
      />

      {/* Input controlado con estilos y borde dinámico según error */}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className={`pl-10 pr-3 py-2 rounded-xl border bg-[--stone] w-full focus:outline-none focus:ring-2 focus:ring-[--cherry] ${
          error ? "border-red-500" : "border-black/10"
        }`}
      />

      {/* Mensaje de error en línea, si existe */}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
