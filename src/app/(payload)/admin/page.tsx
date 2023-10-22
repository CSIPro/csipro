"use client";

import Root from "payload/dist/admin/Root";
import { useState, useEffect } from "react";

const PayloadAdmin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Root />;
};

export default PayloadAdmin;
