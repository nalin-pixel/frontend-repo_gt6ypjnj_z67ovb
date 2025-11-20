export default function Consultation() {
  return (
    <section className="relative py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Book Your 1:1 Consultation</h1>
        <p className="text-slate-300 mt-3">Tell us about your goals. We\'ll audit your current setup and map a path to measurable growth.</p>

        <form className="mt-8 grid grid-cols-1 gap-4 text-left">
          <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="Full name" />
          <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="Email" type="email" />
          <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="Company / Website" />
          <textarea className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="What are you looking to achieve?" rows="4" />
          <button className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition-colors">
            Book Your 1:1 Consultation
          </button>
        </form>

        <div className="mt-10">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6">
            <div className="text-slate-300">Calendar Embed</div>
            <div className="mt-2 h-72 rounded-lg bg-slate-800/60 border border-cyan-500/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
