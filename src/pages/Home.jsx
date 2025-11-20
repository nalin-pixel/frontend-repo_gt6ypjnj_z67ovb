import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_600px_at_50%_-50%,rgba(34,211,238,0.15),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}
