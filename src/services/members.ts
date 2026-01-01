import { API_URL } from "@/lib/utils";
import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { PopulatedEvent } from "@/models/events";
import {
  MembersCount,
  PopulatedPaginatedMembersResponse,
} from "@/models/members";
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

  const membersData = await memberRes.json();
  const membersParse = PopulatedPaginatedMembersResponse.safeParse(membersData);

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

export const fetchPopulatedMembers = async (limit: number, page: number) => {
  const membersRes = await fetch(
    `${API_URL}/miembros?depth=2&limit=${limit}&page=${page}`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!membersRes.ok) {
    return generateEmptyResponse();
  }

  const membersData = await membersRes.json();
  const membersParse = PopulatedPaginatedMembersResponse.safeParse(membersData);

  if (!membersParse.success) {
    console.log(membersParse.error.format());

    for (const err of membersParse.error.errors) {
      console.error(err);
    }

    return generateEmptyResponse();
  }

  return membersParse.data;
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

export const countMembers = async () => {
  const countRes = await fetch(`${API_URL}/miembros/count`, {
    next: { revalidate: 600 },
  });

  if (!countRes.ok) {
    return MembersCount.parse({ active: 0, inactive: 0, graduated: 0 });
  }

  const countsData = await countRes.json();

  const countsParse = MembersCount.safeParse(countsData);

  if (!countsParse.success) {
    console.log(countsParse.error.format());
    return MembersCount.parse({ active: 0, inactive: 0, graduated: 0 });
  }

  return countsParse.data;
};
