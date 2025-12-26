import { format } from "date-fns";
import { Cake, Download, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Chip, ChipIcon, ChipLabel } from "@/components/chip/chip";
import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow } from "@/components/glow/glow";
import GradientBackground from "@/components/gradient-background/gradient-background";
import MemberEvents from "@/components/members-section/member-events";
import MemberProjects from "@/components/members-section/member-projects";
import { Navbar } from "@/components/navbar/navbar";
import { RichText } from "@/components/rich-text/rich-text";
import { Section } from "@/components/section/section";
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
import { CMS_URL, cn } from "@/lib/utils";
import { fetchMember } from "@/services/members";

export default async function Page({ params }: { params: { slug: string } }) {
  const member = await fetchMember(params.slug);

  if (!member) {
    return notFound();
  }

  const gallery = [
    { id: "featured-picture", imagen: member.foto },
    ...member["fotos-secundarias"],
  ];

  const hasProjects = member.proyectos.totalDocs > 0;
  const hasEvents = member.eventos.totalDocs > 0;

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
                  {member.nombres} {member.apellidos}
                </h1>
                <p className="font-klee text-base font-light lg:text-2xl">
                  {member.subtitle ?? "Miembro del CSI PRO"}
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
                    src={`${CMS_URL}${member.foto.url}`}
                    alt={`${member.nombres} ${member.apellidos}`}
                    className="size-full rounded-full object-cover"
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex w-full flex-col gap-6 pt-10 lg:flex-row-reverse lg:justify-end lg:gap-12">
          <div className="w-full space-y-5 px-4">
            <div className="w-full space-y-4">
              <h2 className="font-justme text-5xl font-normal text-white">
                About me
              </h2>
              {/* @ts-expect-error I don't want to type out the Lexical output structure */}
              {member.sobre_mi ? <RichText data={member.sobre_mi} /> : null}
            </div>
            {member.fecha_nacimiento ? (
              <div className="inline-flex w-full items-center justify-start gap-2">
                <Cake size={20} />
                <span aria-label="Fecha de nacimiento">
                  {format(new Date(member.fecha_nacimiento), "dd 'de' MMMM")}
                </span>
              </div>
            ) : null}
            <div className="flex w-full flex-wrap items-center justify-between gap-2 gap-y-4">
              <div className="flex w-full gap-2 lg:w-auto">
                {member.resume ? (
                  <Button
                    asChild
                    className="w-full gap-2 bg-gradient-to-br from-[#582AC2] to-[#9870F4] text-white transition-all lg:w-auto"
                  >
                    <Link
                      download={member.resume.name}
                      href={`/api/resume?fileUrl=${member.resume.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={16} />
                      Descargar CV
                    </Link>
                  </Button>
                ) : null}
                {member.portfolio ? (
                  <Button
                    asChild
                    className="w-full gap-2 bg-gradient-to-br from-[#07B98A] to-[#1BBD92] text-white transition-all lg:w-auto"
                  >
                    <Link
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon size={16} />
                      Portafolio
                    </Link>
                  </Button>
                ) : null}
              </div>
              <div className="flex w-full justify-center gap-4 lg:w-auto">
                {member.redes.map((social) => (
                  <Link
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.red.nombre}
                  >
                    <Image
                      src={`${CMS_URL}${social.red.logo_monocromatico.url}`}
                      alt={social.red.nombre}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-lg">
            <Carousel>
              <CarouselContent className="-ml-4 h-96 w-full lg:aspect-[7/8] lg:h-auto">
                {gallery.map((image) => (
                  <CarouselItem
                    key={image.id}
                    className={cn(
                      "basis-5/6 pl-4 lg:basis-full",
                      gallery.length === 1 && "basis-full",
                    )}
                  >
                    <div className="relative size-full overflow-hidden rounded-md">
                      <Image
                        src={`${CMS_URL}${image.imagen.url}`}
                        alt={image.imagen.alt}
                        className="h-full w-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="max-lg:hidden" />
              <CarouselNext className="max-lg:hidden" />
              <CarouselNavigation
                name={`Galería de ${member.nombres} ${member.apellidos}`}
              />
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
                  {member.carrera ? (
                    <TableRow>
                      <TableHead className="font-bold">Carrera</TableHead>
                      <TableCell>{member.carrera.nombre}</TableCell>
                    </TableRow>
                  ) : null}
                  <TableRow>
                    <TableHead className="font-bold">Estado</TableHead>
                    <TableCell className="capitalize">
                      {member.estado}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="font-bold">Correo</TableHead>
                    <TableCell>{member.email}</TableCell>
                  </TableRow>
                  {member.fecha_entrada ? (
                    <TableRow>
                      <TableHead className="font-bold">
                        Ingreso al CSI PRO
                      </TableHead>
                      <TableCell>
                        {format(new Date(member.fecha_entrada), "PPP")}
                      </TableCell>
                    </TableRow>
                  ) : null}
                  {member.cargo ? (
                    <TableRow>
                      <TableHead className="font-bold">
                        Puesto en CSI PRO
                      </TableHead>
                      <TableCell>
                        {typeof member.cargo === "string"
                          ? member.cargo
                          : member.cargo.nombre}
                      </TableCell>
                    </TableRow>
                  ) : null}
                  <TableRow>
                    <TableHead className="font-bold">
                      Tecnologías preferidas
                    </TableHead>
                    <TableCell>
                      <div className="flex max-w-96 flex-wrap gap-2">
                        {member.tecnologias.length === 0 ? (
                          <span className="text-stone-400">
                            Ninguna tecnología registrada
                          </span>
                        ) : null}
                        {member.tecnologias.map((tech) => (
                          <Chip key={tech.id} variant="white">
                            <ChipIcon>
                              <Image
                                src={
                                  tech.logo_monocromatico
                                    ? `${CMS_URL}${tech.logo_monocromatico.url}`
                                    : `/images/technologies/default-logo.png`
                                }
                                alt={tech.nombre}
                                width={20}
                                height={20}
                              />
                            </ChipIcon>
                            <ChipLabel>{tech.nombre}</ChipLabel>
                          </Chip>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="flex w-full flex-col gap-8 px-4 py-8 lg:w-1/2">
            {hasProjects || hasEvents ? (
              <>
                <h3 className="font-justme text-4xl text-[#9870F4]">
                  He participado en
                </h3>

                <div
                  className={cn(
                    "flex flex-col gap-2 rounded-3xl",
                    hasProjects &&
                      hasEvents &&
                      "bg-gradient-to-b from-primary/10 from-25% via-transparent via-50% to-[#D48842]/10 to-75%",
                    hasProjects && !hasEvents && "bg-primary/10",
                    !hasProjects && hasEvents && "bg-[#FF9E45]/10",
                  )}
                >
                  {hasProjects && (
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-3xl rounded-b-xl border-2 border-b-0 border-primary py-4",
                        hasEvents ? "border-b-0" : "rounded-b-3xl border-b-2",
                      )}
                    >
                      <span className="text-center text-3xl font-bold uppercase tracking-wide text-[#9870F4]">
                        {member.proyectos.totalDocs}{" "}
                        {member.proyectos.totalDocs === 1
                          ? "proyecto"
                          : "proyectos"}
                      </span>
                    </div>
                  )}
                  {hasProjects && hasEvents && (
                    <span className="text-center font-justme text-2xl leading-none">
                      y
                    </span>
                  )}
                  {hasEvents && (
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-3xl rounded-t-xl border-2 border-t-0 border-[#FF9E45] py-4",
                        hasProjects ? "border-t-0" : "rounded-t-3xl border-t-2",
                      )}
                    >
                      <span className="text-center text-3xl font-bold uppercase tracking-wide text-[#FF9E45]">
                        {member.eventos.totalDocs}{" "}
                        {member.eventos.totalDocs === 1 ? "evento" : "eventos"}
                      </span>
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Section>
      {/* <Section>
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
      </Section> */}
      {hasEvents && (
        <Section className="pb-8">
          <h2 className="px-4 font-justme text-5xl font-normal text-[#9870F4]">
            Eventos
          </h2>
          <MemberEvents memberId={member.id} />
        </Section>
      )}
      {hasProjects && (
        <Section className="pb-16">
          <h2 className="px-4 font-justme text-5xl font-normal text-[#9870F4]">
            Proyectos
          </h2>
          <MemberProjects memberId={member.id} />
          {/* <Button className="uppercase sm:hidden">
          <Link href="/proyectos" prefetch>
            Ver todos
          </Link>
        </Button> */}
        </Section>
      )}
      <Footer />
    </>
  );
}
