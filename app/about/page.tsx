import React from "react";
import AboutHead from "@/components/about-head";
import SiteFooter from "@/components/site-footer";
import styles from "@/app/page.module.css";
import { Gradient2 } from "@/components/gradient";
import Tools from "@/components/tools";

function About() {
  return (
    <div className="mx-auto">
      <div className="pl-0 md:pl-6">
        
        <AboutHead />
      </div>
      <div className=" max-w-screen">
          <Gradient2 className={styles.backgroundGradient2} conic />
        </div>
      <div className="md:m-6 m-0 mb-10 mx-auto justify-center flex">
        <Tools />
      </div>
      <div className="md:-ml-12">
        <SiteFooter />
      </div>
    </div>
  );
}

export default About;
