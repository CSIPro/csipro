import Link from "next/link";
import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={cn("sticky top-0 h-16 bg-primary", className)}>
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between p-8">
        <Link href="/" className="font-poppins text-xl">
          CSI PRO
        </Link>
      </div>
    </nav>
  );
};
