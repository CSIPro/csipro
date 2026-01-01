import { API_URL } from "@/lib/utils";
import { generateEmptyResponse } from "@/models/cms-response";
import { PopulatedPaginatedEventsResponse } from "@/models/events";

export const fetchPopulatedEvents = async (
  limit: number,
  currentPage: number,
) => {
  const eventsRes = await fetch(
    `${API_URL}/eventos?depth=2&limit=${limit}&page=${currentPage}`,
    {
      // next: { revalidate: 600 },
      cache: "no-store",
    },
  );

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const eventsData = await eventsRes.json();

  const events = PopulatedPaginatedEventsResponse.safeParse(eventsData);

  if (!events.success) {
    console.log(events.error);
    return generateEmptyResponse();
  }

  events.data.docs.sort((a, b) => {
    return (
      new Date(b.fechas_horas[b.fechas_horas.length - 1].fecha_hora).getTime() -
      new Date(a.fechas_horas[a.fechas_horas.length - 1].fecha_hora).getTime()
    );
  });

  return events.data;
};
