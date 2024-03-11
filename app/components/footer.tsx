import { SITE, NAVS } from '@/data/config'
import ModeToggle from './mode-toggle'

const RightSvg = () => {
  return (
    <svg
      aria-hidden="true"
      className="-mr-1 ml-1 mt-0.5 stroke-zinc-950 stroke-2 dark:stroke-zinc-50"
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
    >
      <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
      <path className="transition-all group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center gap-4">
        <ModeToggle />
        <span>{SITE.name}</span>
      </div>
      <div className="flex gap-3">
        {NAVS.map((nav) => (
          <a
            className="group flex cursor-pointer flex-row items-center justify-center px-2 py-1"
            target="_blank"
            href={nav.href}
            key={nav.name}
          >
            {nav.name}
            <RightSvg />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
