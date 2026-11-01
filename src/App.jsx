import markets from './data/markets.json'
import { useState } from 'react'
import { useLang } from './i18n/useLang'
import DemoGallery from './components/DemoGallery'
import LanguageSwitch from './components/LanguageSwitch'

export default function App() {
  const { t, lang } = useLang()
  const [market, setMarket] = useState('kosove')
  const [filter, setFilter] = useState('all')
  function planHref(market, index) {
    const plan = ['Start', 'Biznes', 'Pro'][index]
    const data = markets[market]
    const message = `${lang === 'sq' ? 'Dua planin' : 'I want the'} ${plan} — ${data.symbol}${data.prices[index]}/${lang === 'sq' ? 'muaj' : 'month'} (${data.name})`
    return `https://wa.me/38349588569?text=${encodeURIComponent(message)}`
  }
  function handleMarketKey(event) {
    const tabs = [...event.currentTarget.parentElement.querySelectorAll('[role="tab"]')]
    const index = tabs.indexOf(event.currentTarget)
    const next = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key]
    if (next !== undefined) { event.preventDefault(); tabs[next].focus(); setMarket(tabs[next].dataset.tab) }
  }
  return (<>

<header className="nav">
<div className="wrap nav-inner">
<a className="brand" href="#hero">
<span className="mark">{t.s}</span>
<span>{t.sitet}<span className="by">{t.nga_albert_bislimi}</span></span>
</a>
<nav className="nav-links">
<a href="#si-funksionon">{t.si_funksionon}</a>
<a href="#demo">{t.demo}</a>
<a href="#klientet">{t.kliente}</a>
<a href="#cmimet">{t.cmimet}</a>
<a href="#faq">{t.faq}</a>
</nav>
<div className="nav-right">
<div className="nav-mobile-hide"><LanguageSwitch /></div>
<a className="btn btn-primary btn-sm" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim">{t.merr_demon_falas}</a>
</div>
</div>
</header>
<main>

<section className="hero" id="hero">
<div className="wrap">
<div className="hero-grid">
<div>
<span className="pill"><span className="dot"></span>{t.vetem_5_vende_me_0_go_live}</span>
<h1 style={{"marginTop": "20px"}}>{t.faqja_jote_eshte} <span className="gradient">{t.gati_para_se_te_paguash}</span>{t.symbol_15}</h1>
<p className="sub-pitch">{t.ne_e_ndertojme_falas_ti_e_sheh_e_provon_ne_telefon_dhe_del} <strong>{t["19_muaj"]}</strong>{t.symbol_15}</p>
<p className="sub-audience">{t.per_restorante_kafiteri_sallone_klinika_dhe_dyqane_ne_koso}</p>
<div className="hero-ctas">
<a className="btn btn-whatsapp" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim%3A%20___" target="_blank" rel="noopener noreferrer">
<svg className="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{"width": "1.1em", "height": "1.1em"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> {t.merr_demon_falas_ne_whatsapp} </a>
<a className="btn btn-secondary" href="#demo">
<svg className="icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"></path><circle cx="12" cy="12" r="3"></circle></svg> {t.shiko_75_demo} </a>
</div>
<div className="hero-trust">
<span><svg className="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.demo_brenda_48h}</span>
<span><svg className="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["0_per_te_filluar"]}</span>
<span><svg className="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.s_paguan_nese_s_te_pelqen}</span>
</div>
</div>
<div className="hero-visual">
<div className="phone-chip p1"><span className="tag">{t.eda_sweet_cake}</span><img src="/demos/eda-sweet-cake.webp" alt="Eda Sweet Cake demo" width="390" height="844" decoding="async" loading="eager" /></div>
<div className="phone-chip p2"><span className="tag">{t.ana_dental_care}</span><img src="/demos/ana-dental-care.webp" alt="Ana Dental Care demo" width="390" height="844" decoding="async" loading="eager" /></div>
<div className="phone-chip p3"><span className="tag">{t.cultr_barbershop}</span><img src="/demos/cultr-barbershop.webp" alt="Cultr Barbershop demo" width="390" height="844" decoding="async" loading="eager" /></div>
<div className="phone-chip p4"><span className="tag">{t.daka_wine}</span><img src="/demos/daka-wine.webp" alt="Daka Wine demo" width="390" height="844" decoding="async" loading="eager" /></div>
</div>
</div>
</div>
</section>

<section id="si-funksionon">
<div className="wrap">
<div className="section-head">
<span className="label">{t.si_funksionon}</span>
<h2>{t.nga_ideja_te_faqja} <span className="gradient">{t.live}</span>{t.ne_3_hapa}</h2>
<p>{t.pa_kontrata_te_gjata_pa_pagese_paraprake_e_sheh_demon_gati}</p>
</div>
<div className="steps-grid">
<div className="step-card">
<span className="num">{t["01"]}</span>
<div className="step-icon"><svg className="icon" viewBox="0 0 24 24" style={{"width": "22px", "height": "22px"}}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
<span className="time">{t.hapi_1_2_minuta}</span>
<h3>{t.na_dergo_emrin_ose_instagramin}</h3>
<p>{t.shkruaj_ne_whatsapp_emrin_e_biznesit_tend_ose_linkun_e_ins}</p>
</div>
<div className="step-card">
<span className="num">{t["02"]}</span>
<div className="step-icon"><svg className="icon" viewBox="0 0 24 24" style={{"width": "22px", "height": "22px"}}><rect x="7" y="2" width="10" height="20" rx="2"></rect><line x1="11" y1="18" x2="13" y2="18"></line></svg></div>
<span className="time">{t.hapi_2_48_ore}</span>
<h3>{t.brenda_48h_e_sheh_faqen_tende_gati}</h3>
<p>{t.ne_ndertojme_demon_reale_e_hap_direkt_ne_telefonin_tend_pa}</p>
</div>
<div className="step-card">
<span className="num">{t["03"]}</span>
<div className="step-icon"><svg className="icon" viewBox="0 0 24 24" style={{"width": "22px", "height": "22px"}}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
<span className="time">{t.hapi_3_vendos_ti}</span>
<h3>{t.te_pelqen_del_live_s_te_pelqen_s_paguan_asgje}</h3>
<p>{t.nese_vendos_te_vazhdosh_faqja_del_online_nga_19_muaj_nese_}</p>
</div>
</div>
<div className="steps-cta">
<a className="btn btn-primary" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim%3A%20___" target="_blank" rel="noopener noreferrer">{t.fillo_me_demon_tende_falas}</a>
</div>
</div>
</section>

<section id="demo" style={{"background": "var(--surface)", "borderTop": "1px solid var(--border)", "borderBottom": "1px solid var(--border)"}}>
<div className="wrap">
<div className="section-head">
<span className="label">{t["75_demo_gati"]}</span>
<h2>{t.zgjidh_sektorin} <span className="gradient">{t.hap_demon}</span></h2>
<p>{t.nga_app_albertbislimi_com_demo_reale_jo_mockup_ketu_nje_sh}</p>
</div>
<div className="chips">
<button className={filter === "all" ? "chip active" : "chip"} data-filter="all" type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>{t.te_gjitha}</button>
<button className={filter === "kafiteri" ? "chip active" : "chip"} data-filter="kafiteri" type="button" aria-pressed={filter === "kafiteri"} onClick={() => setFilter("kafiteri")}>{t.kafiteri_embeltore}</button>
<button className={filter === "sallone" ? "chip active" : "chip"} data-filter="sallone" type="button" aria-pressed={filter === "sallone"} onClick={() => setFilter("sallone")}>{t.sallone_berber}</button>
<button className={filter === "klinika" ? "chip active" : "chip"} data-filter="klinika" type="button" aria-pressed={filter === "klinika"} onClick={() => setFilter("klinika")}>{t.klinika}</button>
<button className={filter === "dyqane" ? "chip active" : "chip"} data-filter="dyqane" type="button" aria-pressed={filter === "dyqane"} onClick={() => setFilter("dyqane")}>{t.dyqane_sherbime}</button>
</div>
<DemoGallery filter={filter} />

</div>
</section>

<section id="klientet">
<div className="wrap">
<div className="section-head">
<span className="label">{t.kliente_live}</span>
<h2>{t.keto_nuk_jane_mockup_jane} <span className="gradient">{t.live}</span></h2>
<p>{t.faqe_reale_te_klienteve_reale_qe_funksionojne_cdo_dite}</p>
</div>
<div className="live-grid">
<div className="live-card">
<div className="browser-bar"><div className="browser-dots"><span></span><span></span><span></span></div><div className="browser-url">{t.veturakoreane_com}</div></div>
<div className="live-shot"><img src="/demos/live-veturakoreane.com.webp" alt="Vetura Koreane live site" width="760" height="475" decoding="async" loading="lazy" /></div>
<div className="live-body">
<h3>{t.vetura_koreane}</h3>
<div className="tags"><span>{t.import_veturash}</span><span>{t.kosove}</span></div>
<a className="visit" href="https://veturakoreane.com" target="_blank" rel="noopener noreferrer">{t.vizito_faqen}</a>
</div>
</div>
<div className="live-card">
<div className="browser-bar"><div className="browser-dots"><span></span><span></span><span></span></div><div className="browser-url">{t.teamawaken_info}</div></div>
<div className="live-shot"><img src="/demos/live-teamawaken.info.webp" alt="Awaken live site" width="760" height="475" decoding="async" loading="lazy" /></div>
<div className="live-body">
<h3>{t.awaken}</h3>
<div className="tags"><span>{t.wellness_retreats}</span><span>{t.diaspore}</span></div>
<a className="visit" href="https://teamawaken.info" target="_blank" rel="noopener noreferrer">{t.vizito_faqen}</a>
</div>
</div>
<div className="live-card">
<div className="browser-bar"><div className="browser-dots"><span></span><span></span><span></span></div><div className="browser-url">{t.gjejeonline_com}</div></div>
<div className="live-shot"><img src="/demos/live-gjejeonline.com.webp" alt="Gjeje Online live site" width="760" height="475" decoding="async" loading="lazy" /></div>
<div className="live-body">
<h3>{t.gjeje_online}</h3>
<div className="tags"><span>{t.marketplace}</span><span>{t.kosove}</span></div>
<a className="visit" href="https://gjejeonline.com" target="_blank" rel="noopener noreferrer">{t.vizito_faqen}</a>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="wrap">
<div className="speed-band">
<div className="speed-inner">
<div className="speed-head">
<span className="label">{t.shpejtesia}</span>
<h2>{t.faqja_e_vjeter_vs_faqja_e_jone}</h2>
<p>{t.faqet_e_renda_humbasin_kliente_vecanerisht_ne_telefon_me_i}</p>
</div>
<div className="speed-compare">
<div className="speed-col old">
<span className="tag">{t.faqe_tipike_e_vjeter}</span>
<div className="big" style={{"fontSize": "1.3rem"}}>{t.e_rende_e_ngadalte}</div>
<div className="sub">{t.foto_te_pakompresuara_shkripta_te_paperdorura_pa_cache}</div>
</div>
<div className="speed-col new">
<span className="tag">{t.sitet}</span>
<div className="big" style={{"fontSize": "1.3rem"}}>{t.e_lehte_e_shpejte}</div>
<div className="sub">{t.kod_minimal_foto_te_kompresuara_pa_librari_te_teperta}</div>
</div>
</div>
<p className="speed-note">{t.shpejtesia_reale_matet_per_demon_tende_ne_momentin_e_ndert}</p>
</div>
</div>
</div>
</section>

<section id="cmimet" style={{"background": "var(--surface)", "borderTop": "1px solid var(--border)", "borderBottom": "1px solid var(--border)"}}>
<div className="wrap">
<div className="section-head">
<span className="label">{t.cmimet}</span>
<h2>{t.thjeshte_transparente} <span className="gradient">{t.zgjedh_vendin_tend}</span></h2>
<p>{t.demo_falas_gjithmone_ne_cdo_vend_cmimi_ndryshon_sipas_vend}</p>
</div>
<div className="tabs" role="tablist" aria-label={t.chooseMarket}>
<button className={market === "kosove" ? "tab-btn active" : "tab-btn"} data-tab="kosove" type="button" role="tab" id={"tab-" + "kosove"} aria-controls={"panel-" + "kosove"} aria-selected={market === "kosove"} tabIndex={market === "kosove" ? 0 : -1} onClick={() => setMarket("kosove")} onKeyDown={handleMarketKey}>{t.kosove_eur}</button>
<button className={market === "zvicer" ? "tab-btn active" : "tab-btn"} data-tab="zvicer" type="button" role="tab" id={"tab-" + "zvicer"} aria-controls={"panel-" + "zvicer"} aria-selected={market === "zvicer"} tabIndex={market === "zvicer" ? 0 : -1} onClick={() => setMarket("zvicer")} onKeyDown={handleMarketKey}>{t.zvicer_chf}</button>
<button className={market === "gjermani" ? "tab-btn active" : "tab-btn"} data-tab="gjermani" type="button" role="tab" id={"tab-" + "gjermani"} aria-controls={"panel-" + "gjermani"} aria-selected={market === "gjermani"} tabIndex={market === "gjermani" ? 0 : -1} onClick={() => setMarket("gjermani")} onKeyDown={handleMarketKey}>{t.gjermani_austri_eur}</button>
<button className={market === "shba" ? "tab-btn active" : "tab-btn"} data-tab="shba" type="button" role="tab" id={"tab-" + "shba"} aria-controls={"panel-" + "shba"} aria-selected={market === "shba"} tabIndex={market === "shba" ? 0 : -1} onClick={() => setMarket("shba")} onKeyDown={handleMarketKey}>{t.shba_usd}</button>
</div>
<p className="market-note">{t.cmimi_varet_nga_vendi_ku_operon_biznesi_hosting_gjuhet_lig}</p>
<div className="pricing-banner">{t.vetem_5_vende_themeluese_cmim_fillestar_special_sipas_vend}</div>

<div className={market === "kosove" ? "pricing-panel active" : "pricing-panel"} id="panel-kosove" role="tabpanel" aria-labelledby="tab-kosove">
<div className="pricing-grid">
<div className="plan">
<h3>{t.start}</h3>
<div className="price"><span className="amt">{markets.kosove.symbol}{markets.kosove.prices[0]}</span><span className="per">{t.muaj}</span></div>
<p className="desc">{t["1_faqe_e_thjeshte_gati_brenda_48h"]}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_faqe_domen_hosting_ssl"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.whatsapp_telefon_harte_orari}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_ndryshim_ne_muaj"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_gjuhe"]}</li>
</ul>
<a className="btn btn-secondary" href={planHref("kosove", 0)} target="_blank" rel="noopener noreferrer">{t.fillo_me_start}</a>
</div>
<div className="plan featured">
<span className="badge-pop">{t.me_e_kerkuar}</span>
<h3>{t.biznes}</h3>
<div className="price"><span className="amt">{markets.kosove.symbol}{markets.kosove.prices[1]}</span><span className="per">{t.muaj}</span></div>
<p className="desc">{t.deri_5_faqe_menu_cmime_galeri}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.deri_5_faqe_seksione}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.menu_ose_liste_cmimesh_galeri}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["3_ndryshime_ne_muaj"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["2_gjuhe"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.konfigurim_profili_google_business}</li>
</ul>
<a className="btn" style={{"background": "#fff", "color": "var(--accent-hover)", "justifyContent": "center"}} href={planHref("kosove", 1)} target="_blank" rel="noopener noreferrer">{t.fillo_me_biznes}</a>
</div>
<div className="plan">
<h3>{t.pro}</h3>
<div className="price"><span className="amt">{markets.kosove.symbol}{markets.kosove.prices[2]}</span><span className="per">{t.muaj}</span></div>
<p className="desc">{t.per_biznese_me_shume_ndryshime_rezervime}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["8_ndryshime_ne_muaj_fair_use"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["3_gjuhe"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.formular_rezervimesh}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.google_business_upkeep_mujor}</li>
</ul>
<a className="btn btn-secondary" href={planHref("kosove", 2)} target="_blank" rel="noopener noreferrer">{t.fillo_me_pro}</a>
</div>
</div>
<p className="pricing-footnote">{t.demo_falas_0_go_live_per_5_te_paret_pastaj_49_nje_here_vje}</p>
</div>

<div className={market === "zvicer" ? "pricing-panel active" : "pricing-panel"} id="panel-zvicer" role="tabpanel" aria-labelledby="tab-zvicer">
<div className="market-extras">
<span>{t.multilingual_de_sq_en}</span>
<span>{t.impressum_legal_pages}</span>
<span>{t.support_in_ch_time_zone}</span>
</div>
<div className="pricing-grid">
<div className="plan">
<h3>{t.start}</h3>
<div className="price"><span className="amt">{markets.zvicer.symbol}{markets.zvicer.prices[0]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t["1_simple_page_ready_in_48h"]}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_page_domain_hosting_ssl"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.whatsapp_phone_map_hours}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_content_update_month"]}</li>
</ul>
<a className="btn btn-secondary" href={planHref("zvicer", 0)} target="_blank" rel="noopener noreferrer">{t.start_with_start}</a>
</div>
<div className="plan featured">
<span className="badge-pop">{t.most_popular}</span>
<h3>{t.biznes}</h3>
<div className="price"><span className="amt">{markets.zvicer.symbol}{markets.zvicer.prices[1]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.up_to_5_pages_menu_pricing_gallery}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.up_to_5_pages_sections}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.de_sq_en_included}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["3_updates_month"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.google_business_profile_setup}</li>
</ul>
<a className="btn" style={{"background": "#fff", "color": "var(--accent-hover)", "justifyContent": "center"}} href={planHref("zvicer", 1)} target="_blank" rel="noopener noreferrer">{t.start_with_biznes}</a>
</div>
<div className="plan">
<h3>{t.pro}</h3>
<div className="price"><span className="amt">{markets.zvicer.symbol}{markets.zvicer.prices[2]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.for_businesses_with_frequent_updates}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["8_updates_month_fair_use"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.booking_form}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.priority_support_ch_time_zone}</li>
</ul>
<a className="btn btn-secondary" href={planHref("zvicer", 2)} target="_blank" rel="noopener noreferrer">{t.start_with_pro}</a>
</div>
</div>
<p className="pricing-footnote">{t.free_demo_always_chf_290_build_fee_for_the_first_5_foundin}</p>
</div>

<div className={market === "gjermani" ? "pricing-panel active" : "pricing-panel"} id="panel-gjermani" role="tabpanel" aria-labelledby="tab-gjermani">
<div className="market-extras">
<span>{t.multilingual_de_sq_en}</span>
<span>{t.impressum_dsgvo_ready_pages}</span>
<span>{t.support_in_de_at_time_zone}</span>
<span>{t.minimum_term_6_months}</span>
</div>
<div className="pricing-grid">
<div className="plan">
<h3>{t.start}</h3>
<div className="price"><span className="amt">{markets.gjermani.symbol}{markets.gjermani.prices[0]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t["1_simple_page_ready_in_48h"]}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_page_domain_hosting_ssl"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.whatsapp_phone_map_hours}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_content_update_month"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.impressum_included}</li>
</ul>
<a className="btn btn-secondary" href={planHref("gjermani", 0)} target="_blank" rel="noopener noreferrer">{t.start_with_start}</a>
</div>
<div className="plan featured">
<span className="badge-pop">{t.most_popular}</span>
<h3>{t.biznes}</h3>
<div className="price"><span className="amt">{markets.gjermani.symbol}{markets.gjermani.prices[1]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.up_to_5_pages_menu_pricing_gallery}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.up_to_5_pages_sections}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.de_sq_en_included}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["3_updates_month"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.google_business_profile_setup}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.impressum_dsgvo_pages}</li>
</ul>
<a className="btn" style={{"background": "#fff", "color": "var(--accent-hover)", "justifyContent": "center"}} href={planHref("gjermani", 1)} target="_blank" rel="noopener noreferrer">{t.start_with_biznes}</a>
</div>
<div className="plan">
<h3>{t.pro}</h3>
<div className="price"><span className="amt">{markets.gjermani.symbol}{markets.gjermani.prices[2]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.for_businesses_with_frequent_updates}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["8_updates_month_fair_use"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.booking_form}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.priority_support_de_at_time_zone}</li>
</ul>
<a className="btn btn-secondary" href={planHref("gjermani", 2)} target="_blank" rel="noopener noreferrer">{t.start_with_pro}</a>
</div>
</div>
<p className="pricing-footnote">{t.free_demo_always_290_build_fee_for_the_first_5_founding_cl}</p>
</div>

<div className={market === "shba" ? "pricing-panel active" : "pricing-panel"} id="panel-shba" role="tabpanel" aria-labelledby="tab-shba">
<div className="market-extras">
<span>{t.multilingual_en_sq}</span>
<span>{t.legal_privacy_pages}</span>
<span>{t.support_in_us_time_zone_hours}</span>
</div>
<div className="pricing-grid">
<div className="plan">
<h3>{t.start}</h3>
<div className="price"><span className="amt">{markets.shba.symbol}{markets.shba.prices[0]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t["1_simple_page_ready_in_48h"]}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_page_domain_hosting_ssl"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.whatsapp_phone_map_hours}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["1_content_update_month"]}</li>
</ul>
<a className="btn btn-secondary" href={planHref("shba", 0)} target="_blank" rel="noopener noreferrer">{t.start_with_start}</a>
</div>
<div className="plan featured">
<span className="badge-pop">{t.most_popular}</span>
<h3>{t.biznes}</h3>
<div className="price"><span className="amt">{markets.shba.symbol}{markets.shba.prices[1]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.up_to_5_pages_menu_pricing_gallery}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.up_to_5_pages_sections}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.en_sq_included}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["3_updates_month"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.google_business_profile_setup}</li>
</ul>
<a className="btn" style={{"background": "#fff", "color": "var(--accent-hover)", "justifyContent": "center"}} href={planHref("shba", 1)} target="_blank" rel="noopener noreferrer">{t.start_with_biznes}</a>
</div>
<div className="plan">
<h3>{t.pro}</h3>
<div className="price"><span className="amt">{markets.shba.symbol}{markets.shba.prices[2]}</span><span className="per">{t.mo}</span></div>
<p className="desc">{t.for_businesses_with_frequent_updates}</p>
<ul>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t["8_updates_month_fair_use"]}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.booking_form}</li>
<li><svg className="icon" viewBox="0 0 24 24" width="15" height="15"><polyline points="20 6 9 17 4 12"></polyline></svg>{t.whatsapp_ai_assistant_when_live}</li>
</ul>
<a className="btn btn-secondary" href={planHref("shba", 2)} target="_blank" rel="noopener noreferrer">{t.start_with_pro}</a>
</div>
</div>
<p className="pricing-footnote">{t.free_demo_always_197_build_fee_for_the_first_5_founding_cl}</p>
</div>
</div>
</section>

<section>
<div className="wrap">
<div className="section-head">
<span className="label">{t.pse_jo_nje_agjenci}</span>
<h2>{t.agjenci_klasike} <span className="gradient">{t.vs}</span> {t.sitet}</h2>
</div>
<div className="compare-wrap">
<table className="compare">
<thead>
<tr><th>{t.cfare_merr}</th><th className="col-agency">{t.agjenci_klasike}</th><th className="col-sitet">{t.sitet}</th></tr>
</thead>
<tbody>
<tr>
<td className="row-label">{t.pagesa_fillestare}</td>
<td className="col-agency"><span className="x">{t.symbol_174}</span> {t["300800_para_se_te_fillojne"]}</td>
<td className="col-sitet"><span className="ok">{t.symbol_176}</span> {t["0_per_te_filluar"]}</td>
</tr>
<tr>
<td className="row-label">{t.a_e_sheh_faqen_para_pageses}</td>
<td className="col-agency"><span className="x">{t.symbol_174}</span> {t.jo_paguan_pastaj_pret}</td>
<td className="col-sitet"><span className="ok">{t.symbol_176}</span> {t.po_demo_e_plote_falas}</td>
</tr>
<tr>
<td className="row-label">{t.koha_e_dorezimit}</td>
<td className="col-agency"><span className="x">{t.symbol_174}</span> {t.jave_ose_muaj}</td>
<td className="col-sitet"><span className="ok">{t.symbol_176}</span> {t.brenda_48h}</td>
</tr>
<tr>
<td className="row-label">{t.ndryshime_pas_lancimit}</td>
<td className="col-agency"><span className="x">{t.symbol_174}</span> {t.zakonisht_me_pagese_shtese}</td>
<td className="col-sitet"><span className="ok">{t.symbol_176}</span> {t.ndryshime_mujore_te_perfshira}</td>
</tr>
<tr>
<td className="row-label">{t.komunikimi}</td>
<td className="col-agency"><span className="x">{t.symbol_174}</span> {t.email_kontrata_takime}</td>
<td className="col-sitet"><span className="ok">{t.symbol_176}</span> {t.whatsapp_direkt_ne_shqip}</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section id="faq">
<div className="wrap">
<div className="faq-layout">
<div className="faq-side">
<span className="label">{t.pyetje_te_shpeshta}</span>
<h2>{t.cdo_gje_qe_duhet} <span className="gradient">{t.te_dish}</span></h2>
<p>{t.s_e_gjen_pergjigjen_na_shkruaj_direkt_pergjigjemi_vete_jo_}</p>
<a className="wa-link" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim" target="_blank" rel="noopener noreferrer">
<svg className="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{"width": "1.1em", "height": "1.1em"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> {t.shkruaj_ne_whatsapp} </a>
</div>
<div className="faq-list" id="faqList">
<details className="faq-item" open>
<summary className="faq-q"><span>{t.kush_e_zoteron_faqen}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t.faqja_eshte_e_jotja_per_ta_perdorur_sa_kohe_je_pajtimtar_m}</p></div>
</details>
<details className="faq-item">
<summary className="faq-q"><span>{t.cili_eshte_afati_minimal}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t["3_muaj_per_klientet_ne_kosove_pas_kesaj_vazhdon_muaj_pas_m"]}</p></div>
</details>
<details className="faq-item">
<summary className="faq-q"><span>{t.si_funksionojne_ndryshimet_mujore}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t.na_shkruan_ne_whatsapp_cfare_do_te_ndryshosh_tekst_foto_cm}</p></div>
</details>
<details className="faq-item">
<summary className="faq-q"><span>{t.a_punoni_ne_gjuhe_tjera}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t.po_shqip_anglisht_dhe_gjermanisht_vecanerisht_per_klientet}</p></div>
</details>
<details className="faq-item">
<summary className="faq-q"><span>{t.po_nese_nuk_me_pelqen_demo}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t.asgje_s_paguan_asnje_cent_demo_eshte_gjithmone_falas_pa_de}</p></div>
</details>
<details className="faq-item">
<summary className="faq-q"><span>{t.si_e_marr_demon_tim_falas}</span><span className="toggle" aria-hidden="true"></span></summary>
<div className="faq-a"><p>{t.na_shkruaj_ne_whatsapp_emrin_e_biznesit_ose_linkun_e_insta}</p></div>
</details>
</div>
</div>
</div>
</section>

<section id="kontakt">
<div className="wrap">
<div className="final-cta">
<div className="inner">
<span className="label">{t.gati}</span>
<h2>{t.faqja_jote_e_re} <span className="gradient">{t.gati_para_se_te_paguash}</span></h2>
<p>{t.na_shkruaj_tani_dhe_e_sheh_demon_brenda_48_oresh_vetem_5_v}</p>
<div className="final-ctas">
<a className="btn btn-whatsapp" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim%3A%20___" target="_blank" rel="noopener noreferrer">
<svg className="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{"width": "1.1em", "height": "1.1em"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> {t.merr_demon_falas_ne_whatsapp} </a>
<a className="btn btn-secondary" href="mailto:ialbertbislimi@gmail.com">
<svg className="icon" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg> {t.ialbertbislimi_gmail_com} </a>
</div>
<p className="note">{t.pa_karte_krediti_pa_kontrate_te_detyrueshme_pergjigje_bren}</p>
</div>
</div>
</div>
</section>
</main>
<footer>
<div className="wrap footer-grid">
<div>
<div className="f-brand"><span className="mark">{t.s}</span>{t.sitet}</div>
<p className="f-desc">{t.website_falas_fillimisht_per_biznese_ne_kosove_dhe_diaspor}</p>
<p style={{"marginTop": "14px", "fontSize": ".84rem"}}>{t.kosove_ialbertbislimi_gmail_com}</p>
</div>
<div>
<h4>{t.faqja}</h4>
<ul className="f-links">
<li><a href="#si-funksionon">{t.si_funksionon}</a></li>
<li><a href="#demo">{t.demo}</a></li>
<li><a href="#klientet">{t.kliente_live}</a></li>
<li><a href="#cmimet">{t.cmimet}</a></li>
<li><a href="#faq">{t.faq}</a></li>
</ul>
</div>
<div>
<h4>{t.kontakt}</h4>
<ul className="f-links">
<li><a href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim" target="_blank" rel="noopener noreferrer">{t.whatsapp}</a></li>
<li><a href="mailto:ialbertbislimi@gmail.com">{t.email}</a></li>
<li><LanguageSwitch /></li>
</ul>
</div>
</div>
<div className="wrap footer-bottom">
<span>{t["2026_sitet_albert_bislimi_te_gjitha_te_drejtat_e_rezervuar"]}</span>
<span>{t.ndertuar_me_ne_kosove}</span>
</div>
</footer>
<a className="fab-wa" href="https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
<svg viewBox="0 0 24 24" fill="currentColor" style={{"width": "28px", "height": "28px"}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
</a>


</>)
}
