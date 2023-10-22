import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Metadata } from "next";
import Image from "next/image";

import { Carousel } from "@/components/carousel/carousel";
import { CarouselItem } from "@/components/carousel/carousel-item";
import { Header } from "@/components/header/header";
import { MainButton } from "@/components/ui/main-button";
import { eventSchema } from "@/payload/collections/events";
import {
  featuredMediaSchema,
  mediaWrapperSchema,
} from "@/payload/collections/featured-media";
import { getPayloadClient } from "@/payload/payload-client";

export const metadata: Metadata = {
  title: "Inicio - CSI PRO",
  description:
    "Bienvenido al portal del CSI PRO, un laboratorio dedicado al desarrollo de software, la investigación e innovación tecnológica en la Universidad de Sonora",
};

export default async function Page() {
  const payload = await getPayloadClient();

  const events = await payload.find({ collection: "events" });
  const featuredMedia = await payload.find({
    collection: "featured-media",
    where: {
      title: {
        equals: "Landing",
      },
    },
  });

  const csiproReboot = eventSchema.parse(events.docs[0]);
  const landingMedia = featuredMediaSchema.parse(featuredMedia.docs[0]);

  return (
    <div className="relative flex min-h-screen flex-col items-center gap-4 bg-white font-sans text-muted">
      <Header />
      <section className="flex w-full flex-col items-center gap-4 p-2">
        <Carousel>
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
        <h2 className="text-center text-xl text-muted">
          Un espacio de <span className="text-primary">desarrollo</span>,{" "}
          <span className="text-primary">innovación</span> e{" "}
          <span className="text-primary">investigación</span> en la Universidad
          de Sonora
        </h2>
        <p className="text-center text-sm text-muted">
          Lo más importante para nosotros es demostrar las maravillas que la
          tecnología puede hacer y lograr despertar la curiosidad por ella
        </p>
        <MainButton>Nosotros</MainButton>
        <div className="relative h-96 w-full overflow-hidden rounded-xl">
          <Image
            fill
            src="/assets/pictures/csipro-members.webp"
            alt="Foto de los miembros del CSI PRO"
            className="object-cover"
          />
        </div>
      </section>
      <span className="flex w-full items-center justify-between">
        <hr className="w-full border-muted" />
        <h2 className="whitespace-nowrap px-4 text-xl">Vista general</h2>
        <hr className="w-full border-muted" />
      </span>
      <section className="flex w-full flex-col items-center gap-4 p-2">
        <h3 className="text-center text-lg text-muted">Eventos 2023</h3>
        <div className="relative h-80 w-full overflow-hidden rounded-xl">
          <Image
            fill
            src={csiproReboot.image.url}
            alt={csiproReboot.image.title}
            className="object-cover blur-xs brightness-50"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-between p-2">
            <span className="flex flex-col items-center self-end rounded-md bg-white p-2 text-xs text-muted">
              <p className="text-sm">
                {format(new Date(csiproReboot.date), "dd")}
              </p>
              <p>
                {format(new Date(csiproReboot.date), "LLLL", { locale: es })}
              </p>
            </span>
            <span className="text-center text-white">
              <p className="text-sm">{csiproReboot.subtitle}</p>
              <h3 className="text-3xl font-medium">{csiproReboot.title}</h3>
            </span>
            <MainButton>Registrarse</MainButton>
          </div>
        </div>
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
            con tecnologías de la información y buscamos despertar la curiosidad
            de las personas por el software
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              sem vel nibh molestie blandit et a erat
            </p>
            <MainButton>Ver más</MainButton>
          </div>
        </div>
        <MainButton>Ver todas las noticias</MainButton>
      </section>
    </div>
  );
}
