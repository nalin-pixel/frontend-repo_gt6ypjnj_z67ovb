import { BrainCircuit, Video, Search, Megaphone, Palette, BarChart3 } from 'lucide-react'

const SERVICES = [
  {
    icon: BrainCircuit,
    title: 'AI Automations & AI Agents',
    desc: 'Reduce manual ops with trained agents that handle intake, routing, and follow-ups.',
    benefits: ['Save 10-30 hrs/week', 'Faster lead response', 'Consistent workflows'],
    roi: 'Automation pays for itself in weeks when paired with a clear funnel and offer.',
    use: 'Lead qualification, CRM enrichment, support triage, content prep.'
  },
  {
    icon: Video,
    title: 'Social Media & Content',
    desc: 'Create once, scale everywhere with modular content systems and paid amplification.',
    benefits: ['Consistent output', 'On-brand messaging', 'Multi-channel reach'],
    roi: 'Lower CAC by building demand and retargeting warm attention.',
    use: 'Short-form, thought leadership, UGC workflows.'
  },
  {
    icon: Search,
    title: 'SEO & Keyword Systems',
    desc: 'Compounding organic growth with programmatic and editorial SEO.',
    benefits: ['Own intent', 'Predictable inbound', 'Compounding traffic'],
    roi: 'Traffic that reduces paid spend over time and improves close rates.',
    use: 'Topic clusters, programmatic pages, technical hygiene.'
  },
  {
    icon: Megaphone,
    title: 'Meta + Google Ads',
    desc: 'Profitable acquisition with creative testing and budget control.',
    benefits: ['Clear attribution', 'Creative iteration', 'Scale with confidence'],
    roi: 'Spend where it returns. Pause what doesn\'t. Weekly reporting.',
    use: 'Full-funnel paid media with creative sprints.'
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    desc: 'Premium identity systems that feel modern and convert.',
    benefits: ['Memorable presence', 'Conversion-led design', 'Faster production'],
    roi: 'Improves performance across ads, site, and content.',
    use: 'Brand kits, landing pages, ad creative systems.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Optimization',
    desc: 'Clean tracking and experimentation that drives decisions.',
    benefits: ['Reliable data', 'Faster learnings', 'Reduced waste'],
    roi: 'Confidence to scale with lower CAC and better LTV.',
    use: 'GA4, pixel hygiene, CRO sprints, dashboards.'
  }
]

export default function Services() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="text-slate-300 mt-3 max-w-prose">Modern, ROI-focused growth services delivered with automation and creative clarity.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, benefits, roi, use }) => (
            <div key={title} className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/50 hover:border-cyan-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-4 shadow-[0_0_30px_rgba(34,211,238,0.35)] flex items-center justify-center text-slate-900">
                <Icon className="text-slate-900" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 mt-1 text-sm">{desc}</p>
              <ul className="mt-3 text-sm text-slate-300 list-disc pl-5 space-y-1">
                {benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-3 text-cyan-300 text-sm">ROI: {roi}</div>
              <div className="mt-1 text-slate-400 text-xs">Use-cases: {use}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
