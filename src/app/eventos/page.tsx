import { EventsList } from "@/components/events-list/events-list";
import EventsSection from "@/components/events-section/events-section";
import { Footer } from "@/components/footer/footer";
import { GlowContainer, Glow } from "@/components/glow/glow";
import { Navbar } from "@/components/navbar/navbar";
import { SearchBar } from "@/components/search-bar.tsx/search-bar";
import { Section } from "@/components/section/section";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/socials/socials";

export default async function Page({
  searchParams,
}: Readonly<{
  searchParams?: {
    page?: string;
  };
}>) {
  const limit = 6;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <>
      <Navbar title="EVENTOS" />
      <Section>
        <div className="absolute left-1/2 top-0 z-0 h-[50%] w-full max-w-6xl -translate-x-1/2 overflow-hidden ">
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

          <GlowContainer className="relative z-10 h-[8rem] sm:h-[12rem] lg:h-[100rem]">
            <Glow
              size="normal"
              className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-2/3 bg-[radial-gradient(circle,rgba(95,54,190,0.62)_0%,rgba(95,54,190,0)_100%)]"
            />
          </GlowContainer>
        </div>

        <div className="relative z-10">
          <h1 className="px-4 pt-10 text-center text-4xl font-bold sm:text-6xl lg:pt-20">
            ¡No te pierdas ningún <span className="text-primary">evento</span>!
          </h1>

          <p className="justify-center p-2 text-center text-base sm:text-xl">
            Inscribete para ampliar tus conocimientos
          </p>

          <SearchBar
            shortPlaceholder="Buscar eventos..."
            longPlaceholder="Busca eventos, por categoría, organizador, orador..."
          />

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
        </div>
      </Section>

      <EventsList currentPage={currentPage} limit={limit} />

      <div className="hidden w-full flex-col items-center gap-8 md:flex">
        <EventsSection
          title="Eventos"
          limit={limit}
          currentPage={currentPage}
        />
      </div>

      <div className="py-8" />
      <Footer />
    </>
  );
}
