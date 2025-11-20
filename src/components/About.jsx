import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { title: 'AI Automations', desc: 'Connect your stack with smart workflows that reduce manual work and speed up growth.' },
    { title: 'Content Strategy', desc: 'Narratives and creative systems designed to convert, not just collect views.' },
    { title: 'Growth Systems', desc: 'Full-funnel frameworks that compound results across ads, content, and SEO.' },
    { title: 'Data & Analytics', desc: 'Decision-making powered by clean tracking, attribution, and experimentation.' },
  ]

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About the Agency</h2>
            <p className="mt-4 text-slate-300 max-w-prose">
              We build modern acquisition engines using AI. From automated lead handling to content at scale and high-converting ad ecosystems — we focus on measurable growth.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {items.map((it) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="p-5 rounded-xl border border-cyan-500/20 bg-slate-900/40 hover:border-cyan-400/40 transition-colors"
              >
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-slate-300 mt-1 text-sm">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/40">
            <h3 className="text-white font-semibold text-lg">Founder</h3>
            <p className="text-slate-300 mt-2">
              Led by a senior growth strategist, our team blends AI, creative, and performance marketing. Weve shipped systems for startups and established brands that move revenue, not vanity metrics.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/60">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-3 shadow-[0_0_30px_rgba(34,211,238,0.35)]" />
            <div className="text-white font-semibold">Alex Rivera</div>
            <div className="text-slate-400 text-sm">Founder & Lead Strategist</div>
            <p className="text-slate-300 text-sm mt-3">Obsessed with compounding growth, clear creative, and automations that actually save time.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
