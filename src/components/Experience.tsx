import { motion } from 'framer-motion'
import { Building2, CalendarDays } from 'lucide-react'
import { experienceHeading, experiences } from '../data/experience'
import SectionHeading from './SectionHeading'
import Highlight from './Highlight'

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={experienceHeading.eyebrow} title={experienceHeading.title} accent={experienceHeading.accent} subtitle={experienceHeading.subtitle} />
        <ol className="relative ml-4 border-l border-brand-blue/30 pl-8 sm:ml-6 sm:pl-12">
          {experiences.map((exp, i) => (
            <motion.li
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[2.62rem] top-7 flex h-5 w-5 items-center justify-center rounded-full border-2 border-brand-cyan bg-bg shadow-[0_0_18px_rgba(54,221,245,.7)] sm:-left-[3.62rem]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              </span>
              <article className="card card-hover p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{exp.title}</h3>
                    <p className="mt-1 flex items-start gap-2 font-semibold text-brand-cyan">
                      <Building2 size={16} className="mt-1 shrink-0" /> {exp.company}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-soft">{exp.industry}</p>
                  </div>
                  <span className="chip shrink-0 self-start whitespace-nowrap">
                    <CalendarDays size={13} /> {exp.dates}
                  </span>
                </div>
                <p className="mt-5 leading-relaxed text-ink-soft"><Highlight text={exp.description} terms={exp.highlights ?? []} /></p>
                <ul className="mt-5 space-y-2.5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-[#d4d9f3]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                  {exp.tools.map((t) => <li key={t} className="chip">{t}</li>)}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
