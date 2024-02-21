import { FC, HTMLAttributes } from "react";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const FacebookLogo: FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    viewBox="0 0 14222 14222"
  >
    <path
      d="M14222 7111C14222 3184 11038 0 7111 0S0 3184 0 7111c0 3549 2600 6491 6000 7025V9167H4194V7111h1806V5544c0-1782 1062-2767 2686-2767 778 0 1592 139 1592 139v1750h-897c-883 0-1159 548-1159 1111v1334h1972l-315 2056H8222v4969c3400-533 6000-3475 6000-7025z"
      style={{
        fillRule: "nonzero",
      }}
      {...props}
    />
  </svg>
);
