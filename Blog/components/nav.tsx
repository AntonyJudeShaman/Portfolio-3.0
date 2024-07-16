'use client'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'
import { cn } from '../lib/utils'
import { MainNav } from '@/components/main-nav'
import ThemeSwitch from './ThemeSwitch'
import React from 'react'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function NavMain({ className }: React.HTMLAttributes<HTMLElement>) {
  const [isHydrated, setIsHydrated] = React.useState(false)

  React.useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div
      className={cn('max-w-scr backdrop-blur-8xl z-50 mb-5 mt-5 font-geist', className)}
      suppressHydrationWarning
    >
      <div className="bg flex flex-row items-center justify-between space-x-2">
        <p
          className="logo-font flex-1 select-none font-display text-4xl font-bold md:hidden "
          aria-label="BIND"
          style={{ zIndex: 999999999 }}
        >
          Antony
        </p>
        <div className="float-right flex-1 justify-end md:hidden">
          <MainNav items={headerNavLinks} children={undefined} />
        </div>
      </div>
      <div className=" mt-4 flex justify-between md:ml-0">
        <div className="hidden md:block">
          <MainNav items={headerNavLinks} children={undefined} />
        </div>

        <nav className="flex flex-row items-center justify-center" style={{ zIndex: 99999 }}>
          {headerNavLinks &&
            headerNavLinks.map((item, index) => (
              <>
                <Link
                  key={index}
                  aria-label={item.title}
                  href={item.href}
                  className={cn(
                    'group relative mr-4 flex hidden flex-col items-center justify-center overflow-hidden rounded-md p-2 text-right font-geist text-lg text-zinc-900 dark:text-zinc-300 md:inline-block',

                    "after:content-'' relative overflow-hidden after:relative after:flex after:h-[2px] after:w-0 after:items-center after:bg-blue-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-purple-400",
                    'after:mt-2'
                  )}
                >
                  {item.title}
                </Link>
              </>
            ))}

          {isHydrated && (
            <div className="-mt-2 hidden md:block">
              <ThemeSwitch />
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}
