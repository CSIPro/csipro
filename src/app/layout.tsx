import "@/styles/globals.css";

import { setDefaultOptions } from "date-fns";
import { es } from "date-fns/locale";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import {
  Just_Me_Again_Down_Here,
  Poppins,
  Klee_One,
  Gochi_Hand,
} from "next/font/google";

import { AppProviders } from "@/context/providers";
import { Footer } from "@/components/footer/footer";

setDefaultOptions({ locale: es });

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-just-me-again-down-here",
});

const kleeOne = Klee_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-klee-one",
});

const gochiHand = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gochi-hand",
});

const fonts = `${GeistSans.variable} ${poppins.variable} ${justMeAgainDownHere.variable} font-sans ${kleeOne.variable} ${gochiHand.variable}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://csipro.isi.unison.mx"),
  title: "CSI PRO",
  description:
    "Un espacio de desarrollo, innovación e investigación en la Universidad de Sonora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${fonts} bg-white dark:bg-muted`}>
        <AppProviders>
          <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-center">
            {children}
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
