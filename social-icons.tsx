import Link from "next/link";
import { Icons } from "./icons";

export const SocialMediaIcons = () => (
  <div className="fixed flex flex-row gap-8 justify-center" >
    <Link
      href="https://www.instagram.com/stark_shaman/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.insta className="dark:hover:text-purple-600/60  hover:text-purple-600/60 hover:-translate-y-1 duration-300 h-[20px] w-[20px]" />
    </Link>
    <Link
      href="https://github.com/AntonyJudeShaman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.gitHub className="dark: dark:hover:text-purple-600/60  hover:text-purple-600/60 hover:-translate-y-1 duration-300 h-[20px] w-[20px]" />
    </Link>
    <Link
      href="https://www.linkedin.com/in/antony-jude-shaman/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.linkedin className="dark: dark:hover:text-purple-600/60 hover:text-purple-600/60 hover:-translate-y-1 duration-300 h-[20px] w-[20px]" />
    </Link>
    <Link
      href="https://instagram.com/stark-shaman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.twitter className="dark: dark:hover:text-purple-600/60 hover:text-purple-600/60 hover:-translate-y-1 duration-300 h-[20px] w-[20px]" />
    </Link>
    <Link
      href="https://github.com/AntonyJudeShaman"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.codepen className="dark: dark:hover:text-purple-600/60 hover:text-purple-600/60 hover:-translate-y-1 duration-300 h-[20px] w-[20px]" />
    </Link>
  </div>
);
