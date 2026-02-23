import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Projekte të përfunduara' },
  { value: 100, suffix: '%', label: 'Klientë të kënaqur' },
  { value: 7, suffix: ' ditë', label: 'Dorëzim mesatar' },
  { value: 3, suffix: '+', label: 'Vite eksperiencë' },
]

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!isVisible || started.current) return
    started.current = true

    const duration = 1800
    const steps = 50
    const stepTime = duration / steps
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), target)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-[#111111] border-y border-white/5 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <div className="font-display font-800 text-3xl sm:text-4xl text-white">
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>
              <p className="mt-2 text-sm text-white/50 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
