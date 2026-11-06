import { useEffect, useState } from 'react'
import { Download, Github, Linkedin, Menu, X } from 'lucide-react'
import { navItems, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const ids = navItems.map((n) => n.id)

export default function Navbar() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const link = (id: string, label: string, mobile = false) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => setOpen(false)}
      aria-current={active === id ? 'page' : undefined}
      className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
        mobile ? 'block text-base' : ''
      } ${active === id ? 'bg-brand-blue/15 text-brand-cyan' : 'text-ink-soft hover:text-ink'}`}
    >
      {label}
    </a>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ? 'border-b border-white/5 bg-bg/80 backdrop-blur-xl' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-3 leading-tight">
          <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple text-sm font-extrabold shadow-glow">WB</span>
          <span>
            <span className="block text-lg font-extrabold">{site.name}</span>
            <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-brand-cyan">DATA ANALYST</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">{navItems.map((n) => link(n.id, n.label))}</div>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="icon-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={17} />
          </a>
          <a className="icon-btn" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github size={17} />
          </a>
          <a className="btn-primary !px-5 !py-2 text-sm" href={site.resumeUrl} download={site.resumeFileName}>
            <Download size={15} /> Resume
          </a>
        </div>

        <button
          className="icon-btn lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto max-w-7xl space-y-1 px-5 pb-5 lg:hidden">
          {navItems.map((n) => link(n.id, n.label, true))}
          <div className="flex items-center gap-3 pt-3">
            <a className="icon-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
            <a className="icon-btn" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
            <a className="btn-primary !px-5 !py-2 text-sm" href={site.resumeUrl} download={site.resumeFileName}>
              <Download size={15} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
