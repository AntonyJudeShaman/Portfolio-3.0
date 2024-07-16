'use client'
import * as React from 'react'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import headerNavLinks from '@/data/headerNavLinks'
import clsx from 'clsx'
import { TypeBot } from './typebot'

export default function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const [isHydrated, setIsHydrated] = React.useState(false)

  React.useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div className="max-w-screen">
      <footer className="bg-gradient-to-rb from-transparent to-black/20 md:py-8">
        <hr className="mx-auto my-8 max-w-2xl justify-between border-zinc-600 md:max-w-[85rem] lg:my-8" />

        <div className="md:text-md mx-auto flex max-w-[20rem] flex-col items-center justify-between gap-y-8 text-lg text-gray-50 sm:text-center md:max-w-[48rem] md:flex-row lg:max-w-[58rem] xl:max-w-[68rem]  2xl:max-w-[85rem]">
          <div>
            {headerNavLinks &&
              headerNavLinks.map((item, index) => (
                <>
                  <Link
                    key={index}
                    aria-label={item.title}
                    href={item.href}
                    className={clsx(
                      'font-pops group relative mr-0 flex flex-col items-center justify-center overflow-hidden rounded-md p-2 text-right text-lg font-medium text-zinc-900 dark:text-zinc-300 md:mr-4 md:inline-block',

                      "after:content-'' relative overflow-hidden after:relative after:flex after:h-[2px] after:w-0 after:items-center after:bg-green-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-purple-400",
                      'after:mt-2'
                    )}
                  >
                    {item.title}
                  </Link>
                </>
              ))}
          </div>
          <div className="mt-0 md:-mt-2">{isHydrated && <ThemeSwitch />}</div>
          <div className="flex md:-mt-4">
            <div className="font-pops text-zinc-900 dark:text-zinc-300">
              &copy; {new Date().getFullYear()} Antony Jude Shaman.
            </div>{' '}
          </div>
        </div>
      </footer>
      <TypeBot />
    </div>
  )
}
