import Image from "next/image";
import { HiOutlineUserCircle } from "react-icons/hi";
import { LuSquareCode } from "react-icons/lu";
import { TbSeeding } from "react-icons/tb";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import EventsSection from "@/components/events-section/events-section";
import { Footer } from "@/components/footer/footer";
import { Glow, GlowContainer } from "@/components/glow/glow";
import { HeroCard } from "@/components/hero-carousel/hero-card";
import { HeroCarousel } from "@/components/hero-carousel/hero-carousel";
import { Navbar } from "@/components/navbar/navbar";
import ProjectsSection from "@/components/projects-section/projects-section";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const limit = 6;
  const currentPage = Number(searchParams?.page) || 1;
  const dummyImages = [
    { id: 1, url: "/portada.jpg" },
    { id: 2, url: "/portada2.jpg" },
    { id: 3, url: "/portada4.jpg" },
  ];

  return (
    <>
      <Navbar titles={["BIENVENIDOS", "REBOOT", "HOME"]} />
      <Section>
        <div className="absolute inset-0 -z-10 size-full overflow-hidden">
          <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-80 "></div>
          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[28rem]"></div>
          <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[36rem]"></div>
          <div className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[44rem]"></div>
          <div className="absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-stone-400 border-opacity-10 bg-transparent sm:size-[52rem]"></div>
        </div>

        <GlowContainer>
          {/* Basic usage */}
          <Glow
            breathe
            className="bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_62%)]"
          />
          {/* Overlayed glows within a group */}
          {/*<GlowGroup turn>
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(123,30,114,1)_100%);] [clip-path:circle(50%_at_50%_50%)]" />
            <Glow className="bg-[radial-gradient(circle,rgba(115,115,115,1)_0%,rgba(49,0,163,1)_57%);] [clip-path:polygon(26%_10%,_49%_52%,_96%_56%,_93%_70%,_85%_80%,_77%_85%,_68%_90%,_58%_94%,_49%_94%,_38%_91%,_28%_87%,_18%_79%,_14%_71%,_8%_63%,_6%_55%,_7%_43%,_11%_31%,_15%_21%)]" />
          </GlowGroup>*/}
        </GlowContainer>

        <div className="px-4 pt-10  sm:pb-6 sm:pt-20">
          <h1 className="text-center text-4xl font-bold  sm:text-6xl ">
            Un espacio de <span className="text-primary">desarrollo</span>,
            <br />
            <span className="text-primary"> innovación</span> &
            <span className="text-primary "> investigación</span>
            <br />
            <span className="text-xl font-semibold sm:text-4xl ">
              en la Universidad de Sonora
            </span>
          </h1>
        </div>
        <Button
          variant="outline"
          className="px-4 py-4 text-[14px] font-bold uppercase sm:rounded-2xl sm:px-5 sm:py-7 sm:text-2xl "
        >
          Get Started
        </Button>
        <div className="sm:py-5"></div>

        <HeroCarousel images={dummyImages}>
          {dummyImages.map((img) => (
            <HeroCard key={`heroCard ${img.id}`} imageId={img.id}>
              <Image
                src={img.url}
                width={1200}
                height={400}
                alt="foto de portada"
                className=" object-cover"
              />
            </HeroCard>
          ))}
        </HeroCarousel>
        <div className="py-7 sm:py-24"></div>
      </Section>

      <Section>
        <SectionTitle>NOSOTROS</SectionTitle>
        <GlowContainer>
          <Glow
            className="left-[20%] size-[72vw] bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_90%)] [clip-path:ellipse(50%_50%_at_50%_50%)] md:top-[35%] md:size-[64vw] lg:top-[40%] lg:size-[48vw] xl:left-[8%] xl:top-[50%] xl:size-[36vw] 2xl:left-[10%]"
            size="small"
          />
        </GlowContainer>
        <div className="flex w-full flex-col items-center gap-5 px-4 pb-4 md:flex-row md:gap-6 md:pb-12 lg:gap-16">
          <div className="relative aspect-[3/4] h-fit w-full md:aspect-[4/3]">
            <Image
              src="nosotros.webp"
              // width={500}
              // height={300}
              fill
              alt="foto de portada"
              className="rounded-3xl md:rounded-2xl md:object-cover md:object-[50%_15%]"
              unoptimized
            />
          </div>
          <div className="flex w-full flex-col items-center gap-5 md:items-start">
            <div className="flex flex-row flex-wrap items-center justify-center gap-3 md:justify-start">
              <Chip background>
                <ChipIcon>
                  <TbSeeding />
                </ChipIcon>
                <ChipLabel className="text-sm">Fundado en 2014</ChipLabel>
              </Chip>
              <Chip background>
                <ChipIcon>
                  <HiOutlineUserCircle />
                </ChipIcon>
                <ChipLabel className="text-sm">18 Miembros</ChipLabel>
              </Chip>
              <Chip background>
                <ChipIcon>
                  <LuSquareCode />
                </ChipIcon>
                <ChipLabel className="text-sm">5 Proyectos Activos</ChipLabel>
              </Chip>
            </div>
            <h2 className="text-center font-poppins text-3xl">
              ¿Quiénes Somos?
            </h2>
            <p className="text-base">
              Somos estudiantes de la{" "}
              <span className="text-primary">Universidad de Sonora</span> en la
              búsqueda de innovar. Realizamos e implementamos tecnologías, tales
              como software desarrollado por nosotros
            </p>

            <Button variant="outline" className="text-base">
              Más de nosotros
            </Button>
          </div>
        </div>
      </Section>

      <EventsSection limit={limit} currentPage={currentPage} pageLimit={2} />
      <Section classNameDiv="pb-16">
        <SectionTitle>Nuestros proyectos</SectionTitle>
        <ProjectsSection />
      </Section>
      <Footer />
    </>
  );
}
