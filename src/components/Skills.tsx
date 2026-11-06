import { motion } from 'framer-motion'
import { skillCategories, skillsHeading } from '../data/skills'
import SectionHeading from './SectionHeading'
import SkillBar from './SkillBar'
import RadarCard from './RadarCard'

export default function Skills() {
  const total = skillCategories.reduce((n, c) => n + c.skills.length, 0)
  let running = 0

  return (
    <section id="skills" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={skillsHeading.eyebrow} title={skillsHeading.title} accent={skillsHeading.accent} subtitle={skillsHeading.subtitle} />
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }} className="card p-6 sm:p-8"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-bold">Skill Matrix</h3>
              <span className="text-sm text-ink-soft">{total} skills</span>
            </div>
            <div className="mt-6 space-y-8">
              {skillCategories.map((cat) => (
                <div key={cat.title}>
                  <h4 className="mb-4 text-xs font-bold tracking-widest text-brand-purple">{cat.title.toUpperCase()}</h4>
                  <div className="space-y-4">
                    {cat.skills.map((s) => <SkillBar key={s.name} skill={s} index={running++} />)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-24"
          >
            <RadarCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
