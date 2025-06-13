import Image from "next/image";

export function MisionCard() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-primary bg-[#160D2A] p-6 shadow-[0_0_12px_rgba(137,84,255,0.2)] lg:flex-row">
      <div className="w-full lg:w-2/3">
        <h1 className="text-xl font-semibold text-white">NUESTRA MISIÓN</h1>
        <p className="mt-2 text-base text-white/70">
          Somos un equipo diverso y apasionado que fusiona creatividad y
          tecnología para construir esta página: diseñamos interfaces
          atractivas, codificamos con precisión en frontend y backend,
          administramos una base de datos eficiente, y conectamos todo mediante
          APIs seguras. Juntos convertimos ideas en una experiencia digital
          sólida, atractiva y funcional para nuestros usuarios.
        </p>
      </div>

      <div className="w-full lg:w-1/3">
        <Image
          width={400}
          height={600}
          src="/miembros/equipo.JPG"
          alt="Creative team"
          className=" rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
