import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaSquareXTwitter,
} from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/xenshreyas" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/xenshreyas/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@Gumloop_AI" },
  { icon: <FaSquareXTwitter />, path: "https://x.com/xenshreyas" },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
