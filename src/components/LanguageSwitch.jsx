import { useLang } from '../i18n/useLang'
export default function LanguageSwitch() {
  const { lang, setLang, t } = useLang()
  return <div className="lang-toggle" role="group" aria-label={t.chooseLanguage}>
    {['sq', 'en'].map(value => <button type="button" key={value} className={lang === value ? 'active' : ''} aria-pressed={lang === value} onClick={() => setLang(value)}>{value.toUpperCase()}</button>)}
  </div>
}
