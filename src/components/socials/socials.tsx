import Link from "next/link";
import { FC } from "react";

import { cn } from "@/lib/utils";

import { FacebookLogo } from "./logos/facebook-logo";
import { GithubLogo } from "./logos/github-logo";
import { InstagramLogo } from "./logos/instagram-logo";
import { LinkedinLogo } from "./logos/linkedin-logo";
import { TwitterLogo } from "./logos/twitter-logo";

const socials = {
  twitter: {
    url: "https://twitter.com/csipro_dev",
    alt: "Twitter",
    icon: TwitterLogo,
  },
  facebook: {
    url: "https://facebook.com/csipro.dev",
    alt: "Facebook",
    icon: FacebookLogo,
  },
  instagram: {
    url: "https://instagram.com/csipro.dev",
    alt: "Instagram",
    icon: InstagramLogo,
  },
  linkedin: {
    url: "https://www.linkedin.com/company/csi-pro",
    alt: "LinkedIn",
    icon: LinkedinLogo,
  },
  github: {
    url: "https://github.com/csipro",
    alt: "GitHub",
    icon: GithubLogo,
  },
} as const;

interface Props {
  variant: keyof typeof socials;
  className?: string;
}

const SocialLink: FC<Props> = (props) => {
  const social = socials[props.variant];

  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-10 p-2 sm:w-8"
    >
      <social.icon
        className={cn(
          "fill-muted transition-colors duration-300 dark:fill-white",
          props.className,
        )}
      />
    </Link>
  );
};

interface SocialProps {
  className?: string;
}

export const Twitter: FC<SocialProps> = ({ className }) => (
  <SocialLink variant="twitter" className={cn(className)} />
);

export const Facebook: FC<SocialProps> = ({ className }) => (
  <SocialLink variant="facebook" className={cn(className)} />
);

export const Instagram: FC<SocialProps> = ({ className }) => (
  <SocialLink variant="instagram" className={cn(className)} />
);

export const LinkedIn: FC<SocialProps> = ({ className }) => (
  <SocialLink variant="linkedin" className={cn(className)} />
);

export const GitHub: FC<SocialProps> = ({ className }) => (
  <SocialLink variant="github" className={cn(className)} />
);
