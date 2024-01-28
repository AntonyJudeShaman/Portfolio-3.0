"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "./cardeffect";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Input2 } from "./ui/input2";
import { Gradient4 } from "./gradient";
import styles from "@/app/page.module.css";

export default function NewsLetter() {

  function handleSubmit() {
    window.open('https://buttondown.email/antonyjudeshaman', 'popupwindow');
}

  return (
    <div className="md:mx-auto md:ml-12 ml-0 flex lg:flex-row max-w-8xl flex-col gap-10">
      <div className="md:mt-[7rem] mt-[3rem] max-w-1/2 mx-auto">
        <div className="md:pr-4 md:p-0 p-6 lg:p-6 mx-auto">
          <h2 className="flex mb-4 md:text-6xl text-4xl items-center font-display bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-transparent">
            Dive into My Chronicles{" "}
          </h2>
          <p className="dmsans mb-6 md:text-lg text-md">
            Embark on a journey of knowledge with my exclusive newsletter. Stay
            ahead with captivating insights, thought-provoking interviews, and
            expert tips. Subscribe now for your regular dose of valuable content
            delivered straight to your inbox.
          </p>
          <Link href="https://blogs.antonyjudeshaman.vercel.app" className="group">
            <Button
              className="text-md poppins duration-100 hover:bg-white hover:text-black dark:hover:invert border border-black "
              size="lg"
            >
              Explore Articles{" "}
              <ArrowRight className="group-hover:opacity-100 delay-100 opacity-0 ml-1 duration-500" />
              <ChevronRight className="group-hover:opacity-0 duration-500 -ml-6" />
            </Button>
          </Link>
        </div>
      </div>
      <div className=" max-w-1/2 md:mr-[6rem] mr-[0rem] md:p-0 p-5 mb-[5rem] md:mt-[7rem] mt-[1rem] md:max-w-2xl rounded-xl">
        <Gradient4 className={styles.logoGradient4} conic />
        <Card>
          <form
            method="post"
            target="popupwindow"
            onSubmit={handleSubmit}
            action="https://buttondown.email/api/emails/embed-subscribe/antonyjudeshaman"
            className="rounded-2xl md:min-w-[30rem] md:p-8 p-5 embeddable-buttondown-form "
          >
            <h2 className="flex md:text-3xl text-[160%] items-center font-display text-zinc-900 dark:text-zinc-100">
              <Icons.mail className="h-8 w-8 items-center" />
              <span className="ml-3">Embark on the Voyage</span>
            </h2>
            <p className="mt-2 md:text-md text-sm text-zinc-600 poppins dark:text-zinc-400">
              Be the first to know when I unveil new stories, and feel free to
              disembark whenever you like.
            </p>
            <div className="mt-6 flex flex-col md:flex-row">
              <Input2
                name="email"
                id="bd-email"
                type="email"
                placeholder="Your Email Address"
                aria-label="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-700/80 bg-white px-3 shadow-lg placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-500 dark:text-zinc-900 poppins dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              <Button
                type="submit"
                variant="outline"
                className="md:ml-4 poppins w-[6rem] ml-0 mt-5 md:mt-0 flex-none"
              >
                Subscribe
              </Button>
            </div>{" "}
            <p className="mt-4 text-left text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="https://buttondown.email/refer/antonyjudeshaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                No spam - unsubscribe anytime.
              </a>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
