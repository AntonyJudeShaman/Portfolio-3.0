import React from "react";
import SiteFooter from "@/components/site-footer"
import ProjectPage from "@/components/projects-page";

function About() {
  return (
    <div className="mx-auto z-30 md:ml-8 ml-0">
      <title>Projects | Antony Jude Shaman</title>
      <ProjectPage />
      <div className="md:-ml-12">
        <SiteFooter />
      </div>
    </div>
  );
}

export default About;
