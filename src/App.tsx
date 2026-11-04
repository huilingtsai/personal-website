import "./components/hero.tsx"
import { Hero } from "./components/hero.tsx"
import { Experience } from "./components/experience.tsx"
import { Education } from "./components/education.tsx"


function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7faf8] text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#f7faf8]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-slate-950">Clara</a>
          <div className="flex items-center gap-5 text-sm font-medium text-slate-600 sm:gap-8">
            <a className="nav-link" href="#experience">Experience</a><a className="nav-link" href="#skills">Skills</a><a className="nav-link hidden sm:block" href="#education">Education</a><a className="rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-emerald-700" href="mailto:">Let’s talk</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Experience />
        <Education />
        <section className="bg-blue-700 py-20 text-center text-white"><div className="mx-auto max-w-3xl px-5 sm:px-8"><p className="text-sm font-semibold uppercase tracking-[.18em] text-blue-200">Let’s connect</p><h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Have a marketplace challenge worth solving?</h2><div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold"><a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-blue-800 transition hover:-translate-y-0.5" href="mailto:"></a><a className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-white transition hover:bg-white/10" href="tel:"></a></div></div></section>
      </main>
      <footer className="bg-slate-950 px-5 py-7 text-center text-sm text-slate-500">© {new Date().getFullYear()} Clara Tsai. Built with React, TypeScript & Tailwind CSS.</footer>
    </div>
  )
}

export default App
