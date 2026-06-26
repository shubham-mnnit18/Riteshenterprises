import { Gem, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-gold bg-maroon-gradient">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground">
                <Gem className="size-5" />
              </span>
              <span className="leading-tight">
                <span className="font-heading block text-lg text-gold-gradient">
                  रितेश ज्वेलर्स
                </span>
                <span className="block text-[0.65rem] tracking-widest text-muted-foreground">
                  RITESH JEWELLERS
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              शुद्धता, परंपरा और विश्वास का प्रतीक। सोना, चाँदी, हॉलमार्क
              ज्वेलरी, बर्तन एवं किचन अप्लायंसेज़।
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg text-foreground">त्वरित लिंक</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#rates" className="transition-colors hover:text-primary">
                  आज के भाव
                </a>
              </li>
              <li>
                <a href="#collections" className="transition-colors hover:text-primary">
                  हमारा संग्रह
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-primary">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">
                  संपर्क
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-foreground">संपर्क</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                पिपरा बाज़ार, बलरामपुर, उत्तर प्रदेश — 271604
              </li>
              <li>
                <a
                  href="tel:+916392866343"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  +91 63928 66343 — कॉल करें
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@riteshjewellers.in"
                  className="flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  info@riteshjewellers.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} रितेश ज्वेलर्स · सर्वाधिकार सुरक्षित</p>
          <p>पक्का GST बिल · BIS हॉलमार्क ज्वेलरी</p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-gold bg-card/60 px-5 py-4 text-center shadow-gold sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-primary">&#9829;</span> by{' '}
            <span className="font-semibold text-gold-gradient">Shubham Saini</span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Contact for Premium website service
            </span>
          </p>
          <a
            href="tel:+917753817745"
            className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-gold-foreground shadow-gold transition-opacity hover:opacity-90"
          >
            <Phone className="size-4" />
            +91 77538 17745
          </a>
        </div>
      </div>
    </footer>
  )
}
