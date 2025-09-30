import Image from "next/image";

import {
  CreativeTeamCard,
  CreativeTeamCardButton,
  CreativeTeamCardContent,
  CreativeTeamCardImage,
  CreativeTeamCardRole,
  CreativeTeamCardSubtitle,
  CreativeTeamCardTitle,
} from "@/components/creative-team-card/creative-team-card";
import { Footer } from "@/components/footer/footer";
import { Glow, GlowContainer } from "@/components/glow/glow";
import { MissionCard } from "@/components/mission-card/mission-card";
import { Navbar } from "@/components/navbar/navbar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";
import { MarqueeItem, MarqueeWrapper } from "@/components/ui/marquee";

export default async function Page() {
  return (
    <>
      <Navbar titles={["Creative Team", "Our Team"]} />
      <Section>
        <div className="relative flex flex-col items-center justify-center">
          <GlowContainer className="absolute inset-0 z-0 flex items-center justify-center">
            <Glow
              size="normal"
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2
                 bg-[radial-gradient(circle,rgba(95,54,190,0.5)_0%,rgba(95,54,190,0)_100%)] blur-3xl
                 md:h-[700px] md:w-[700px]"
            />
          </GlowContainer>

          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <h1 className="pt-10 text-4xl font-bold sm:text-6xl lg:pt-20">
              <span className="text-primary">Equipo</span> detrás de la pantalla
            </h1>
            <p className="max-w-xl px-2 text-base sm:text-xl">
              Detrás del monitor estamos nosotros: ideas, café y pasión por
              construir experiencias que inspiran.
            </p>
            <MarqueeWrapper className="lg:!hidden">
              <MarqueeItem>
                <Image
                  src="/creative-team/og-team.webp"
                  alt="Equipo original del proyecto CSI PRO Website."
                  width={300}
                  height={192}
                  className="size-full object-cover lg:hidden"
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/creative-team/creative-team-2.webp"
                  alt="Luis Hernández y Karla Lerma, miembros de CSI PRO."
                  width={180}
                  height={192}
                  className="size-full object-cover lg:hidden"
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/creative-team/creative-team-verito.webp"
                  alt="Verónica Rodríguez, líder de CSI PRO (2025)."
                  width={300}
                  height={192}
                  className="size-full object-cover lg:hidden"
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/creative-team/creative-team-1.webp"
                  alt="Saúl Ramos y Kevin Ochoa, exlíderes de CSI PRO (2022-2025)."
                  width={300}
                  height={192}
                  className="size-full object-cover lg:hidden"
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/creative-team/creative-team-karo.webp"
                  alt="Karolina Badilla, miembro de CSI PRO."
                  width={144}
                  height={192}
                  className="size-full object-cover lg:hidden"
                />
              </MarqueeItem>
            </MarqueeWrapper>
            <div className="relative hidden h-80 w-full gap-2 px-8 lg:flex">
              <MarqueeItem className="translate-y-16 -rotate-12 transform">
                <Image
                  src="/creative-team/og-team.webp"
                  alt="Equipo original del proyecto CSI PRO Website."
                  width={420}
                  height={420}
                  className="hidden size-full object-cover lg:block"
                />
              </MarqueeItem>
              <MarqueeItem className="translate-y-5 -rotate-6 transform">
                <Image
                  src="/creative-team/creative-team-2.webp"
                  alt="Luis Hernández y Karla Lerma, miembros de CSI PRO."
                  width={420}
                  height={420}
                  className="hidden size-full scale-125 object-cover object-[50%_65%] lg:block"
                />
              </MarqueeItem>
              <MarqueeItem>
                <Image
                  src="/creative-team/creative-team-verito.webp"
                  alt="Verónica Rodríguez, líder de CSI PRO (2025)."
                  width={420}
                  height={420}
                  className="hidden size-full scale-125 object-cover object-[75%_50%] lg:block"
                />
              </MarqueeItem>
              <MarqueeItem className="translate-y-5 rotate-6 transform">
                <Image
                  src="/creative-team/creative-team-1.webp"
                  alt="Saúl Ramos y Kevin Ochoa, exlíderes de CSI PRO (2022-2025)."
                  width={420}
                  height={420}
                  className="hidden size-full object-cover object-[55%_50%] lg:block"
                />
              </MarqueeItem>
              <MarqueeItem className="translate-y-16 rotate-12 transform">
                <Image
                  src="/creative-team/creative-team-karo.webp"
                  alt="Karolina Badilla, miembro de CSI PRO."
                  width={420}
                  height={420}
                  className="hidden size-full object-cover lg:block"
                />
              </MarqueeItem>
            </div>
            <Button className="px-4 py-4 font-bold uppercase sm:rounded-2xl sm:px-5 sm:py-7 sm:text-2xl">
              Más del proyecto
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle> MISIÓN </SectionTitle>
        <div className="px-4 pb-12 lg:px-32">
          <MissionCard></MissionCard>
        </div>
      </Section>

      <Section>
        <SectionTitle> EQUIPO CREATIVO </SectionTitle>
        <div className="grid w-full grid-cols-2 items-center justify-center gap-4 px-4 pb-12 lg:flex lg:flex-row lg:flex-wrap lg:px-32">
          <CreativeTeamCard>
            <CreativeTeamCardImage
              src="/creative-team/saul-ramos.png"
              alt="Saúl Ramos Laborín, presidente de CSI PRO (2023-2025)."
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>Saúl Ramos Laborín</CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Presidente 2023-2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>
                Líder del equipo + Full Stack Developer
              </CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Saúl Alberto"
              memberLastName="Ramos Laborín"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard>
            <CreativeTeamCardImage
              variant="orange"
              src="/creative-team/karla-lerma.png"
              alt="Karla Lerma, presidenta de CSI PRO (2023-2025)."
              imageClassName="scale-125 object-[50%_25%] translate-x-2"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>Karla Lerma Molina</CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Presidenta 2023-2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>
                Diseñadora UX/UI + Full Stack Developer
              </CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Karla Arleth"
              memberLastName="Lerma Molina"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard>
            <CreativeTeamCardImage
              variant="pink"
              src="/creative-team/karolina-badilla.png"
              alt="Karolina Badilla, miembro de CSI PRO."
              imageClassName="scale-125 object-[50%_35%]"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>
                Karolina Badilla Ramírez
              </CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Miembro 2022-2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>
                Diseñadora UX/UI + Full Stack Developer
              </CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Karolina Abigail"
              memberLastName="Badilla Ramírez"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard>
            <CreativeTeamCardImage
              variant="cyan"
              src="/creative-team/andres-antelo.png"
              alt="Andrés Antelo, miembro de CSI PRO."
              imageClassName="scale-[150%] object-[60%_50%] -translate-y-2"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>
                Andrés Antelo Figueroa
              </CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Miembro 2023-2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>
                Diseñador UX/UI + Front End Developer
              </CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Andrés"
              memberLastName="Antelo Figueroa"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard>
            <CreativeTeamCardImage
              variant="lightPurple"
              src="/creative-team/luis-hernandez.png"
              alt="Luis Hernández, miembro de CSI PRO."
              imageClassName="scale-125 object-[50%_30%] -translate-x-2"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>
                Luis Ernesto Hernández López
              </CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Miembro 2023-2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>Full Stack Developer</CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Luis Ernesto"
              memberLastName="Hernández López"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard>
            <CreativeTeamCardImage
              variant="red"
              src="/creative-team/veronica-rodriguez.png"
              alt="Verónica Rodríguez, presidenta de CSI PRO (2025-actualidad)."
              imageClassName="scale-125 object-[60%_50%]"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>
                Verónica Rodríguez Navarro
              </CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Presidenta 2025
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>Diseñadora UX/UI</CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Verónica"
              memberLastName="Rodríguez Navarro"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
          <CreativeTeamCard className="col-span-2">
            <CreativeTeamCardImage
              variant="green"
              src="/creative-team/kevin-ochoa.png"
              alt="Kevin Ochoa, presidente de CSI PRO (2022-2023)."
              imageClassName="scale-[130%] object-[40%_50%] -translate-y-4"
            />
            <CreativeTeamCardContent>
              <CreativeTeamCardTitle>
                Kevin Ochoa Guerrero
              </CreativeTeamCardTitle>
              <CreativeTeamCardSubtitle>
                Presidente 2022-2023
              </CreativeTeamCardSubtitle>
              <CreativeTeamCardRole>
                Diseñador UX/UI + Front End Developer
              </CreativeTeamCardRole>
            </CreativeTeamCardContent>
            <CreativeTeamCardButton
              memberName="Kevin"
              memberLastName="Ochoa Guerrero"
            >
              Ver Portafolio
            </CreativeTeamCardButton>
          </CreativeTeamCard>
        </div>
      </Section>
      <Footer />
    </>
  );
}
