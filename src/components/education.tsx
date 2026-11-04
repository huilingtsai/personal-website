export function Education() {
    const skillGroups = [
        { title: 'Analytics', skills: ['Data Analytics', 'Business Analytics', 'Python', 'SQL', 'Google Analytics'] },
        { title: 'Marketplaces', skills: ['Amazon Seller Central', 'Amazon Vendor Central', 'Walmart Seller Central'] },
        { title: 'Research & tools', skills: ['Keepa', 'GDesk', 'SmartScout', 'Reason Automation'] },
    ]

    const education = [
    { degree: 'MSDS, Master of Data Science', school: 'Monroe University', meta: '2024–Present', grade: '3.89 GPA' },
    { degree: 'Master of Science, Business Administration', school: 'Southwest Minnesota State University', meta: '2022–2023', grade: '3.8 GPA' },
    { degree: 'Bachelor of Science, Business Administration', school: 'Shih Chien University, Taipei Campus', meta: '', grade: '' },
    ]

    return (
        <>
            <section id="skills" className="scroll-mt-20 py-24"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow">Skills & tools</p><div className="mt-7 grid gap-4 lg:grid-cols-3">{skillGroups.map((group, index) => <article key={group.title} className={`rounded-3xl p-7 ${index === 1 ? 'bg-blue-700 text-white' : 'border border-slate-200 bg-white'}`}><p className={`text-sm font-bold uppercase tracking-[.16em] ${index === 1 ? 'text-blue-200' : 'text-emerald-700'}`}>{group.title}</p><div className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className={`rounded-full px-3 py-2 text-sm font-medium ${index === 1 ? 'bg-white/12 text-white' : 'bg-slate-100 text-slate-700'}`}>{skill}</span>)}</div></article>)}</div><div className="mt-4 flex flex-col justify-between gap-5 rounded-3xl bg-emerald-100 px-7 py-6 text-emerald-950 sm:flex-row sm:items-center"><p className="font-display text-xl font-bold">Languages</p><p className="font-medium">English <span className="mx-3 text-emerald-400">/</span> Mandarin <span className="mx-3 text-emerald-400">/</span> Japanese</p></div></div></section>
            <section id="education" className="scroll-mt-20 bg-slate-950 py-24 text-white"><div className="mx-auto max-w-6xl px-5 sm:px-8"><p className="eyebrow !text-emerald-400">Education</p><div className="mt-8 divide-y divide-white/15 border-y border-white/15">{education.map((item) => <article key={item.degree} className="grid gap-3 py-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><h3 className="font-display text-xl font-bold sm:text-2xl">{item.degree}</h3><p className="mt-1 text-slate-400">{item.school}</p></div><div className="flex gap-4 text-sm text-slate-400 sm:block sm:text-right"><p>{item.meta}</p><p className="font-semibold text-emerald-400">{item.grade}</p></div></article>)}</div></div></section>
        </>
    )
}