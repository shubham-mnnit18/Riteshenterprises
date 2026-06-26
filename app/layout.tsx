import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tiro_Devanagari_Hindi, Mukta } from 'next/font/google'
import './globals.css'

const tiroHindi = Tiro_Devanagari_Hindi({
  weight: '400',
  variable: '--font-heading-family',
  subsets: ['devanagari', 'latin'],
})

const mukta = Mukta({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  subsets: ['devanagari', 'latin'],
})

export const metadata: Metadata = {
  title: 'रितेश ज्वेलर्स | Ritesh Jewellers — पिपरा बाज़ार, बलरामपुर',
  description:
    'रितेश ज्वेलर्स — सोना, चाँदी, हॉलमार्क ज्वेलरी, बर्तन एवं किचन अप्लायंसेज़। पिपरा बाज़ार, बलरामपुर, उत्तर प्रदेश। रोज़ाना सोने-चाँदी के ताज़ा भाव।',
  generator: 'v0.app',
  keywords: [
    'रितेश ज्वेलर्स',
    'Ritesh Jewellers',
    'बलरामपुर ज्वेलर्स',
    'सोना चाँदी भाव',
    'hallmark jewellery',
    'पिपरा बाज़ार',
  ],
}

export const viewport: Viewport = {
  themeColor: '#5c0f1b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hi"
      className={`${tiroHindi.variable} ${mukta.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
