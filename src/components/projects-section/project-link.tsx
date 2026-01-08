import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";
import { ProjectLink as ProjectLinkType } from "@/models/projects";

type Props = {
  link: ProjectLinkType;
} & React.HTMLAttributes<HTMLAnchorElement> &
  Omit<LinkProps, "href" | "target" | "rel">;

export const ProjectLink = ({ link, className, ...props }: Props) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      href={link.url}
      className={cn(
        "rounded-md border border-white/10 bg-gradient-to-r from-[#BC8DC8]/30 to-[#665097]/30 px-2 py-1 text-lg font-medium text-primary-light",
        className,
      )}
    >
      {link.label}
    </Link>
  );
};
