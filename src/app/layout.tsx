import { Metadata } from "next";
import { Fira_Mono, Poppins, Roboto } from "next/font/google";
import { ReactNode } from "react";

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

import "@/styles/globals.css";
import "@/styles/payload.css";

export const metadata: Metadata = {
  title: "Home - CSI PRO",
  description:
    "CSI PRO es un laboratorio de desarrollo de software, investigación e innovación tecnológica perteneciente a la carrera de Ingeniería en Sistemas de Información en la Universidad de Sonora.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${fira.variable} ${roboto.variable}`}
    >
      <body className="font-sans text-white">{children}</body>
    </html>
  );
}
