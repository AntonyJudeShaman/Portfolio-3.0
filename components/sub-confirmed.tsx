import React from "react";
import { Gradient2 } from "./gradient";
import styles from "@/app/page.module.css";
import me from "@/public/images/wizard.png";
import Particles from "@/components/particles";
import Image from "next/image";

export default function SubConfirmed() {
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
                Thank You for Confirming Your Subscription!
              </h2>
              <p className="text-xl mb-4">
                Thank you for confirming your subscription to my newsletter.
                Now, please patiently await the exciting updates and exclusive
                content that will soon arrive in your inbox.
              </p>
              <p className="text-xl">
                If you have any questions or feedback, feel free to reach out.
                I'm thrilled to have you as part of our community!
              </p>
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
