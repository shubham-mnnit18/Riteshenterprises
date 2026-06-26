import { ShieldCheck, FileCheck, Heart, Award } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'शुद्धता की गारंटी',
    desc: 'BIS हॉलमार्क प्रमाणित सोना एवं शुद्ध चाँदी।',
  },
  {
    icon: FileCheck,
    title: 'पक्का GST बिल',
    desc: 'हर ख़रीद पर पारदर्शी और पक्का GST बिल।',
  },
  {
    icon: Heart,
    title: 'पारिवारिक विश्वास',
    desc: 'पीढ़ियों से चला आ रहा भरोसे का रिश्ता।',
  },
  {
    icon: Award,
    title: 'उचित दाम',
    desc: 'बाज़ार के ताज़ा भाव पर ईमानदार क़ीमतें।',
  },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative animate-float-up">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gold-gradient opacity-25 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-gold shadow-gold">
            <img
              src="/images/showcase.png"
              alt="रितेश ज्वेलर्स के दुल्हन आभूषण"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="animate-float-up [animation-delay:0.12s]">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold bg-secondary/40 px-4 py-1.5 text-sm text-primary">
            हमारी कहानी
          </span>
          <h2 className="font-heading mt-4 text-3xl md:text-5xl">
            <span className="text-gold-gradient">रितेश सोनी</span> का विश्वास,
            अब आपके अपने शहर में
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            रितेश ज्वेलर्स के संचालक श्री रितेश सोनी, प्रसिद्ध ज्वेलर श्री
            राकेश सोनी जी के सुपुत्र हैं। वर्षों तक अपने पिताजी की मशहूर दुकान
            “साईं श्रद्धा ज्वेलर्स” को संभालने के बाद, अब उन्होंने पिपरा बाज़ार
            में अपनी ख़ुद की दुकान की शुरुआत की है।
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            वही पुरानी परख, वही ईमानदारी और वही पारिवारिक अपनापन — अब एक नए
            नाम के साथ। शुद्धता और ग्राहक के विश्वास को हमेशा सर्वोपरि रखा गया है।
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="flex gap-3 rounded-xl border border-gold bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-gradient text-gold-foreground">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
