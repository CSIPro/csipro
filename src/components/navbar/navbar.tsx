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
  title: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Navbar: FC<Props> = ({ title, className }) => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-16 w-full border-b border-primary bg-white dark:bg-muted",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-8xl items-center justify-between p-4">
        <Link href="/" className="font-poppins text-xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm p-1.5">
              <CsiproLogo className="fill-primary dark:fill-white" />
            </div>
            <BrandingHeader className="text-xl font-normal">
              <BrandingHeaderTitle>CSI PRO</BrandingHeaderTitle>
              <Typewriter text={title} />
            </BrandingHeader>
          </div>
        </Link>
      </div>
    </nav>
  );
};
