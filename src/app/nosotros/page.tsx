import Image from "next/image";

import { GlowContainer, Glow } from "@/components/glow/glow";
import GradientBackground from "@/components/gradient-background/gradient-background";
import MembersSection from "@/components/members-section/members-section";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";

export default function Page({
  searchParams,
}: Readonly<{
  searchParams?: {
    page?: string;
  };
}>) {
  const limit = 6;
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <Section>
        <GradientBackground />
        <GlowContainer className="">
          <Glow className="left-[65%] bg-[radial-gradient(circle,rgba(170,13,255,0.1)_35%,rgba(255,58,235,0)_30%)]" />
        </GlowContainer>
        <div className="z-10 h-full w-full items-center justify-center pt-20 lg:flex">
          <div className="flex h-full w-1/2 flex-col justify-center space-y-[48px] max-lg:w-full max-lg:p-1 lg:pl-4">
            <div className="space-y-[26px] text-left">
              <h1 className="text-5xl font-bold max-lg:text-center">
                Conoce sobre <span className="text-primary">nosotros</span> y
                nuestra <span className="text-primary">historia</span>
              </h1>
              <p className="text-base opacity-70 max-lg:text-center">
                Somos alumnos amantes de la tecnología trabajando diariamente
                nuestro futuro en este espacio de desarrollo, innovación e
                investigación llamado el CSI PRO.
              </p>
            </div>
            <div className="lg:space-y-[26px]">
              <p className="text-left text-base opacity-70 max-lg:text-center">
                Redes sociales de CSI PRO
              </p>
              <div className="flex gap-2 max-lg:justify-center">
                <Twitter className="h-4 w-4" />
                <Facebook className="h-4 w-4" />
                <Instagram className="h-4 w-4" />
                <LinkedIn className="h-4 w-4" />
                <GitHub className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="display inline-flex w-1/2 justify-center max-lg:w-full max-lg:gap-3 lg:gap-4 lg:px-20">
            <div className="flex items-end max-lg:gap-3 lg:flex-col lg:space-y-4">
              <div className="h-auto overflow-hidden rounded-xl lg:w-11/12">
                <Image
                  src="nosotros1.png"
                  alt="foto de portada"
                  width={1920}
                  height={1080}
                  className="h-auto w-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="h-auto w-auto overflow-hidden rounded-xl">
                <Image
                  src="nosotros3.png"
                  alt="foto de portada"
                  width={1920}
                  height={1080}
                  className="h-auto w-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
            <div className="max-lg:flex max-lg:gap-3 lg:space-y-4">
              <div className="h-auto w-auto overflow-hidden rounded-xl lg:mt-10">
                <Image
                  src="nosotros2.png"
                  alt="foto de portada"
                  width={1920}
                  height={1080}
                  className="h-auto w-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="overflow-hidden rounded-xl lg:h-auto lg:w-10/12">
                <Image
                  src="nosotros4.png"
                  alt="foto de portada"
                  width={1920}
                  height={1080}
                  className="h-auto w-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section classNameDiv="pb-16 pt-16">
        <div className="flex w-full items-center justify-center">
          <SectionTitle>NUESTRO EQUIPO</SectionTitle>
          <div className="w-full p-4 max-sm:hidden">
            <SearchBar
              shortPlaceholder="Buscar miembros..."
              longPlaceholder="Busca miembros, por nombre, apellido, puesto..."
            />
          </div>
        </div>
        <div className="w-full p-1 hidden max-sm:block">
            <SearchBar
              shortPlaceholder="Buscar miembros..."
              longPlaceholder="Busca miembros, por nombre, apellido, puesto..."
            />
          </div>
        <div className="max-md:w-full">
          <MembersSection
            limit={limit}
            currentPage={currentPage}
          />
        </div>
      </Section>
    </>
  );
}
