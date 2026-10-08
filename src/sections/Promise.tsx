import { Reveal } from '../hooks/reveal'

const PROMISES = [
  {
    n: '01',
    title: 'Dependable',
    body: 'Your yard gets done on schedule, every single week. No chasing, no wondering, no “maybe next week.”',
  },
  {
    n: '02',
    title: 'Honest',
    body: 'Straight answers and a fair, written estimate before any work starts. The price Joe quotes is the price you pay.',
  },
  {
    n: '03',
    title: 'Owner-operated',
    body: 'Every visit is Joe himself — not a rotating crew. The person who makes the promise is the person holding the mower.',
  },
  {
    n: '04',
    title: 'Personal care',
    body: 'Your property isn’t just another stop on a route. It’s your home — and Joe treats it with the care that deserves.',
  },
]

export default function Promise() {
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:px-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" aria-hidden="true" />
              Why neighbors call Joe
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl">
              Honest work, <em className="font-normal italic">dependable</em> hands.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-sm leading-relaxed text-soft">
              We&apos;re not a jack of all trades — maintenance is our trade,
              and we do it right. Reliable, on-schedule visits and personal
              care for the property you care so much about.
            </p>
          </Reveal>
        </div>

        <div>
          {PROMISES.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className={`flex gap-6 py-8 md:gap-10 ${i === 0 ? 'border-t border-ink/15' : ''} border-b border-ink/15`}>
                <span className="font-serif text-lg italic text-moss">{p.n}</span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-soft">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
