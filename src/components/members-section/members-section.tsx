import {
  createResponseSchema,
  generateEmptyResponse,
} from "@/models/cms-response";
import { Member } from "@/models/members";

import { MembersWrapper } from "./members-wrapper";
import NeonCards from "./neon-cards";

const fetchMembers = async (limit: number, currentPage: number) => {
  const membersRes = await fetch(
    `https://admin.csipro.isi.unison.mx/api/miembros/?limit=${limit}&page=${currentPage}`,
    { cache: "no-store" },
  );

  if (!membersRes.ok) {
    return generateEmptyResponse();
  }

  const MembersResponse = createResponseSchema(Member);

  const membersData = await membersRes.json();

  const members = MembersResponse.safeParse(membersData);

  if (!members.success) {
    console.log(members.error);
    return generateEmptyResponse();
  }

  return members.data;
};

export default async function MembersSection({
  limit,
  currentPage,
}: {
  limit: number;
  currentPage: number;
}) {
  const membersRes = await fetchMembers(limit, currentPage);

  const totalPages = Math.min(Math.ceil(membersRes.totalDocs / limit), 5);
  const { docs, page, prevPage, nextPage } = membersRes;

  return (
    <>
      <MembersWrapper
        members={docs}
        currentPage={page}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
