"use client";
import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/themeToggler";
import { navConfig } from "config/home";
import { cn } from "@/lib/utils";
import { TypeBot } from "./typebot";
import { siteConfig } from "config/site";

export default function SiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="max-w-screen">
      <footer className=" bg-gradient-to-rb from-transparent to-black/20">
        <hr className="my-8 border-zinc-600 mx-auto justify-between md:max-w-[90%] max-w-2xl lg:my-8" />

        <div className="flex md:flex-row flex-col gap-y-8 justify-between items-center mx-auto text-lg md:text-md 2xl:max-w-[90%] xl:max-w-[68rem] lg:max-w-[58rem] md:max-w-[48rem] max-w-[20rem] sm:text-center  text-gray-50">
          <div>
            {navConfig &&
              navConfig.mainNav.map((item, index) => (
                <>
                  <Link
                    key={index}
                    aria-label={item.title}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "group relative flex flex-col justify-center text-right text-lg items-center overflow-hidden poppins md:mr-4 mr-0 dark:text-zinc-300 text-zinc-900 md:inline-block rounded-md p-2 font-medium",
                      item.disabled && "cursor-not-allowed opacity-60",
                      "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-[2px] dark:after:bg-purple-400 after:bg-green-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                      "after:mt-2"
                    )}
                  >
                    <span className="">{item.title}</span>
                  </Link>
                </>
              ))}
            <Link
              href={`${siteConfig.blogSiteUrl}`}
              target="_blank"
              className={cn(
                "group relative flex flex-col justify-center text-right text-lg items-center overflow-hidden poppins dark:text-zinc-300 text-zinc-900 md:inline-block rounded-md p-2 font-medium",

                "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-[2px] dark:after:bg-purple-400 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                "after:mt-2"
              )}
            >
              Blogs
            </Link>
          </div>
          <div className="-mt-1">{isHydrated && <ModeToggle />}</div>{" "}
          <div className="poppins dark:text-zinc-300 -mt-3 text-zinc-900">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </div>
        </div>
      </footer>
      <TypeBot />
    </div>
  );
}
