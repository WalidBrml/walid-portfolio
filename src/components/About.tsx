import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { about, site } from '../data/site'
import SectionHeading from './SectionHeading'
import Highlight from './Highlight'

export default function About() {
  return (
    <section id="about" className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-blue/40 via-brand-purple/30 to-brand-cyan/30 blur-2xl" aria-hidden="true" />
          <div className="card relative overflow-hidden !rounded-[1.75rem] p-2 shadow-glow-purple">
            <picture>
              <source srcSet={site.photo} type="image/webp" />
              <img
                src={site.photoFallback} alt={`Portrait of ${site.name}`} width={800} height={800}
                loading="lazy" decoding="async" className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
              />
            </picture>
            <div className="px-3 pb-3 pt-4 text-center">
              <p className="text-lg font-bold">{site.name}</p>
              <p className="text-sm text-brand-cyan">{site.tagline}</p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="card absolute -right-3 top-8 flex items-center gap-2 px-3 py-2 text-xs font-semibold sm:-right-6"
          >
            <Award size={16} className="text-brand-cyan" /> {about.floating[0]}
          </motion.div>
          <motion.div
            animate={{ y: [0, 6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="card absolute -left-3 bottom-24 flex items-center gap-2 px-3 py-2 text-xs font-semibold sm:-left-6"
          >
            <Briefcase size={16} className="text-brand-purple" /> {about.floating[1]}
          </motion.div>
        </motion.div>

        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.heading} accent={about.headingAccent} />
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            {about.paragraphs.map((p) => <p key={p}><Highlight text={p} terms={about.highlights} /></p>)}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Location and status">
            <li className="chip"><MapPin size={14} /> {about.badges[0]}</li>
            <li className="chip"><GraduationCap size={14} /> {about.badges[1]}</li>
            <li className="chip !border-emerald-400/40 !bg-emerald-400/10 !text-emerald-300">
              <Briefcase size={14} /> {about.badges[2]}
            </li>
            <li className="chip"><Sparkles size={14} /> {about.badges[3]}</li>
          </ul>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {about.projectCounts.map((c) => (
              <div key={c.label} className="card card-hover px-4 py-4 text-center">
                <dd className="text-3xl font-extrabold gradient-text">{c.value}</dd>
                <dt className="mt-1 text-xs text-ink-soft">{c.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
