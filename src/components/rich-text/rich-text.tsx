import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as RichTextConverter } from "@payloadcms/richtext-lexical/react";
import { HTMLAttributes } from "react";

import { jsxConverter } from "./converters/converters";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: SerializedEditorState;
}

export const RichText = ({ className, ...rest }: Props) => {
  return (
    <RichTextConverter
      className={className}
      {...rest}
      converters={jsxConverter}
    />
  );
};
