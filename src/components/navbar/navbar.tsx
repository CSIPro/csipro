import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  BrandingHeader,
  BrandingHeaderTitle,
} from "../branding-header/branding-header";
import { CsiproLogo } from "../socials/logos/csipro-logo";
import { Typewriter } from "../typewriter/typewriter";

interface Props {
  titles: string[];
  loopTitles?: boolean;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Navbar: FC<Props> = ({ titles, loopTitles, className }) => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-16 w-full border-b border-primary bg-white dark:bg-muted",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between p-4">
        <Link href="/" className="font-poppins text-xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm p-1.5">
              <CsiproLogo className="fill-primary dark:fill-white" />
            </div>
            <BrandingHeader className="text-xl font-normal">
              <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
              <Typewriter messages={titles} loop={loopTitles} />
            </BrandingHeader>
          </div>
        </Link>
      </div>
    </nav>
  );
};
