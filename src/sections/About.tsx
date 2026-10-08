import { Reveal } from '../hooks/reveal'
import trimming from '../assets/trimming.jpg'

export default function About() {
  return (
    <section id="about" className="border-b border-ink/15 bg-parch/60">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        <div className="relative min-h-[50vh] border-b border-ink/15 lg:min-h-[80vh] lg:border-b-0 lg:border-r">
          <img
            src={trimming}
            alt="Joe Ruiz trimming a hedge in a Sarasota garden"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-moss">
              <span className="h-px w-10 bg-moss" aria-hidden="true" />
              About
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl">
              Meet <em className="font-normal italic">Joe Ruiz</em>.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 max-w-lg space-y-5 leading-relaxed text-soft">
              <p>
                Joe started his landscape company with a mower, a truck, and a
                simple way of doing business: show up when you say you will, do
                the job right, and charge a fair price.
              </p>
              <p>
                He runs weekly maintenance routes across Sarasota County —
                concentrated West of Trail — and still handles every yard
                himself. When you call, you talk to Joe. When the work gets
                done, it&apos;s Joe doing it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={270}>
            <blockquote className="mt-10 border-l-2 border-moss pl-6">
              <p className="font-serif text-2xl font-light italic leading-snug text-ink md:text-3xl">
                “If I tell you I&apos;ll be there Tuesday, I&apos;ll be there
                Tuesday.”
              </p>
              <footer className="mt-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-soft">
                — Joe Ruiz, Owner
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
