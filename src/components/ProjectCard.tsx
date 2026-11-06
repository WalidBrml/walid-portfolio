import { motion } from 'framer-motion'
import { BarChart3, ExternalLink, Fish, Github, Linkedin, ShoppingCart, Store, TrendingUp } from 'lucide-react'
import type { Project } from '../data/projects'
import Highlight from './Highlight'

const icons = { store: Store, trending: TrendingUp, cart: ShoppingCart, fish: Fish } as const

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon] ?? BarChart3
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="card card-hover flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 text-brand-cyan">
          <Icon size={22} aria-hidden="true" />
        </span>
        {project.badge && <span className="chip !text-[0.7rem]">{project.badge}</span>}
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug">{project.title}</h3>
      <p className="mt-1 text-sm font-semibold text-brand-purple">{project.category}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft"><Highlight text={project.description} terms={project.emphasis ?? []} /></p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-[#d4d9f3]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tools.map((t) => <li key={t} className="chip !px-2.5 !py-0.5 !text-[0.72rem]">{t}</li>)}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.github && (
          <a className="btn-ghost !px-4 !py-2 text-sm" href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={15} /> GitHub
          </a>
        )}
        {project.dashboard && (
          <a className="btn-primary !px-4 !py-2 text-sm" href={project.dashboard} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={15} /> Live Dashboard
          </a>
        )}
        {project.linkedin && (
          <a className="btn-ghost !px-4 !py-2 text-sm" href={project.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={15} /> LinkedIn
          </a>
        )}
      </div>
    </motion.article>
  )
}
