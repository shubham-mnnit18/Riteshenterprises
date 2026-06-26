'use client'

import { useEffect, useState } from 'react'
import { Coins, TrendingUp, RefreshCw, MapPin } from 'lucide-react'

type Rates = {
  city: string
  gold24k: number
  gold22k: number
  gold18k: number
  silver: number
  updatedOn: string
  source: 'live' | 'manual'
}

function inr(n: number) {
  return '\u20B9' + n.toLocaleString('en-IN')
}

const cards = [
  { key: 'gold24k', label: 'सोना 24 कैरेट', sub: 'प्रति 10 ग्राम', accent: true },
  { key: 'gold22k', label: 'सोना 22 कैरेट', sub: 'हॉलमार्क · प्रति 10 ग्राम', accent: true },
  { key: 'gold18k', label: 'सोना 18 कैरेट', sub: 'प्रति 10 ग्राम', accent: true },
  { key: 'silver', label: 'चाँदी', sub: 'प्रति 1 किलोग्राम', accent: false },
] as const

export function LiveRates() {
  const [rates, setRates] = useState<Rates | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetch('/api/rates')
      .then((r) => r.json())
      .then((d) => {
        if (active) setRates(d)
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [])

  return (
    <section id="rates" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border-gold border bg-secondary/40 px-4 py-1.5 text-sm text-primary">
            <TrendingUp className="size-4" />
            आज के ताज़ा भाव
          </span>
          <h2 className="font-heading mt-4 text-3xl md:text-5xl">
            <span className="text-gold-gradient">सोना-चाँदी</span> के दैनिक भाव
          </h2>
          <p className="mt-3 text-muted-foreground">
            लखनऊ / दिल्ली सर्राफा बाज़ार के अनुसार · रोज़ाना अपने आप अपडेट
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.key}
              className="group relative overflow-hidden rounded-2xl border border-gold bg-card p-6 shadow-gold transition-transform duration-300 hover:-translate-y-1 animate-float-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold-gradient opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
              <div className="flex items-center gap-2 text-primary">
                <Coins className="size-5" />
                <span className="text-sm font-medium text-foreground/80">{c.label}</span>
              </div>
              <div className="mt-4 font-heading text-3xl md:text-[2rem]">
                {loading || !rates ? (
                  <span className="inline-block h-8 w-28 animate-pulse rounded bg-muted" />
                ) : (
                  <span className={c.accent ? 'text-gold-gradient' : 'text-foreground'}>
                    {inr(rates[c.key])}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" />
            {rates?.city ?? 'लखनऊ / दिल्ली'}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <RefreshCw className="size-3.5 text-primary" />
            अपडेट: {rates?.updatedOn ?? '—'}
            {rates?.source === 'manual' && ' (दुकान द्वारा)'}
          </span>
          <span className="text-foreground/50">
            * भाव केवल जानकारी हेतु हैं, ख़रीद-बिक्री से पहले दुकान पर पुष्टि करें।
          </span>
        </div>
      </div>
    </section>
  )
}
