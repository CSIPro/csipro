import React from "react";

interface Member {
  name: string;
  avatar: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  appType: string;
  members: Member[];
  date: string;
  status: "activo" | "inactivo";
  imageUrl: string;
  logoUrl: string;
}

export default function ProjectCardTemp({
  title,
  subtitle,
  description,
  appType,
  members,
  date,
  status,
  imageUrl,
  logoUrl,
}: ProjectCardProps) {
  const isActive = status === "activo";

  return (
    <div className="w-full rounded-2xl bg-[#160D2A]/90 p-4 text-white shadow-lg md:w-80 lg:w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/icons/calander.svg"
            alt="icono de calendario"
            className="size-5"
          />
          <span className="text-sm text-[#9870F4]">{date}</span>
        </div>
        <div
          className={`rounded-full border-2 px-4 py-1 ${
            isActive ? "border-[#00C792]" : "border-[#E06546]"
          }`}
        >
          <span
            className={`text-sm font-medium ${
              isActive ? "text-[#00C792]" : "text-[#FFA500]"
            }`}
          >
            {status.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="mb-4 mt-4 h-[1px] w-full rounded-full bg-[#2D1B55]/90"></div>

      <div className="flex flex-row gap-2 md:flex-col">
        <div className="relative h-48 w-44 overflow-hidden rounded-2xl md:mt-4 md:w-full">
          <img
            src={imageUrl}
            alt={`Imagen del proyecto ${title}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="logo del proyecto" className="size-7" />
              <h2 className="text-sm font-bold">{title}</h2>
            </div>
            <h3 className="text-sm font-semibold text-[#A1A1AA]">{subtitle}</h3>
            <p className="mt-2 line-clamp-5 text-xs text-[#C8C4D6]  md:line-clamp-3">
              {description}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#A1A1AA]">
              {appType}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end pt-4 md:flex-col">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center gap-2 text-gray-400">
            <img
              src="/icons/miembros-icon.svg"
              alt="icono de miembros"
              className="size-7"
            />
            <span>{members.length} miembros</span>
          </div>
          <div className="flex gap-2 pt-4">
            {members.slice(0, 4).map((member, idx) => (
              <div key={idx} className="size-7 overflow-hidden rounded-full">
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            {members.length > 4 && (
              <div className="relative flex size-7 items-center justify-center rounded-full bg-purple-700/50 text-xs text-white">
                +{members.length - 4}
              </div>
            )}
          </div>
        </div>
        <div className="md:pt-4">
          <button className="w-32 rounded-lg bg-[#7c3AED] py-2 text-sm font-semibold text-white">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
