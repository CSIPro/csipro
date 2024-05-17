import Link from "next/link";
import { FC } from "react";

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
}

const SocialLink: FC<Props> = (props) => {
  const social = socials[props.variant];

  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="h-full w-10 p-2 md:w-8"
    >
      <social.icon className="fill-muted transition-colors duration-300 dark:fill-white" />
    </Link>
  );
};

export const Twitter = () => <SocialLink variant="twitter" />;
export const Facebook = () => <SocialLink variant="facebook" />;
export const Instagram = () => <SocialLink variant="instagram" />;
export const LinkedIn = () => <SocialLink variant="linkedin" />;
export const GitHub = () => <SocialLink variant="github" />;
