import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdOutlineFileDownload } from "react-icons/md";

import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow } from "@/components/glow/glow";
import GradientBackground from "@/components/gradient-background/gradient-background";
import { Navbar } from "@/components/navbar/navbar";
import { Section } from "@/components/section/section";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Page() {
  const invoices = [
    {
      invoice: "Carrera",
      value: "Ingeriería en Sistemas de Información",
    },
    {
      invoice: "Estado",
      value: "Egresado",
    },
    {
      invoice: "Correo institucional",
      value: "a220210687@unison.mx",
    },
    {
      invoice: "Ingreso al CSI Pro",
      value: "22 de diciembre del 2022",
    },
    {
      invoice: "Puesto en CSI Pro",
      value: "Miembro",
    },
    {
      invoice: "Tecnologías preferidas",
      value: "Tailwind CSS, Next.js, React.js",
    },
  ];
  return (
    <>
      <Navbar titles={["TEAM", "HISTORIA", "MIEMBROS", "NOSOTROS"]} />
      <Section>
        <GradientBackground />
        <GlowContainer className="">
          <Glow className="left-[65%] bg-[radial-gradient(circle,rgba(170,13,255,0.1)_35%,rgba(255,58,235,0)_30%)]" />
        </GlowContainer>
        <div className="z-10 h-full w-full items-center justify-center pt-20 lg:flex">
          <div className="flex h-full w-1/2 flex-col justify-center space-y-[48px] max-lg:w-full max-lg:p-1 lg:pl-4">
            <div className="space-y-[26px] text-left">
              <div className="space-y-3 text-center">
                <h1 className="font-justme text-6xl font-normal max-lg:text-center">
                  Hello, I am
                </h1>
                <h1 className="font-poppins text-4xl font-bold max-lg:text-center">
                  Karolina Badilla Ramirez
                </h1>
                <h1 className="font-klee text-2xl font-light max-lg:text-center">
                  Frontend developer, UX/UI Designer
                </h1>
              </div>
            </div>
          </div>
          <div className="display inline-flex w-1/2 justify-center max-lg:w-full max-lg:gap-3 lg:gap-4 lg:px-20">
            <div className="group relative h-full bg-[#16131F] max-md:flex max-md:h-[185px] max-md:w-[185px] max-md:items-center max-md:justify-center max-md:rounded-full max-sm:h-[150px] max-sm:w-[150px] md:w-[280px] md:p-2 md:px-[15px]">
              <div className="flex items-end max-lg:gap-3 lg:flex-col lg:space-y-4">
                <div
                  className="absolute inset-[-2px] z-[-1] bg-gradient-to-br opacity-80 max-md:rounded-full"
                  style={{
                    background: `linear-gradient(145deg, #1E7C63, #16131F, #9E33B9`,
                  }}
                ></div>
                <div
                  className="absolute inset-[-3px] z-[-2] bg-gradient-to-br  blur-[50px] transition-opacity group-hover:opacity-50"
                  style={{
                    background: `linear-gradient(145deg, #1E7C63, #16131F, #9E33B9`,
                  }}
                ></div>
                <div className="relative h-52 overflow-hidden rounded max-md:flex max-md:h-[175px] max-md:w-[175px] max-md:items-center max-md:justify-center max-md:rounded-full max-sm:h-[135px] max-sm:w-[135px] md:w-full">
                  <Image
                    fill
                    src="taylor_graduada.jpg"
                    alt="teilor"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mt-28 inline-flex w-full items-center justify-center px-20">
          <div className="w-full">
            <Carousel className="mx-auto w-full max-w-[600px]">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-square">
                    <Image
                      src="taylor_carrusel.jpg"
                      alt="teilor"
                      className="h-full w-full rounded-md object-cover"
                      fill
                      unoptimized
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-square">
                    <Image
                      src="taylor_carrusel_2.jpg"
                      alt="teilor"
                      className="h-full w-full rounded-md object-cover"
                      fill
                      unoptimized
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative aspect-square">
                    <Image
                      src="taylor_carrusel_3.jpg"
                      alt="teilor"
                      className="h-full w-full rounded-md object-cover"
                      fill
                      unoptimized
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="space-y-5 px-8 pl-16">
            <div className="w-full space-y-4">
              <h1 className="font-justme text-6xl font-normal text-white">
                About me
              </h1>
              <p className="text-lg text-stone-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Novia de Andrés
              </p>
            </div>
            <div className="inline-flex w-full items-center justify-end space-x-2">
              <LiaBirthdayCakeSolid />
              <h1>22 de diciembre</h1>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="gap flex gap-5">
                <button className="gap flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#582AC2] to-[#9870F4] px-6 py-3 text-white transition-all">
                  <MdOutlineFileDownload />
                  Descargar CV
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#07B98A] to-[#1BBD92] px-6 py-3 text-white transition-all">
                  <FaLink />
                  Link
                </button>
              </div>
              <div className="flex gap-2 max-lg:justify-center">
                <Twitter className="h-4 w-4" />
                <Facebook className="h-4 w-4" />
                <Instagram className="h-4 w-4" />
                <LinkedIn className="h-4 w-4" />
                <GitHub className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section className="pb-16 pt-16">
        <div className="inline-flex w-full items-center justify-center gap-10 px-20">
          <div>
            <h1 className="text-center font-justme text-6xl font-normal text-[#9870F4]">
              Información
            </h1>
            <Table>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice}>
                    <TableCell className="font-black">
                      {invoice.invoice}
                    </TableCell>
                    <TableCell>{invoice.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="">
            <div className="space-y-2 bg-[#9870F4] p-3 text-center">
              <p className="text-center text-xl font-normal">
                Participacion en
              </p>
              <h1 className="text-6xl font-black">3</h1>
              <p className="text-2xl font-bold">PROYECTOS</p>
            </div>
            <div className="space-y-2 bg-[#D48842] p-3 text-center">
              <p className="text-center text-xl font-normal">
                Participacion en
              </p>
              <h1 className="text-6xl font-black">10</h1>
              <p className="text-2xl font-bold">EVENTOS</p>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
