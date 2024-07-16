"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { useLockBody } from "hooks/use-lock-body";
import ThemeSwitch  from "./ThemeSwitch";

interface MobileNavProps {
  items: any;
  children: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "slide-in-from-right duration-500 ease-in-out backdrop-blur-3xl bg-gradient-to-b dark:from-indigo-950 dark:to-zinc-950 bg-slate-400 top-0 max-w-100 max-w-full max-h-screen fixed inset-0 z-50 grid  grid-flow-row auto-rows-max overflow-auto shadow-md animate-in md:hidden"
      )}
      style={{
        zIndex: 9999999,
      }}
    >
      <div className="relative z-80 grid gap-6 h-screen bg p-4 text-popover-foreground shadow-md">
        <nav className="justify-center flex flex-col ">
          <div className="flex w-80 flex-row justify-between">
            <p className="p-2 font-display">Menu</p>
            <ThemeSwitch />
          </div>
          {items.map((item, index) => (
            <Link
              key={index}
              aria-label="navbar items"
              href={item.href}
              passHref
              onClick={() => {useLockBody()}}
              className={cn(
                "flex w-full font-dmsans tracking-tight items-end z-80 text-5xl mb-5 rounded-md p-2 dmsans hover:underline",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
}
