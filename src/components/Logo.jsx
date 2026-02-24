import { motion } from 'framer-motion'

/**
 * ABLogo — stacked code brackets mark
 *
 * The mark is two pairs of angle brackets < > stacked vertically,
 * with a subtle slash between them (like a code comment divider).
 * No background square — just strokes on transparent, letting the
 * dark nav/footer background show through.
 *
 * On mount: each bracket path draws in via stroke-dashoffset.
 * On hover: outer brackets nudge outward, slash rotates slightly.
 */
export default function ABLogo({ size = 'sm' }) {
  const dim = size === 'sm' ? 32 : 36
  const scale = dim / 32
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl'

  const pathProps = (delay) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  })

  return (
    <a href="#" className="flex items-center gap-3 group select-none">
      {/* Mark */}
      <motion.svg
        width={dim}
        height={dim}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible flex-shrink-0"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Top-left bracket < */}
        <motion.path
          d="M13 5 L6 11 L13 17"
          stroke="#3B82F6"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            rest: { x: 0 },
            hover: { x: -1.5, transition: { duration: 0.25, ease: 'easeOut' } },
          }}
          {...pathProps(0.1)}
        />

        {/* Top-right bracket > */}
        <motion.path
          d="M19 5 L26 11 L19 17"
          stroke="#3B82F6"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            rest: { x: 0 },
            hover: { x: 1.5, transition: { duration: 0.25, ease: 'easeOut' } },
          }}
          {...pathProps(0.2)}
        />

        {/* Bottom-left bracket < */}
        <motion.path
          d="M13 15 L6 21 L13 27"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeOpacity="0.7"
          variants={{
            rest: { x: 0 },
            hover: { x: -1.5, transition: { duration: 0.25, ease: 'easeOut', delay: 0.04 } },
          }}
          {...pathProps(0.3)}
        />

        {/* Bottom-right bracket > */}
        <motion.path
          d="M19 15 L26 21 L19 27"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeOpacity="0.7"
          variants={{
            rest: { x: 0 },
            hover: { x: 1.5, transition: { duration: 0.25, ease: 'easeOut', delay: 0.04 } },
          }}
          {...pathProps(0.4)}
        />

        {/* Centre slash divider */}
        <motion.line
          x1="17.5" y1="11"
          x2="14.5" y2="21"
          stroke="#3B82F6"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.5"
          variants={{
            rest: { rotate: 0, originX: '16px', originY: '16px' },
            hover: { rotate: 8, originX: '16px', originY: '16px', transition: { duration: 0.3 } },
          }}
          {...pathProps(0.5)}
        />
      </motion.svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none gap-0.5">
        <motion.span
          className={`font-display font-800 text-white tracking-tight leading-none ${textSize}`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.3, ease: 'easeOut' }}
        >
          AB{' '}
          <motion.span
            className="text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.65 }}
          >
            Studio
          </motion.span>
        </motion.span>
        <motion.span
          className="text-white/25 font-display tracking-[0.2em] uppercase leading-none"
          style={{ fontSize: '0.47rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.85 }}
        >
          Web · Design · Dev
        </motion.span>
      </div>
    </a>
  )
}
