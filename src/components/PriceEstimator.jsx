import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { useLang } from '../i18n/useLang'

// ─── Pricing logic ────────────────────────────────────────────────────────────

const BASE_PRICES = {
  prezantim: 399,
  blog: 550,
  dyqan: 1200,
  rezervim: 800,
  portofol: 349,
  saas: 2000,
}

const PAGE_MULTIPLIERS = {
  '1': 1.0,
  '2-5': 1.2,
  '5-10': 1.5,
  '10+': 2.0,
}

const DESIGN_BONUSES = {
  yes: 0,
  no: 200,
}

function roundTo50(n) {
  return Math.round(n / 50) * 50
}

function calcEstimate(types, pages, design) {
  if (!types.length) return null
  const bases = types.map(id => BASE_PRICES[id])
  const primary = Math.max(...bases)
  const extras = bases.filter(b => b !== primary).reduce((sum, b) => sum + b * 0.5, 0)
  const base = primary + extras
  const pageMult = PAGE_MULTIPLIERS[pages] ?? 1
  const designBonus = DESIGN_BONUSES[design] ?? 0
  const mid = base * pageMult + designBonus
  const low  = roundTo50(mid * 0.88)
  const high = roundTo50(mid * 1.15)
  return { low, high }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepDots({ step }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {[1, 2, 3].map(n => (
        <div key={n} className="flex items-center gap-2">
          <motion.div
            animate={{
              backgroundColor: n <= step ? '#3B82F6' : 'rgba(255,255,255,0.1)',
              scale: n === step ? 1.15 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-2 h-2 rounded-full"
          />
          {n < 3 && (
            <motion.div
              animate={{ backgroundColor: n < step ? '#3B82F6' : 'rgba(255,255,255,0.08)' }}
              transition={{ duration: 0.3 }}
              className="w-8 h-px"
            />
          )}
        </div>
      ))}
      <span className="ml-2 text-xs text-white/30 font-display">{step} / 3</span>
    </div>
  )
}

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
}

function EstimatePreview({ t, estimate, selectedTypeLabels, pagesLabel, designLabel }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      className="hidden lg:flex rounded-2xl border border-accent/20 bg-accent/10 p-6 flex-col justify-between"
    >
      <div>
        <div className="mb-6 flex items-center gap-2">
          <Sparkles size={17} className="text-accent" />
          <span className="font-display text-sm font-700 text-white">
            {t['estimator.preview.title']}
          </span>
        </div>

        {estimate ? (
          <>
            <p className="text-xs font-display font-600 uppercase tracking-[0.16em] text-white/45">
              {t['estimator.result.price']}
            </p>
            <p className="mt-2 font-display text-4xl font-800 leading-none text-white">
              €{estimate.low.toLocaleString()}
              <span className="text-2xl text-white/45"> – </span>
              €{estimate.high.toLocaleString()}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-white/55">
              {t['estimator.preview.subtitle']}
            </p>
          </>
        ) : (
          <div className="rounded-xl border border-white/10 bg-black/15 p-4">
            <p className="text-sm leading-relaxed text-white/60">
              {t['estimator.preview.empty']}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 space-y-3">
        {[
          [t['estimator.preview.type'], selectedTypeLabels || t['estimator.preview.emptyType']],
          [t['estimator.preview.pages'], pagesLabel || t['estimator.preview.defaultPages']],
          [t['estimator.preview.design'], designLabel || t['estimator.preview.defaultDesign']],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-black/15 p-3">
            <p className="text-[11px] font-display font-600 uppercase tracking-[0.14em] text-white/35">
              {label}
            </p>
            <p className="mt-1 text-sm text-white/70">{value}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PriceEstimator() {
  const { t } = useLang()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const [step, setStep]       = useState(1)
  const [dir, setDir]         = useState(1)
  const [types, setTypes]     = useState([])   // multi-select
  const [pages, setPages]     = useState(null)
  const [design, setDesign]   = useState(null)

  const SITE_TYPES = [
    { id: 'prezantim', label: t['estimator.type.prezantim'], emoji: '🏢' },
    { id: 'blog',      label: t['estimator.type.blog'],      emoji: '📝' },
    { id: 'dyqan',     label: t['estimator.type.dyqan'],     emoji: '🛒' },
    { id: 'rezervim',  label: t['estimator.type.rezervim'],  emoji: '📅' },
    { id: 'portofol',  label: t['estimator.type.portofol'],  emoji: '🎨' },
    { id: 'saas',      label: t['estimator.type.saas'],      emoji: '⚡' },
  ]

  const PAGE_OPTIONS = [
    { id: '1',    label: t['estimator.pages.1'] },
    { id: '2-5',  label: t['estimator.pages.2-5'] },
    { id: '5-10', label: t['estimator.pages.5-10'] },
    { id: '10+',  label: t['estimator.pages.10+'] },
  ]

  const DESIGN_OPTIONS = [
    { id: 'yes', label: t['estimator.design.yes'] },
    { id: 'no',  label: t['estimator.design.no'] },
  ]

  function goTo(next) {
    setDir(next > step ? 1 : -1)
    setStep(next)
  }

  function toggleType(id) {
    setTypes(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id])
  }

  function reset() {
    setDir(-1)
    setStep(1)
    setTypes([])
    setPages(null)
    setDesign(null)
  }

  const estimate = step === 3 ? calcEstimate(types, pages, design) : null
  const previewEstimate = calcEstimate(types, pages ?? '1', design ?? 'yes')

  const selectedTypeLabels = types.map(id => SITE_TYPES.find(st => st.id === id)?.label).join(', ')
  const pagesLabel  = PAGE_OPTIONS.find(p => p.id === pages)?.label ?? ''
  const designLabel = DESIGN_OPTIONS.find(d => d.id === design)?.label ?? ''

  const whatsappMsg = estimate
    ? encodeURIComponent(
        `${t['estimator.wa.greeting']}\n\n${t['estimator.wa.intro']}\n\n` +
        `${t['estimator.wa.type']} ${selectedTypeLabels}\n` +
        `${t['estimator.wa.pages']} ${pagesLabel}\n` +
        `${t['estimator.wa.design']} ${designLabel}\n` +
        `${t['estimator.wa.estimate']} €${estimate.low} – €${estimate.high}\n\n` +
        t['estimator.wa.outro']
      )
    : ''

  return (
    <section id="estimator" ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="section-label">{t['estimator.label']}</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {t['estimator.title.before']} <span className="text-gradient">{t['estimator.title.highlight']}</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm max-w-md mx-auto leading-relaxed">
            {t['estimator.subtitle']}
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-[#111] border border-white/8 p-8 sm:p-10 overflow-hidden"
          >
            <StepDots step={step} />

            <AnimatePresence mode="wait" custom={dir}>
            {/* ── Step 1: type picker ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <h3 className="font-display font-700 text-xl text-white mb-2">
                  {t['estimator.step1.title']}
                </h3>
                <p className="text-white/55 text-sm mb-6">{t['estimator.step1.subtitle']}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {SITE_TYPES.map(st => {
                    const active = types.includes(st.id)
                    return (
                      <motion.button
                        key={st.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleType(st.id)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-600 border transition-all"
                        style={{
                          background: active ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                          borderColor: active ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.1)',
                          color: active ? '#93C5FD' : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        <span>{st.emoji}</span> {st.label}
                      </motion.button>
                    )
                  })}
                </div>

                <button
                  onClick={() => goTo(2)}
                  disabled={!types.length}
                  className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {t['estimator.continue']} <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {/* ── Step 2: pages + design ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Pages */}
                <h3 className="font-display font-700 text-xl text-white mb-2">{t['estimator.step2.pages.title']}</h3>
                <p className="text-white/55 text-sm mb-5">{t['estimator.step2.pages.subtitle']}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {PAGE_OPTIONS.map(p => {
                    const active = pages === p.id
                    return (
                      <motion.button
                        key={p.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setPages(p.id)}
                        className="px-4 py-2.5 rounded-xl text-sm font-display font-600 border transition-all"
                        style={{
                          background: active ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                          borderColor: active ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.1)',
                          color: active ? '#93C5FD' : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {p.label}
                      </motion.button>
                    )
                  })}
                </div>

                {/* Design */}
                <h3 className="font-display font-700 text-xl text-white mb-2">{t['estimator.step2.design.title']}</h3>
                <p className="text-white/55 text-sm mb-5">{t['estimator.step2.design.subtitle']}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {DESIGN_OPTIONS.map(d => {
                    const active = design === d.id
                    return (
                      <motion.button
                        key={d.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setDesign(d.id)}
                        className="px-4 py-2.5 rounded-xl text-sm font-display font-600 border transition-all"
                        style={{
                          background: active ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                          borderColor: active ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.1)',
                          color: active ? '#93C5FD' : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {d.label}
                      </motion.button>
                    )
                  })}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => goTo(1)}
                    className="btn-secondary"
                  >
                    {t['estimator.back']}
                  </button>
                  <button
                    onClick={() => goTo(3)}
                    disabled={!pages || !design}
                    className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {t['estimator.showEstimate']} <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── Step 3: estimate reveal ── */}
            {step === 3 && estimate && (
              <motion.div
                key="step3"
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={18} className="text-accent" />
                  <span className="font-display font-600 text-white/60 text-sm">{t['estimator.result.ready']}</span>
                </div>

                {/* Estimate card */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-2xl bg-gradient-to-br from-accent/15 to-blue-600/5 border border-accent/25 p-6 mb-6"
                >
                  <p className="text-white/50 text-sm font-display mb-1">{t['estimator.result.price']}</p>
                  <p className="font-display font-800 text-4xl sm:text-5xl text-white mb-3">
                    €{estimate.low.toLocaleString()}
                    <span className="text-white/40 text-3xl"> – </span>
                    €{estimate.high.toLocaleString()}
                  </p>
                  <p className="text-white/55 text-xs leading-relaxed">
                    {t['estimator.result.based']} {selectedTypeLabels} · {pagesLabel} · {designLabel}
                  </p>
                </motion.div>

                <p className="text-white/45 text-xs mb-6 leading-relaxed">
                  {t['estimator.result.disclaimer']}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/38349588569?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-display font-700 text-sm px-6 py-3 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {t['estimator.result.whatsapp']}
                  </a>

                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 btn-secondary text-sm py-3 px-5"
                  >
                    <RotateCcw size={14} />
                    {t['estimator.result.reset']}
                  </button>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>

          <EstimatePreview
            t={t}
            estimate={previewEstimate}
            selectedTypeLabels={selectedTypeLabels}
            pagesLabel={pagesLabel}
            designLabel={designLabel}
          />
        </div>
      </div>
    </section>
  )
}
