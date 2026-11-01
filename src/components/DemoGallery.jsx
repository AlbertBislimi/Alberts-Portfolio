import { useState } from 'react'
import demos from '../data/demos.json'
import { useLang } from '../i18n/useLang'
const featuredCategories = ['embeltore', 'dyqan_bodrum', 'salon_flokesh', 'berber', 'klinike_dentare', 'agjenci_udhetimi']
const featuredSlugs = demos.slice(0, 6).map(demo => demo.slug)
export default function DemoGallery({ filter }) {
  const { t } = useLang()
  const [expanded, setExpanded] = useState(false)
  const matching = demos.filter(demo => filter === 'all' || demo.sector === filter)
  const sectors = { kafiteri: t.kafiteri_embeltore, sallone: t.sallone_berber, klinika: t.klinika, dyqane: t.dyqane_sherbime }
  return <>
    <div className="demo-grid" id="demoGrid">
      {matching.filter(demo => featuredSlugs.includes(demo.slug)).map(demo => <a className="demo-card" key={demo.slug} href={`https://app.albertbislimi.com/s/${demo.slug}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.openDemo}: ${demo.name}`}>
        <div className="demo-phone"><div className="notch" /><img src={`/demos/${demo.slug}.webp`} alt={demo.name} width="480" height="1040" loading="lazy" decoding="async" /></div>
        <div className="demo-meta"><div className="name">{demo.name}</div><span className="sector">{t[featuredCategories[featuredSlugs.indexOf(demo.slug)]]}</span><div className="demo-badge"><span className="dot" />{t.demo_reale}</div></div>
      </a>)}
    </div>
    <div className="catalog-control"><button className="btn btn-secondary" type="button" aria-expanded={expanded} aria-controls="demo-catalog" onClick={() => setExpanded(!expanded)}>{expanded ? t.showLess : t.viewAll}</button></div>
    {expanded && <div className="catalog-grid" id="demo-catalog">{matching.map(demo => <a className="catalog-link" key={demo.slug} href={`https://app.albertbislimi.com/s/${demo.slug}`} target="_blank" rel="noopener noreferrer">{demo.name}<small>{sectors[demo.sector]} · {t.openDemo} ↗</small></a>)}</div>}
  </>
}
