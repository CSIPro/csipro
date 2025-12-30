"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
