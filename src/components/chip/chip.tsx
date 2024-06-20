import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  purple: "border-[#895FE9] text-[#895FE9]",
  yellow: "border-[#FAFF00] text-[#FAFF00]",
  orange: "border-[#FF9E45] text-[#FF9E45]",
  blue: "border-[#33C3EF] text-[#33C3EF]",
  green: "border-[#00C792] text-[#00C792]",
  gray: "border-[#959595] text-[#959595]",
};

interface Props {
  variant?: keyof typeof variants;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
}

export const Chip: FC<Props> = ({
  variant = "purple",
  className,
  children,
}) => {
  return (
    <span
      className={cn(
        "rounded-full border bg-transparent px-2 py-0.5 text-sm uppercase",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
