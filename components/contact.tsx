import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MAPS_LINK = 'https://maps.app.goo.gl/L3n7Z2Y2HqUU96W17'

const info = [
  {
    icon: MapPin,
    title: 'पता',
    lines: ['पिपरा बाज़ार, बलरामपुर,', 'उत्तर प्रदेश — 271604'],
  },
  {
    icon: Phone,
    title: 'फ़ोन — कॉल करें',
    lines: ['+91 63928 66343', 'टैप करके सीधे कॉल करें'],
    href: 'tel:+916392866343',
  },
  {
    icon: Mail,
    title: 'ईमेल',
    lines: ['info@riteshjewellers.in'],
    href: 'mailto:info@riteshjewellers.in',
  },
  {
    icon: Clock,
    title: 'समय',
    lines: ['प्रतिदिन: सुबह 9:30 — रात 8:00'],
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-secondary/40 px-4 py-1.5 text-sm text-primary">
            <Navigation className="size-4" />
            हमसे मिलें
          </span>
          <h2 className="font-heading mt-4 text-3xl md:text-5xl">
            <span className="text-gold-gradient">संपर्क</span> करें
          </h2>
          <p className="mt-3 text-muted-foreground">
            अपने सवाल या ऑर्डर के लिए दुकान पर पधारें या कॉल करें।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {info.map((item, i) => {
              const content = (
                <div className="flex h-full gap-4 rounded-2xl border border-gold bg-card p-6 shadow-gold transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-gold-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{item.title}</h3>
                    {item.lines.map((l) => (
                      <p key={l} className="text-sm leading-relaxed text-muted-foreground">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              )
              return (
                <div
                  key={item.title}
                  className="animate-float-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {item.href ? (
                    <a href={item.href} className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              )
            })}

            <div className="sm:col-span-2">
              <Button
                render={
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" />
                }
                size="lg"
                className="w-full bg-gold-gradient text-gold-foreground shadow-gold hover:opacity-90"
              >
                <Navigation className="size-4" />
                Google Maps पर दिशा देखें
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gold shadow-gold animate-float-up [animation-delay:0.2s]">
            <iframe
              title="रितेश ज्वेलर्स का नक्शा"
              src="https://www.google.com/maps?q=9FMW%2BHX+Itai,+Uttar+Pradesh&output=embed"
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
