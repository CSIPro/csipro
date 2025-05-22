import { useEffect, useRef, useState } from "react";

export const NameDisplay: React.FC<{ names: string; lastnames: string }> = ({
  names,
  lastnames,
}) => {
  const [displayName, setDisplayName] = useState(`${names} ${lastnames}`);
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!textRef.current) return;

    const checkFit = () => {
      const maxWidth = 250;
      const element = textRef.current;

      if (element && element.scrollWidth <= maxWidth) {
        return;
      }

      const namesArray = names.split(" ");
      const lastnamesArray = lastnames.split(" ");

      if (namesArray.length > 1) {
        const shortName = `${namesArray[0]} ${lastnames}`;
        if (element) {
          element.textContent = shortName;
          if (element.scrollWidth <= maxWidth) {
            setDisplayName(shortName);
            return;
          }
        }
      }
      if (lastnamesArray.length > 1) {
        const shortLastname = `${names} ${lastnamesArray[0]}`;
        if (element) {
          element.textContent = shortLastname;
          if (element.scrollWidth <= maxWidth) {
            setDisplayName(shortLastname);
            return;
          }
        }
      }
      const minimalName = `${namesArray[0]} ${lastnamesArray[0]}`;
      setDisplayName(minimalName);
    };

    checkFit();
  }, [names, lastnames]);

  return (
    <h1
      ref={textRef}
      className="whitespace-nowrap text-center text-xl font-bold text-white"
    >
      {displayName}
    </h1>
  );
};
