import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

import { AppProviders } from "@/context/providers";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fonts = `${GeistSans.variable} ${poppins.variable} font-sans`;

export const metadata: Metadata = {
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
          <main className="mx-auto flex min-h-screen w-full flex-col items-center justify-center">
            {children}
          </main>
        </AppProviders>
      </body>
    </html>
  );
}
