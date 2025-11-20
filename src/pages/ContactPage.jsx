import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_600px_at_50%_-50%,rgba(34,211,238,0.15),transparent)]" />
      <Navbar />
      <main className="relative pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
