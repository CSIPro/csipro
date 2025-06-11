import { fetchEvents } from "@/services/events";

import { EventCard } from "../event-card/event-card";
import { Glow, GlowContainer, GlowGroup } from "../glow/glow";
import { Section } from "../section/section";
import { SectionPagination } from "../section-pagination/section-pagination";
import { SectionTitle } from "../section-title/section-title";

interface Props {
  currentPage: number;
  limit: number;
}

export async function EventsList({ currentPage, limit }: Props) {
  const eventsRes = await fetchEvents(limit, currentPage);
  const totalPages = Math.min(Math.ceil(eventsRes.totalDocs / limit), 5);
  const { docs, page, prevPage, nextPage } = eventsRes;

  const titleId = "events-page-title";

  return (
    <Section className="hidden max-[540px]:flex">
      <SectionTitle id={titleId}>EVENTOS</SectionTitle>
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

      {docs.map((event) => (
        <EventCard
          key={`event-${event.id}`}
          variant="compact"
          type={event.tipo}
          duration={event.duracion}
          title={event.titulo}
          image={`https://admin.csipro.isi.unison.mx${event.imagen_principal.url}`}
          imageAlt={event.imagen_principal.alt}
          dates={event.fechas_horas}
          location={event.lugar}
          spots={Math.max(event.cupos - event.asistentes.length, 0)}
        />
      ))}

      <SectionPagination
        currentPage={page}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
        scrollId={titleId}
      />
    </Section>
  );
}
