import Image from "next/image";
// import { useTheme } from "next-themes";

import EventCard from "@/components/event-card/event-card";

const fetchEvents = async () => {
  const eventsRes = await fetch(
    "https://admin.csipro.isi.unison.mx/api/eventos",
  );

  return await eventsRes.json();
};

export default async function Home() {
  //Hook to know what the current theme is
  // const { theme, setTheme } = useTheme();

  const events = (await fetchEvents()).docs;

  const event = events[0];

  const eventDate = new Date(event.fecha);
  const formattedDate = `${eventDate.getMonth()}-${eventDate.getDate()}`;

  return (
    <>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
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
      <EventCard
        title={event.titulo}
        type={event.tipo}
        date={formattedDate}
        duration={event.duracion}
        image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
        imageAlt="imagen de evento"
        spots={event.cupos}
      />
      <div className="flex w-full flex-col px-4 py-6">
        {/* <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded-lg bg-primary px-8 py-2 font-poppins text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-muted hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary-foreground dark:hover:text-primary md:text-4xl"
        >
          Change theme
        </button> */}
      </div>
    </>
  );
}
