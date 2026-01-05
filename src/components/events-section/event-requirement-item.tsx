import { CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

import { EventRequirement } from "@/models/events";

interface Props {
  requirement: EventRequirement;
}

export const EventRequirementItem = ({ requirement }: Props) => {
  if (requirement.link) {
    return (
      <li>
        <Link
          href={requirement.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open link for requirement: ${requirement.text}`}
          className="flex w-full flex-nowrap items-start gap-2 rounded-xl bg-[#222031]/50 p-4 text-base text-white"
        >
          <div className="pt-0.5">
            <CheckCircle size={20} />
          </div>
          <span className="w-full flex-1">{requirement.text}</span>
          <div className="pt-1">
            <ExternalLink size={20} />
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li className="flex w-full flex-nowrap items-start gap-2 rounded-xl bg-[#222031]/50 p-4 text-base text-white">
      <div className="pt-0.5">
        <CheckCircle size={20} />
      </div>
      <span className="w-full flex-1">{requirement.text}</span>
      <span className="size-5" />
    </li>
  );
};
