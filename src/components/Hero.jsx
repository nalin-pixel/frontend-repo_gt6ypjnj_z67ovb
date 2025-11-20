import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)] blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            AI-Powered Digital Marketing That Brings Real Growth.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-lg md:text-xl text-slate-300 max-w-xl"
          >
            We deploy practical AI systems that turn attention into revenue — automation that saves hours, content that converts, and campaigns that scale without guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition-colors"
            >
              Book 1:1 Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-cyan-500/40 text-cyan-200 hover:bg-cyan-500/10 transition-colors"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        <div className="relative h-[380px] md:h-[520px] rounded-2xl border border-cyan-500/30 bg-slate-900/40 overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
