import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Card } from "./cardeffect";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ArrowRight } from "lucide-react";

export function NewsLetter() {
  return (
    <div className="md:mx-auto grid -ml-4 md:ml-12 md:grid-cols-2 max-w-8xl grid-cols-1 gap-10">
      <div className="mt-[7rem] mx-auto">
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
      <div className="mx-auto md:mr-[6rem] mb-[5rem] mt-[7rem]  max-w-2xl rounded-xl">
        <Card>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/antonyjudeshaman"
            method="post"
            target="popupwindow"
            onSubmit={(e) => { e.preventDefault(); window.open('https://buttondown.email/antonyjudeshaman', 'popupwindow'); }}
            className="rounded-2xl p-8 embeddable-buttondown-form "
          >
            <h2 className="flex text-3xl items-center font-display text-zinc-900 dark:text-zinc-100">
              <Icons.mail className="h-8 w-8 items-center" />
              <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-md text-zinc-600 poppins dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex">
              <input
                name="email"
                id="bd-email"
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-700/80 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-lg placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-500 dark:text-zinc-900 poppins dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              <Button type="submit" className="ml-4 flex-none">
                Subscribe
              </Button>
            </div>{" "}
            <p className="mt-2 text-left text-xs text-zinc-600 dark:text-zinc-400">
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
