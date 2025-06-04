"use client";
import { useEffect, useState } from "react";

interface MemberBadgeProps {
  entryDate: string | Date;
  position: { nombre: string }[];
}

export const MemberBadge = ({ entryDate, position }: MemberBadgeProps) => {
  const [isNewMember, setIsNewMember] = useState(false);

  useEffect(() => {
    if (!entryDate) return;
    const entryDateObj = new Date(entryDate);
    const currentDate = new Date();

    const diffInMonths =
      (currentDate.getFullYear() - entryDateObj.getFullYear()) * 12 +
      (currentDate.getMonth() - entryDateObj.getMonth());

    setIsNewMember(diffInMonths < 3);
  }, [entryDate]);

  const displayText = position
    .map((p) => (isNewMember ? `${p.nombre} Nuevo` : p.nombre))
    .join(", ");

  return (
    <div
      className={`inline-flex items-center rounded-full py-1 text-lg font-normal md:px-3 ${
        isNewMember
          ? "animate-pulse font-gochi text-[#C0A9F5] drop-shadow-glow-purple"
          : "text-gray-100"
      }`}
    >
      {isNewMember && (
        <div className="mr-3 max-md:flex">
          <span className="text-2xl text-orange-500">-</span>
          <span className="text-2xl text-blue-400">`</span>
          <span className="text-2xl text-green-600">,</span>
        </div>
      )}
      <span className="whitespace-nowrap max-md:text-base">{displayText}</span>
      {isNewMember && (
        <div className="ml-3">
          <span className="text-2xl text-green-600">ˎ</span>
          <span className="text-2xl text-blue-400">ˊ</span>
          <span className="text-2xl text-orange-500">-</span>
        </div>
      )}
    </div>
  );
};
