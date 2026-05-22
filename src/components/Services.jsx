import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Building2, ShoppingCart, ArrowRight, Search, ShieldCheck, TrendingUp } from 'lucide-react'
import { useLang } from '../i18n/useLang'

export default function Services() {
  const { t } = useLang()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const services = [
    {
      icon: Zap,
      title: t['services.landing.title'],
      desc: t['services.landing.desc'],
      price: t['services.landing.price'],
      features: [t['services.landing.f1'], t['services.landing.f2'], t['services.landing.f3'], t['services.landing.f4'], t['services.landing.f5']],
      tag: t['services.landing.tag'],
      color: '#3B82F6',
    },
    {
      icon: Building2,
      title: t['services.business.title'],
      desc: t['services.business.desc'],
      price: t['services.business.price'],
      features: [t['services.business.f1'], t['services.business.f2'], t['services.business.f3'], t['services.business.f4'], t['services.business.f5']],
      tag: null,
      color: '#8B5CF6',
    },
    {
      icon: ShoppingCart,
      title: t['services.ecommerce.title'],
      desc: t['services.ecommerce.desc'],
      price: t['services.ecommerce.price'],
      features: [t['services.ecommerce.f1'], t['services.ecommerce.f2'], t['services.ecommerce.f3'], t['services.ecommerce.f4'], t['services.ecommerce.f5']],
      tag: null,
      color: '#EC4899',
    },
  ]

  return (
    <section id="sherbimet" ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label">{t['services.label']}</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl leading-tight">
            {t['services.title.before']} <span className="text-gradient">{t['services.title.highlight']}</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl leading-relaxed">
            {t['services.subtitle']}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface-hover rounded-2xl p-6 flex flex-col group relative overflow-hidden"
            >
              {/* Tag */}
              {svc.tag && (
                <div className="absolute top-4 right-4 text-xs font-display font-600 bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                  {svc.tag}
                </div>
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${svc.color}18` }}
              >
                <svc.icon size={22} style={{ color: svc.color }} />
              </div>

              <h3 className="font-display font-700 text-lg text-white mb-2">{svc.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">{svc.desc}</p>

              {/* Price */}
              <div className="my-5 pt-5 border-t border-white/6">
                <span className="font-display font-700 text-xl text-white">{svc.price}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {svc.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="flex items-center gap-2 text-sm font-display font-600 mt-auto group-hover:gap-3 transition-all"
                style={{ color: svc.color }}
              >
                {t['services.cta']} <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
        {/* Why you need a website */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 rounded-2xl bg-[#111]/60 border border-white/6 p-8 sm:p-10"
        >
          <p className="section-label mb-6">{t['services.why.label']}</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                <Search size={18} className="text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">{t['services.why.seo.title']}</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t['services.why.seo.desc']}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={18} className="text-[#8B5CF6]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">{t['services.why.trust.title']}</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t['services.why.trust.desc']}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={18} className="text-[#10B981]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">{t['services.why.sales.title']}</h4>
                <p className="text-white/55 text-sm leading-relaxed">
                  {t['services.why.sales.desc']}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
