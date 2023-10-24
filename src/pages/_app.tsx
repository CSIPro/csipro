/* eslint-disable check-file/filename-naming-convention */
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fira_Mono, Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const fira = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${fira.variable} ${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
