import { createContext, useState, useEffect } from 'react'

export const LangContext = createContext()

const STORAGE_KEY = 'ab-studio-lang'

const META = {
  sq: {
    title: 'Albert Bislimi — Web Developer Kosovë | Website Profesionale',
    description: 'Albert Bislimi — web developer nga Kosova. Ndërtojmë website profesionale për biznese në Kosovë, Shqipëri dhe Maqedoni. Landing page nga €399, dorëzim brenda 7 ditëve.',
  },
  en: {
    title: 'Albert Bislimi — Web Developer Kosovo | Professional Websites',
    description: 'Albert Bislimi — web developer from Kosovo. We build professional websites for businesses in Kosovo, Albania, and North Macedonia. Landing pages from €399, delivery within 7 days.',
  },
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'sq'
    } catch {
      return 'sq'
    }
  })

  function setLang(newLang) {
    setLangState(newLang)
    try { localStorage.setItem(STORAGE_KEY, newLang) } catch {}
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'sq' ? 'sq' : 'en'
    document.title = META[lang].title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', META[lang].description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', META[lang].title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', META[lang].description)
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', META[lang].title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', META[lang].description)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}
