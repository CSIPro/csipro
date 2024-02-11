import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${GeistSans.variable} ${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
