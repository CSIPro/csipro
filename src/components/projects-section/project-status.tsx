import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/models/projects";

const badgeVariants = cva(
  "flex px-4 items-center justify-center rounded-xl border-2 py-2 text-lg font-bold",
  {
    variants: {
      status: {
        unknown: "border-gray-500 bg-gray-800 text-gray-500",
        active: "border-[#33c3ef] bg-[#0b1e25] text-[#33c3ef]",
        inactive: "border-[#FF9E45] bg-[#331a0b] text-[#FF9E45]",
        finished: "border-primary-light bg-[#1D0B47] text-primary-light",
      },
    },
  },
);

interface Props {
  status: ProjectStatus;
  className?: string;
}

export const ProjectStatusBadge = ({ status, className }: Props) => {
  const getBadgeConfig = () => {
    switch (status) {
      case "Activo":
        return {
          variant: badgeVariants({ status: "active" }),
          label: "En proceso",
        };
      case "Inactivo":
        return {
          variant: badgeVariants({ status: "inactive" }),
          label: "En pausa",
        };
      case "Finalizado":
        return {
          variant: badgeVariants({ status: "finished" }),
          label: "Finalizado",
        };
      default:
        return {
          variant: badgeVariants({ status: "unknown" }),
          label: "Desconocido",
        };
    }
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border-2 border-primary-light bg-[#1D0B47] py-2 text-lg font-bold text-primary-light lg:hidden",
        badgeConfig.variant,
        className,
      )}
    >
      <span className="text-center uppercase tracking-wider">
        {badgeConfig.label}
      </span>
    </div>
  );
};
