//"use client";

import Link from "next/link";
import { FC, HTMLAttributes } from "react";
//import Typewriter from "typewriter-effect";

import { cn } from "@/lib/utils";

import { CsiproLogo } from "../socials/logos/csipro-logo";
import { Typewriter } from "../typewriter/typewriter";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-16 border-b border-primary bg-white dark:bg-muted",
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-poppins text-xl">
          <div className="flex items-center justify-center gap-4">
            <div className="flex aspect-square w-10 items-center justify-center rounded-sm p-1.5">
              <CsiproLogo className="fill-primary dark:fill-white" />
            </div>
            <h1 className="text-xl font-medium text-primary dark:text-white">
              CSI PRO
            </h1>
            <Typewriter text="BIENVENIDOS"></Typewriter>
          </div>
        </Link>
      </div>
    </nav>
  );
};
