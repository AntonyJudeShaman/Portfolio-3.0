import Image from "next/image";
import React from "react";
import cover from "./contact-cover.svg";
import coverImage from "@/public/images/contact-cover.png";
import NavMain from "./nav";

function ContactHead() {
  return (
    <>
    <div className="-ml-5 md:ml-0"><NavMain /></div>
    <div className="flex flex-col -mt-[5rem] sm:-mt-[2.5rem] md:-mt-[5rem] -ml-6 md:ml-0 justify-center min-h-screen  max-w-screen">
      
      <div className=" flex items-center flex-row overflow-hidden justify-center">
        <div className=" flex md:pl-5 justify-center ml-12 mx-auto flex-col md:m-0  2xl:max-w-[100%] text-left">
          <p
            className="md:text-6xl sm:text-6xl  lg:text-7xl 2xl:text-8xl xl:text-7xl font-display text-6xl  2xl:max-w-1/2 xl:max-w-4xl lg:max-w-3xl text-left mb-"
            aria-label="Lets create something special"
          >
            Let&apos;s create something special
          </p>
          <p
            className="contact-title max-w-screen poppins font-sans sm:text-2xl text-xl md:text-lg lg:text-2xl mt-5 2xl:text-xl xl:text-2xl  mb-4  text-left"
            aria-label="Contact me for Queries and Colloborations"
          >
            Contact me for Queries and Colloborations
          </p>
          <Image
            src={coverImage}
            priority
            alt="contact cover image"
            className=" md:hidden ml-2 mx-auto mt-5 block"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center lg:mt-12 md:mt-28 2xl:mr-20 2xl:max-w-1/2">
        <Image
            src={coverImage}
            priority
            alt="contact cover image"
            className=" 2xl:block xl:hidden m-10 hidden"
            width={420}
            height={420}
          />
          <Image
            src={coverImage}
            priority 
            alt="contact cover image"
            className=" 2xl:hidden xl:block m-12 -mt-[2rem] hidden"
            width={400}
            height={400}
          />
          <Image
            src={coverImage}
            priority
            alt="contact cover image"
            className=" m-10 lg:block  -mt-[3rem] 2xl:hidden xl:hidden hidden"
            width={300}
            height={300}
          />
          <Image
            src={coverImage}
            priority
            alt="contact cover image"
            className="md:mr-16 lg:mr-24 lg:hidden md:block -mt-[8rem] 2xl:hidden xl:hidden hidden"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div></>
  );
}

export default ContactHead;
