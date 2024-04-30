"use client";
import TypewriterLive from "typewriter-effect";

export const Typewriter = () => {
  return (
    <TypewriterLive
      onInit={(typewriter) => {
        typewriter.typeString("BIENVENIDOS").start();
      }}
      options={{
        cursor: "",
        delay: 50,
      }}
    />
  );
};

//hacer el texto dinamico
//Poner que sea configurable el estilo 
//El className permite configuar el navbar

