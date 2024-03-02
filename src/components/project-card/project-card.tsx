import Image from "next/image";
import Link from "next/link";
import { SiMongodb, SiReact, SiVercel } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  projecttype: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className="px-4 py-4">
      <div className="relative flex flex-col overflow-hidden rounded border border-stone-200 dark:border-stone-800 ">
        {/* <div className="w-full h-16  text-white dark:bg-lime-700"></div> */}
        <div className=" relative h-60 w-full">
          <Image
            className="h-full w-full object-cover"
            fill
            src={props.image}
            alt={props.imageAlt}
          />
        </div>
        <div className="flex w-full flex-col gap-2  p-4 text-white ">
          <div className="border-b border-[#00C792] pb-2 text-muted dark:text-white">
            <h3 className="text-2xl font-semibold">{props.title}</h3>
            <p className="text-sm">{props.description}</p>
          </div>
          <div className=" flex w-full items-center justify-between pt-1 text-muted dark:text-white">
            <p className="text-sm">{props.projecttype}</p>
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
  );
};
