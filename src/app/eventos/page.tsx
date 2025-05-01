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
        <h1 className="px-4 py-2 text-center text-4xl font-bold sm:text-6xl">
          ¡No te pierdas ningún <span className="text-primary">evento</span>!
        </h1>

        <p className="justify-center px-2 text-center text-base sm:text-xl">
          Inscribete para ampliar tus conocimientos
        </p>
      </section>

      <SearchBar placeholder="Buscar eventos..."></SearchBar>

      <section>
        <p className="justify-center px-2 text-center text-base sm:text-xl">
          Enterate al instante en nuestras redes sociales
        </p>

        <div className="flex w-full items-center justify-around pt-4 sm:w-auto sm:justify-normal sm:gap-4 lg:gap-8">
          <Twitter />
          <Facebook />
          <Instagram />
          <LinkedIn />
          <GitHub />
        </div>
      </section>

      <SectionTitle>EVENTOS</SectionTitle>
    </>
  );
}
