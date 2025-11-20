import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 text-sm rounded-md transition-colors ${
          isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
            <span className="text-white font-semibold tracking-tight">Aurora Growth</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/case-studies', 'Case Studies')}
            {navItem('/consultation', 'Consultation')}
            {navItem('/contact', 'Contact')}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition-colors"
            >
              Book 1:1 Consultation
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-cyan-500/10 bg-slate-900/90">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItem('/', 'Home')}
            {navItem('/services', 'Services')}
            {navItem('/case-studies', 'Case Studies')}
            {navItem('/consultation', 'Consultation')}
            {navItem('/contact', 'Contact')}
            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)]"
            >
              Book 1:1 Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
