import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";

import EventCard from "@/components/event-card/event-card";

export default function Home() {
  //Hook to know what the current theme is
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-primary dark:bg-muted">
        <span className="flex flex-wrap items-center justify-center gap-2 font-poppins text-2xl text-primary-foreground md:text-6xl">
          <h1 className="">CSI PRO</h1>
          <span className="flex flex-wrap bg-primary-foreground p-1 text-center font-medium text-primary dark:bg-primary dark:text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("COMING SOON").start();
              }}
              options={{
                cursor: "",
              }}
            />
          </span>
        </span>
        <EventCard
          title="CSI PRO | Una nueva esperanza"
          type="TALKS"
          duration={100}
          date="04 MAR"
          image="https://github.githubassets.com/assets/social-2deb6d7d43e7.jpg"
          imageAlt="CSI PRO | Una nueva esperanza"
          spots={100}
        />
        <button
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
          className="rounded-lg bg-primary-foreground px-8 py-2 font-poppins text-2xl text-primary transition-colors duration-300 ease-in-out hover:bg-muted hover:text-white dark:bg-gray-50 dark:bg-primary dark:text-white dark:hover:bg-primary-foreground dark:hover:text-primary md:text-4xl"
        >
          Change theme
        </button>
      </div>
    </>
  );
}
