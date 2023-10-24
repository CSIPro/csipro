/* eslint-disable check-file/filename-naming-convention */
import "@/styles/payload.css";
import Root from "payload/dist/admin/Root";
import { useEffect, useState } from "react";

const PayloadAdmin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="flex min-h-screen w-full text-white">
      <Root />
    </section>
  );
};

export default PayloadAdmin;
