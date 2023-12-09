"use client";
import React from "react";
<<<<<<< HEAD
import { NewsLetter } from "@/components/newsletter";
import styles from "@/app/page.module.css";
import { Gradient, Gradient2 } from "@/components/gradient";
import MainHead from "@/components/main-head";
import AboutMe from "@/components/about-me";
import Tools from "@/components/tools";
import Skills from "@/components/skills";
import SiteFooter from "@/components/site-footer"
=======
import Contact from "@/components/contact";
import styles from "@/app/page.module.css";
import { Gradient, Gradient2 } from "@/components/gradient";
import MainHead from "@/components/main-head";
import { Contactform } from "../components/contact-form";
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373

export default function Page(): JSX.Element {
  return (
    <>
      <div className="2xl:mx-auto overflow-hidden">
        <div className="pl-0 md:pl-6 min-h-screen">
          <div className=" max-w-screen overflow-hidden">
            <Gradient className={styles.backgroundGradient} conic />
          </div>
          <MainHead />
        </div>
      </div>

<<<<<<< HEAD
      <AboutMe />
      <Tools />
      <Skills />
      <NewsLetter/>
      <SiteFooter/>
=======
      <Contactform className=""/>
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373
    </>
  );
}
