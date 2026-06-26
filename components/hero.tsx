import { Phone, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-maroon-gradient pt-28 pb-16"
    >
      {/* चमकीले सजावटी गोले */}
      <div className="animate-spin-slow pointer-events-none absolute -left-40 top-20 size-[28rem] rounded-full bg-gold-gradient opacity-[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-accent opacity-20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-secondary/40 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="size-4" />
            पिपरा बाज़ार, बलरामपुर की शान
          </span>

          <h1 className="font-heading mt-6 text-balance text-4xl leading-tight md:text-6xl">
            <span className="text-gold-gradient">रितेश ज्वेलर्स</span>
            <span className="mt-2 block text-foreground">
              शुद्धता, परंपरा और विश्वास का प्रतीक
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            सोना, चाँदी एवं हॉलमार्क ज्वेलरी, बर्तन और किचन अप्लायंसेज़ —
            सब एक ही छत के नीचे। हर ख़रीद पर पक्का GST बिल, और जेवरों की
            हल्की-फुल्की मरम्मत की सुविधा भी।
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              render={<a href="#collections" />}
              size="lg"
              className="bg-gold-gradient text-gold-foreground shadow-gold hover:opacity-90"
            >
              <Sparkles className="size-4" />
              हमारा संग्रह देखें
            </Button>
            <Button
              render={<a href="tel:+916392866343" />}
              size="lg"
              variant="outline"
              className="border-gold bg-transparent text-foreground hover:bg-secondary/40"
            >
              <Phone className="size-4" />
              +91 63928 66343
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              BIS हॉलमार्क ज्वेलरी
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              बलरामपुर, उत्तर प्रदेश
            </span>
          </div>
        </div>

        <div className="relative animate-float-up [animation-delay:0.15s]">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gold-gradient opacity-30 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-gold shadow-gold">
            <img
              src="/images/hero-jewellery.png"
              alt="रितेश ज्वेलर्स का शानदार सोने का हार सेट"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 -left-3 rounded-2xl border border-gold px-5 py-3 md:-left-8">
            <p className="font-heading text-2xl text-gold-gradient">25+ वर्ष</p>
            <p className="text-xs text-muted-foreground">परिवार का भरोसा</p>
          </div>
        </div>
      </div>
    </section>
  )
}
