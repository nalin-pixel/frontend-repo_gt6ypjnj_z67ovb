import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-cyan-500/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600" />
              <div className="text-white font-semibold">Aurora Growth</div>
            </div>
            <div className="text-slate-400 text-sm mt-2">AI-first marketing systems that compound results.</div>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
            <Link to="/consultation" className="hover:text-white">Consultation</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" className="hover:text-white" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-slate-500 text-sm">© {new Date().getFullYear()} Aurora Growth. All rights reserved.</div>
          <Link
            to="/consultation"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition-colors"
          >
            Book 1:1 Consultation
          </Link>
        </div>
      </div>
    </footer>
  )
}
