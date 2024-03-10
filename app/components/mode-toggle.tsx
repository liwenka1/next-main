'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { GoSun, GoMoon, GoSmiley } from 'react-icons/go'

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <GoSmiley />
  }

  return (
    <div className="cursor-pointer">
      {theme === 'light' ? <GoSun onClick={() => setTheme('dark')} /> : <GoMoon onClick={() => setTheme('light')} />}
    </div>
  )
}

export default ModeToggle
