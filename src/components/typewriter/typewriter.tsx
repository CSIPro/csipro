"use client";
import TypewriterLive from "typewriter-effect";

interface TypewriterProps {
    text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  return (
    <TypewriterLive
      onInit={(typewriter) => {
        typewriter.typeString(text).start();
      }}
      options={{
        cursor: "",
        delay: 50,
      }}
    />
  );
};


//Poner que sea configurable el estilo 
//El className permite configuar el navbar

