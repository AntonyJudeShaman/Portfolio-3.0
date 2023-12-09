import React from "react";
import ContactHead from "@/components/contact-head";
<<<<<<< HEAD
import Contact from "@/components/newsletter";
=======
import Contact from "@/components/contact";
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373
import { Contactform } from "@/components/contact-form";
import NavMain from "@/components/nav";
import styles from "@/app/page.module.css";
import { Gradient } from "@/components/gradient";

function ContactPage() {
  return (
    <div className="2xl:mx-auto">
      <div className="pl-0 md:pl-6 overflow-x-hidden">
        <div className=" max-w-screen overflow-x-hidden">
          <Gradient className={styles.backgroundGradient} conic />
        </div>
        <ContactHead />
      </div>
      <div className="lg:m-12 m-0 mb-0">
        <Contactform className="md:mt-20 mt-10" />
      </div>
    </div>
  );
}

export default ContactPage;
