"use client";
import Link from "next/link";
import { navConfig } from "config/home";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "./themeToggler";
import React from "react";
import { siteConfig } from "config/site";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function NavMain({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div
      className={cn(
        "max-w-scr m-5 pl-0 pr-0 md:pl-0 md:pr-20 backdrop-blur-8xl z-50 font-display",
        className
      )}
      suppressHydrationWarning
    >
      <div className="flex flex-row mr-5 items-center justify-between space-x-2 bg">
        <p
          className="logo-font select-none  md:hidden pl-6 md:pl-2  flex-1 text-4xl font-bold"
          aria-label="BIND"
          style={{ zIndex: 999999999 }}
        >
          Antony
        </p>
        <div className="flex-1 md:hidden justify-end float-right">
          <MainNav items={navConfig.mainNav} />
        </div>
      </div>
      <div className="md:ml-0 ml-5 flex mt-4 justify-between 2xl:justify-aroun">
        <div className="hidden md:block">
          <MainNav items={navConfig.mainNav} />
        </div>

        <nav
          className="justify-center flex flex-row items-center"
          style={{ zIndex: 99999 }}
        >
          {navConfig &&
            navConfig.mainNav.map((item, index) => (
              <>
                <Link
                  key={index}
                  aria-label={item.title}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "group relative flex flex-col justify-center text-right text-lg items-center overflow-hidden poppins hidden mr-4 dark:text-zinc-300 text-zinc-900 md:inline-block rounded-md p-2 font-medium",
                    item.disabled && "cursor-not-allowed opacity-60",
                    "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-[2px] dark:after:bg-orange-400 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
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
              "group relative flex flex-col justify-center text-right text-lg items-center overflow-hidden poppins hidden mr-4 dark:text-zinc-300 text-zinc-900 md:inline-block rounded-md p-2 font-medium",

              "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-[2px] dark:after:bg-orange-400 after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
              "after:mt-2"
            )}
          >
            Blogs
          </Link>
          {isHydrated && (
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
