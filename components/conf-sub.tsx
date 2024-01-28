import React from "react";
import { Gradient2 } from "./gradient";
import styles from "@/app/page.module.css";
import me from "@/public/images/wizard.png";
import Image from "next/image";
import Particles from "./particles";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ConfSub() {
  return (
    <div
      className="mt-[3rem] overflow-hidden mx-auto items-center justify-center max-w-5xl"
      style={{ overflowY: "hidden" }}
    >
      <div className="mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 max-w-5xl">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={50}
        />
        <div className="md:text-2xl mx-auto md:p-0 p-6 text-md md:leading-10  dark:text-white/70 text-black/70 leading-6 max-w-2xl md:max-w-3xl lg:max-w-3xl">
          <div className="max-w-full text-lg md:text-left md:text-2xl md:leading-10 leading-6 dmsans mx-auto">
            <div className="max-w-xl p-6 rounded-md">
              <h2 className="text-4xl font-display mb-4">
                Thank You for Subscribing!
              </h2>
              <p className="text-xl mb-4">
                I appreciate you joining my newsletter community. To complete
                the subscription process,{" "}
                <span className="poppins text-teal-500">
                  {" "}
                  please check your email for a confirmation link.
                </span>
              </p>
              <p className="text-xl mb-4">
                Once confirmed, you'll receive the latest updates and exclusive
                content directly in your inbox.
              </p>
              <Link href="https://mail.google.com/">
                <Button
                  className="text-sm poppins duration-100 hover:bg-white hover:text-black dark:hover:invert border border-black "
                  size="lg"
                >
                  Open mail
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={me}
          height={700}
          width={700}
          className="pl-10 md:block mt-6 mx-auto hidden rounded-full overflow-hidden"
          alt="my picture"
        />
        <Image
          src={me}
          height={500}
          width={500}
          className="mx-auto p-6 md:hidden block pt-12 overflow-hidden"
          alt="my picture"
        />
      </div>
    </div>
  );
}
