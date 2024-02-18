import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const socials = {
  twitter: {
    url: "https://twitter.com/csipro_dev",
    alt: "Twitter",
    src: "/socials/twitter.svg",
  },
  facebook: {
    url: "https://facebook.com/csipro.dev",
    alt: "Facebook",
    src: "/socials/facebook.svg",
  },
  instagram: {
    url: "https://instagram.com/csipro.dev",
    alt: "Instagram",
    src: "/socials/instagram.svg",
  },
  linkedin: {
    url: "https://www.linkedin.com/company/csi-pro",
    alt: "LinkedIn",
    src: "/socials/linkedin.svg",
  },
  github: {
    url: "https://github.com/csipro",
    alt: "GitHub",
    src: "/socials/github.svg",
  },
} as const;

interface Props {
  variant: keyof typeof socials;
}

const SocialLink: FC<Props> = (props) => {
  const social = socials[props.variant];

  return (
    <Link href={social.url} target="_blank" rel="noopener noreferrer">
      <Image src={social.src} alt={social.alt} width={24} height={24} />
    </Link>
  );
};

export const Twitter = () => <SocialLink variant="twitter" />;
export const Facebook = () => <SocialLink variant="facebook" />;
export const Instagram = () => <SocialLink variant="instagram" />;
export const LinkedIn = () => <SocialLink variant="linkedin" />;
export const GitHub = () => <SocialLink variant="github" />;
