import { createContext, useState, useEffect } from 'react'
export const LangContext = createContext()
const STORAGE_KEY = 'sitet-lang'
const META = {
  sq: { title: 'Sitet — Faqja jote është gati para se të paguash | Albert Bislimi', description: 'Demo falas brenda 48h. E sheh faqen para se të paguash. Website për biznese në Kosovë nga €19/muaj dhe plane për diasporën.' },
  en: { title: 'Sitet — Your website, ready before you pay | Albert Bislimi', description: 'Free demo within 48h. See your website before you pay. Websites for businesses in Kosovo from €19/month, with plans for the diaspora.' },
}
export function LangProvider({ children }) {
  const [lang, setLangState] = useState('sq')
  useEffect(() => {
    try { if (localStorage.getItem(STORAGE_KEY) === 'en') setLangState('en') } catch { /* Optional preference. */ }
  }, [])
  function setLang(value) {
    if (!['sq', 'en'].includes(value)) return
    setLangState(value)
    try { localStorage.setItem(STORAGE_KEY, value) } catch { /* Storage can be unavailable. */ }
  }
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = META[lang].title
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute('content', META[lang].description)
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute('content', META[lang].title)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'sq' ? 'sq_AL' : 'en_US')
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
