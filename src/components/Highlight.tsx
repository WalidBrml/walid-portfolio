import { Fragment } from 'react'

interface Props { text: string; terms: readonly string[] }

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Renders text with the listed terms in bright white; everything else inherits the muted color. */
export default function Highlight({ text, terms }: Props) {
  if (terms.length === 0) return <>{text}</>
  const sorted = [...terms].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${sorted.map(escape).join('|')})`, 'gi')
  const lower = new Set(terms.map((t) => t.toLowerCase()))
  return (
    <>
      {text.split(pattern).map((part, i) =>
        lower.has(part.toLowerCase()) ? (
          <strong key={i} className="font-semibold text-white">{part}</strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
