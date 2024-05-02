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
        "w-full border-t border-t-primary bg-white dark:bg-muted",
        props.className,
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 p-4">
        <div className="flex w-full flex-col gap-6">
          <Link href="#">Inicio</Link>
          <Link href="#">Eventos</Link>
          <Link href="#">Nosotros</Link>
          <Link href="#">Proyectos</Link>
          <Link href="#">Contacto</Link>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-8 border-y border-y-primary p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm bg-primary p-1.5">
              <Image
                src="csipro.svg"
                alt="Logo de CSI PRO"
                width={36}
                height={36}
              />
            </div>
            <h1 className="text-2xl font-semibold">CSI PRO</h1>
          </div>
          <div className="flex w-full items-center justify-around">
            <Twitter />
            <Facebook />
            <Instagram />
            <LinkedIn />
            <GitHub />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 text-center text-xs">
          <p>© 2024 CSI PRO | Universidad de Sonora</p>
          <p>Todos los derechos reservados.</p>
          <p>Departamento de Ingeniería Industrial y de Sistemas | 5J-205</p>
        </div>
      </div>
    </footer>
  );
};
