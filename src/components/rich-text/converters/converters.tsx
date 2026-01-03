import { DefaultNodeTypes } from "@payloadcms/richtext-lexical";
import { JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";

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
});
