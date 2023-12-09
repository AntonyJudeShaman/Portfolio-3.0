import React from "react";
import AboutHead from "@/components/about-head";
<<<<<<< HEAD
import Contact from "@/components/newsletter";
=======
import Contact from "@/components/contact";
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373
import { Contactform } from "@/components/contact-form";
import NavMain from "@/components/nav";
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

    </div>
  );
}

export default About;
