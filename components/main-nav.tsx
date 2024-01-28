"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "types";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="flex z-50 max-w-full bg-transparent md:gap-10">
      <div className="ml-auto">
        
      <Link
        href="/"
        className="hidden  items-center bg-transparent space-x-2 md:flex"
        aria-label="BIND"
      >
        <span
          aria-label="BIND"
          className="hidden logo-font text-4xl font-display sm:inline-block"
        >
          <p className="logo-font select-none font-display" aria-label="BIND">
            Antony
          </p>
        </span>
      </Link>
        <button
          className="flex justify-between bg-transparent items-center space-x-2 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="open menu"
          style={{zIndex:999999}} 
        >
          {showMobileMenu ? (
            <Icons.close style={{zIndex:9999999999}} />
          ) : (
            <div className="burger invert dark:invert-0" style={{zIndex:999999999}}>
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <span className="font-bold"></span>
        </button>
      </div>

      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
