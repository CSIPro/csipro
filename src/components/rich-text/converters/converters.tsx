import { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

import { MemberChip } from "@/components/member-chip/member-chip";
import { Member } from "@/models/members";

export const jsxConverter: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children }).join("");

    if (node.tag === "h1" || node.tag === "h2" || node.tag === "h3") {
      return <h3 className="text-xl font-semibold leading-relaxed">{text}</h3>;
    }
  },
  link: ({ node }) => {
    if (node.fields.doc) {
      const relation = node.fields.doc.relationTo;

      // @ts-expect-error This exists
      const text = node.children[0].text ?? undefined;

      if (relation === "miembros") {
        return (
          <MemberChip
            member={node.fields.doc.value as Member}
            className="inline-block"
            chipClassName="py-0 px-1 underline [&>span]:text-base"
            iconClassName="size-4"
          >
            {text}
          </MemberChip>
        );
      }
    }

    if (node.fields.linkType === "custom") {
      // @ts-expect-error This exists
      const text = node.children[0].text ?? undefined;

      return (
        <Link href={node.fields.url!} className="font-medium underline">
          {text}
        </Link>
      );
    }
  },
});
