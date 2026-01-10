"use client";

import Link from "next/link";

import { useProject } from "@/hooks/use-projects";

import { Button } from "../ui/button";

export const ProjectPageButton = () => {
  const projectQuery = useProject("csipro-reboot");

  if (projectQuery.isLoading) {
    return <Button disabled>Cargando...</Button>;
  }

  if (!projectQuery.data || projectQuery.isError) {
    return <Button disabled>No disponible</Button>;
  }

  return (
    <Button asChild className="uppercase">
      <Link href={`/proyectos/${projectQuery.data.slug}`}>
        Más del proyecto
      </Link>
    </Button>
  );
};
