import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Code2 } from 'lucide-react'

const skills = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Supabase', 'Figma', 'SEO']

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="rreth" ref={ref} className="py-20 sm:py-28 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: heading + bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Rreth nesh</span>
            <h2 className="mt-4 font-display font-800 text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Ndërtojmë website{' '}
              <span className="text-gradient">që punojnë</span>
            </h2>

            <div className="mt-3 flex items-center gap-2 text-white/40">
              <MapPin size={13} className="text-accent flex-shrink-0" />
              <span className="text-sm">Kosovë</span>
            </div>

            <p className="mt-6 text-white/60 leading-relaxed">
              Jam <strong className="text-white">Albert Bislimi</strong>, web developer me mbi 4 vjet eksperiencë
              në ndërtimin e produkteve dixhitale. Kam punuar me biznese nga Kosova, Shqipëria,
              Maqedonia dhe Franca, duke i ndihmuar të kalojnë nga "nuk kemi faqe" tek
              "klientët po na gjejnë çdo ditë online".
            </p>

            <p className="mt-4 text-white/60 leading-relaxed">
              Ndryshe nga agjencitë e mëdha ku humbet në radhë pritjeje,
              këtu punon direkt me mua nga ideja deri në lansim.
              Komunikim i qartë, çmime të hapura, dhe rezultate që mund t'i matësh.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Projekte' },
                { value: '4+', label: 'Vite exp.' },
                { value: '7 ditë', label: 'Dorëzim' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-[#1A1A1A] border border-white/8 text-center">
                  <div className="font-display font-800 text-xl text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: skills + stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Stack */}
            <div className="rounded-2xl bg-[#111] border border-white/8 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Code2 size={14} className="text-accent" />
                <span className="text-sm font-display font-600 text-white/70">Stack & teknologji</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            {[
              {
                title: 'Transparencë totale',
                desc: 'Çmimet janë publike. Nuk ka surpriza fature pas lansimit, çdo gjë diskutohet para se të fillojmë.',
              },
              {
                title: 'Rezultate, jo premtime',
                desc: 'Çdo website ndërtohet me SEO, shpejtësi dhe konvertim në mendje, jo vetëm për të dukur mirë.',
              },
              {
                title: 'Punojmë shqip',
                desc: 'Komunikimi bëhet në gjuhën tënde. Nuk ka nevojë për terma teknikë, shpjegojmë çdo gjë thjesht.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-1 flex-shrink-0 rounded-full bg-accent/40 mt-1" />
                <div>
                  <p className="font-display font-700 text-white text-sm">{item.title}</p>
                  <p className="text-white/45 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
