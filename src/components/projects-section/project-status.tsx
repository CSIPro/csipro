import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/models/projects";

const badgeVariants = cva(
  "flex items-center justify-center rounded-xl text-lg",
  {
    variants: {
      variant: {
        unknown: "border-gray-500 bg-gray-800 text-gray-500",
        active: "border-[#33c3ef] bg-[#0b1e25] text-[#33c3ef]",
        inactive: "border-[#FF9E45] bg-[#331a0b] text-[#FF9E45]",
        finished: "border-primary-light bg-[#1D0B47] text-primary-light",
      },
      size: {
        default: "text-lg px-4 py-2",
        sm: "text-sm px-2 py-1",
      },
      weight: {
        bold: "border-2 font-bold",
        medium: "border font-medium",
        normal: "border font-normal",
        light: "border font-light",
        none: "border-0 font-normal",
      },
    },
    defaultVariants: {
      variant: "unknown",
      size: "default",
      weight: "bold",
    },
  },
);

interface Props extends VariantProps<typeof badgeVariants> {
  status: ProjectStatus;
  className?: string;
}

export const ProjectStatusBadge = ({
  status,
  className,
  variant,
  size,
  weight,
}: Props) => {
  const getBadgeConfig = () => {
    switch (status) {
      case "Activo":
        return {
          variant: "active",
          label: "En proceso",
        } as const;
      case "Inactivo":
        return {
          variant: "inactive",
          label: "En pausa",
        } as const;
      case "Finalizado":
        return {
          variant: "finished",
          label: "Finalizado",
        } as const;
      default:
        return {
          variant: "unknown",
          label: "Desconocido",
        } as const;
    }
  };

  const badgeConfig = getBadgeConfig();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border-2 border-primary-light bg-[#1D0B47] py-2 text-lg font-bold text-primary-light",
        badgeVariants({
          variant: variant ?? badgeConfig.variant,
          size,
          weight,
        }),
        className,
      )}
    >
      <span className="text-center uppercase tracking-wider">
        {badgeConfig.label}
      </span>
    </div>
  );
};
