import { PHONE_DISPLAY, PHONE_TEL } from '../hooks/reveal'

export default function Footer() {
  return (
    <footer className="border-t border-ink/15">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-6 py-10 text-[11px] font-medium uppercase tracking-[0.22em] text-soft md:px-12 lg:px-16">
        <p>© 2026 Joe Ruiz Landscape</p>
        <p>Sarasota County, Florida</p>
        <a href={PHONE_TEL} className="transition-colors duration-300 hover:text-moss">
          {PHONE_DISPLAY}
        </a>
      </div>
    </footer>
  )
}
