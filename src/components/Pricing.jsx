import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Landing Page',
    price: '€399',
    desc: 'Faqe e vetme me ndikim të lartë.',
    features: [
      'Dizajn unik & modern',
      '1 faqe me seksione',
      'Formulë kontakti',
      'Mobile responsive',
      'SEO bazë',
      '2 rishikime',
      'Dorëzim 5 ditë',
    ],
    cta: 'Fillo tani',
    featured: false,
    color: '#6B7280',
  },
  {
    name: 'Faqe Biznesi',
    price: '€799',
    desc: 'Prezencë e plotë online.',
    features: [
      'Gjithçka nga Landing Page',
      '5–10 faqe',
      'Blog / Lajme',
      'Galeri imazhe / video',
      'Formularë avancuar',
      'SEO i plotë',
      '3 rishikime',
      'Dorëzim 7 ditë',
    ],
    cta: 'Zgjedh këtë',
    featured: true,
    color: '#3B82F6',
  },
  {
    name: 'E-commerce',
    price: '€1,499',
    desc: 'Dyqan online i gatshëm.',
    features: [
      'Gjithçka nga Faqe Biznesi',
      'Dyqan me produkte',
      'Pagesa online (Stripe)',
      'Menaxhim porosi',
      'Email automatik',
      'Paneli admin',
      'Trajnim 1h',
      'Dorëzim 14 ditë',
    ],
    cta: 'Fillo tani',
    featured: false,
    color: '#EC4899',
  },
  {
    name: 'Custom',
    price: 'Flasim',
    desc: 'Projekt i madh ose unik? Le të diskutojmë.',
    features: [
      'SaaS & aplikacione',
      'Platform komplekse',
      'Integrime API',
      'Dizajn nga zero',
      'Support i dedikuar',
      'Mirëmbajtje mujore',
    ],
    cta: 'Na kontaktoni',
    featured: false,
    color: '#8B5CF6',
    isCustom: true,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

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
          <span className="section-label">Çmimet</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Çmime transparente,{' '}
            <span className="text-gradient">pa surpriza</span>
          </h2>
          <p className="mt-4 text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            Ne dallojmë nga konkurrentët: çmimet tona janë publike.
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
                  Më i popullarizuar
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
                {plan.price !== 'Flasim' && (
                  <span className={`text-sm ml-1 ${plan.featured ? 'text-white/60' : 'text-white/40'}`}>
                    njëherësh
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
          * Çmimet mund të ndryshojnë sipas kompleksitetit të projektit. Konsultimi fillestar është gjithmonë falas.
        </motion.p>
      </div>
    </section>
  )
}
