import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-ink-soft">{site.footer}</p>
        <div className="flex items-center gap-3">
          <a className="icon-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
          <a className="icon-btn" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
          <a className="icon-btn" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
        </div>
      </div>
    </footer>
  )
}
