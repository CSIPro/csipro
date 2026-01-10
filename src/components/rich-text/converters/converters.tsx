import { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

import { PopulatedEvent } from "@/models/events";
import { PopulatedMember } from "@/models/members";
import { PopulatedProject } from "@/models/projects";

import { LinkToEvent } from "../links/link-to-event";
import { LinkToMember } from "../links/link-to-member";
import { LinkToProject } from "../links/link-to-project";

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
          <LinkToMember member={node.fields.doc.value as PopulatedMember}>
            {text}
          </LinkToMember>
        );
      }

      if (relation === "proyectos") {
        return (
          <LinkToProject project={node.fields.doc.value as PopulatedProject}>
            {text}
          </LinkToProject>
        );
      }

      if (relation === "eventos") {
        return (
          <LinkToEvent event={node.fields.doc.value as PopulatedEvent}>
            {text}
          </LinkToEvent>
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
