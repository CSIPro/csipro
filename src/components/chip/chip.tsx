import { FC, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  purple: "border-[#895FE9] text-[#895FE9] bg-[#4600E5]/10",
  yellow: "border-[#FAFF00] text-[#FAFF00] bg-[#FAFF00]/10",
  orange: "border-[#FF9E45] text-[#FF9E45] bg-[#FF9E45]/10",
  blue: "border-[#33C3EF] text-[#33C3EF] bg-[#33C3EF]/10",
  green: "border-[#00C792] text-[#00C792] bg-[#00C792]/10",
  gray: "border-[#959595] text-[#959595] bg-[#959595]/10",
};

interface Props {
  variant?: keyof typeof variants;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children: ReactNode;
  background?: boolean;
}

export const Chip: FC<Props> = ({
  variant = "purple",
  className,
  children,
  background = false,
}) => {
  return (
    <span
      className={cn(
        "flex w-fit flex-row items-center gap-2 rounded-full border px-3 py-1",
        variants[variant],
        !background && "bg-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
};

interface TextProps {
  children: ReactNode;
  className?: string;
  uppercase?: boolean;
}

export const ChipLabel: FC<TextProps> = ({
  className,
  children,
  uppercase = false,
}) => {
  return (
    <span
      className={cn("text-xs xl:text-sm", uppercase && "uppercase", className)}
    >
      {children}
    </span>
  );
};

interface IconProps {
  children: ReactNode;
  className?: string;
}

export const ChipIcon: FC<IconProps> = ({ className, children }) => {
  return <span className={cn(className)}>{children}</span>;
};
