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
            <a className="nav-link" href="#experience">Experience</a><a className="nav-link" href="#skills">Skills</a><a className="nav-link hidden sm:block" href="#education">Education</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Experience />
        <Education />
      </main>
      <footer className="bg-slate-950 px-5 py-7 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Clara Tsai.</p>
        <a className="mt-3 inline-block text-slate-300 transition hover:text-white" href="https://www.linkedin.com/in/clara-tsai-4094b0265/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
      </footer>
    </div>
  )
}

export default App
