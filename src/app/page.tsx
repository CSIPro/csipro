import Image from "next/image";

import EventCard from "@/components/event-card/event-card";
import { SectionTitle } from "@/components/section-title/section-title";

const fetchEvents = async () => {
  const eventsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/eventos",
    { cache: "no-store" },
  );

  return await eventsRes.json();
};

export default async function Home() {
  const events = (await fetchEvents()).docs;

  const event = events[0];

  const eventDate = new Date(event.fecha);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
        <div className="px-4 py-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Un espacio de <span className="text-primary">desarrollo</span>,
            <span className="text-primary"> innovación</span> e
            <span className="text-primary"> investigación</span> en la
            Universidad de Sonora
          </h1>
        </div>
        <div className="max-w-full px-4 py-6 sm:max-w-2xl">
          <Image
            layout="responsive"
            src="portada.jpg"
            width={500}
            height={300}
            alt="foto de portada"
            className="rounded"
            unoptimized
          />
        </div>
      </div>
      <SectionTitle>Nuevos eventos</SectionTitle>
      <EventCard
        title={event.titulo}
        type={event.tipo}
        date={eventDate}
        duration={event.duracion}
        image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
        imageAlt="imagen de evento"
        spots={event.cupos}
        location={event.lugar}
        time={new Date(event.hora)}
      />
    </>
  );
}
