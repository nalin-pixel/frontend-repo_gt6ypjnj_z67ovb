import { WhatsappLogo } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Contact</h1>
        <p className="text-slate-300 mt-3">Send a message or reach out directly on WhatsApp.</p>

        <form className="mt-8 grid grid-cols-1 gap-4">
          <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="Full name" />
          <input className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="Email" type="email" />
          <textarea className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/20 text-white" placeholder="How can we help?" rows="4" />
          <button className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 text-slate-900 font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:bg-cyan-400 transition-colors">Send</button>
        </form>

        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-green-500/40 text-green-300 hover:bg-green-500/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-current"><path d="M380.9 97.1C339-10.6 220.3-46.6 124 15.3S-22.6 220.3 39.3 316.6c50.2 77.8 141.8 112.5 227.4 88.6l62 33.8a17 17 0 0 0 24.6-14.7l.1-66.9c68.4-52.7 94.5-146.9 57.5-233.3zM216.3 372.7a156.7 156.7 0 0 1-79.6-21.6l-5.7-3.4-47.1 12.3 12.6-45.9-3.7-5.9c-50.8-81.7-26-189.2 55.7-240s189.2-26 240 55.7 26 189.2-55.7 240a157.2 157.2 0 0 1-80.9 23.8h-.6zm90.6-106.5c-4.9-2.5-29-14.3-33.5-15.9s-7.7-2.5-10.9 2.5-12.5 15.9-15.4 19.1-5.7 3.6-10.6 1.1a128.2 128.2 0 0 1-37.6-23.7 142.7 142.7 0 0 1-26.5-33.1c-2.8-4.9 0-7.6 2.1-10s4.9-5.7 7.4-8.6 3.2-4.9 4.9-8.3.8-6.2-.4-8.6-10.9-26.3-14.9-36-8-8.3-11.1-8.5-6.1-.2-9.3-.2a17.9 17.9 0 0 0-13 6.1c-4.5 4.9-17 16.7-17 40.7s17.4 47.2 19.8 50.4 34 52 82.4 73 49.2 13.3 58 12.5 28.6-11.7 32.7-23 4.1-21.1 2.9-23.1-4.5-3.4-9.3-5.9z"/></svg>
          WhatsApp
        </a>
      </div>
    </section>
  )
}
