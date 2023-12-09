import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "./cardeffect";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Gradient4 } from "./gradient";
import styles from "@/app/page.module.css"

export function NewsLetter() {
  return (
    <div className="md:mx-auto grid md:ml-12 ml-0 md:grid-cols-2 max-w-8xl grid-cols-1 gap-10">
      <div className="md:mt-[7rem] mt-[3rem] mx-auto">
        <div className="p-6">
          <h2 className="flex mb-4 text-6xl items-center font-display text-zinc-900 dark:text-zinc-100">
            My Articles{" "}
          </h2>
          <p className="dmsans mb-6 text-lg">
            Discover a world of insights in our curated newsletter. Join stay
            ahead with expert analyses, exclusive interviews, and insider tips.
            Subscribe now for a dose of valuable content directly to your inbox.
          </p>
          <Link href="/blogs" className="group">
            <Button className="text-md poppins" size="lg">
              View Articles{" "}
              <ArrowRight className="group-hover:translate-x-1 ml-2 duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mx-auto md:mr-[6rem] mr-[0rem] md:p-0 p-5 mb-[5rem] md:mt-[7rem] mt-[1rem] md:max-w-2xl rounded-xl">
    <Gradient4 className={styles.logoGradient4} conic />
        <Card>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/antonyjudeshaman"
            method="post"
            target="popupwindow"
            onSubmit={(e) => { e.preventDefault(); window.open('https://buttondown.email/antonyjudeshaman', 'popupwindow'); }}
            className="rounded-2xl md:p-8 p-5 embeddable-buttondown-form "
          >
            <h2 className="flex text-3xl items-center font-display text-zinc-900 dark:text-zinc-100">
              <Icons.mail className="h-8 w-8 items-center" />
              <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-md text-zinc-600 poppins dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex flex-col md:flex-row">
              <Input
                name="email"
                id="bd-email"
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-700/80 bg-white px-3 shadow-lg placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-500 dark:text-zinc-900 poppins dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              <Button type="submit" className="md:ml-4 w-[6rem] ml-0 mt-5 md:mt-0 flex-none">
                Subscribe
              </Button>
            </div>{" "}
            <p className="mt-4 text-left text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="https://buttondown.email/refer/antonyjudeshaman"
                target="_blank"
                rel="noopener noreferrer"
              >
                No spam - Unsubscribe at any time.
              </a>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewsLetter;
