import { EventCardTemp } from "@/components/even-card-temp/event-card-temp";
import EventsSection from "@/components/events-section/events-section";
import { GlowContainer, Glow, GlowGroup } from "@/components/glow/glow";
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

export default function Page({
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
          <div className="p-4">
            <div className="rounded-2xl border border-[#281D3A] p-3 shadow-inner lg:p-4">
              <SearchBar
                shortPlaceholder="Buscar eventos..."
                longPlaceholder="Busca eventos, por categoría, organizador, orador..."
              />
            </div>
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
        </div>
      </Section>

      <Section classNameDiv="pb-16">
        <SectionTitle>EVENTOS</SectionTitle>
        <GlowContainer>
          <GlowGroup className="origin-[12%_50%] 2xl:origin-[25%_50%]">
            <Glow
              size="specific"
              className="left-[12%] bg-[radial-gradient(circle,rgba(49,0,163,0.57)_0%,rgba(49,0,163,0)_60%);] [clip-path:polygon(48%_55%,_94%_61%,_92%_75%,_87%_80%,_81%_86%,_75%_89%,_67%_92%,_59%_93%,_52%_94%,_47%_94%,_41%_92%,_33%_88%,_26%_84%,_19%_79%,_11%_73%,_11%_73%,_7%_67%,_4%_59%,_3%_54%,_3%_47%,_7%_39%,_9%_32%,_14%_27%,_16%_22%,_19%_17%,_24%_13%,_31%_11%);] 2xl:left-1/4"
            />
            <Glow
              size="specific"
              className="left-[12%] bg-[radial-gradient(circle,rgba(123,30,114,1)_0%,rgba(123,30,114,0)_50%);] [clip-path:polygon(49%_55%,_98%_61%,_97%_54%,_96%_48%,_94%_41%,_92%_34%,_87%_29%,_82%_24%,_79%_18%,_73%_14%,_67%_11%,_60%_6%,_54%_6%,_47%_4%,_41%_4%,_33%_8%,_27%_12%,_21%_15%)] 2xl:left-1/4"
            />
          </GlowGroup>
          <GlowGroup className="origin-[88%_25%] 2xl:origin-[75%_25%]">
            <Glow
              size="specific"
              className="left-[88%] top-[25%] bg-[radial-gradient(circle,rgba(255,158,69,0.45)_0%,rgba(255,158,69,0)_50%);] [clip-path:polygon(48%_56%,_4%_56%,_5%_63%,_8%_71%,_11%_76%,_15%_82%,_19%_86%,_24%_90%,_30%_95%,_37%_98%,_46%_99%,_53%_99%,_62%_99%,_68%_96%,_73%_95%,_82%_94%,_85%_87%,_89%_82%);] 2xl:left-3/4"
            />
            <Glow
              size="specific"
              className="left-[88%] top-[25%] bg-[radial-gradient(circle,rgba(135,51,165,0.5)_0%,rgba(135,51,165,0)_50%);] [clip-path:polygon(50%_54%,_5%_53%,_7%_43%,_9%_36%,_11%_32%,_15%_25%,_20%_21%,_27%_18%,_30%_14%,_37%_11%,_43%_8%,_51%_8%,_58%_8%,_67%_11%,_76%_16%,_81%_20%,_88%_25%,_91%_31%,_92%_37%,_94%_43%,_94%_51%,_94%_58%,_93%_66%,_91%_74%,_89%_80%,_86%_86%,_81%_90%,_77%_92%);] 2xl:left-3/4"
            />
          </GlowGroup>
        </GlowContainer>

        <div className="block md:hidden">
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

        <div className="hidden md:block">
          <EventsSection
            limit={limit}
            currentPage={currentPage}
          ></EventsSection>
        </div>
      </Section>
    </>
  );
}
