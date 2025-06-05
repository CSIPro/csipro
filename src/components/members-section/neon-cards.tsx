import React from "react";

const NeonCards = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="group relative mx-auto flex h-[400px] w-[300px] items-center justify-center bg-black text-white">
          <div className="absolute inset-[-2px] z-[-1] bg-gradient-to-br from-[#89ff00] via-[#060c21] to-[#00bcd4]"></div>
          <div className="absolute inset-[-5px] z-[-2] bg-gradient-to-br from-[#89ff00] via-[#060c21] to-[#00bcd4] opacity-70 blur-[50px] transition-opacity group-hover:opacity-100"></div>
          <h1 className="text-2xl font-bold">Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default NeonCards;
