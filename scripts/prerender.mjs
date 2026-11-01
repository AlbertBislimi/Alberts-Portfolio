import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import fs from 'node:fs/promises'
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { LangProvider } = await server.ssrLoadModule('/src/i18n/LangContext.jsx')
  const html = renderToString(React.createElement(LangProvider, null, React.createElement(App)))
  const markets = JSON.parse(await fs.readFile('src/data/markets.json', 'utf8'))
  const domain = 'https://www.albertbislimi.com'
  const schema = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Sitet', url: domain,
    image: `${domain}/og.jpg`, founder: { '@type': 'Person', name: 'Albert Bislimi' },
    telephone: '+38349588569', email: 'ialbertbislimi@gmail.com',
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Sitet monthly website plans', itemListElement: Object.values(markets).map(m => ({
      '@type': 'OfferCatalog', name: m.name,
      itemListElement: m.prices.map((price, i) => ({ '@type': 'Offer', name: ['Start', 'Biznes', 'Pro'][i], price, priceCurrency: m.currency,
        eligibleRegion: m.countries, url: `${domain}/#cmimet`,
        priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: m.currency, unitText: 'MONTH' },
        description: `Monthly subscription. Annual: ${m.symbol}${price * 10}. Setup: ${m.symbol}${m.foundingFee} for the first 5 founding clients, then ${m.symbol}${m.standardFee}.`
      }))
    })) }
  }
  let template = await fs.readFile('dist/index.html', 'utf8')
  template = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  const catalog = `<script id="offer-catalog" type="application/ld+json">${JSON.stringify(schema)}</script>`
  template = template.replace(/<script id="offer-catalog" type="application\/ld\+json">[\s\S]*?<\/script>/, catalog)
  await fs.writeFile('dist/index.html', template)
} finally { await server.close() }
