import {
  BookmarkCheck,
  CircleUser,
  GraduationCap,
  Sprout,
  SquareCode,
} from "lucide-react";

import { countMembers } from "@/services/members";
import { countProjects } from "@/services/projects";

import { Chip, ChipIcon, ChipLabel, ChipSkeleton } from "../chip/chip";

export async function SummaryChips() {
  const [membersCount, projectsCount] = await Promise.all([
    countMembers(),
    countProjects(),
  ]);

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:justify-start">
      <Chip background>
        <ChipIcon>
          <Sprout size={18} />
        </ChipIcon>
        <ChipLabel className="text-sm">Fundado en 2014</ChipLabel>
      </Chip>
      {membersCount ? (
        <>
          {membersCount.active > 0 && (
            <Chip background>
              <ChipIcon>
                <CircleUser size={18} />
              </ChipIcon>
              <ChipLabel className="text-sm">
                {membersCount.active} miembro
                {membersCount.active !== 1 ? "s" : ""}
              </ChipLabel>
            </Chip>
          )}
          {membersCount.graduated > 0 && (
            <Chip background>
              <ChipIcon>
                <GraduationCap size={18} />
              </ChipIcon>
              <ChipLabel className="text-sm">
                {membersCount.graduated}{" "}
                {membersCount.graduated !== 1 ? "egresados" : "egresado"}
              </ChipLabel>
            </Chip>
          )}
        </>
      ) : null}
      {projectsCount ? (
        <>
          {projectsCount.active > 0 && (
            <Chip background>
              <ChipIcon>
                <SquareCode size={18} />
              </ChipIcon>
              <ChipLabel className="text-sm">
                {projectsCount.active}{" "}
                {projectsCount.active > 1
                  ? "proyectos activos"
                  : "proyecto activo"}
              </ChipLabel>
            </Chip>
          )}
          {projectsCount.finished > 0 && (
            <Chip background>
              <ChipIcon>
                <BookmarkCheck size={18} />
              </ChipIcon>
              <ChipLabel className="text-sm">
                {projectsCount.finished}{" "}
                {projectsCount.finished > 1
                  ? "proyectos terminados"
                  : "proyecto terminado"}
              </ChipLabel>
            </Chip>
          )}
        </>
      ) : null}
    </div>
  );
}

export const SummaryChipsSkeleton = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:justify-start">
      <ChipSkeleton />
      <ChipSkeleton />
      <ChipSkeleton />
      <ChipSkeleton />
      <ChipSkeleton />
    </div>
  );
};
