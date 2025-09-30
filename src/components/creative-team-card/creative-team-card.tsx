"use client";

import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

import { useMemberByName } from "@/hooks/use-members";
import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

interface Props {
  children: ReactNode;
  className?: string;
}

export const CreativeTeamCard: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full max-w-48 flex-col items-center justify-center gap-4 self-start justify-self-center border-primary sm:max-w-64 md:max-w-72 lg:rounded-xl lg:border lg:bg-[#160D2A] lg:p-6 lg:shadow-[0_0_12px_rgba(137,84,255,0.2)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const imageBackgroundVariants = cva(
  "flex aspect-square w-full items-center justify-center overflow-hidden rounded-full border-primary lg:rounded-lg lg:border",
  {
    variants: {
      variant: {
        default: "bg-[linear-gradient(45deg,_#493772,_#252030,_#0D0D0D)]",
        pink: "bg-[linear-gradient(260deg,_#7B1E72,_#322436,_#0D0D0D)]",
        orange: "bg-[linear-gradient(135deg,_#FF9E45,_#74583D,_#141312)]",
        cyan: "bg-[linear-gradient(30deg,_#33C3EF,_#30525C,_#0D0D0D)]",
        lightPurple: "bg-[linear-gradient(40deg,_#A582F4,_#3B3548,_#0D0D0D)]",
        red: "bg-[linear-gradient(135deg,_#AA2F27,_#2F1B19,_#0B0000)]",
        green: "bg-[linear-gradient(320deg,_#0ACA97,_#18745C,_#0D0D0D)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CreativeTeamCardImageProps
  extends VariantProps<typeof imageBackgroundVariants> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const CreativeTeamCardImage: FC<CreativeTeamCardImageProps> = ({
  src,
  alt,
  variant = "default",
  className,
  imageClassName,
}) => {
  return (
    <div
      className={cn(
        "flex aspect-square w-full max-w-72 items-center justify-center overflow-hidden rounded-full border-primary lg:rounded-lg lg:border",
        imageBackgroundVariants({ variant }),
        className,
      )}
    >
      <Image
        width={400}
        height={400}
        src={src}
        alt={alt}
        className={cn("size-full object-cover", imageClassName)}
      />
    </div>
  );
};

interface CreativeTeamCardContentProps {
  className?: string;
  children: ReactNode;
}

export const CreativeTeamCardContent: FC<CreativeTeamCardContentProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CreativeTeamCardTitle: FC<CreativeTeamCardContentProps> = ({
  className,
  children,
}) => {
  return (
    <h2
      className={cn(
        "line-clamp-2 h-14 text-xl font-semibold md:h-auto lg:h-14",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export const CreativeTeamCardSubtitle: FC<CreativeTeamCardContentProps> = ({
  className,
  children,
}) => {
  return <h3 className={cn("text-white/70", className)}>{children}</h3>;
};

export const CreativeTeamCardRole: FC<CreativeTeamCardContentProps> = ({
  className,
  children,
}) => {
  return (
    <p
      className={cn(
        "h-10 pt-1 text-sm text-white/70 md:h-auto lg:h-10",
        className,
      )}
    >
      {children}
    </p>
  );
};

interface CreativeTeamCardButtonProps extends ButtonProps {
  memberName: string;
  memberLastName: string;
}

export const CreativeTeamCardButton: FC<CreativeTeamCardButtonProps> = ({
  memberName,
  memberLastName,
  ...props
}) => {
  const memberQuery = useMemberByName(memberName, memberLastName);

  if (memberQuery.isLoading) {
    return (
      <Button disabled {...props}>
        Cargando...
      </Button>
    );
  }

  if (memberQuery.isError || !memberQuery.data) {
    return (
      <Button disabled {...props}>
        Portafolio no disponible
      </Button>
    );
  }

  return (
    <Button {...props} asChild>
      <Link href={`/miembros/${memberQuery.data.slug}`}>Ver portafolio</Link>
    </Button>
  );
};
