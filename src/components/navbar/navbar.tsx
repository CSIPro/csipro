import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mx-auto h-16 bg-primary">
      <div className="container flex h-full items-center justify-between p-8">
        <Link href="/" className="font-poppins text-xl">
          CSI PRO
        </Link>
      </div>
    </nav>
  );
};
