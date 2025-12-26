import { API_URL } from "@/lib/utils";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { PopulatedEvent } from "@/models/events";
import { PopulatedMember } from "@/models/members";
import { PopulatedProject } from "@/models/projects";

export const fetchMember = async (slug: string) => {
  const memberRes = await fetch(
    `${API_URL}/miembros?depth=2&where[slug][equals]=${encodeURIComponent(slug)}&limit=1`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!memberRes.ok) {
    return null;
  }

  const MembersResponse = createResponseSchema(PopulatedMember);

  const membersData = await memberRes.json();
  const membersParse = MembersResponse.safeParse(membersData);

  if (!membersParse.success) {
    console.log(membersParse.error.format());

    for (const err of membersParse.error.errors) {
      console.error(err);
    }

    return null;
  }

  const memberData = membersParse.data.docs[0];

  if (!memberData) {
    return null;
  }

  return memberData;
};

export const getMemberEvents = async (memberId: number) => {
  const eventsRes = await fetch(`${API_URL}/miembros/${memberId}/events`, {
    next: { revalidate: 600 },
  });

  if (!eventsRes.ok) {
    return generateEmptyResponse();
  }

  const MembersEventsResponse = createResponseSchema(PopulatedEvent);

  const eventsData = await eventsRes.json();

  const events = MembersEventsResponse.safeParse(eventsData);

  if (!events.success) {
    console.log(events.error);
    return generateEmptyResponse();
  }

  return events.data;
};

export const getMemberProjects = async (memberId: number) => {
  const projectsRes = await fetch(`${API_URL}/miembros/${memberId}/projects`, {
    next: { revalidate: 600 },
  });

  if (!projectsRes.ok) {
    return generateEmptyResponse();
  }

  const MembersProjectsResponse = createResponseSchema(PopulatedProject);

  const projectsData = await projectsRes.json();

  const projects = MembersProjectsResponse.safeParse(projectsData);

  if (!projects.success) {
    console.log(projects.error);
    return generateEmptyResponse();
  }

  return projects.data;
};
