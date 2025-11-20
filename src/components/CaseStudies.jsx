export default function CaseStudies() {
  const cases = [
    { company: 'B2B SaaS', metrics: ['+312% inbound leads', 'CAC -28%', 'MQL→SQL rate +41%'] },
    { company: 'Ecom Brand', metrics: ['ROAS 3.8x → 6.2x', '+64% returning revenue', 'AOV +19%'] },
    { company: 'Local Services', metrics: ['120+ booked calls/mo', 'CPL -35%', 'Close rate +22%'] },
  ]

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Case Studies</h2>
        <p className="text-slate-300 mt-3 max-w-prose">Real outcomes from compounding systems. Placeholders shown here — plug in your own data.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.company} className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50">
              <div className="text-cyan-300 text-sm">{c.company}</div>
              <div className="text-white font-semibold text-lg mt-1">Results</div>
              <ul className="mt-3 text-slate-300 text-sm list-disc pl-5 space-y-1">
                {c.metrics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
