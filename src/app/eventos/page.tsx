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

        <div className="px-4 py-5">
          <SearchBar placeholder="Buscar eventos..."></SearchBar>
        </div>

        <p className="justify-center px-2 text-center text-base sm:text-xl">
          Enterate al instante en nuestras redes sociales
        </p>

        <div className="flex items-center justify-center gap-2 pb-10 pt-4">
          <Twitter className="h-4 w-4" />
          <Facebook className="h-4 w-4" />
          <Instagram className="h-4 w-4" />
          <LinkedIn className="h-4 w-4" />
          <GitHub className="h-4 w-4" />
        </div>
      </section>

      <SectionTitle>EVENTOS</SectionTitle>
    </>
  );
}
