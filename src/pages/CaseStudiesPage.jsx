import Navbar from '../components/Navbar'
import CaseStudies from '../components/CaseStudies'
import Footer from '../components/Footer'

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_600px_at_50%_-50%,rgba(34,211,238,0.15),transparent)]" />
      <Navbar />
      <main className="relative pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Case Studies & Results</h1>
          <p className="text-slate-300 mt-3">Three examples showing the kind of outcomes we engineer. Replace with your own wins.</p>
        </div>
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}
