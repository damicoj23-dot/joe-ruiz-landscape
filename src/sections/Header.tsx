import { Leaf, PHONE_DISPLAY, PHONE_TEL } from '../hooks/reveal'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/15 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-2xl font-medium tracking-tight text-ink">
            Joe Ruiz
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.28em] text-soft sm:block">
            Landscape
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[11px] font-medium uppercase tracking-[0.22em] text-soft transition-colors duration-300 hover:text-moss"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_TEL}
          className="flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-moss hover:bg-moss hover:text-cream md:px-5 md:py-2.5"
        >
          <Leaf className="h-3 w-3" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call Joe</span>
        </a>
      </div>
    </header>
  )
}
