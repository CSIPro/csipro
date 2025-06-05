"use client";
import { useEffect, useState } from "react";

export default function GradientBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar el tamaño de la pantalla al montar el componente
    const checkIfMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };

    checkIfMobile(); // Verificación inicial
    window.addEventListener("resize", checkIfMobile); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener("resize", checkIfMobile); // Limpiar listener
    };
  }, []);
  return (
    <div className="absolute left-1/2 z-0 h-full w-full max-w-6xl -translate-x-1/2 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="35"
            height="35"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 35 0 L 0 0 0 35"
              fill="none"
              stroke="#3b2f58"
              strokeWidth="0.5"
            />
          </pattern>

          {/* Radial Gradient con valores condicionales */}
          <radialGradient
            id="fade"
            cx={isMobile ? "100%" : "50%"}
            cy={isMobile ? "10%" : "50%"}
            r={isMobile ? "100%" : "50%"}
          >
            <stop offset="30%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#fade-mask)"
        />
      </svg>
    </div>
  );
}
