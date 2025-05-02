import { EventCardTemp } from "@/components/even-card-temp/event-card-temp";
import { GlowContainer, Glow } from "@/components/glow/glow";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { SectionTitle } from "@/components/section-title/section-title";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";

export default function Page() {
  return (
    <>
      <section>
        <GlowContainer className="relative h-[12rem]">
          <Glow
            breathe
            size="normal"
            className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_62%)]"
          />
        </GlowContainer>

        <h1 className="px-4 py-2 text-center text-4xl font-bold sm:text-6xl">
          ¡No te pierdas ningún <span className="text-primary">evento</span>!
        </h1>

        <p className="justify-center p-2 text-center text-base sm:text-xl">
          Inscribete para ampliar tus conocimientos
        </p>

        <div className="p-4">
          <SearchBar placeholder="Buscar eventos..."></SearchBar>
        </div>

        <p className="justify-center p-2 text-center text-base sm:text-xl">
          Enterate al instante en nuestras redes sociales
        </p>

        <div className="flex items-center justify-center gap-2 pb-10">
          <Twitter className="h-4 w-4" />
          <Facebook className="h-4 w-4" />
          <Instagram className="h-4 w-4" />
          <LinkedIn className="h-4 w-4" />
          <GitHub className="h-4 w-4" />
        </div>
      </section>

      <SectionTitle>EVENTOS</SectionTitle>

      <div className="px-2">
        <EventCardTemp
          title="GitHub talk"
          image="/assets/github-event.jpg"
          imageAlt="Taller de React"
          dates={[
            {
              fecha_hora: "2025-06-10T10:00:00",
              id: "",
            },
            {
              fecha_hora: "2025-06-11T10:00:00",
              id: "",
            },
          ]}
          location="Auditorio Gustavo Figueroa"
          spots={20}
        />
        <EventCardTemp
          title="GitHub talk"
          image="/assets/github-event.jpg"
          imageAlt="Taller de React"
          dates={[
            {
              fecha_hora: "2025-06-10T10:00:00",
              id: "",
            },
            {
              fecha_hora: "2025-06-11T10:00:00",
              id: "",
            },
          ]}
          location="Auditorio Gustavo Figueroa"
          spots={20}
        />
        <EventCardTemp
          title="GitHub talk"
          image="/assets/github-event.jpg"
          imageAlt="Taller de React"
          dates={[
            {
              fecha_hora: "2025-06-10T10:00:00",
              id: "",
            },
            {
              fecha_hora: "2025-06-11T10:00:00",
              id: "",
            },
          ]}
          location="Auditorio Gustavo Figueroa"
          spots={20}
        />
      </div>
    </>
  );
}
