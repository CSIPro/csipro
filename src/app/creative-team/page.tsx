import { CreativeTeamCard } from "@/components/creative-team-card/creative-team-card";
import { Glow, GlowContainer } from "@/components/glow/glow";
import { MisionCard } from "@/components/mision-card/mision-card";
import { Navbar } from "@/components/navbar/navbar";
import { Section } from "@/components/section/section";
import { SectionTitle } from "@/components/section-title/section-title";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <Navbar titles={["Creative Team", "Our Team"]} />
      <Section>
        <div className="relative flex flex-col items-center justify-center">
          <GlowContainer className="absolute inset-0 z-0 flex items-center justify-center">
            <Glow
              size="normal"
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2
                 bg-[radial-gradient(circle,rgba(95,54,190,0.5)_0%,rgba(95,54,190,0)_100%)] blur-3xl
                 md:h-[700px] md:w-[700px]"
            />
          </GlowContainer>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h1 className="pt-10 text-4xl font-bold sm:text-6xl lg:pt-20">
              <span className="text-primary">Equipo</span> detrás de la pantalla
            </h1>
            <p className="max-w-xl p-2 text-base sm:text-xl">
              Detrás del monitor estamos nosotros: ideas, café y pasión por
              construir experiencias que inspiran.
            </p>
            <Button className="mt-4 px-4 py-4 font-bold uppercase sm:rounded-2xl sm:px-5 sm:py-7 sm:text-2xl">
              Más del proyecto
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle> MISIÓN </SectionTitle>
        <div className="px-32 pb-12">
          <MisionCard></MisionCard>
        </div>
      </Section>

      <Section>
        <SectionTitle> EQUIPO CREATIVO </SectionTitle>
        <div className="flex flex-col items-center justify-center gap-8 px-32 pb-12 lg:flex-row">
          <CreativeTeamCard />
          <CreativeTeamCard />
          <CreativeTeamCard />
        </div>
      </Section>
    </>
  );
}
