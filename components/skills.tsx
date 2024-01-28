import React from "react";
import toolsImage from "@/public/images/tools.png";
import Image from "next/image";
import styles from "@/app/page.module.css";
import { cn } from "@/lib/utils";
import { Gradient } from "./gradient";
import { ToolIcons } from "./social-icons";

function Skills() {
  return (
    <>
      <div className="flex justify-center overflow-hidden overflow-x-hidden ">
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
              height={1614}
              src="circles.svg"
              width={1614}
              className="invert 2xl:block hidden xl:block -pl-32 pt- dark:invert-0 "
              style={{ overflow: "hidden" }}
              priority={true}
            />
          </div>
          <div className={cn(styles.circles2, "2xl:hidden xl:hidden block")}>
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
            <Gradient className={styles.logoGradient4} conic />
          </div>
        </div>
      </div>

      <div className=" max-w-screen mb-[6rem] flex flex-col md:flex-row mx-auto">
        <Image
          src={toolsImage}
          alt="tools image"
          width={400}
          height={400}
          className="mt-[8rem] -z-20 xl:block 2xl:block lg:block hidden mx-auto"
        />
        <Image
          src={toolsImage}
          alt="tools image"
          width={320}
          height={320}
          className="mt-[8rem] -z-20 md:block lg:hidden xl:hidden 2xl:hidden hidden mx-auto"
        />
        <div className="md:leading-10 md:p-0 p-6 lg:max-w-xl md:max-w-md xl:max-w-full md:text-xl text-md dark:text-white/70 text-black/50 leading-6 mx-auto">
          <div className="md:text-3xl md:max-w-[40rem] text-3xl mb-7 mt-[8rem] max-w-full font-display bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
            Here are a few technologies I've been working and worked with:
          </div>
          <div className="grid grid-cols-1">
           <ToolIcons/>
          </div>
        </div>
        <Image
          src={toolsImage}
          alt="tools image"
          width={320}
          height={320}
          className="mt-[2rem] md:hidden block mx-auto"
        />
      </div>
    </>
  );
}

export default Skills;
