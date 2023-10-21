"use client";

import { FC } from "react";

import { Button, ButtonProps } from "./button";

export const MainButton: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button className="rounded-full px-8" {...props}>
      {children}
    </Button>
  );
};
