import { Reveal } from '../hooks/reveal'

const AREAS = [
  'Downtown Sarasota',
  'Siesta Key',
  'Lido Key & St. Armands',
  'Longboat Key',
  'Bird Key',
  'Gulf Gate',
  'Southgate',
  'Arlington Park',
  'South Sarasota',
  'Palmer Ranch',
  'Osprey & Nokomis',
  'Casey Key',
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-moss">
            <span className="h-px w-10 bg-moss" aria-hidden="true" />
            Service Area
          </p>
        </Reveal>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal delay={90}>
            <h2 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl">
              Proudly serving <em className="font-normal italic">Sarasota County</em>.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-md leading-relaxed text-soft lg:pt-3">
              Based in Sarasota, with weekly routes concentrated West of Trail
              (US-41) — from the keys to the mainland neighborhoods in between.
              Not sure if you&apos;re on the route? Just ask.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <ul className="mt-14 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((area) => (
              <li
                key={area}
                className="border-b border-r border-ink/15 px-5 py-5 font-serif text-lg font-normal tracking-tight text-ink"
              >
                {area}
              </li>
            ))}
            <li className="border-b border-r border-ink/15 px-5 py-5 font-serif text-lg font-light italic tracking-tight text-moss">
              …and everywhere in between
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
