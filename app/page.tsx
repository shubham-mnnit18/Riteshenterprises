import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { LiveRates } from '@/components/live-rates'
import { Collections } from '@/components/collections'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <LiveRates />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
