import React from "react";
import { Gradient } from "./gradient";
import styles from "@/app/page.module.css";
import me from "@/public/images/my_photo.png";
import Image from "next/image";

export default function Tools() {
  return (
    <div className="md:mt-[15rem] mt-[5rem] mx-auto items-center justify-center max-w-7xl">
      <div className="mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 max-w-6xl">
        <Gradient className={styles.logoGradient2} conic />
        <div className="md:text-2xl mx-auto md:p-0 p-6 text-md md:leading-10  dark:text-white/70 text-black/70 leading-6 max-w-2xl md:max-w-3xl lg:max-w-xl">
          <div className="max-w-full text-lg md:text-left text-justify md:text-2xl md:leading-10 leading-6 dmsans mx-auto">
            I am passionate about a diverse range of interests that fuel my
            curiosity and drive for continuous learning. One of my primary
            interests lies in the dynamic field of technology, where I immerse
            myself in the world of
            <span className="dark:text-teal-300 text-purple-500 poppins"> full-stack development.</span> From
            crafting intuitive user interfaces using modern frameworks like{" "}
            <span className="dark:text-teal-300 text-purple-500 poppins">Nextjs</span> to exploring the
            intricacies of server-side technologies such as
            <span className="dark:text-teal-300 text-purple-500 poppins"> Node.js,</span> I find joy in the
            entire software development lifecycle.
          </div>
        </div>
        <Image
          src={me}
          height={400}
          width={400}
          className="pl-10 md:block mt-6 mx-auto hidden rounded-full overflow-hidden md:border-r-[14px] hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
          alt="my picture"
        />
        <Image
          src={me}
          height={300}
          width={300}
          className="mx-auto p-6 md:hidden block pt-12 overflow-hidden md:border-r-[14px] hover:scale-110 scale-105 border-purple-400 hover:border-r-[0px] duration-500"
          alt="my picture"
        />
      </div>
    </div>
  );
}
