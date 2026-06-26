'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Phone, Gem } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#home', label: 'मुख्य पृष्ठ' },
  { href: '#rates', label: 'आज के भाव' },
  { href: '#collections', label: 'संग्रह' },
  { href: '#about', label: 'हमारे बारे में' },
  { href: '#contact', label: 'संपर्क' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-gold py-2' : 'py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-gold-gradient text-gold-foreground shadow-gold">
            <Gem className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="font-heading block text-lg text-gold-gradient md:text-xl">
              रितेश ज्वेलर्स
            </span>
            <span className="block text-[0.65rem] tracking-widest text-muted-foreground">
              RITESH JEWELLERS
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            render={<a href="tel:+916392866343" />}
            className="bg-gold-gradient text-gold-foreground hover:opacity-90"
          >
            <Phone className="size-4" />
            कॉल करें
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="मेन्यू खोलें"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-2 rounded-xl border border-gold p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-foreground/85 transition-colors hover:bg-secondary/50 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            render={<a href="tel:+916392866343" />}
            className="mt-2 w-full bg-gold-gradient text-gold-foreground"
          >
            <Phone className="size-4" />
            +91 63928 66343
          </Button>
        </div>
      )}
    </header>
  )
}
