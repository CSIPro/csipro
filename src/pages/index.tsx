import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-primary text-primary-foreground ${poppins.className}`}
    >
      <span className="text-2xl sm:text-5xl md:text-6xl flex gap-2">
        <h1>CSI PRO</h1>
        <h1 className="font-bold uppercase text-primary bg-white px-2">
          Coming soon
        </h1>
      </span>
    </main>
  );
}
