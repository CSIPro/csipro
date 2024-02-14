import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";

export default function Home() {
  //Hook to know what the current theme is
  const { systemTheme, theme, setTheme } = useTheme();
  //Initially, I set the theme to the system theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-primary dark:bg-muted">
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
        <button
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          className="absolute bottom-32 rounded-lg bg-primary-foreground  px-8 py-2 font-poppins text-2xl text-primary transition-colors duration-300 ease-in-out hover:bg-muted hover:text-white dark:bg-gray-50 dark:bg-primary dark:text-white dark:hover:bg-primary-foreground dark:hover:text-primary md:text-4xl"
        >
          Change theme
        </button>
      </div>
    </>
  );
}
