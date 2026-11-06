import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

interface Props { value: number; suffix?: string; decimals?: number }

/** Counts up from 0 when scrolled into view. */
export default function Counter({ value, suffix = '', decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => { node.textContent = v.toFixed(decimals) + suffix },
    })
    return () => controls.stop()
  }, [inView, value, suffix, decimals])

  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>
}
