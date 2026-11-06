import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectFilters, projects, projectsHeading, type FilterName } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState<FilterName>('All Projects')

  const counts = useMemo(() => {
    const map = {} as Record<FilterName, number>
    projectFilters.forEach((f) => {
      map[f] = f === 'All Projects' ? projects.length : projects.filter((p) => p.filters.includes(f)).length
    })
    return map
  }, [])

  const visible = filter === 'All Projects' ? projects : projects.filter((p) => p.filters.includes(filter))

  return (
    <section id="projects" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={projectsHeading.eyebrow} title={projectsHeading.title} accent={projectsHeading.accent} subtitle={projectsHeading.subtitle} />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by technology">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                filter === f
                  ? 'border-transparent bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-glow'
                  : 'border-white/10 bg-surface/70 text-ink-soft hover:border-brand-blue/60 hover:text-ink'
              }`}
            >
              {f} <span className="ml-1 opacity-70">{counts[f]}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <div className="card mx-auto max-w-xl p-8 text-center">
            <p className="font-semibold">No {filter} projects in this portfolio yet.</p>
            <p className="mt-2 text-sm text-ink-soft">Select another filter to see the projects I have published.</p>
            <button type="button" className="btn-ghost mt-5 !py-2 text-sm" onClick={() => setFilter('All Projects')}>
              Show all projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
