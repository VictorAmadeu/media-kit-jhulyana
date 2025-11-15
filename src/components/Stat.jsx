// src/components/Stat.jsx
// Tarjeta de estadística con contador animado opcional.
// - Usa IntersectionObserver para empezar la animación solo cuando
//   la tarjeta entra en el viewport (mejor rendimiento).
// - El prop `animated` define si esa estadística se anima o se muestra estática.

import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

export default function Stat({ icon, label, value, animated = false }) {
  // Ref a la tarjeta para observar cuándo entra en pantalla
  const ref = useRef(null);
  // Indica si la tarjeta está visible en el viewport
  const [visible, setVisible] = useState(false);

  // Interpretamos el valor original para decidir cómo animarlo
  const raw = String(value).trim();
  let target = 0; // valor numérico objetivo para el contador
  let mode = "raw"; // modo por defecto: mostramos el string tal cual

  // Modo "k+" → ej. "61k+"
  if (raw.includes("k")) {
    const match = raw.match(/(\d+)/);
    if (match) {
      target = parseInt(match[1], 10);
      mode = "k";
    }
  }
  // Modo porcentaje → ej. "8,9%" o "15%"
  else if (raw.includes("%")) {
    const numeric = parseFloat(raw.replace("%", "").replace(",", "."));
    if (Number.isFinite(numeric)) {
      // Si tiene decimales, lo tratamos como una cifra con 1 decimal (x10)
      if (!Number.isInteger(numeric)) {
        target = Math.round(numeric * 10); // 8.9 → 89
        mode = "percentDecimal";
      } else {
        target = Math.round(numeric); // 15 → 15
        mode = "percent";
      }
    }
  }
  // Modo número entero simple → ej. "1200"
  else {
    const match = raw.match(/(\d+)/);
    if (match) {
      target = parseInt(match[1], 10);
      mode = "int";
    }
  }

  // Valor animado (siempre llamamos al hook, aunque luego no lo usemos)
  const count = useCountUp(
    animated && mode !== "raw" && visible ? target : 0,
    1500
  );

  // Activamos el observer solo si la estadística está marcada como animada
  useEffect(() => {
    if (!animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el 60% de la tarjeta sea visible, marcamos visible = true
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // evitamos re-disparar la animación
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  // Decidimos qué mostrar en pantalla según el modo
  let displayValue = value; // por defecto, el texto original

  if (animated && mode !== "raw") {
    if (mode === "k") {
      displayValue = `${count}k+`;
    } else if (mode === "percent") {
      displayValue = `${count}%`;
    } else if (mode === "percentDecimal") {
      // Volvemos a introducir el decimal y lo formateamos como "8,9%"
      const val = (count / 10).toFixed(1).replace(".", ",");
      displayValue = `${val}%`;
    } else if (mode === "int") {
      displayValue = `${count}`;
    }
  }

  return (
    <div
      ref={animated ? ref : null}
      className="rounded-xl border border-black/5 bg-white p-3 text-center shadow-sm"
    >
      {/* Icono circular (mismo estilo que antes) */}
      <div
        className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--beige)", color: "var(--cherry)" }}
      >
        {icon}
      </div>

      {/* Valor numérico (estático o animado según `animated`) */}
      <div className="mt-2 text-base font-semibold">{displayValue}</div>

      {/* Etiqueta descriptiva de la estadística */}
      <div className="text-xs text-[--muted]">{label}</div>
    </div>
  );
}
