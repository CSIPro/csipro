import Image from "next/image";

import { Button } from "../ui/button";

export const CreativeTeamCard = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-primary bg-[#160D2A] p-6 shadow-[0_0_12px_rgba(137,84,255,0.2)]">
      <div className="flex w-full items-center justify-center rounded-lg border border-primary bg-[linear-gradient(135deg,_#493772,_#252030,_#0D0D0D)]">
        <Image
          width={400}
          height={400}
          src="/miembros/saul.png"
          alt="Creative team Saul"
          className="h-64 w-64 rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="-mt-2 text-xl font-semibold">Saúl Ramos Laborín</h1>
        <h2 className="text-white/70">Lider 2021-2024</h2>

        <div className="max-w-[265px] pt-4 text-sm text-white/70">
          <p>
            Coordinó al equipo, tradujo diseños en código (HTML/CSS/JS),
            optimizó rendimiento, probó funciones, corrigió errores y entregó
            interfaces limpias, responsivas y funcionales.
          </p>
        </div>
      </div>

      <Button>Ver Portafolio</Button>
    </div>
  );
};
