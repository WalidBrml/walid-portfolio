import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications, certificationsHeading } from '../data/certifications'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={certificationsHeading.eyebrow} title={certificationsHeading.title} accent={certificationsHeading.accent} subtitle={certificationsHeading.subtitle} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan">
                  <Award size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{c.issuer}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs">
                  <span className="font-semibold text-brand-purple">{c.date ?? ''}</span>
                  {c.url && (
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-cyan">
                      Verify <ExternalLink size={12} aria-hidden="true" />
                    </span>
                  )}
                </div>
              </>
            )
            return (
              <motion.li
                key={c.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                {c.url ? (
                  <a
                    href={c.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`${c.title}, ${c.issuer}. Opens verification page in a new tab`}
                    className="card card-hover flex h-full flex-col p-6"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="card flex h-full flex-col p-6">{inner}</div>
                )}
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
