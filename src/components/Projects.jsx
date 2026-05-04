/**
 * Projects.jsx — clean responsive cards with full image support
 */
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'
import FadeIn from './FadeIn'

const CARD_COLORS = [
  { hue: '#1e3a4a', accent: 'rgba(74,160,212,0.18)' },
  { hue: '#1a2e4a', accent: 'rgba(60,120,200,0.18)' },
  { hue: '#221a4a', accent: 'rgba(100,80,200,0.18)' },
  { hue: '#1a3a2e', accent: 'rgba(60,180,140,0.14)' },
]

function ProjectCard({ project, index }) {
  const cfg = CARD_COLORS[index % CARD_COLORS.length]

  return (
    <motion.div
      className="project-card rounded-xl overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -4 }}
    >
      {/* IMAGE SECTION (FULL HEIGHT RESPONSIVE) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">

        {/* real image (if exists) */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            {/* fallback gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(145deg, ${cfg.hue}ee 0%, ${cfg.hue}88 60%, #060d1a 100%)`,
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 25% 65%, ${cfg.accent} 0%, transparent 65%)`,
              }}
            />
          </>
        )}

        {/* overlay grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,216,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,216,240,1) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* chrome dots */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          {[
            'rgba(255,95,86,0.55)',
            'rgba(255,189,46,0.55)',
            'rgba(39,201,63,0.55)',
          ].map((c, i) => (
            <div
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: c,
              }}
            />
          ))}
        </div>

        {/* index background */}
        <div
          className="absolute bottom-2 right-4 select-none"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 52,
            fontWeight: 700,
            color: 'rgba(255,255,255,0.03)',
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* year */}
        <div
          className="absolute top-4 right-4"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            color: 'rgba(200,216,240,0.5)',
            letterSpacing: '0.15em',
          }}
        >
          {project.year}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 17,
              color: '#e8f0ff',
              lineHeight: 1.3,
              flex: 1,
            }}
          >
            {project.title}
          </h3>

          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(74,128,212,0.6)' }}
            >
              <Github size={14} />
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(74,128,212,0.6)' }}
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 13,
            lineHeight: 1.65,
            color: 'rgba(200,216,240,0.6)',
            marginBottom: 16,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9,
                color: 'rgba(74,128,212,0.8)',
                background: 'rgba(74,128,212,0.08)',
                border: '1px solid rgba(74,128,212,0.15)',
                borderRadius: 3,
                padding: '2px 7px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.live || project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
            color: '#c8a96e',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
          className="inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity"
        >
          View project <ArrowUpRight size={10} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative sky-panel">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14">
          <FadeIn>
            <p className="section-label mb-5">
              <span className="accent-line" />
              Selected Work
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="font-display text-5xl md:text-6xl leading-tight"
              style={{ color: '#e8f0ff' }}
            >
              Things I've<br />
              <em style={{ color: '#c8a96e' }}>built recently</em>
            </h2>
          </FadeIn>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}