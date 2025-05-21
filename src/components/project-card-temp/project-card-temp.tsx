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
}: ProjectCardProps) {
  const isActive = status === "activo";

  return (
    <div className="w-full max-w-3xl rounded-2xl bg-[#160D2A]/90 p-4 text-white shadow-lg">
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
          className={`rounded-full px-4 py-1 border-2 ${
            isActive ? "border-[#00C792]" : "border-[#FFA500]"
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

      <div className="flex flex-row gap-2">
        <div className="relative h-44 w-36 overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={`Imagen del proyecto ${title}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/icons/csipro-icon.svg"
                alt="csipro logo"
                className="size-8"
              />
              <h2 className="text-sm font-bold">{title}</h2>
            </div>
            <h3 className="text-sm font-semibold text-[#A1A1AA]">
              {subtitle}
            </h3>
            <p className="mt-2 text-xs text-[#C8C4D6] line-clamp-5">{description}</p>
            <p className="mt-2 text-sm font-semibold text-[#A1A1AA]">
              {appType}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full pt-4 justify-end items-center">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center gap-2 text-gray-400">
            <img
              src="/icons/miembros-icon.svg"
              alt="icono de miembros"
              className="size-5"
            />
            <span>{members.length} miembros</span>
          </div>
          <div className="flex gap-2 pt-4">
            {members.map((member, idx) => (
              <div key={idx} className="size-5 overflow-hidden rounded-full">
                <img
                  src={member.avatar}
                  alt={`Avatar de ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="bg-[#7c3AED] text-white rounded-md text-sm font-semibold w-32 py-2">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}
