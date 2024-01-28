"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import me from "@/public/images/wizard.png";
import Image from "next/image";
import NavMain from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import Particles from "@/components/particles";
import styles from "@/app/page.module.css"
import { Gradient2 } from "@/components/gradient";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="pl-0 md:pl-6">
        <div className="flex flex-col md:-mt-0 z-60 mt-0 -ml-6 md:ml-0 max-w-screen">
          <NavMain />
        </div>
      </div>
      <div className="max-h-screen max-w-screen">
        <Gradient2 className={styles.backgroundGradient} conic />
      </div>
      <div
        className="mt-[3rem] overflow-hidden mx-auto items-center justify-center max-w-5xl"
        style={{ overflowY: "hidden" }}
      >
        <div className="mx-auto items-center justify-center grid grid-cols-1 lg:grid-cols-2 max-w-5xl">
          {/* <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={20}
          /> */}
          <div className="md:text-2xl mx-auto md:p-0 p-6 text-md md:leading-10  dark:text-white/70 text-black/70 leading-6 max-w-2xl md:max-w-3xl lg:max-w-3xl">
            <div className="max-w-full text-lg md:text-left md:text-2xl md:leading-10 leading-6 dmsans mx-auto">
              <div className="max-w-xl p-6 rounded-md">
                <h2 className="text-4xl font-display mb-4 dark:text-teal-500 text-purple-500">
                  Oops! The Magic Couldn't Find That Page.
                </h2>
                <p className="text-xl mb-4">
                  It seems the magical forces couldn't locate the page you're
                  looking for. The wizard is diligently watching the computer,
                  trying to figure it out!
                </p>
                <p className="mb-4 text-xl">
                  While the wizard works their magic, you can navigate back to
                  the home page.
                </p>
                <Link href="/">
                  <Button variant="default">Go back home</Button>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={me}
            height={700}
            width={700}
            className="pl-10 md:block mt-6 mx-auto hidden rounded-full overflow-hidden"
            alt="wizard"
          />
          <Image
            src={me}
            height={500}
            width={500}
            className="mx-auto p-6 md:hidden block pt-12 overflow-hidden"
            alt="wizard"
          />
        </div>
      </div>
      <div className="md:-ml-12">
        <SiteFooter />
      </div>
    </>
  );
}
