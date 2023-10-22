"use client";

import Image from "next/image";
import { HiMenu } from "react-icons/hi";

import { Button } from "../ui/button";
import { Sheet, SheetTrigger } from "../ui/sheet";

export const Header = () => {
  return (
    <Sheet>
      <header className="sticky top-0 z-50 w-full border-b bg-primary">
        <div className="container relative flex h-14 max-w-4xl items-center justify-between gap-8 md:justify-normal">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/csipro.svg"
              height={30}
              width={30}
              alt="Logo de CSI PRO"
            />
            <h1 className="text-xl text-white">CSI PRO</h1>
          </div>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="bg-transparent text-2xl text-white hover:bg-white hover:text-primary focus:bg-primary focus:text-primary md:hidden"
            >
              <HiMenu />
            </Button>
          </SheetTrigger>
        </div>
      </header>
    </Sheet>
  );
};
