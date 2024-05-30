"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "../socials/socials";

interface FooterProps {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer
      className={cn(
        "w-full border-t border-t-primary bg-white bg-circuit-board dark:bg-muted",
        props.className,
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 p-4">
        <div className="flex w-full flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div className="flex w-full flex-col gap-2 font-light sm:w-auto sm:items-start sm:gap-1 sm:text-xs">
            <Link href="#" className="p-1">
              Inicio
            </Link>
            <Link href="#" className="p-1">
              Eventos
            </Link>
            <Link href="#" className="p-1">
              Nosotros
            </Link>
            <Link href="#" className="p-1">
              Proyectos
            </Link>
            <Link href="#" className="p-1">
              Contacto
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 border-y border-primary p-2 sm:w-auto sm:gap-4 sm:border-y-0 sm:border-l-2">
            <div className="flex items-center justify-center gap-4">
              <div className="flex aspect-square w-10 items-center justify-center rounded-sm bg-primary p-1.5 sm:w-8">
                <Image
                  src="csipro.svg"
                  alt="Logo de CSI PRO"
                  width={36}
                  height={36}
                />
              </div>
              <h1 className="text-2xl font-semibold sm:text-lg">CSI PRO</h1>
            </div>
            <div className="flex w-full items-center justify-around">
              <Twitter />
              <Facebook />
              <Instagram />
              <LinkedIn />
              <GitHub />
            </div>
          </div>
        </div>
        <div className="py-[18px]"></div>
        <div className="flex w-full flex-col items-center justify-center gap-1 text-center text-xs sm:flex-row sm:gap-2 sm:text-[10px]">
          <p>© 2024 CSI PRO | Universidad de Sonora</p>
          <p>Todos los derechos reservados.</p>
          <p>
            Departamento de Ingeniería Industrial y de Sistemas | Edificio
            5J-205
          </p>
        </div>
        <div className="py-[18px]"></div>
      </div>
    </footer>
  );
};
