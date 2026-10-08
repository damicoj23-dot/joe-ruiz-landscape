import { useState } from 'react'
import { Reveal } from '../hooks/reveal'
import hero from '../assets/hero.jpg'
import lawn from '../assets/lawn.jpg'
import trimming from '../assets/trimming.jpg'
import mulch from '../assets/mulch.jpg'
import cleanup from '../assets/cleanup.jpg'

const SERVICES = [
  {
    title: 'Weekly Lawn Maintenance',
    tag: 'Most popular',
    body: 'The heart of what we do. Mowing, edging, string-trimming, and a full blow-off — on the same day every week, so your yard never gets away from you.',
    image: hero,
    alt: 'A well-kept Sarasota front yard maintained weekly',
  },
  {
    title: 'Mowing & Edging',
    tag: null,
    body: 'Clean stripes, crisp sidewalk and driveway edges, and clippings blown clear. One-time cuts or part of your weekly route.',
    image: lawn,
    alt: 'A Sarasota ranch home with a manicured lawn and palm tree',
  },
  {
    title: 'Hedge & Shrub Trimming',
    tag: null,
    body: 'Hedges, shrubs, and small palms shaped and kept healthy — from tidy boxwoods to overgrown hedges brought back in line.',
    image: trimming,
    alt: 'Joe trimming a tall hedge by hand',
  },
  {
    title: 'Mulch & Flower Bed Care',
    tag: null,
    body: 'Fresh mulch, weeding, and bed clean-ups that make your plants pop and keep day-to-day maintenance low.',
    image: mulch,
    alt: 'A freshly mulched tropical flower bed',
  },
  {
    title: 'Seasonal & Storm Cleanups',
    tag: null,
    body: 'Palm fronds, storm debris, leaf and branch removal — gathered, hauled away, and off your mind.',
    image: cleanup,
    alt: 'Palm fronds and yard debris gathered for hauling',
  },
]

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="services" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-16">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-moss">
            <span className="h-px w-10 bg-moss" aria-hidden="true" />
            Services
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink md:text-5xl">
            Weekly <em className="font-normal italic">maintenance</em>, done right.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Accordion */}
          <Reveal delay={150}>
            <div>
              {SERVICES.map((s, i) => {
                const isOpen = open === i
                return (
                  <div key={s.title} className="border-b border-ink/15 first:border-t">
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-serif text-sm italic text-moss">
                          0{i + 1}
                        </span>
                        <span className="font-serif text-2xl font-normal tracking-tight text-ink transition-colors duration-300 group-hover:text-moss md:text-3xl">
                          {s.title}
                        </span>
                        {s.tag && (
                          <span className="hidden rounded-full border border-moss/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-moss md:inline-block">
                            {s.tag}
                          </span>
                        )}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`h-5 w-5 shrink-0 text-ink transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                      <div className="overflow-hidden">
                        <p className="max-w-md pb-7 pl-0 leading-relaxed text-soft md:pl-12">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Sticky image panel that follows the open service */}
          <Reveal delay={250} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative h-[68vh] overflow-hidden border border-ink/15">
                {SERVICES.map((s, i) => (
                  <img
                    key={s.title}
                    src={s.image}
                    alt={s.alt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${open === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <p className="absolute bottom-5 left-5 bg-cream/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink">
                  {SERVICES[open].title}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
