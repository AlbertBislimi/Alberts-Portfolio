import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from 'emailjs-com'

const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const formRef = useRef(null)

  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-dark-card/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm text-brand font-medium uppercase tracking-widest">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Ready to Build{' '}
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Whether you have a clear vision or just an idea — let's talk.
            I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: '📧', label: 'Email', value: 'albert@albertbislimi.com' },
              { icon: '💼', label: 'LinkedIn', value: '/in/albertbislimi' },
              { icon: '🐙', label: 'GitHub', value: 'AlbertBislimi' },
              { icon: '📍', label: 'Location', value: 'Kosovo 🇽🇰' },
            ].map(item => (
              <div key={item.label} className="card p-4 flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-sm text-gray-300">{item.value}</div>
                </div>
              </div>
            ))}

            <div className="card p-5">
              <h4 className="font-semibold text-sm mb-2">🕐 Availability</h4>
              <p className="text-gray-400 text-sm">
                Currently accepting new projects. Typical response time: <span className="text-brand">under 24h</span>.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 card p-7 space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Agon Gashi"
                  className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="agon@business.com"
                  className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1.5 block">Tell me about your project</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="I need a website for my restaurant in Pristina. I want customers to be able to see the menu and make reservations..."
                className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand/60 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <span className="animate-spin">⏳</span> Sending...
                </>
              ) : (
                'Send Message →'
              )}
            </button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-sm text-center"
              >
                ✅ Message sent! I'll reply within 24 hours.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center"
              >
                ❌ Something went wrong. Try emailing me directly.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
