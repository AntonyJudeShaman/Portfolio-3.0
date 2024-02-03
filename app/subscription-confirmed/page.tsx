import React from "react";
import SiteFooter from "@/components/site-footer";
import styles from "@/app/page.module.css";
import { Gradient2 } from "@/components/gradient";
import NavMain from "@/components/nav";
import SubConfirmed from "@/components/sub-confirmed";

function Confirmed() {
  return (
    <div className="mx-auto">
      <title>Thank you!!</title>
      <div className="pl-0 md:pl-6">
        <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-6 md:ml-0 max-w-screen">
          <NavMain />
        </div>
      </div>
      <div className="max-h-screen max-w-screen">
        <Gradient2 className={styles.backgroundGradient} conic />
      </div>
      <SubConfirmed />
      <div className="md:-ml-12">
        <SiteFooter />
      </div>

      {/* <div className="md:-ml-12">
        <SiteFooter />
      </div> */}
    </div>
  );
}

export default Confirmed;
