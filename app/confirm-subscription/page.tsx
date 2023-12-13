import React from "react";
import AboutHead from "about-head";
import SiteFooter from "@/components/site-footer";
import styles from "@/app/page.module.css";
import { Gradient2 } from "@/components/gradient";
import NavMain from "@/components/nav";
import ConfSub from "@/components/conf-sub";

function Confirm() {
  return (
    <div className="mx-auto">
      <title>Please confirm you email</title>
      <div className="pl-0 md:pl-6">
        <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-6 md:ml-0 max-w-screen">
          <NavMain />
        </div>
      </div>
      <div className="max-h-screen max-w-screen">
        <Gradient2 className={styles.backgroundGradient} conic />
      </div>
      <ConfSub />
      <div className="md:-ml-12">
        <SiteFooter />
      </div>

      {/* <div className="md:-ml-12">
        <SiteFooter />
      </div> */}
    </div>
  );
}

export default Confirm;
