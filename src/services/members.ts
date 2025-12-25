import { API_URL } from "@/lib/utils";
import { createResponseSchema } from "@/models/cms-response";
import { PopulatedMember } from "@/models/members";

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
