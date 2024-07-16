"use client";
import * as React from "react";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { MainNavItem } from "types";
import { cn } from "@/lib/utils";
import { useLockBody } from "hooks/use-lock-body";
import { ModeToggle } from "./themeToggler";
import { Gradient } from "@/components/gradient";
import { motion } from "framer-motion";
import { siteConfig } from "config/site";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "slide-in-from-right backdrop-blur-3xl dark:bg-zinc-900 bg-slate-400 top-0 max-w-100 max-w-full max-h-screen fixed inset-0 z-50 grid  grid-flow-row auto-rows-max overflow-auto shadow-md animate-in md:hidden"
      )}
      style={{
        zIndex: 9999999,
      }}
    >
      <Gradient className={styles.backgroundGradient} conic />
      <div className="relative z-80 grid gap-6 h-screen bg p-4 text-popover-foreground shadow-md">
        <nav className="justify-center flex flex-col ">
          <div className="flex w-80 flex-row justify-between">
            <p className="p-2">Menu</p>
            <ModeToggle />
          </div>
          {items.map((item, index) => (
            <>
              <Link
                key={index}
                aria-label="navbar items"
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex w-full items-end z-80 text-5xl mb-5 rounded-md p-2 dmsans hover:underline",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {item.title}
              </Link>
            </>
          ))}{" "}
          <Link
            aria-label="navbar items"
            href={`${siteConfig.blogSiteUrl}`}
            className={cn(
              "flex w-full items-end z-80 text-5xl mb-5 rounded-md p-2 dmsans hover:underline"
            )}
          >
            Blogs
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}
