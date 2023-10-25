import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { Carousel } from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carousel-item";
import { Divider } from "@/components/divider/divider";
import { EventCard } from "@/components/events/event-card";
import { Header } from "@/components/header/header";
import { Section } from "@/components/section/section";
import { MainButton } from "@/components/ui/main-button";
import { StyledLink } from "@/components/ui/styled-link";
import { eventSchema } from "@/payload/collections/events";
import { mediaWrapperSchema } from "@/payload/collections/featured-media";
import { pageSchema } from "@/payload/collections/page";
import { getPayloadClient } from "@/payload/payload-client";

export default function Home({
  events,
  landingPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(landingPage?.metaKeywords);

  return (
    <>
      <Head>
        <title>{`${landingPage?.metaTitle} - CSI PRO`}</title>
        <meta name="description" content={landingPage?.metaDescription} />
        <meta
          name="keywords"
          content={landingPage?.metaKeywords
            ?.map((keyword) => keyword.keyword)
            .join(",")}
        />
      </Head>
      <div className="relative flex min-h-screen flex-col items-center bg-gray-200 font-sans text-muted">
        <Header />
        <div className="flex flex-col items-center gap-4">
          <Section>
            <div className="flex flex-col gap-2 md:gap-12 md:self-start md:p-2 md:pt-12">
              <h2 className="text-center text-xl text-muted md:text-start md:text-2xl">
                Un espacio de <span className="text-primary">desarrollo</span>,{" "}
                <span className="text-primary">innovación</span> e{" "}
                <span className="text-primary">investigación</span> en la
                Universidad de Sonora
              </h2>
              <p className="text-center text-xs text-muted md:text-start md:text-sm">
                Lo más importante para nosotros es demostrar las maravillas que
                la tecnología puede hacer
              </p>
            </div>
            <Carousel className="md:col-span-2">
              {landingPage?.featuredMedia.map((pic) => {
                const picture = mediaWrapperSchema.parse(pic);

                return (
                  <CarouselItem key={picture.id}>
                    <Image
                      fill
                      src={picture.image.url}
                      alt={picture.image.title}
                      className="object-cover"
                    />
                  </CarouselItem>
                );
              }) ?? []}
            </Carousel>
          </Section>
          <Divider>Vista general</Divider>
          <Section className="flex w-full flex-col items-center">
            <h3 className="text-center text-2xl text-muted">Eventos</h3>
            <Carousel className="h-96 md:hidden">
              {events.map((event) => (
                <CarouselItem key={event.id}>
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </Carousel>
            <div className="hidden h-96 w-full items-center gap-2 md:flex">
              {events.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <StyledLink href="#">Ver todos los eventos</StyledLink>
          </Section>
          <Section className="flex w-full flex-col items-center">
            <h3 className="text-center text-lg text-muted">Proyectos</h3>
            <div className="flex h-96 w-full flex-col items-center justify-between overflow-hidden rounded-xl bg-[#00c795] p-2 text-white">
              <h3 className="text-center text-3xl font-bold">SISLAB</h3>
              <div className="relative h-3/5 w-full">
                <Image
                  fill
                  src="/assets/projects/sislab/sislab-login-mobile.png"
                  alt="Mockup del proyecto SISLAB"
                  className="object-contain"
                />
              </div>
              <p className="text-center">
                Sistema de solicitudes para laboratorios
              </p>
              <MainButton>Ver más</MainButton>
            </div>
            <MainButton>Ver todos los proyectos</MainButton>
          </Section>
          <Section className="flex w-full flex-col items-center">
            <h3 className="text-center text-lg text-muted">¿Quiénes somos?</h3>
            <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
              <p>
                Somos estudiantes de la Universidad de Sonora en la búsqueda de
                innovar por medio del desarrollo de software
              </p>
            </div>
          </Section>
          <Section className="flex w-full flex-col items-center gap-4 p-2">
            <h3 className="text-center text-lg text-muted">
              ¿Qué es lo que hacemos?
            </h3>
            <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
              <p>
                Desarrollamos soluciones para la Universidad de Sonora y
                terceros con tecnologías de la información y buscamos despertar
                la curiosidad de las personas por el software
              </p>
            </div>
          </Section>
          <Section className="flex w-full flex-col items-center gap-4 p-2">
            <h3 className="text-center text-lg text-muted">Noticias</h3>
            <div className="flex w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-xl border border-gray-400 text-center">
              <div className="relative h-40 w-full">
                <Image
                  fill
                  src="/assets/news/nasa-space-apps-2023.jpg"
                  alt="Foto de la primera edición de CSI PRO TALKS"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-center justify-between gap-1 p-2">
                <h3 className="text-center text-muted">
                  Miembros del CSI PRO ganan hackatón 2022
                </h3>
                <span className="flex items-center gap-1 text-gray-500">
                  <p>Jane Doe</p>|<p>28 de febrero de 2023</p>
                </span>
                <p className="line-clamp-3 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sed sem vel nibh molestie blandit et a erat
                </p>
                <MainButton>Ver más</MainButton>
              </div>
            </div>
            <MainButton>Ver todas las noticias</MainButton>
          </Section>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const payload = await getPayloadClient();

  const payloadPages = await payload.find({
    collection: "pages",
    where: {
      metaTitle: {
        equals: "Inicio",
      },
    },
  });
  const payloadEvents = await payload.find({
    collection: "events",
    sort: "-date",
  });

  const landingPage =
    payloadPages.docs.length > 0
      ? pageSchema.parse(payloadPages.docs[0])
      : null;
  const events = payloadEvents.docs.map((event) => eventSchema.parse(event));

  return {
    props: {
      landingPage,
      events,
    },
  };
}
