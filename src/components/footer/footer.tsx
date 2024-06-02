"use client";

import Image from "next/image";
import Link, { LinkProps } from "next/link";
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
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 p-4">
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
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row md:items-center">
          <ul className="flex w-full flex-col flex-wrap gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4 md:gap-8 lg:gap-16">
            <li>
              <FooterLink href="#" className="p-1">
                Inicio
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" className="p-1">
                Eventos
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" className="p-1">
                Nosotros
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" className="p-1">
                Proyectos
              </FooterLink>
            </li>
            <li>
              <FooterLink href="#" className="p-1">
                Contacto
              </FooterLink>
            </li>
          </ul>
          <div className="flex w-full items-center justify-around sm:w-auto sm:justify-normal sm:gap-6 lg:gap-8">
            <Twitter />
            <Facebook />
            <Instagram />
            <LinkedIn />
            <GitHub />
          </div>
        </div>
        <div className="sm:py-8"></div>
        <hr className="w-full rounded-full border border-primary" />
        <div className="sm:py-8"></div>
        <div className="flex w-full flex-col items-center justify-center gap-1 text-center text-xs sm:flex-row sm:justify-between sm:gap-2 sm:text-start">
          <div>
            <p>&copy; 2024 CSI PRO | Universidad de Sonora</p>
            <p>Todos los derechos reservados.</p>
          </div>
          <div className="sm:text-end">
            <p>Departamento de Ingeniería Industrial y de Sistemas</p>
            <p>Ubicados en el salón 5J-205</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: FC<HTMLAttributes<HTMLAnchorElement> & LinkProps> = ({
  className,
  ...props
}) => {
  return (
    <Link
      className={cn("font-sans text-sm font-normal", className)}
      {...props}
    />
  );
};
