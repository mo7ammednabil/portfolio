import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data/portfolio'
import FadeIn from './FadeIn'

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-ink-200 text-sm font-body">{skill.name}</span>
        <span className="font-mono text-xs text-ink-600 group-hover:text-accent transition-colors duration-300">
          {skill.level}%
        </span>
      </div>
      <div className="h-px bg-ink-800 relative overflow-hidden">
        <motion.div
          className="skill-bar-fill absolute top-0 left-0 h-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1],
            delay: index * 0.08,
          }}
        />
      </div>
    </div>
  )
}

const CATEGORIES = [...new Set(SKILLS.map((s) => s.category))]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative">
      <div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Heading */}
          <div>
            <FadeIn>
              <p className="section-label mb-6">
                <span className="accent-line" />
                Skills
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-5xl text-ink-100 leading-tight">
                What I<br />
                <em className="text-accent">work with</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-ink-400 text-sm leading-relaxed">
                Not exhaustive — just what I reach for most. I pick up new tools when the project
                calls for it; the core concepts usually transfer.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="font-mono text-xs px-3 py-1 border border-ink-700 text-ink-500 tracking-wide"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Skill bars — span 2 cols */}
          <div className="lg:col-span-2 space-y-7">
            {SKILLS.map((skill, i) => (
              <FadeIn key={skill.name} delay={i * 0.06}>
                <SkillBar skill={skill} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Tech cloud */}
        <FadeIn delay={0.2}>
          <div className="mt-20 pt-12 border-t border-ink-800/60">
            <p className="font-mono text-xs text-ink-600 tracking-widest uppercase mb-6">Also familiar with</p>
            <div className="flex flex-wrap gap-3">
              {[
                'Flutter', 'React Native',
                'Testing', 'Docker', 'AWS', 'Vercel',
                'Supabase', 'UI', 'Three.js',
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-ink-500 hover:text-ink-200 transition-colors duration-200 px-3 py-1.5 bg-ink-900 border border-ink-800/60 hover:border-accent/20"
                  data-hover
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
