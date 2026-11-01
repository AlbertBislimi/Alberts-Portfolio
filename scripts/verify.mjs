import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { chromium } from 'playwright'
const base = process.env.TEST_URL || 'http://127.0.0.1:4173'
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox'] })
const failures = []
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
page.on('pageerror', error => failures.push(error.message))
page.on('console', msg => { if (msg.type() === 'error') failures.push(msg.text()) })
let loadedBytes = 0
page.on('response', async response => { try { loadedBytes += (await response.body()).length } catch { /* Navigation can cancel a response. */ } })
try {
  await page.goto(base)
  await page.evaluate(() => document.fonts.ready)
  assert.match(await page.locator('h1').innerText(), /Faqja jote/)
  const prices = { kosove: ['€19', '€29', '€49'], zvicer: ['CHF 49', 'CHF 69', 'CHF 99'], gjermani: ['€39', '€59', '€89'], shba: ['$39', '$59', '$99'] }
  for (const language of ['sq', 'en']) {
    await page.locator('footer .lang-toggle button').filter({ hasText: language.toUpperCase() }).click()
    assert.equal(await page.locator('html').getAttribute('lang'), language)
    for (const [market, expected] of Object.entries(prices)) {
      await page.locator(`[data-tab=${market}]`).click()
      assert.deepEqual(await page.locator('.pricing-panel.active .amt').allTextContents(), expected)
      assert.equal(await page.locator('[role=tab][aria-selected=true]').count(), 1)
      assert.equal(await page.locator('.pricing-panel.active .plan').count(), 3)
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
    }
  }
  await page.locator('[data-tab=kosove]').focus()
  await page.keyboard.press('ArrowRight')
  assert.equal(await page.locator('#tab-zvicer').getAttribute('aria-selected'), 'true')
  await page.locator('.catalog-control button').click()
  assert.equal(await page.locator('.catalog-link').count(), 75)
  await page.locator('[data-filter=klinika]').click()
  assert.ok(await page.locator('.catalog-link').count() > 1)
  assert.ok(await page.locator('.catalog-link').count() < 75)
  await page.locator('details').nth(1).locator('summary').click()
  assert.equal(await page.locator('details').nth(1).getAttribute('open'), '')
  assert.equal(await page.locator('.fab-wa').getAttribute('href'), 'https://wa.me/38349588569?text=Dua%20demon%20falas%20p%C3%ABr%20biznesin%20tim')
  for (const img of await page.locator('img').all()) await img.scrollIntoViewIfNeeded()
  await page.waitForLoadState('networkidle')
  assert.equal(await page.locator('img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0)), true)
  assert.ok(loadedBytes < 1_000_000, `Page resources total ${loadedBytes} bytes`)
  const schema = JSON.parse(await page.locator('#offer-catalog').textContent())
  assert.equal(schema.hasOfferCatalog.itemListElement.length, 4)
  assert.equal((await fs.stat('public/og.jpg')).size < 600_000, true)
  const noJS = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
  await noJS.goto(base)
  assert.match(await noJS.locator('h1').innerText(), /Faqja jote/)
  assert.deepEqual(await noJS.locator('#panel-kosove .amt').allTextContents(), prices.kosove)
  for (const selector of ['#si-funksionon', '#demo', '#klientet', '#cmimet', '#faq', '#kontakt']) assert.equal(await noJS.locator(selector).isVisible(), true)
  await noJS.locator('details').nth(2).locator('summary').click()
  assert.equal(await noJS.locator('details').nth(2).getAttribute('open'), '')
  assert.deepEqual(failures, [])
  console.log(`PASS: SQ/EN, four markets, keyboard tabs, 75-demo catalog, filters, FAQ, WhatsApp, images, no-JS content, reduced motion. Full-page resource bodies: ${loadedBytes.toLocaleString()} bytes.`)
} finally { await browser.close() }
