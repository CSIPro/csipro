"use client";
import TypewriterLive from "typewriter-effect";

interface TypewriterProps {
  text: string;
  textStyle?: React.CSSProperties;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, textStyle }) => {
  return (
    <span style={textStyle}>
      <TypewriterLive
        onInit={(typewriter) => {
          typewriter.typeString(text).start();
        }}
        options={{
          cursor: "",
          delay: 50,
        }}
      />
    </span>
  );
};
