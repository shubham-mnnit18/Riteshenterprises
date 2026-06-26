import { NextResponse } from 'next/server'
import { MANUAL_RATES, type Rates } from '@/lib/rates-config'

// हर 1 घंटे में दोबारा फ़ेच — रोज़ाना अपने आप अपडेट
export const revalidate = 3600

const TROY_OUNCE_IN_GRAMS = 31.1035

// metalpriceapi.com की API key — env var सबसे पहले, वरना नीचे दी गई key
const API_KEY =
  process.env.METAL_PRICE_API_KEY || '927dee5dfd6eef9ddbf0e8aaa832c59a'

function manualResponse(): Rates {
  return { ...MANUAL_RATES, source: 'manual' }
}

/**
 * लाइव भाव लाने की कोशिश — metalpriceapi.com से।
 * base=INR, currencies=XAU (सोना), XAG (चाँदी)
 * API रेट = प्रति 1 INR में कितने औंस → प्रति औंस भाव = 1 / रेट
 * (भारतीय रुपये INR, प्रति 10 ग्राम सोना / प्रति किलो चाँदी में बदला जाता है)
 */
async function fetchLiveRates(): Promise<Rates | null> {
  if (!API_KEY) return null

  try {
    const res = await fetch(
      `https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=INR&currencies=XAU,XAG`,
      { next: { revalidate: 3600 } },
    )

    if (!res.ok) return null

    const data = await res.json()
    if (!data?.success || !data?.rates) return null

    // metalpriceapi base=INR पर rates.XAU = प्रति 1 INR में कितने औंस सोना
    // कुछ खातों में सीधे INRXAU भी आता है — दोनों संभालें
    const xauPerInr = data.rates.XAU
    const xagPerInr = data.rates.XAG
    if (!xauPerInr || !xagPerInr) return null

    // प्रति औंस INR
    const goldPerOunce = 1 / xauPerInr
    const silverPerOunce = 1 / xagPerInr

    const goldPerGram24 = goldPerOunce / TROY_OUNCE_IN_GRAMS
    const silverPerGram = silverPerOunce / TROY_OUNCE_IN_GRAMS

    if (!isFinite(goldPerGram24) || !isFinite(silverPerGram)) return null

    return {
      city: 'लखनऊ / दिल्ली',
      gold24k: Math.round(goldPerGram24 * 10),
      gold22k: Math.round(goldPerGram24 * 10 * (22 / 24)),
      gold18k: Math.round(goldPerGram24 * 10 * (18 / 24)),
      silver: Math.round(silverPerGram * 1000),
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
