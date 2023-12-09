import React from "react";
import AboutHead from "@/components/about-head";
import SiteFooter from "@/components/site-footer";
import styles from "@/app/page.module.css";
import { Gradient2 } from "@/components/gradient";
import Tools from "@/components/tools";
import ProjectPage from "@/components/projects-page";

function About() {
  return (
    <div className="mx-auto z-30">
      <ProjectPage />
      <div className="md:-ml-12">
        <SiteFooter />
      </div>
    </div>
  );
}

export default About;
