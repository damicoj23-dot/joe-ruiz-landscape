import { Leaf } from '../hooks/reveal'

const ITEMS = [
  'Weekly Maintenance',
  'Mowing & Edging',
  'Hedge & Shrub Trimming',
  'Mulch & Bed Care',
  'Seasonal Cleanups',
  'Free Estimates',
]

export default function Marquee() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span key={`${key}-${item}`} className="flex items-center">
          <span className="px-6 text-[11px] font-semibold uppercase tracking-[0.28em] md:px-10">
            {item}
          </span>
          <Leaf className="h-3.5 w-3.5 text-sand" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="overflow-hidden border-b border-ink/15 bg-pine py-4 text-cream" aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {row('a')}
        {row('b')}
      </div>
    </div>
  )
}
