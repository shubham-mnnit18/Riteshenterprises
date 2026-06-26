import { Wrench, Sparkles } from 'lucide-react'

const featured = [
  {
    img: '/images/cat-gold.png',
    title: 'सोने के आभूषण',
    desc: 'हॉलमार्क हार सेट, गारलैंड, मंगलसूत्र एवं पारंपरिक डिज़ाइन।',
  },
  {
    img: '/images/cat-rings.png',
    title: 'अँगूठी एवं झुमके',
    desc: 'अँगूठी, झुमके, बाली और बिंदिया — हर अवसर के लिए।',
  },
  {
    img: '/images/cat-silver.png',
    title: 'चाँदी के गहने',
    desc: 'पायल, बिछिया एवं शुद्ध चाँदी की रेंज।',
  },
  {
    img: '/images/cat-bartan.png',
    title: 'बर्तन',
    desc: 'स्टील, पीतल एवं किचन के सभी प्रकार के बर्तन।',
  },
  {
    img: '/images/cat-appliances.png',
    title: 'किचन अप्लायंसेज़',
    desc: 'मिक्सर एवं घरेलू अप्लायंसेज़ — भरोसेमंद ब्रांड।',
  },
]

const tags = [
  'अँगूठी',
  'पायल',
  'झुमके',
  'बाली',
  'बिंदिया',
  'बिछिया',
  'गारलैंड',
  'हार सेट',
  'हॉलमार्क ज्वेलरी',
]

export function Collections() {
  return (
    <section id="collections" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-secondary/40 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="size-4" />
            हमारा संग्रह
          </span>
          <h2 className="font-heading mt-4 text-3xl md:text-5xl">
            हर मौके के लिए <span className="text-gold-gradient">ख़ास आभूषण</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            आभूषणों से लेकर बर्तन और किचन अप्लायंसेज़ तक — रितेश ज्वेलर्स पर
            आपको मिलेगा हर चीज़ का शानदार चयन।
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-gold bg-card shadow-gold animate-float-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img || '/placeholder.svg'}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-gold-gradient">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}

          {/* मरम्मत कार्ड */}
          <article className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-gold bg-gold-gradient p-7 text-gold-foreground shadow-gold animate-float-up [animation-delay:0.35s]">
            <Wrench className="size-9" />
            <h3 className="font-heading mt-4 text-2xl">जेवरों की मरम्मत</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              हल्की-फुल्की मरम्मत एवं पॉलिश की सुविधा — आपके पुराने जेवर फिर से
              नए जैसे चमकदार।
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gold bg-secondary/40 px-4 py-1.5 text-sm text-foreground/85 transition-colors hover:bg-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
