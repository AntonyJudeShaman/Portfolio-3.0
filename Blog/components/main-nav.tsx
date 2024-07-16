'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Icons } from '@/components/icons'
import { MobileNav } from '@/components/mobile-nav'

export function MainNav({ items, children }) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <div className="z-50 flex max-w-full bg-transparent md:gap-10">
      <div className="ml-auto">
        <Link
          href="/"
          className="logo-font  hidden items-center space-x-2 bg-transparent font-display text-4xl sm:inline-block md:flex"
          aria-label="BIND"
        >
          <span className="logo-font select-none font-display" aria-label="BIND">
            Antony
          </span>
        </Link>
        <button
          className="flex items-center justify-between space-x-2 bg-transparent md:hidden"
          onClick={toggleMobileMenu}
          aria-label="open menu"
          style={{ zIndex: 999999 }}
        >
          {showMobileMenu ? (
            <Icons.close style={{ zIndex: 9999999999 }} />
          ) : (
            <div className="burger select-none invert dark:invert-0" style={{ zIndex: 999999999 }}>
              <input type="checkbox" id="burger" />
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <span className="font-bold"></span>
        </button>
      </div>

      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  )
}
