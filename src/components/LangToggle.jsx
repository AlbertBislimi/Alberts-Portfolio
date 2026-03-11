import { useLang } from '../i18n/useLang'

export default function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <button
      onClick={() => setLang(lang === 'sq' ? 'en' : 'sq')}
      className="flex items-center gap-1 text-xs font-display font-600 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 text-white/60 hover:text-white hover:border-white/20 transition-all"
      aria-label="Switch language"
    >
      <span className={lang === 'sq' ? 'text-accent' : 'text-white/40'}>SQ</span>
      <span className="text-white/20">/</span>
      <span className={lang === 'en' ? 'text-accent' : 'text-white/40'}>EN</span>
    </button>
  )
}
