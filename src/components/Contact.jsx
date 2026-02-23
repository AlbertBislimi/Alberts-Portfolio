import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const EMAILJS_SERVICE = 'service_khnuiib'
const EMAILJS_TEMPLATE = 'template_zvb1tu1'
const EMAILJS_PUBLIC_KEY = 'KZFemUp6O7YlSR7vNkVl4'

export default function Contact() {
  const { ref, inView } = useInView()
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-[#111118]">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Work Together</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Have a project in mind? Send me a message and I'll get back to you within 24 hours.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-3">Contact Info</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Based in Kosovo. Available for remote projects worldwide.</p>
            </div>
            <div className="space-y-4">
              <a href="mailto:albertbislimi5@gmail.com" className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 hover:border-primary/30 transition-colors group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <p className="text-slate-300 text-sm font-medium">albertbislimi5@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/albertbislimi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 hover:border-primary/30 transition-colors group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                  <p className="text-slate-300 text-sm font-medium">@albertbislimi</p>
                </div>
              </a>
            </div>
            <div className="p-4 glass rounded-xl border border-primary/20 bg-primary/5">
              <p className="text-primary text-sm font-semibold mb-1">🕐 Response Time</p>
              <p className="text-slate-400 text-sm">Usually within 24 hours, Mon–Fri</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="md:col-span-3">
            {status === 'success' ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 px-6 py-2.5 glass rounded-xl text-slate-300 hover:text-white transition-colors text-sm">Send Another Message</button>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">Your Name</label>
                    <input type="text" name="name" required placeholder="Besnik Kelmendi" className="w-full px-4 py-3 bg-[#16161f] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1.5">Your Email</label>
                    <input type="email" name="email" required placeholder="besnik@example.com" className="w-full px-4 py-3 bg-[#16161f] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Subject</label>
                  <input type="text" name="subject" required placeholder="I need a website for my business" className="w-full px-4 py-3 bg-[#16161f] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-[#16161f] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none" />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please email me directly at albertbislimi5@gmail.com
                  </div>
                )}
                <button type="submit" disabled={status === 'loading'} className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark disabled:opacity-60 transition-all hover:scale-[1.01]">
                  {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" />Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
