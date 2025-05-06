import { EventCardTemp } from "@/components/even-card-temp/event-card-temp";
import { GlowContainer, Glow } from "@/components/glow/glow";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { Section } from "@/components/section/section";
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
      <Section className="relative -mt-[70px] overflow-hidden sm:pt-4">
        <div className="absolute left-0 top-0 z-0 h-[50%] w-full overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="35"
                height="35"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 35 0 L 0 0 0 35"
                  fill="none"
                  stroke="#3b2f58"
                  strokeWidth="0.5"
                />
              </pattern>

              <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="40%" stopColor="white" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#grid)"
              mask="url(#fade-mask)"
            />
          </svg>
        </div>

        <GlowContainer className="relative z-10 h-[8rem] sm:h-[12rem]">
          <Glow
            breathe
            size="normal"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_62%)]"
          />
        </GlowContainer>

        <h1 className="px-4 py-2 text-center text-4xl font-bold sm:text-6xl">
          ¡No te pierdas ningún <span className="text-primary">evento</span>!
        </h1>

        <p className="justify-center p-2 text-center text-base sm:text-xl">
          Inscribete para ampliar tus conocimientos
        </p>

        <div>
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
      </Section>

      <Section>
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
      </Section>
    </>
  );
}
