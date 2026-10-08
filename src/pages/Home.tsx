import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Promise from '../sections/Promise'
import Services from '../sections/Services'
import About from '../sections/About'
import ServiceArea from '../sections/ServiceArea'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Promise />
        <Services />
        <About />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
