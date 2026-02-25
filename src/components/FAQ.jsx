import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Sa kohë duhet për të bërë një faqe?',
    a: 'Varet nga madhësia e projektit. Një landing page zakonisht bëhet brenda 5 ditëve. Faqet e biznesit marrin 7 ditë, ndërsa dyqanet online 14 ditë. Jemi të qartë lidhur me afatin para fillimit të projektit.',
  },
  {
    q: 'Sa rishikime (revisions) janë të përfshira?',
    a: 'Landing Page vjen me 2 rishikime falas, Faqja e Biznesit me 3, dhe E-commerce me rishikime të pakufizuara gjatë fazës së zhvillimit. Pas lansimit, ndryshimet e vogla bëhen falas për 30 ditë.',
  },
  {
    q: 'Kush siguron hosting dhe domain?',
    a: 'Ju ndihmojmë të konfiguroni hosting dhe domain nëse nuk i keni. Rekomandojmë Vercel ose Cloudflare Pages (shpesh falas), plus Namecheap ose GoDaddy për domain (~€10-15/vit). Nuk shtojmë markup mbi kostot e tyre.',
  },
  {
    q: 'A punoni në gjuhën shqipe?',
    a: 'Po, absolutisht! Komunikimi ynë kryesor është shqip. Kuptojmë nevojat e bizneseve kosovare. Mund të punojmë edhe anglisht apo frëngjisht nëse keni nevojë.',
  },
  {
    q: 'Çfarë mënyrash pagese pranoni?',
    a: 'Pranojmë transfertë bankare (euro), PayPal, dhe Wise. Pagesa bëhet 50% para fillimit dhe 50% pas lansimit. Nuk ka tarifë të fshehura.',
  },
  {
    q: 'A ofroni mirëmbajtje pas lansimit?',
    a: 'Po. Kemi plan mirëmbajtje mujor nga €49/muaj që përfshin: update-e sigurie, backup-e javore, ndryshime të vogla tekstesh, dhe support prioritar. Shumë klientë e zgjedhin këtë opsion për qetësi mendore.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/6 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display font-600 text-white/90 text-sm sm:text-base">{faq.q}</span>
        <div className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
          {isOpen ? (
            <Minus size={14} className="text-accent" />
          ) : (
            <Plus size={14} className="text-white/50" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/55 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-24"
          >
            <span className="section-label">FAQ</span>
            <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Pyetjet e{' '}
              <span className="text-gradient">shpeshta</span>
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Nuk gjeni përgjigjen? Na kontaktoni direkt dhe i përgjigjemi brenda 2 orësh gjatë orarit të punës.
            </p>
            <a
              href="https://wa.me/38349588569"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-display font-600 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Na shkruani në WhatsApp
            </a>
          </motion.div>

          {/* Right: FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#111111] rounded-2xl border border-white/6 px-6"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
