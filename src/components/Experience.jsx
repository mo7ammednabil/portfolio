import FadeIn from './FadeIn'
import { Briefcase } from 'lucide-react'

const EXPERIENCE = [
  {
    role: 'Android Developer Intern',
    company: 'DEPI',
    period: 'Nov 2025 — Jul 2026',
    details: [
      'Built Android apps using Kotlin & Jetpack Compose',
      'Used MVVM for clean architecture',
      'Integrated Firebase Authentication & Firestore',
      'Worked with REST APIs using Retrofit',
      'Used Room for local caching and offline support',
      'Used Coroutines for async tasks',
      'Worked with Git & GitHub in a team',
      'Improved app performance and fixed bugs',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 sky-panel">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <p className="section-label mb-6">
            <span className="accent-line" />
            Experience
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-display text-5xl md:text-6xl text-ink-100 leading-tight mb-14">
            Professional<br />
            <em className="text-accent">Experience</em>
          </h2>
        </FadeIn>

        <div className="space-y-10">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-6 border border-sky-800/30 rounded-xl bg-black/10">

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-sky-700 flex items-center justify-center text-accent">
                      <Briefcase size={14} />
                    </div>

                    <div>
                      <h3 className="text-lg text-ink-100 font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-ink-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-ink-500">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 ml-1">
                  {exp.details.map((d, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-ink-300 flex gap-2"
                    >
                      <span className="text-accent">•</span>
                      {d}
                    </li>
                  ))}
                </ul>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}