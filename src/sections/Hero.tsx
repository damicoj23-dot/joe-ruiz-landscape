import { Reveal, PHONE_DISPLAY, PHONE_TEL } from '../hooks/reveal'
import hero from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section id="top" className="border-b border-ink/15 pt-16 md:pt-20">
      <div className="grid lg:grid-cols-2">
        {/* Left — editorial text panel */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:min-h-[calc(100vh-5rem)] lg:px-16 lg:py-0">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" aria-hidden="true" />
              Serving Sarasota County — West of Trail
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-8 font-serif text-5xl font-light leading-[1.04] tracking-tight text-ink md:text-6xl xl:text-7xl">
              Your yard,{' '}
              <em className="font-normal italic">cared for</em> like our own.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-soft md:text-lg">
              Joe Ruiz Landscape is owner-operated by Joe Ruiz himself —
              dependable weekly maintenance, honest prices, and work done
              right, across Sarasota County with routes concentrated West of
              Trail.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_TEL}
                className="rounded-full bg-moss px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-pine"
              >
                Call Joe — {PHONE_DISPLAY}
              </a>
              <a
                href="#services"
                className="rounded-full border border-ink/30 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
              >
                See services
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-soft">
              <span>Owner-operated</span>
              <span>Free estimates</span>
              <span>Weekly routes</span>
            </div>
          </Reveal>
        </div>

        {/* Right — full-bleed photography */}
        <div className="relative min-h-[55vh] border-t border-ink/15 lg:min-h-[calc(100vh-5rem)] lg:border-l lg:border-t-0">
          <img
            src={hero}
            alt="A lush tropical Sarasota front yard with palms and a manicured lawn path"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <p className="absolute bottom-5 left-5 bg-cream/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink">
            Sarasota, FL — West of Trail
          </p>
        </div>
      </div>
    </section>
  )
}
