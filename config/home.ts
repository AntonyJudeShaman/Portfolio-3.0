import { NavConfig } from "types";
import { DiJira, DiGoogleCloudPlatform } from "react-icons/di";
import { siteConfig } from "./site";

// NavConfig.ts
export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const socialConfig = {
  socialMedia: [
    {
      name: "GitHub",
      url: `${siteConfig.links.github}`,
    },
    {
      name: "Instagram",
      url: `${siteConfig.links.instagram}`,
    },
    {
      name: "Linkedin",
      url: `${siteConfig.links.linkedin}`,
    },
  ],
};

export const HomePage: NavConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};

export const course = [
  {
    title: "Google Data Analytics Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLR5TLU6JQQN",
    iconBg: "#383E56",
    icon: DiGoogleCloudPlatform,
    date: "May 1, 2023",
  },
  {
    title: "Architecting With Google ComputeEngine",
    iconBg: "#E6DEDD",
    icon: DiGoogleCloudPlatform,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3UF4U2DH8FG2",
    date: "August 14, 2022",
  },
  {
    title: "Agile with Atlassian Jira",
    iconBg: "#ABCEDD",
    icon: DiJira,
    link: "https://www.coursera.org/account/accomplishments/certificate/M8FKN4C4VY8Z",
    date: "November 15, 2022",
  },
];

export const achievements = [
  {
    title: "Google Data Analytics Professional Certificate",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLR5TLU6JQQN",
    iconBg: "#383E56",
    date: "May 1, 2023",
  },
  {
    title: "Architecting With Google ComputeEngine",
    iconBg: "#E6DEDD",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/3UF4U2DH8FG2",
    date: "August 14, 2022",
  },
  {
    title: "Agile with Atlassian Jira",
    iconBg: "#E6DEDD",
    link: "https://www.coursera.org/account/accomplishments/certificate/M8FKN4C4VY8Z",
    date: "November 15, 2022",
  },
];
