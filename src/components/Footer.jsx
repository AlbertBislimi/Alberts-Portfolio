import { motion } from 'framer-motion'
import { MapPin, Mail, Github, Linkedin, Instagram } from 'lucide-react'
import ABLogo from './Logo'
import { useLang } from '../i18n/useLang'

const socials = [
  { icon: Github, href: 'https://github.com/AlbertBislimi', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/albertbislimi', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/ialbertbislimi', label: 'Instagram' },
]

export default function Footer() {
  const { t } = useLang()

  const footerLinks = {
    [t['footer.col1.title']]: [
      { label: 'Landing Page', href: '#sherbimet' },
      { label: t['pricing.business.name'], href: '#sherbimet' },
      { label: 'E-commerce', href: '#sherbimet' },
    ],
    [t['footer.col2.title']]: [
      { label: t['footer.col2.about'], href: '#rreth' },
      { label: t['footer.col2.work'], href: '#punimet' },
      { label: t['footer.col2.process'], href: '#procesi' },
      { label: t['footer.col2.pricing'], href: '#cmimet' },
    ],
    [t['footer.col3.title']]: [
      { label: t['faq.label'], href: '#faq' },
      { label: t['footer.col3.contact'], href: '#kontakt' },
      { label: 'WhatsApp', href: 'https://wa.me/38349588569' },
      { label: 'Email', href: 'mailto:ialbertbislimi@gmail.com' },
    ],
  }

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <ABLogo size="md" />
            </div>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              {t['footer.brand']}
            </p>

            <div className="mt-4 flex items-center gap-2 text-white/50 text-sm">
              <MapPin size={13} className="text-accent flex-shrink-0" />
              <span>{t['footer.location']}</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-white/50 text-sm">
              <Mail size={13} className="text-accent flex-shrink-0" />
              <a href="mailto:ialbertbislimi@gmail.com" className="hover:text-white transition-colors">
                ialbertbislimi@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-700 text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>{t['footer.copyright']}</span>
          <span className="flex items-center gap-1.5">
            {t['footer.madeWith']}
            <span className="text-red-400">♥</span>
            {t['footer.madeIn']}
          </span>
        </div>
      </div>
    </footer>
  )
}
