export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[92vh] max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:pt-24">
      <div className="relative z-10">
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-[.96] tracking-[-.05em] text-slate-950 sm:text-7xl lg:text-[5.3rem]">
          Turning marketplace data into{' '}
          <span className="text-gradient">decisions.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          I’m Clara Tsai, a Senior E-commerce Analyst combining marketplace
          operations, business analysisspecializing in marketplace management, 
          data-driven decision-making, and process optimization.
          I turn complex operational challenges into actionable insights and measurable business improvements.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/15 transition hover:-translate-y-0.5 hover:bg-blue-800"
            href="#experience"
          >
            Explore my work
          </a>

        </div>
      </div>

      <div
        className="relative mx-auto w-full max-w-md lg:max-w-none"
        aria-label="Career highlights"
      >
        <div className="absolute -left-16 -top-16 size-48 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -bottom-20 -right-12 size-56 rounded-full bg-emerald-200/70 blur-3xl" />

        <div className="relative grid gap-4 rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-slate-300/35 backdrop-blur sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-slate-400">
            Selected impact
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="metric-card bg-emerald-100 text-emerald-950">
              <span className="font-display text-4xl font-bold">16.3%</span>
              <span className="mt-2 text-sm text-emerald-800">
                YoY market share growth
              </span>
            </div>

            <div className="metric-card border border-slate-200 bg-white text-slate-950">
              <span className="font-display text-4xl font-bold">3,000+</span>
              <span className="mt-2 text-sm text-slate-500">
                products researched
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
