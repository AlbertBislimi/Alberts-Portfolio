import { useContext } from 'react'
import { LangContext } from './LangContext'
import { translations } from './translations'

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const t = translations[lang]
  return { t, lang, setLang }
}
