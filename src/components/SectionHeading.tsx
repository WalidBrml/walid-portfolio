import { motion } from 'framer-motion'

interface Props {
  eyebrow: string
  title: string
  /** Part of `title` to render with the gradient. The rest stays white. */
  accent?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, accent, subtitle, align = 'left' }: Props) {
  const at = accent ? title.indexOf(accent) : -1
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}
    >
      <p className="mb-3 text-sm font-semibold tracking-widest text-brand-cyan">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        {at >= 0 && accent ? (
          <>
            {title.slice(0, at)}
            <span className="gradient-text">{accent}</span>
            {title.slice(at + accent.length)}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-soft">{subtitle}</p>}
    </motion.div>
  )
}
