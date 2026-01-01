import Image from "next/image";

import { GlowContainer, Glow } from "@/components/glow/glow";
import GradientBackground from "@/components/gradient-background/gradient-background";
import { InfiniteMembers } from "@/components/members-section/infinite-members";
import { Navbar } from "@/components/navbar/navbar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";
import { MarqueeItem, MarqueeWrapper } from "@/components/ui/marquee";
import { fetchPopulatedMembers } from "@/services/members";

export default async function AboutUsPage() {
  const limit = 8;
  const members = await fetchPopulatedMembers(limit, 1);

  return (
    <>
      <Navbar titles={["TEAM", "LEGACY", "MEMBERS"]} />
      <main>
        <Section innerClassName="gap-2">
          <div className="relative flex flex-col items-center justify-center">
            <GradientBackground />
            <GlowContainer className="">
              <Glow className="left-[65%] bg-[radial-gradient(circle,rgba(170,13,255,0.1)_35%,rgba(255,58,235,0)_30%)]" />
            </GlowContainer>
            <div className="z-10 w-full items-center justify-center pt-8 lg:flex lg:pt-20">
              <div className="flex w-1/2 flex-col justify-center gap-6 max-lg:w-full max-lg:p-1 lg:gap-12 lg:pl-4">
                <div className="space-y-6 text-left">
                  <h1 className="text-5xl font-bold max-lg:text-center">
                    Conoce sobre <span className="text-primary">nosotros</span>{" "}
                    y nuestra <span className="text-primary">historia</span>
                  </h1>
                  <p className="text-base opacity-70 max-lg:text-center">
                    Somos alumnos amantes de la tecnología trabajando
                    diariamente nuestro futuro en este espacio de desarrollo,
                    innovación e investigación llamado el CSI PRO.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-left text-base opacity-70 max-lg:text-center">
                    Redes sociales de CSI PRO
                  </p>
                  <div className="flex gap-2 max-lg:justify-center">
                    <Twitter />
                    <Facebook />
                    <Instagram />
                    <LinkedIn />
                    <GitHub />
                  </div>
                </div>
              </div>

              <div className="hidden w-1/2 justify-center lg:flex lg:gap-4 lg:px-20">
                <div className="flex items-end max-lg:gap-3 lg:flex-col lg:space-y-4">
                  <div className="overflow-hidden rounded-xl lg:h-72 lg:w-64">
                    <Image
                      src="/nosotros/everyone.webp"
                      alt="Miembros del CSI PRO al 2024."
                      width={600}
                      height={800}
                      className="h-auto w-auto object-cover"
                    />
                  </div>
                  <div className="h-56 w-72 overflow-hidden rounded-xl">
                    <Image
                      src="/nosotros/csipro-2024-1.webp"
                      alt="Luis Ernesto Hernández, David Núñez, y Andrés Antelo."
                      width={600}
                      height={500}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
                <div className="max-lg:flex max-lg:gap-3 lg:space-y-4">
                  <div className="mt-8 h-56 w-72 overflow-hidden rounded-xl">
                    <Image
                      src="/nosotros/csipro-reboot-2023.webp"
                      alt="Paula Romero en el CSI PRO REBOOT 2023."
                      width={600}
                      height={500}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl lg:h-72 lg:w-56">
                    <Image
                      src="/nosotros/sislab-devs.webp"
                      alt="Kevin Ochoa y Saúl Fimbres en 2023."
                      width={600}
                      height={800}
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <MarqueeWrapper className="lg:!hidden">
                <MarqueeItem className="pb-4 pt-2" innerClassName="h-64">
                  <Image
                    src="/nosotros/everyone.webp"
                    alt="Miembros del CSI PRO al 2024."
                    width={300}
                    height={400}
                    className="w-64 object-cover"
                  />
                </MarqueeItem>
                <MarqueeItem className="pb-4 pt-2" innerClassName="h-64">
                  <Image
                    src="/nosotros/csipro-reboot-2023.webp"
                    alt="Paula Romero en el CSI PRO REBOOT 2023."
                    width={500}
                    height={400}
                    className="h-full w-80 object-cover"
                  />
                </MarqueeItem>
                <MarqueeItem className="pb-4 pt-2" innerClassName="h-64">
                  <Image
                    src="/nosotros/csipro-2024-1.webp"
                    alt="Luis Ernesto Hernández, David Núñez, y Andrés Antelo."
                    width={500}
                    height={320}
                    className="h-full w-72 object-cover"
                  />
                </MarqueeItem>
                <MarqueeItem className="pb-4 pt-2" innerClassName="h-64">
                  <Image
                    src="/nosotros/sislab-devs.webp"
                    alt="Kevin Ochoa y Saúl Fimbres en 2023."
                    width={300}
                    height={400}
                    className="h-full w-64 object-cover"
                  />
                </MarqueeItem>
              </MarqueeWrapper>
            </div>
          </div>
        </Section>
        <Section innerClassName="pb-16 pt-16">
          <div className="flex w-full items-center justify-center">
            <SectionTitle>NUESTRO EQUIPO</SectionTitle>
            {/* <div className="w-full p-4 max-sm:hidden">
            <SearchBar
              shortPlaceholder="Buscar miembros..."
              longPlaceholder="Busca miembros, por nombre, apellido, puesto..."
            />
          </div> */}
          </div>
          {/* <div className="hidden w-full px-3 max-sm:block">
          <SearchBar
            shortPlaceholder="Buscar miembros..."
            longPlaceholder="Busca miembros, por nombre, apellido, puesto..."
          />
        </div> */}
          <div className="max-md:w-full">
            <InfiniteMembers limit={limit} initialData={members} />
          </div>
        </Section>
      </main>
    </>
  );
}
