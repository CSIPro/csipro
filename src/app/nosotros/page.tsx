import Image from "next/image";

import { GlowContainer, Glow } from "@/components/glow/glow";
import MembersSection from "@/components/members-section/members-section";
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
        <div className="absolute left-1/2 z-0 h-full w-full max-w-6xl -translate-x-1/2 overflow-hidden ">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="35"
                height="35"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 35 0 L 0 0 0 35"
                  fill="none"
                  stroke="#3b2f58"
                  strokeWidth="0.5"
                />
              </pattern>
              <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                <stop offset="30%" stopColor="white" stop-opacity="1" />
                <stop offset="100%" stopColor="white" stop-opacity="0" />
              </radialGradient>
              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              mask="url(#fade-mask)"
            />
          </svg>
        </div>
        <GlowContainer className="">
          <Glow className="left-[65%] bg-[radial-gradient(circle,rgba(170,13,255,0.1)_35%,rgba(255,58,235,0)_30%)]" />
        </GlowContainer>
        <div className="z-10 flex h-full w-full items-center justify-center lg:pt-20">
          <div className="flex h-full w-1/2 flex-col justify-center space-y-[48px] pl-4">
            <div className="space-y-[26px] text-left">
              <h1 className="text-3xl font-bold sm:text-5xl">
                Conoce sobre <span className="text-primary">nosotros</span> y
                nuestra <span className="text-primary">historia</span>
              </h1>
              <p className="sm:text-md text-left text-base opacity-70">
                Somos alumnos amantes de la tecnología trabajando diariamente
                nuestro futuro en este espacio de desarrollo, innovación e
                investigación llamado el CSI Pro.
              </p>
            </div>
            <div className="space-y-[26px]">
              <p className="sm:text-mds text-left text-base opacity-70">
                Redes sociales de CSI Pro
              </p>
              <div className="flex gap-2">
                <Twitter className="h-4 w-4" />
                <Facebook className="h-4 w-4" />
                <Instagram className="h-4 w-4" />
                <LinkedIn className="h-4 w-4" />
                <GitHub className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="display inline-flex w-1/2 justify-center gap-4 px-20">
            <div className="flex flex-col items-end space-y-4">
              <div className="h-auto w-11/12 overflow-hidden rounded-xl">
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
            <div className="space-y-4">
              <div className="mt-10 h-auto w-auto overflow-hidden rounded-xl">
                <Image
                  src="nosotros2.png"
                  alt="foto de portada"
                  width={1920}
                  height={1080}
                  className="h-auto w-auto object-cover"
                  unoptimized
                />
              </div>
              <div className="h-auto w-10/12 overflow-hidden rounded-xl">
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

      <Section classNameDiv="pb-16">
        <SectionTitle>NUESTRO EQUIPO</SectionTitle>
        <div className="hidden md:block">
          <MembersSection
            limit={limit}
            currentPage={currentPage}
          ></MembersSection>
        </div>
      </Section>
    </>
  );
}
