import { ReactNode } from "react";

export default function PayloadLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen w-full bg-muted text-white">
      {children}
    </section>
  );
}
