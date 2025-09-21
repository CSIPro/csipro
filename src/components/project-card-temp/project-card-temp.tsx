import { format } from "date-fns";
import Image from "next/image";

import { PopulatedProject } from "@/models/projects";

import { CsiproLogo } from "../socials/logos/csipro-logo";

interface ProjectCardProps {
  project: PopulatedProject;
}

export default function ProjectCardTemp({ project }: ProjectCardProps) {
  const isActive = project.estado === "Activo";
  const initialDate = format(new Date(project.fecha_inicio), "dd/MM/yyyy");
  const members = project.participantes ?? [];

  return (
    <div className="w-full rounded-2xl bg-[#160D2A]/90 p-4 text-white shadow-lg md:w-80 lg:w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/calander.svg"
            alt="icono de calendario"
            className="size-5"
            width={20}
            height={20}
          />
          <span className="text-sm text-[#9870F4]">{initialDate}</span>
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
            {project.estado.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="mb-4 mt-4 h-[1px] w-full rounded-full bg-[#2D1B55]/90"></div>

      <div className="flex flex-row gap-2 md:flex-col">
        <div className="relative h-48 w-44 overflow-hidden rounded-2xl md:mt-4 md:w-full">
          <Image
            src={`https://admin.csipro.isi.unison.mx${project.imagen_principal.url}`}
            alt={project.imagen_principal.alt}
            className="h-full w-full object-cover"
            width={176}
            height={192}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8">
                <CsiproLogo className="fill-white" />
              </div>
              <h2 className="text-sm font-bold">{project.nombre}</h2>
            </div>
            <h3 className="text-sm font-semibold text-[#A1A1AA]">
              {project.subtitulo}
            </h3>
            <p className="mt-2 line-clamp-5 text-xs text-[#C8C4D6]  md:line-clamp-3">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="mt-2 text-sm font-semibold text-[#A1A1AA]">
              {project.tipo_sistema}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-end pt-4 md:flex-col">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center gap-2 text-gray-400">
            <Image
              src="/icons/miembros-icon.svg"
              alt="icono de miembros"
              className="size-7"
              width={28}
              height={28}
            />
            <span>{members.length} miembros</span>
          </div>
          <div className="flex gap-2 pt-4">
            {members.slice(0, 4).map((member, idx) => (
              <div key={idx} className="size-7 overflow-hidden rounded-full">
                <Image
                  src={`https://admin.csipro.isi.unison.mx${member.foto.url}`}
                  alt={member.foto.alt}
                  className="h-full w-full object-cover"
                  width={28}
                  height={28}
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
