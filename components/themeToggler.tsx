<<<<<<< HEAD
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
=======

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      className="mb-3 cursor-pointer"
      aria-label="Toggle theme"
      suppressHydrationWarning
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      {theme === "light" ? (
<<<<<<< HEAD
        <IoSunny className="h-[1.8rem] w-[1.8rem] text-yellow-950 rotate-90 scale-100 transition-all duration-300 dark:text-white" />
      ) : (
        <BsFillMoonStarsFill className="h-[1.8rem] w-[1.8rem]  rotate-90 dark:text-white dark:rotate-0 dark:scale-100 transition-all duration-300 scale-0" />
=======
        <Icons.sun className="h-[1.8rem] w-[1.8rem] text-yellow-950 rotate-90 scale-100 transition-all duration-300 dark:text-white" />
      ) : (
        <Icons.moon className="h-[1.8rem] w-[1.8rem]  rotate-90 dark:text-white dark:rotate-0 dark:scale-100 transition-all duration-300 scale-0" />
>>>>>>> cf77c012a0a4fbde0cea55df8b7396c463520373
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
