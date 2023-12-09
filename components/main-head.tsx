import Image from "next/image";
import React from "react";
import coverImage from "@/public/circles.svg";
import NavMain from "./nav";
import myLogo from "@/public/me.png";
import { SocialMediaIcons } from "@/components/social-icons";
import styles from "@/app/page.module.css";
import { Gradient } from "./gradient";
import { cn } from "@/lib/utils";

function MainHead() {
  return (
    <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-4 md:ml-6 min-h-screen max-w-screen">
      <NavMain />
      <div className="flex flex-row">
        <div className="flex md:pl-5 ml-10 mt-36 md:mt-28 lg:mt-32 md:ml-0 flex-col md:m-0 m-6 text-left">
          <p
            className="md:text-4xl sm:text-4xl dark:text-white/90 text-black flex flex-col text-4xl lg:text-5xl 2xl:text-6xl md:mt-20 lg:mt-12 xl:text-6xl font-display 2xl:max-w-6xl xl:max-w-3xl max-w-md md:max-w-5xl lg:max-w-3xl text-left mb-"
            aria-label="Hello! I am Antony Jude Shaman"
            style={{ zIndex: 10 }}
          >
            Hello! I'm
          </p>
          <p
            className="md:text-6xl mt-2 sm:text-6xl dark:text-white/90 text-black about-heading flex flex-col text-6xl lg:text-7xl 2xl:text-8xl xl:text-8xl font-display 2xl:max-w-8xl xl:max-w-6xl sm:max-w-3xl max-w-md md:max-w-7xl lg:max-w-6xl text-left mb-"
            aria-label="Hello! I am Antony Jude Shaman"
            style={{ zIndex: 10 }}
          >
            Antony Jude Shaman{" "}
          </p>
          <p
            className="home-title max-w-screen poppins mr-5 md:mr-0 font-pops text-xl md:text-lg mt-5 2xl:text-xl xl:text-xl  mb-4  text-left"
            aria-label="I am currently a final year undergraduate student"
          >
            I am currently a final year undergraduate student
          </p>
          <SocialMediaIcons />
          <Gradient className={styles.logoGradient2} conic />
        </div>

        <div className="flex justify-center md:block hidden lg:mt-12 md:mt-28 ">
          <div
            className={cn(
              styles.logos,
              "2xl:right-12 2xl:pt-40 xl:pl-44 pl-32 pt-20 "
            )}
            style={{ zIndex: -10 }}
          >
            <div className={cn(styles.circles, "2xl:block hidden xl:block")}>
              <Image
                alt="Circles"
                height={1414}
                src="circles.svg"
                width={1414}
                className="invert 2xl:block hidden xl:block pl-52 pt-52 dark:invert-0 "
                style={{ overflow: "hidden" }}
                priority={true}
              />
            </div>
            <div
              className={cn(
                styles.circles2,
                "2xl:hidden xl:hidden block"
              )}
            >
              <Image
                alt="Circles"
                height={1214}
                src="circles.svg"
                width={1214}
                className="invert 2xl:hidden xl:hidden sm:hidden hidden lg:block md:block pl-10 pt-10 dark:invert-0 "
                style={{ overflow: "hidden" }}
                priority={true}
              />
            </div>
            <div className="md:block hidden">
              <Gradient className={styles.logoGradient} conic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHead;
