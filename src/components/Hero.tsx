import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { heroStats, site } from '../data/site'
import Counter from './Counter'
import Highlight from './Highlight'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-16 pt-28 lg:px-8">
      <div className="mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="chip mb-8 !px-4 !py-2 text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {site.availability}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-ink-soft">HELLO, I’M</p>
          <h1 className="font-extrabold leading-[1.1]">
            <span className="gradient-text block text-4xl tracking-tight sm:text-5xl lg:text-6xl">{site.name}</span>
            <span className="mt-2 block text-3xl text-ink sm:text-4xl lg:text-5xl">{site.role}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            <Highlight text={site.intro} terms={site.introHighlights} />
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Core technologies"
        >
          {site.heroSkills.map((s) => (
            <li
              key={s.name}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/80 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#d4d9f3] transition-colors hover:border-brand-blue/60 hover:bg-brand-blue/10 hover:text-white"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }} aria-hidden="true" />
              {s.name}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="btn-primary">View Projects <ArrowRight size={18} /></a>
          <a href={site.resumeUrl} download={site.resumeFileName} className="btn-ghost"><Download size={18} /> Download Resume</a>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a className="icon-btn" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
          <a className="icon-btn" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
          <a className="icon-btn" href={`mailto:${site.email}`} aria-label="Send an email"><Mail size={17} /></a>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="card mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-8 px-6 py-8 md:grid-cols-4 md:divide-x md:divide-white/10"
        >
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col px-4 text-center">
              <dt className="order-2 mt-1 text-sm text-ink-soft">{s.label}</dt>
              <dd className="order-1 text-4xl font-extrabold gradient-text sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </dd>
            </div>
          ))}
        </motion.dl>

        <a href="#about" className="mt-10 inline-flex flex-col items-center gap-2 text-xs font-semibold tracking-[0.3em] text-ink-soft hover:text-brand-cyan">
          SCROLL
          <span className="h-10 w-px bg-gradient-to-b from-brand-cyan to-transparent" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
