import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { NavigationLink } from "./navigation-link";
import {
  BrandingHeader,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { CsiproLogo } from "../socials/logos/csipro-logo";
import { Typewriter } from "../typewriter/typewriter";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar/app-sidebar";

interface Props {
  titles: string[];
  loopTitles?: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Navbar: FC<Props> = ({ titles, loopTitles, className }) => {
  return (
    <NavigationMenu
      className={cn(
        "sticky top-0 z-50 h-16 w-full max-w-full border-b border-primary bg-white dark:bg-muted",
        className,
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-9xl items-center justify-between p-4">
        <Link href="/" className="font-poppins text-xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm p-1.5">
              <CsiproLogo className="fill-primary dark:fill-white" />
            </div>
            <BrandingHeader className="text-xl font-normal">
              <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
              <Typewriter messages={titles} loop={loopTitles} />
            </BrandingHeader>
          </div>
        </Link>
        <NavigationMenuList className="gap-4 max-lg:hidden">
          <NavigationMenuItem asChild>
            <NavigationLink href="/">Inicio</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <NavigationLink href="/eventos">Eventos</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <NavigationLink href="/nosotros">Nosotros</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <NavigationLink href="/proyectos">Proyectos</NavigationLink>
          </NavigationMenuItem>
          <NavigationMenuItem asChild>
            <NavigationLink href="/creative-team">
              Equipo Creativo
            </NavigationLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <SidebarTrigger className="lg:hidden" />
      </div>
      <AppSidebar titles={titles} loopTitles={loopTitles} />
    </NavigationMenu>
  );
};
