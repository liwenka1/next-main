import ModeToggle from './mode-toggle'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex items-center justify-center gap-4">
        <ModeToggle />
        <span>vvenkai</span>
      </div>
      <div className="flex gap-3">
        <span>Github</span>
        <span>Twitter</span>
      </div>
    </footer>
  )
}

export default Footer
