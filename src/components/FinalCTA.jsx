import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="kontakt" ref={ref} className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-blue-600/5 border border-accent/20 p-10 sm:p-14 md:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent/20 blur-[80px] pointer-events-none" />

          {/* Grain overlay */}
          <div className="grain absolute inset-0 pointer-events-none" />

          <div className="relative z-10">
            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="section-label"
            >
              Gati?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
            >
              Gati të fillojmë?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-5 text-white/55 max-w-lg mx-auto text-lg leading-relaxed"
            >
              Na kontaktoni sot dhe marrim konsultim falas. Do t'ju dërgojmë ofertën brenda 24 orësh.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/38344000000?text=Përshëndetje%20Albert!%20Dua%20të%20diskutojmë%20për%20ndërtimin%20e%20faqes%20sime."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-display font-700 text-base px-8 py-4 rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp — Shkruani tani
              </a>

              {/* Email CTA */}
              <a
                href="mailto:albert@abstudio.dev"
                className="flex items-center justify-center gap-2 btn-secondary text-base py-4 px-8"
              >
                <Mail size={18} />
                albert@abstudio.dev
              </a>
            </motion.div>

            {/* Trust note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 text-white/30 text-sm"
            >
              Konsultimi fillestar është 100% falas · Oferta brenda 24h · Pa angazhim
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
