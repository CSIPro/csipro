import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SiMongodb, SiReact, SiVercel } from "react-icons/si";
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
      <div className="px-4 py-4">
        <div className="relative flex flex-col overflow-hidden rounded border border-stone-800">
          {/* <div className="w-full h-16  text-white dark:bg-lime-700"></div> */}
          <div className=" relative h-60 w-full">
            <Image
              className="h-full w-full object-cover"
              fill
              src="/assets/SISLAB.png"
              alt="Captura de pantalla de SISLAB"
            />
          </div>
          <div className="flex w-full flex-col gap-2  p-4 text-white ">
            <div className="border-b border-[#00C792] pb-2 text-muted dark:text-white">
              <h3 className="text-2xl font-semibold">SISLAB</h3>
              <p className="text-sm">
                Sistema para solicitudes de laboratorios
              </p>
            </div>
            <div className=" flex w-full items-center justify-between pt-1 text-muted dark:text-white">
              <p className="text-sm">Aplicación web</p>
              <div className="flex gap-2 text-xl">
                <SiVercel />
                <SiReact />
                <SiMongodb />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center px-4 py-6">
            <Link
              className="w-fit rounded-lg bg-[#00C792] px-8 py-2 font-poppins text-sm text-white transition-colors duration-300 ease-in-out hover:bg-muted hover:text-white dark:bg-[#00C792] dark:text-white dark:hover:bg-[#00C792] dark:hover:text-[#00C792] md:text-sm "
              href="#"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
