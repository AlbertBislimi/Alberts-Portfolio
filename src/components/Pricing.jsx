import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, MessageCircle } from 'lucide-react'
import { useLang } from '../i18n/useLang'

export default function Pricing() {
  const { t } = useLang()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const plans = [
    {
      name: t['pricing.landing.name'],
      price: '€399',
      desc: t['pricing.landing.desc'],
      features: [
        t['pricing.landing.f1'], t['pricing.landing.f2'], t['pricing.landing.f3'],
        t['pricing.landing.f4'], t['pricing.landing.f5'], t['pricing.landing.f6'],
        t['pricing.landing.f7'],
      ],
      cta: t['pricing.landing.cta'],
      featured: false,
      color: '#6B7280',
    },
    {
      name: t['pricing.business.name'],
      price: '€799',
      desc: t['pricing.business.desc'],
      features: [
        t['pricing.business.f1'], t['pricing.business.f2'], t['pricing.business.f3'],
        t['pricing.business.f4'], t['pricing.business.f5'], t['pricing.business.f6'],
        t['pricing.business.f7'], t['pricing.business.f8'],
      ],
      cta: t['pricing.business.cta'],
      featured: true,
      color: '#3B82F6',
    },
    {
      name: t['pricing.ecommerce.name'],
      price: '€1,499',
      desc: t['pricing.ecommerce.desc'],
      features: [
        t['pricing.ecommerce.f1'], t['pricing.ecommerce.f2'], t['pricing.ecommerce.f3'],
        t['pricing.ecommerce.f4'], t['pricing.ecommerce.f5'], t['pricing.ecommerce.f6'],
        t['pricing.ecommerce.f7'], t['pricing.ecommerce.f8'],
      ],
      cta: t['pricing.ecommerce.cta'],
      featured: false,
      color: '#EC4899',
    },
    {
      name: t['pricing.custom.name'],
      price: t['pricing.custom.price'],
      desc: t['pricing.custom.desc'],
      features: [
        t['pricing.custom.f1'], t['pricing.custom.f2'], t['pricing.custom.f3'],
        t['pricing.custom.f4'], t['pricing.custom.f5'], t['pricing.custom.f6'],
      ],
      cta: t['pricing.custom.cta'],
      featured: false,
      color: '#8B5CF6',
      isCustom: true,
    },
  ]

  return (
    <section id="cmimet" ref={ref} className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">{t['pricing.label']}</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {t['pricing.title.before']}{' '}
            <span className="text-gradient">{t['pricing.title.highlight']}</span>
          </h2>
          <p className="mt-4 text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            {t['pricing.subtitle']}
          </p>
        </motion.div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.featured
                  ? 'bg-accent border-2 border-accent shadow-2xl shadow-accent/20'
                  : 'card-surface'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent font-display font-700 text-xs px-3 py-1 rounded-full">
                  {t['pricing.featured']}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-700 text-lg ${plan.featured ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.featured ? 'text-white/70' : 'text-white/45'}`}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-display font-800 text-4xl ${plan.featured ? 'text-white' : 'text-white'}`}>
                  {plan.price}
                </span>
                {!plan.isCustom && (
                  <span className={`text-sm ml-1 ${plan.featured ? 'text-white/60' : 'text-white/40'}`}>
                    {t['pricing.oneTime']}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-accent'}`}
                    />
                    <span className={`text-sm ${plan.featured ? 'text-white/80' : 'text-white/60'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {plan.isCustom ? (
                <a
                  href="#kontakt"
                  className="flex items-center justify-center gap-2 rounded-xl py-3 font-display font-700 text-sm border border-white/15 text-white/80 hover:border-white/30 hover:text-white transition-all"
                >
                  <MessageCircle size={15} />
                  {plan.cta}
                </a>
              ) : (
                <a
                  href="#kontakt"
                  className={`flex items-center justify-center gap-2 rounded-xl py-3 font-display font-700 text-sm transition-all ${
                    plan.featured
                      ? 'bg-white text-accent hover:bg-white/90'
                      : 'bg-accent/15 text-accent border border-accent/30 hover:bg-accent/25'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-white/35 text-sm"
        >
          {t['pricing.note']}
        </motion.p>
      </div>
    </section>
  )
}
