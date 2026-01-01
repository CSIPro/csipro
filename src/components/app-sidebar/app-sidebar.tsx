"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BrandingHeader,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { CsiproLogo } from "../socials/logos/csipro-logo";
import { Typewriter } from "../typewriter/typewriter";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

interface Props {
  titles?: string[];
  loopTitles?: boolean;
}

export const AppSidebar = ({ titles = [], loopTitles = false }: Props) => {
  const path = usePathname();

  return (
    <Sidebar side="right">
      <SidebarHeader className="h-16 items-start">
        <Link href="/" className="font-poppins text-xl">
          <div className="flex items-center justify-center gap-1">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm p-1.5">
              <CsiproLogo className="fill-primary dark:fill-white" />
            </div>
            <BrandingHeader className="text-xl font-normal">
              <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
              <Typewriter messages={titles} loop={loopTitles} />
            </BrandingHeader>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="pl-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={path === "/"}>
              <Link href="/">Inicio</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={path === "/eventos"}>
              <Link href="/eventos">Eventos</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={path === "/proyectos"}>
              <Link href="/proyectos">Proyectos</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={path === "/nosotros"}>
              <Link href="/nosotros">Nosotros</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={path === "/creative-team"}>
              <Link href="/creative-team">Equipo Creativo</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
