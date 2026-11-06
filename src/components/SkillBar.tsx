import { motion } from 'framer-motion'
import type { Skill } from '../data/skills'

export default function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-semibold">{skill.name}</span>
        <span className="font-bold text-brand-cyan">{skill.level}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-white/10"
        role="progressbar" aria-label={skill.name} aria-valuemin={0} aria-valuemax={100} aria-valuenow={skill.level}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple shadow-[0_0_12px_rgba(91,140,255,.6)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 1.1, delay: index * 0.07, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
