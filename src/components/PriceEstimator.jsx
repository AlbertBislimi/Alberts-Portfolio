import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react'

// ─── Pricing logic ────────────────────────────────────────────────────────────

const SITE_TYPES = [
  { id: 'prezantim', label: 'Faqe prezantimi', emoji: '🏢', base: 399 },
  { id: 'blog',      label: 'Blog / Lajme',    emoji: '📝', base: 550 },
  { id: 'dyqan',     label: 'Dyqan online',    emoji: '🛒', base: 1200 },
  { id: 'rezervim',  label: 'Sistem rezervimesh', emoji: '📅', base: 800 },
  { id: 'portofol',  label: 'Portofol',        emoji: '🎨', base: 349 },
  { id: 'saas',      label: 'SaaS / Aplikacion', emoji: '⚡', base: 2000 },
]

const PAGE_OPTIONS = [
  { id: '1',    label: '1 faqe',    multiplier: 1.0 },
  { id: '2-5',  label: '2–5 faqe', multiplier: 1.2 },
  { id: '5-10', label: '5–10 faqe',multiplier: 1.5 },
  { id: '10+',  label: '10+ faqe', multiplier: 2.0 },
]

const DESIGN_OPTIONS = [
  { id: 'yes', label: 'Po, kemi dizajn', bonus: 0 },
  { id: 'no',  label: 'Jo, duhet dizajn', bonus: 200 },
]

function roundTo50(n) {
  return Math.round(n / 50) * 50
}

function calcEstimate(types, pages, design) {
  if (!types.length) return null
  const bases = types.map(id => SITE_TYPES.find(t => t.id === id).base)
  const primary = Math.max(...bases)
  const extras = bases.filter(b => b !== primary).reduce((sum, b) => sum + b * 0.5, 0)
  const base = primary + extras
  const pageMult = PAGE_OPTIONS.find(p => p.id === pages)?.multiplier ?? 1
  const designBonus = DESIGN_OPTIONS.find(d => d.id === design)?.bonus ?? 0
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function PriceEstimator() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const [step, setStep]       = useState(1)
  const [dir, setDir]         = useState(1)
  const [types, setTypes]     = useState([])   // multi-select
  const [pages, setPages]     = useState(null)
  const [design, setDesign]   = useState(null)

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

  const selectedTypeLabels = types.map(id => SITE_TYPES.find(t => t.id === id)?.label).join(', ')
  const pagesLabel  = PAGE_OPTIONS.find(p => p.id === pages)?.label ?? ''
  const designLabel = DESIGN_OPTIONS.find(d => d.id === design)?.label ?? ''

  const whatsappMsg = estimate
    ? encodeURIComponent(
        `Përshëndetje Albert! 👋\n\nKam përdorur vlerësuesin në faqen tuaj dhe rezultati ishte:\n\n` +
        `📌 Lloji: ${selectedTypeLabels}\n` +
        `📄 Faqet: ${pagesLabel}\n` +
        `🎨 Dizajni: ${designLabel}\n` +
        `💰 Vlerësimi: €${estimate.low} – €${estimate.high}\n\n` +
        `Dëshiroj të diskutojmë më shumë!`
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
          <span className="section-label">Vlerësuesi</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Sa kushton <span className="text-gradient">faqja juaj?</span>
          </h2>
          <p className="mt-4 text-white/45 text-sm max-w-md mx-auto leading-relaxed">
            Përgjigju 3 pyetjeve të shpejta dhe merrni një vlerësim çmimi në sekonda.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto rounded-2xl bg-[#111] border border-white/8 p-8 sm:p-10 overflow-hidden"
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
                  Çfarë doni të ndërtoni?
                </h3>
                <p className="text-white/40 text-sm mb-6">Mund të zgjidhni më shumë se një opsion.</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {SITE_TYPES.map(t => {
                    const active = types.includes(t.id)
                    return (
                      <motion.button
                        key={t.id}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleType(t.id)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-display font-600 border transition-all"
                        style={{
                          background: active ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
                          borderColor: active ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.1)',
                          color: active ? '#93C5FD' : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        <span>{t.emoji}</span> {t.label}
                      </motion.button>
                    )
                  })}
                </div>

                <button
                  onClick={() => goTo(2)}
                  disabled={!types.length}
                  className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Vazhdo <ArrowRight size={16} />
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
                <h3 className="font-display font-700 text-xl text-white mb-2">Sa faqe keni nevojë?</h3>
                <p className="text-white/40 text-sm mb-5">Numri i faqeve ndikon drejtpërdrejt në çmim.</p>

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
                <h3 className="font-display font-700 text-xl text-white mb-2">Keni dizajn gati?</h3>
                <p className="text-white/40 text-sm mb-5">Dizajni nga fillimi shton pak kohë dhe kosto.</p>

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
                    Mbrapa
                  </button>
                  <button
                    onClick={() => goTo(3)}
                    disabled={!pages || !design}
                    className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Shiko vlerësimin <ArrowRight size={16} />
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
                  <span className="font-display font-600 text-white/60 text-sm">Vlerësimi juaj është gati</span>
                </div>

                {/* Estimate card */}
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="rounded-2xl bg-gradient-to-br from-accent/15 to-blue-600/5 border border-accent/25 p-6 mb-6"
                >
                  <p className="text-white/50 text-sm font-display mb-1">Çmimi i parashikuar</p>
                  <p className="font-display font-800 text-4xl sm:text-5xl text-white mb-3">
                    €{estimate.low.toLocaleString()}
                    <span className="text-white/40 text-3xl"> – </span>
                    €{estimate.high.toLocaleString()}
                  </p>
                  <p className="text-white/40 text-xs leading-relaxed">
                    Bazuar në: {selectedTypeLabels} · {pagesLabel} · {designLabel}
                  </p>
                </motion.div>

                <p className="text-white/30 text-xs mb-6 leading-relaxed">
                  Ky është një vlerësim fillestar — çmimi final varet nga detajet e projektit.
                  Konsultimi është 100% falas dhe pa angazhim.
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
                    Diskuto në WhatsApp
                  </a>

                  <button
                    onClick={reset}
                    className="flex items-center justify-center gap-2 btn-secondary text-sm py-3 px-5"
                  >
                    <RotateCcw size={14} />
                    Fillo sërish
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
