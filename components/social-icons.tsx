import Link from "next/link";
import { Icons } from "./icons";
import { DiReact, DiHtml5, DiCss3, DiPostgresql } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiFirebase,
  SiPython,
  SiGooglecolab,
  SiGithub,
  SiJupyter,
  SiJavascript,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiSupabase,
  SiBrave,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs, TbBrandRadixUi } from "react-icons/tb";
import { siteConfig } from "config/site";

export const SocialMediaIcons = () => (
  <div className="flex flex-row gap-8 mt-5" style={{ zIndex: -9 }}>
    <Link
      href={`${siteConfig.links.instagram}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.insta className="dark:hover:text-teal-200 hover:text-purple-800 text-purple-600 dark:text-blue-400 hover:-translate-y-1 duration-300 h-[28px] w-[28px]" />
    </Link>
    <Link
      href={`${siteConfig.links.github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.gitHub className="dark: dark:hover:text-teal-200 hover:text-purple-800 text-purple-600 dark:text-blue-400 hover:-translate-y-1 duration-300 h-[28px] w-[28px]" />
    </Link>
    <Link
      href={`${siteConfig.links.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.linkedin className="dark: dark:hover:text-teal-200 hover:text-purple-800 text-purple-600 dark:text-blue-400 hover:-translate-y-1 duration-300 h-[28px] w-[28px]" />
    </Link>
    <Link
      href={`mailto:${siteConfig.links.email}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.mail className="dark: dark:hover:text-teal-200 hover:text-purple-800 text-purple-600 dark:text-blue-400 hover:-translate-y-1 duration-300 h-[28px] w-[28px]" />
    </Link>
    <Link
      href={`${siteConfig.links.codepen}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icons.codepen className="dark: dark:hover:text-teal-200 hover:text-purple-800 text-purple-600 dark:text-blue-400 hover:-translate-y-1 duration-300 h-[28px] w-[28px]" />
    </Link>
  </div>
);

export const ToolIcons = () => (
  <div className=" dmsans grid md:grid-cols-5 grid-cols-4 dark:text-white text-black/80 gap-y-4 md:gap-x-6 xl:gap-x-12 gap-x-8">
    <span className="flex flex-row items-center">
      <TbBrandNextjs className="h-[2.5rem] w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[4rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <DiReact className="h-[3rem] w-[2.9rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[4rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <FaNode className="h-[2.5rem] w-[3rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[4.4rem] md:w-[4.4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiTailwindcss className="h-[2.5rem] w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[4rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiFirebase className="h-[2.5rem] w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.5rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <DiPostgresql className="h-[2.9rem] w-[2.9rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[5rem] md:w-[5rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiJavascript className="h-[2.2rem] w-[2.2rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <GrMysql className="h-[2.5rem] w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.2rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiPrisma className="h-[2.5rem] w-[2.5rem] md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.4rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiTypescript className="h-[2.5rem] w-[2.5rem] md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiPython className="h-[2.5rem] w-[2.5rem]  md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiSupabase className="h-[2.5rem] w-[2.5rem]  md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiBrave className="h-[2.5rem] w-[2.5rem] md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiGithub className="h-[2.3rem] w-[2.3rem] md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.3rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <DiCss3 className="h-[2.5rem] w-[2.5rem] md:mt-0 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500  md:h-[3.6rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiJupyter className="h-[2.5rem] md:mt-4 mt-3 w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.6rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <DiHtml5 className="h-[2.5rem] md:mt-4 mt-3 w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.6rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <TbBrandRadixUi className="h-[2.5rem] w-[2.5rem] md:mt-4 mt-3 hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[4rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiGooglecolab className="h-[2.5rem] md:mt-4 mt-3 w-[2.5rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.5rem] md:w-[4rem]" />
    </span>
    <span className="flex flex-row items-center">
      <SiVisualstudiocode className="h-[2.2rem] md:mt-4 mt-3 w-[2.2rem] hover:-translate-y-1 duration-300 dark:hover:text-teal-500  hover:text-purple-500 md:h-[3.3rem] md:w-[4rem]" />
    </span>
  </div>
);
