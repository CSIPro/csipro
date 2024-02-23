import { useTheme } from "next-themes";

export default function Home() {
  //Hook to know what the current theme is
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-primary dark:bg-muted">
        <h1 className="text-semibold text-5xl">
          Un espacio de desarrollo, innovación e investigación en la Universidad
          de Sonora
        </h1>
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
