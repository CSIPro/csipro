import { Cake, Download, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import EventsSection from "@/components/events-section/events-section";
import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow } from "@/components/glow/glow";
import GradientBackground from "@/components/gradient-background/gradient-background";
import { Navbar } from "@/components/navbar/navbar";
import ProjectsSection from "@/components/projects-section/projects-section";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const images = [
    { index: 1, src: "taylor_carrusel.jpg", alt: "teilor-1" },
    { index: 2, src: "taylor_carrusel_2.jpg", alt: "teilor-2" },
    { index: 3, src: "taylor_carrusel_3.jpg", alt: "teilor-3" },
  ];

  const limit = 3;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Navbar titles={["TEAM", "HISTORIA", "MIEMBROS", "NOSOTROS"]} />
      <Section>
        <GradientBackground />
        <GlowContainer className="">
          <Glow className="left-[65%] bg-[radial-gradient(circle,rgba(170,13,255,0.1)_35%,rgba(255,58,235,0)_30%)]" />
        </GlowContainer>
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-3 pt-10 lg:flex-row">
          <div className="flex h-full flex-col justify-center space-y-[48px] max-lg:w-full max-lg:p-1 lg:pl-4">
            <div className="space-y-[26px] text-left">
              <div className="space-y-3 text-center">
                <span className="select-none font-justme text-4xl font-normal max-lg:text-center lg:text-5xl">
                  Hello, I am
                </span>
                <h1 className="font-poppins text-2xl font-bold lg:text-5xl">
                  Karolina Badilla Ramirez
                </h1>
                <p className="font-klee text-base font-light lg:text-2xl">
                  Frontend developer, UX/UI Designer
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex w-full justify-center gap-3 px-20 lg:w-auto">
            <div className="group relative flex w-full items-center justify-center rounded-full bg-[#16131F] sm:h-[150px] sm:w-[150px] lg:size-[20rem]">
              <div className="flex w-full items-end gap-3">
                <div
                  className="absolute inset-[-2px] z-[-1] rounded-full opacity-80"
                  style={{
                    background: `linear-gradient(145deg, #1E7C63, #16131F, #9E33B9`,
                  }}
                ></div>
                <div
                  className="absolute inset-[-3px] z-[-2] rounded-full blur-[50px] transition-opacity group-hover:opacity-50"
                  style={{
                    background: `linear-gradient(145deg, #1E7C63, #16131F, #9E33B9`,
                  }}
                ></div>
                <div className="relative aspect-square w-full rounded-full">
                  <Image
                    fill
                    src="taylor_graduada.jpg"
                    alt="teilor"
                    className="size-full rounded-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex w-full flex-col gap-6 pt-10 lg:flex-row-reverse lg:gap-12">
          <div className="space-y-5 px-4">
            <div className="w-full space-y-4">
              <h2 className="font-justme text-5xl font-normal text-white">
                About me
              </h2>
              <p className="text-base text-stone-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Novia de Andrés
              </p>
            </div>
            <div className="inline-flex w-full items-center justify-start gap-2">
              <Cake size={20} />
              <span aria-label="Fecha de nacimiento">22 de diciembre</span>
            </div>
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <div className="flex w-full gap-2 lg:w-auto">
                <Button className="w-full gap-2 bg-gradient-to-br from-[#582AC2] to-[#9870F4] text-white transition-all lg:w-auto">
                  <Download size={16} />
                  Descargar CV
                </Button>
                <Button className="w-full gap-2 bg-gradient-to-br from-[#07B98A] to-[#1BBD92] text-white transition-all lg:w-auto">
                  <LinkIcon size={16} />
                  Link
                </Button>
              </div>
              <div className="flex w-full justify-evenly lg:w-auto lg:gap-4">
                <Twitter className="size-6" />
                <Facebook className="size-6" />
                <Instagram className="size-6" />
                <LinkedIn className="size-6" />
                <GitHub className="size-6" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Carousel>
              <CarouselContent className="-ml-4 h-96 w-full lg:aspect-[7/8] lg:h-auto">
                {images.map((image) => (
                  <CarouselItem
                    key={image.index}
                    className="basis-5/6 pl-4 lg:basis-full"
                  >
                    <div className="relative size-full overflow-hidden rounded-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        fill
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="max-lg:hidden" />
              <CarouselNext className="max-lg:hidden" />
              <CarouselNavigation name={`Galería de Karolina Badilla`} />
            </Carousel>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex w-full flex-col items-center justify-center gap-10 pb-8 pt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
          <div className="flex flex-col lg:w-2/3">
            <h2 className="px-4 font-justme text-5xl font-normal text-[#9870F4]">
              Información
            </h2>
            <div className="lg:px-4">
              <Table>
                <TableBody className="text-sm">
                  <TableRow>
                    <TableHead className="font-bold">Carrera</TableHead>
                    <TableCell>Ingeniería en Sistemas de Información</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">Estado</TableHead>
                    <TableCell>Egresado</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">
                      Correo institucional
                    </TableHead>
                    <TableCell>a220210687@unison.mx</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">
                      Ingreso al CSI PRO
                    </TableHead>
                    <TableCell>08 de agosto de 2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">
                      Puesto en CSI PRO
                    </TableHead>
                    <TableCell>Miembro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">
                      Tecnologías preferidas
                    </TableHead>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        <Chip>
                          <ChipIcon></ChipIcon>
                          <ChipLabel>Tailwind CSS</ChipLabel>
                        </Chip>
                        <Chip>
                          <ChipIcon></ChipIcon>
                          <ChipLabel>Next.js</ChipLabel>
                        </Chip>
                        <Chip>
                          <ChipIcon></ChipIcon>
                          <ChipLabel>React</ChipLabel>
                        </Chip>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 px-4 py-8 lg:w-1/2">
            <h3 className="font-justme text-4xl text-[#9870F4]">
              He participado en
            </h3>

            <div className="flex flex-col gap-2 rounded-3xl bg-gradient-to-b from-primary/10 from-25% via-transparent via-50% to-[#D48842]/10 to-75%">
              <div className="flex items-center justify-center rounded-3xl rounded-b-xl border-2 border-b-0 border-primary py-4">
                <span className="text-center text-3xl font-bold uppercase tracking-wide text-[#9870F4]">
                  3 proyectos
                </span>
              </div>
              <span className="text-center font-justme text-2xl leading-none">
                y
              </span>
              <div className="flex items-center justify-center rounded-3xl rounded-t-xl border-2 border-t-0 border-[#FF9E45] py-4">
                <span className="text-center text-3xl font-bold uppercase tracking-wide text-[#FF9E45]">
                  10 eventos
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="inline-flex w-full items-center justify-center px-4 pb-16 pt-8">
          <div className="w-full space-y-9">
            <h2 className="font-justme text-5xl font-normal text-[#FF9E45]">
              Intereses profesionales
            </h2>
            <p className="text-lg text-stone-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doS
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Section>
      <Section className="pb-16">
        <EventsSection limit={limit} currentPage={currentPage} pageLimit={2} />
      </Section>
      <Section classNameDiv="pb-16">
        <div className="flex w-full items-center justify-between pr-4">
          <SectionTitle>Mis proyectos</SectionTitle>
          <Button className="hidden uppercase sm:inline-flex">
            <Link href="/proyectos" prefetch>
              Ver todos
            </Link>
          </Button>
        </div>
        <ProjectsSection />
        <Button className="uppercase sm:hidden">
          <Link href="/proyectos" prefetch>
            Ver todos
          </Link>
        </Button>
      </Section>
      <Footer />
    </>
  );
}
