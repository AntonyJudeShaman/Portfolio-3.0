"use client"
import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/themeToggler";
import { navConfig } from "config/home";
import { cn } from "@/lib/utils";

export default function SiteFooter({
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="max-w-screen">
      <footer className="md:py-8 bg-gradient-to-rb from-transparent to-black/20">
        <hr className="my-8 border-zinc-600 mx-auto justify-between md:max-w-[85rem] max-w-[23rem] lg:my-8" />
        <div className="flex md:flex-row flex-col gap-y-8 justify-between items-center mx-auto text-lg md:text-md md:max-w-[85rem] max-w-[20rem] sm:text-center  text-gray-50">
          <div>
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
                      "relative overflow-hidden after:relative after:flex after:items-center after:content-'' after:w-0 after:h-[2px] dark:after:bg-purple-400 after:bg-green-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
                      "after:mt-2"
                    )}
                  >
                    <span className="">{item.title}</span>
                  </Link>
                </>
              ))}
          </div>

          {isHydrated && <ModeToggle />}
          <div className="poppins dark:text-zinc-300 md:mb-0 mb-8 text-zinc-900">
            &copy; {new Date().getFullYear()} Antony Jude Shaman.
          </div>
        </div>
      </footer>
    </div>
  );
}
