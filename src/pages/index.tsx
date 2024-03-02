import Image from "next/image";
import { useTheme } from "next-themes";

import { ProjectCard } from "@/components/project-card/project-card";

export default function Home() {
  //Hook to know what the current theme is
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <div className="px-4 py-6">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Un espacio de <span className="text-primary">desarrollo</span>,
            <span className="text-primary"> innovación</span> e
            <span className="text-primary"> investigación</span> en la
            Universidad de Sonora
          </h1>
        </div>
        <div className="max-w-full px-4 py-6 sm:max-w-2xl">
          <Image
            layout="responsive"
            src="portada.jpg"
            width={500}
            height={300}
            alt="foto de portada"
            className="rounded"
            unoptimized
          />
        </div>
      </div>
      <div className="flex w-full flex-col px-4 py-6">
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded-lg bg-primary px-8 py-2 font-poppins text-2xl text-white transition-colors duration-300 ease-in-out hover:bg-muted hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary-foreground dark:hover:text-primary md:text-4xl"
        >
          Change theme
        </button>
      </div>
      <h2 className="flex w-fit bg-primary px-6 py-2 text-center text-lg font-medium text-primary text-white dark:bg-primary">
        NUESTROS PROYECTOS
      </h2>
      <div className="py-4"></div>
      <ProjectCard
        title="SISLAB"
        description="Sistema de laboratorios"
        image="/assets/SISLAB.png"
        imageAlt="SISLAB"
        projecttype="Aplicación web"
      />
      <ProjectCard
        title="SAÚL"
        description="ARIZA"
        image="/assets/SISLAB.png"
        imageAlt="SISLAB"
        projecttype="Aplicación AMOR"
      />
    </>
  );
}
