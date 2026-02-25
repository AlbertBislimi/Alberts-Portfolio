import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Blerim Krasniqi',
    company: 'Krasniqi Auto',
    location: 'Ferizaj',
    text: 'Albert na ndërtoi faqen brenda 5 ditëve dhe rezultati ishte më mirë se sa kemi pritur. Klientët tanë tani na gjejnë lehtë online dhe kemi shtuar shitjet mbi 30%. Komunikimi ishte perfekt gjatë gjithë procesit.',
    rating: 5,
    initials: 'BK',
    color: '#3B82F6',
  },
  {
    name: 'Ardita Morina',
    company: 'Studio Ardita, Kozmetikë',
    location: 'Prishtinë',
    text: 'Isha skeptike fillimisht, por Albert ishte shumë profesional. Faqja jonë është tani e bukur, shpejt, dhe kemi numër rezervimesh online që nuk e kemi patur kurrë. Gjuha shqipe gjatë komunikimit bëri gjithçka shumë më të lehtë.',
    rating: 5,
    initials: 'AM',
    color: '#EC4899',
  },
  {
    name: 'Fisnik Berisha',
    company: 'Berisha Ndërtim',
    location: 'Gjilan',
    text: 'Kemi bërë faqe edhe me agjenci të tjera, por asnjë nuk ka dhënë rezultate si Albert. Çmimi transparent, dizajni modern, dhe support pas lansimit. Nuk do të shkojmë askund tjetër.',
    rating: 5,
    initials: 'FB',
    color: '#10B981',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Dëshmitë</span>
          <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Çfarë thonë{' '}
            <span className="text-gradient">klientët</span>
          </h2>
          <p className="mt-4 text-white/45 max-w-md mx-auto text-sm leading-relaxed">
            Bizneset kosovare që besuan te ne, dhe nuk u penduan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-surface rounded-2xl p-6 flex flex-col relative"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-accent/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-6 pt-5 border-t border-white/6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-700 text-sm"
                  style={{ background: `${t.color}20`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-display font-700 text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.company} · {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
