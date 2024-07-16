'use client'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { IoSunny } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
  aria-label="Toggle Dark Mode"
  onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
>
  {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
    <IoSunny className="h-[1.8rem] w-[1.8rem] rotate-90 text-yellow-950 transition-all duration-300 dark:text-white" />
  ) : (
    <BsFillMoonStarsFill className="h-[1.8rem] w-[1.8rem] text-black transition-all duration-300 dark:rotate-0 dark:scale-100" />
  )}
</button>

  )
}

export default ThemeSwitch
