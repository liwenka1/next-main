'use client'

import { useTheme } from 'next-themes'
import { GoSun, GoMoon } from 'react-icons/go'

const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <div className="cursor-pointer">
      <GoSun className="dark:hidden" onClick={() => setTheme('dark')} />
      <GoMoon className="hidden dark:block" onClick={() => setTheme('light')} />
    </div>
  )
}

export default ModeToggle
