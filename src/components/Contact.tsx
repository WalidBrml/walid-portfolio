import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { site } from '../data/site'
import SectionHeading from './SectionHeading'
import Highlight from './Highlight'

interface Item { icon: ReactNode; label: string; value: string; href?: string; external?: boolean }

export default function Contact() {
  const items: Item[] = [
    { icon: <Mail size={20} />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: <MapPin size={20} />, label: 'Location', value: site.location },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: site.linkedinLabel, href: site.linkedin, external: true },
    { icon: <Github size={20} />, label: 'GitHub', value: site.githubLabel, href: site.github, external: true },
  ]
  if (site.showPhone) {
    items.splice(2, 0, { icon: <Phone size={20} />, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` })
  }

  return (
    <section id="contact" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="06 — Contact"
          title="Let’s build something data-driven."
          accent="data-driven."
        />
        <p className="-mt-6 mb-10 max-w-3xl leading-relaxed text-ink-soft">
          <Highlight
            text="Open to Data Analyst, Business Intelligence and Data Science opportunities. Feel free to contact me for professional opportunities, collaborations and interesting data projects."
            terms={['Data Analyst', 'Business Intelligence', 'Data Science']}
          />
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => {
            const body = (
              <>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-purple/30 text-brand-cyan">{it.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-widest text-ink-soft">{it.label.toUpperCase()}</span>
                  <span className="block truncate font-semibold">{it.value}</span>
                </span>
              </>
            )
            return it.href ? (
              <a
                key={it.label} href={it.href}
                {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="card card-hover flex items-center gap-4 p-5"
              >
                {body}
              </a>
            ) : (
              <div key={it.label} className="card flex items-center gap-4 p-5">{body}</div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="card relative mt-10 overflow-hidden p-8 text-center sm:p-12"
        >
          <div className="absolute inset-0 -z-0 bg-gradient-to-br from-brand-blue/15 via-transparent to-brand-purple/20" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to turn your data <span className="gradient-text">into decisions?</span></h3>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              <Highlight
                text="Let’s connect and discuss how data analytics, business intelligence and machine learning can create real business value."
                terms={['data analytics', 'business intelligence', 'machine learning']}
              />
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={site.resumeUrl} download={site.resumeFileName} className="btn-primary"><Download size={18} /> Download Resume</a>
              <a href={`mailto:${site.email}`} className="btn-ghost"><Mail size={18} /> Say Hello</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
