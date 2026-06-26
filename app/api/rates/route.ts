import { NextResponse } from 'next/server'
import { MANUAL_RATES, type Rates } from '@/lib/rates-config'

// हर 1 घंटे में दोबारा फ़ेच — रोज़ाना अपने आप अपडेट
export const revalidate = 3600

const TROY_OUNCE_IN_GRAMS = 31.1035

// metalpriceapi.com की API key
const API_KEY =
  process.env.METAL_PRICE_API_KEY || '927dee5dfd6eef9ddbf0e8aaa832c59a'

// भारत में कस्टम ड्यूटी (15%) + GST (3%) + प्रीमियम को मिलाकर
// आप इसे अपने शहर के असल भाव से मैच करने के लिए 1.15 से 1.18 के बीच सेट कर सकते हैं।
const INDIAN_MARKET_MULTIPLIER = 1.15 

function manualResponse(): Rates {
  return { ...MANUAL_RATES, source: 'manual' }
}

/**
 * लाइव भाव लाने की कोशिश — metalpriceapi.com से।
 * मुफ़्त API में base=INR काम नहीं करता, इसलिए हम USD में मंगाकर खुद INR में बदलेंगे।
 */
async function fetchLiveRates(): Promise<Rates | null> {
  if (!API_KEY) return null

  try {
    // base=USD (default) मंगा रहे हैं, साथ में INR का कन्वर्शन रेट भी
    const res = await fetch(
      `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&currencies=INR,XAU,XAG`,
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) return null

    const data = await res.json()
    if (!data?.success || !data?.rates) return null

    // rates = { INR: 83.50, XAU: 0.00042, XAG: 0.035 }
    const inrRate = data.rates.INR
    const xauRate = data.rates.XAU
    const xagRate = data.rates.XAG

    if (!inrRate || !xauRate || !xagRate) return null

    // 1 औंस की कीमत USD में = 1 / rate
    // 1 औंस की कीमत INR में = (1 / rate) * inrRate
    const goldPerOunceInr = (1 / xauRate) * inrRate
    const silverPerOunceInr = (1 / xagRate) * inrRate

    // 1 ग्राम की कीमत (Raw International Price)
    let goldPerGram24 = goldPerOunceInr / TROY_OUNCE_IN_GRAMS
    let silverPerGram = silverPerOunceInr / TROY_OUNCE_IN_GRAMS

    // भारत के टैक्स और ड्यूटी जोड़ना (वर्ना रेट बहुत सस्ता दिखेगा)
    goldPerGram24 = goldPerGram24 * INDIAN_MARKET_MULTIPLIER
    silverPerGram = silverPerGram * INDIAN_MARKET_MULTIPLIER

    if (!isFinite(goldPerGram24) || !isFinite(silverPerGram)) return null

    return {
      city: 'लखनऊ / दिल्ली',
      gold24k: Math.round(goldPerGram24 * 10),
      gold22k: Math.round(goldPerGram24 * 10 * (22 / 24)),
      gold18k: Math.round(goldPerGram24 * 10 * (18 / 24)),
      silver: Math.round(silverPerGram * 1000), // प्रति 1 किलो
      updatedOn: new Date().toISOString().slice(0, 10),
      source: 'live',
    }
  } catch {
    return null
  }
}

export async function GET() {
  const live = await fetchLiveRates()
  const data = live ?? manualResponse()
  return NextResponse.json(data, {
    headers: { 'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400' },
  })
}
