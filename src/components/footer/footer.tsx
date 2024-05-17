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
      <div className="mx-auto flex max-w-5xl flex-col gap-4 p-4 md:gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex w-full flex-col gap-6 font-light md:items-start md:gap-1 md:text-xs">
            <Link href="/" className="p-1">
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
          <div className="flex w-full flex-col items-center justify-center gap-8 border-y border-primary p-4 md:w-auto md:gap-4 md:border-y-0 md:border-l-2">
            <div className="flex items-center justify-center gap-4">
              <div className="flex aspect-square w-10 items-center justify-center rounded-sm bg-primary p-1.5 md:w-8">
                <Image
                  src="csipro.svg"
                  alt="Logo de CSI PRO"
                  width={36}
                  height={36}
                />
              </div>
              <h1 className="text-2xl font-semibold md:text-lg">CSI PRO</h1>
            </div>
            <div className="flex w-full items-center justify-around md:w-auto md:gap-4">
              <Twitter />
              <Facebook />
              <Instagram />
              <LinkedIn />
              <GitHub />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 text-center text-xs md:flex-row md:gap-2 md:text-[10px]">
          <p>© 2024 CSI PRO | Universidad de Sonora</p>
          <p>Todos los derechos reservados.</p>
          <p>Departamento de Ingeniería Industrial y de Sistemas | 5J-205</p>
        </div>
      </div>
    </footer>
  );
};
