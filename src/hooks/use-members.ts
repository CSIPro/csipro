import { useQuery } from "@tanstack/react-query";
import * as qs from "qs-esm";

import { API_URL } from "@/lib/utils";
import { createResponseSchema } from "@/models/cms-response";
import { Member } from "@/models/members";

export const useMemberByName = (name: string, lastName: string) => {
  return useQuery({
    queryKey: ["member", name, lastName],
    queryFn: async () => {
      const query = {
        where: {
          nombres: {
            contains: name,
          },
          apellidos: {
            contains: lastName,
          },
        },
      };

      const res = await fetch(`${API_URL}/miembros?${qs.stringify(query)}`);

      if (!res.ok) {
        throw new Error("Failed to fetch member");
      }

      const data = await res.json();

      const MembersResponse = createResponseSchema(Member);

      const dataParse = MembersResponse.safeParse(data);

      if (!dataParse.success) {
        console.error(dataParse.error);
        throw new Error("Invalid member data");
      }

      return dataParse.data.docs[0];
    },
  });
};
