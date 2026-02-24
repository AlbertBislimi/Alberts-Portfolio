import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Building2, ShoppingCart, ArrowRight, Search, ShieldCheck, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Landing Page',
    desc: 'Faqe e vetme optimale për të kthyer vizitorët në klientë. Perfekte për biznese të reja ose promovime specifike.',
    price: 'Nga €399',
    features: ['Dizajn unik', '1 faqe + seksione', 'Formulë kontakti', 'Mobile-first', 'SEO bazë'],
    tag: 'Popullore',
    color: '#3B82F6',
  },
  {
    icon: Building2,
    title: 'Faqe Biznesi',
    desc: 'Prezencë e plotë online për kompaninë tuaj — shumë faqe, profesionale dhe e personalizuar.',
    price: 'Nga €799',
    features: ['5-10 faqe', 'Blog/Lajme', 'Galeri imazhe', 'Formulë kontakti avancuar', 'SEO i plotë'],
    tag: null,
    color: '#8B5CF6',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Dyqan online i plotë me menaxhim produktesh, pagesa dhe porosi — gati për shitje.',
    price: 'Nga €1,499',
    features: ['Dyqan i plotë', 'Pagesa online', 'Menaxhim inventar', 'Paneli admin', 'Email automatik'],
    tag: null,
    color: '#EC4899',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

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
          <span className="section-label">Shërbimet</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl leading-tight">
            Çfarë ndërtojmë <span className="text-gradient">për ju</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-xl leading-relaxed">
            Nga landing page të thjeshta deri në platforma komplekse — çdo projekt trajtohet me vëmendje dhe profesionalizëm.
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
                Fillo tani <ArrowRight size={15} />
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
          <p className="section-label mb-6">Pse keni nevojë për një website?</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                <Search size={18} className="text-[#3B82F6]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">SEO & Google</h4>
                <p className="text-white/45 text-sm leading-relaxed">
                  Një website i optimizuar mirë renditet në Google dhe sjell vizitorë falas — 24 orë në ditë, 7 ditë në javë.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={18} className="text-[#8B5CF6]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">Besueshmëri & Imazh</h4>
                <p className="text-white/45 text-sm leading-relaxed">
                  Klientët e vlerësojnë biznesin tuaj online para se t'ju kontaktojnë. Një website profesionale krijon besim në sekonda.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={18} className="text-[#10B981]" />
              </div>
              <div>
                <h4 className="font-display font-700 text-white text-sm mb-1.5">Shitje & Klientë të Rinj</h4>
                <p className="text-white/45 text-sm leading-relaxed">
                  Website juaj punon edhe kur ju nuk jeni online — mbledh kontakte, rezervime dhe kërkesa automatikisht, çdo ditë.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
