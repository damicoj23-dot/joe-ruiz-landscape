import { Reveal, PHONE_TEL } from '../hooks/reveal'

export default function Contact() {
  return (
    <section id="contact" className="bg-pine text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-sand">
            <span className="h-px w-10 bg-sand" aria-hidden="true" />
            Free Estimates
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-8 max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
            Ready for a yard you&apos;re <em className="font-normal italic">proud of</em>?
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 max-w-lg leading-relaxed text-cream/75">
            Call or text Joe directly — no office staff, no phone tag. Just a
            straight answer, a fair price, and a day you can count on.
          </p>
        </Reveal>

        <Reveal delay={270}>
          <a
            href={PHONE_TEL}
            className="mt-12 inline-block font-serif text-[clamp(2.6rem,8vw,6.5rem)] font-light leading-none tracking-tight underline decoration-sand/60 decoration-[3px] underline-offset-[12px] transition-colors duration-300 hover:text-sand"
          >
            941-518-1338
          </a>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-12 text-[11px] font-medium uppercase tracking-[0.25em] text-cream/60">
            Serving Sarasota County · Concentration West of Trail
          </p>
        </Reveal>
      </div>
    </section>
  )
}
