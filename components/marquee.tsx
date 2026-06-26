import { Gem } from 'lucide-react'

const items = [
  'BIS हॉलमार्क सोना',
  'शुद्ध चाँदी',
  'पक्का GST बिल',
  'अँगूठी · पायल · झुमके',
  'बाली · बिछिया · बिंदिया',
  'गारलैंड · हार सेट',
  'बर्तन एवं किचन अप्लायंसेज़',
  'जेवरों की मरम्मत',
]

export function Marquee() {
  return (
    <div className="border-y border-gold bg-gold-gradient text-gold-foreground">
      <div className="flex overflow-hidden py-3">
        <div className="animate-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-sm font-semibold">
              <Gem className="size-4" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
