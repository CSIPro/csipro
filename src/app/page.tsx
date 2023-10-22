import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

import { Carousel } from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carousel-item";
import { Divider } from "@/components/divider/divider";
import { Header } from "@/components/header/header";
import { Section } from "@/components/section/section";
import { MainButton } from "@/components/ui/main-button";
import { eventSchema } from "@/payload/collections/events";
import {
  featuredMediaSchema,
  mediaWrapperSchema,
} from "@/payload/collections/featured-media";
import { pageSchema } from "@/payload/collections/page";
import { getPayloadClient } from "@/payload/payload-client";

export async function generateMetadata(
  _: unknown,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  try {
    const payload = await getPayloadClient();
    const payloadPages = await payload.find({
      collection: "pages",
      where: {
        metaTitle: {
          equals: "Inicio",
        },
      },
    });

    const page = pageSchema.parse(payloadPages.docs[0]);

    return {
      title: `${page.metaTitle} - CSI PRO`,
      description: page.metaDescription,
      keywords: page.metaKeywords?.map(({ keyword }) => keyword),
    };
  } catch (error) {
    return {};
  }
}

export default async function Page() {
  const payload = await getPayloadClient();

  const payloadEvents = await payload.find({
    collection: "events",
    sort: "-date",
  });
  const featuredMedia = await payload.find({
    collection: "featured-media",
    where: {
      title: {
        equals: "Landing",
      },
    },
  });

  const landingMedia = featuredMediaSchema.parse(featuredMedia.docs[0]);
  const events = payloadEvents.docs.map((event) => eventSchema.parse(event));

  return (
    <div className="relative flex min-h-screen flex-col items-center bg-gray-200 font-sans text-muted">
      <Header />
      <div className="flex flex-col items-center gap-4">
        <Section>
          <div className="flex flex-col gap-2 md:gap-4 md:p-2">
            <h2 className="text-center text-xl text-muted md:text-start">
              Un espacio de <span className="text-primary">desarrollo</span>,{" "}
              <span className="text-primary">innovación</span> e{" "}
              <span className="text-primary">investigación</span> en la
              Universidad de Sonora
            </h2>
            <p className="text-center text-sm text-muted md:text-start">
              Lo más importante para nosotros es demostrar las maravillas que la
              tecnología puede hacer
            </p>
          </div>
          <Carousel className="md:col-span-2">
            {landingMedia.media.map((pic) => {
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
            })}
          </Carousel>
          {/* <MainButton>Nosotros</MainButton>
        <div className="relative h-96 w-full overflow-hidden rounded-xl">
          <Image
            fill
            src="/assets/pictures/csipro-members.webp"
            alt="Foto de los miembros del CSI PRO"
            className="object-cover"
          />
        </div> */}
        </Section>
        <Divider>Vista general</Divider>
        <section className="flex w-full flex-col items-center gap-4 p-2">
          <h3 className="text-center text-lg text-muted">Eventos</h3>
          {events.map((event) => (
            <div
              key={event.id}
              className="relative h-80 w-full overflow-hidden rounded-xl"
            >
              <Image
                fill
                src={event.image.url || "/assets/pictures/csipro-reboot.jpg"}
                alt={event.image.title || "CSI PRO REBOOT"}
                className="object-cover blur-xs brightness-50"
              />
              <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between p-2">
                <div className="flex w-full items-start justify-between">
                  <span className="flex items-center gap-1 text-lg text-white">
                    <h4>CSI PRO</h4>
                    <span className="rounded-sm border border-white bg-transparent px-1 font-bold uppercase">
                      {event.type.title}
                    </span>
                  </span>
                  <span className="flex w-14 flex-col items-center rounded-md bg-white p-2 text-muted">
                    <p>{format(new Date(event.date), "dd")}</p>
                    <p className="text-sm">
                      {format(new Date(event.date), "LLL", {
                        locale: es,
                      })}
                    </p>
                  </span>
                </div>
                <span className="text-center text-white">
                  <h3 className="text-3xl font-medium">{event.title}</h3>
                  <p className="text-sm">{event.subtitle}</p>
                </span>
                <MainButton>Registrarse</MainButton>
              </div>
            </div>
          ))}
          <MainButton>Ver todos los eventos</MainButton>
        </section>
        <section className="flex w-full flex-col items-center gap-4 p-2">
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
        </section>
        <section className="flex w-full flex-col items-center gap-4 p-2">
          <h3 className="text-center text-lg text-muted">¿Quiénes somos?</h3>
          <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
            <p>
              Somos estudiantes de la Universidad de Sonora en la búsqueda de
              innovar por medio del desarrollo de software
            </p>
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-4 p-2">
          <h3 className="text-center text-lg text-muted">
            ¿Qué es lo que hacemos?
          </h3>
          <div className="flex w-full flex-col items-center justify-between gap-2 text-center">
            <p>
              Desarrollamos soluciones para la Universidad de Sonora y terceros
              con tecnologías de la información y buscamos despertar la
              curiosidad de las personas por el software
            </p>
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-4 p-2">
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
        </section>
      </div>
    </div>
  );
}
