import { convertLexicalToPlaintext } from "@payloadcms/richtext-lexical/plaintext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractPlainText = ({ data }: { data: any }) =>
  convertLexicalToPlaintext({ data });
