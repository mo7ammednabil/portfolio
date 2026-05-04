import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const HeroModel = lazy(() => import('./HeroModel'))

const CHAR_VARIANTS = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
      delay: i * 0.038,
    },
  }),
}

function AnimatedTitle({ text }) {
  return (
    <span aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={CHAR_VARIANTS}
          initial="hidden"
          animate="visible"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

function ModelPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          border: '1px solid rgba(74,128,212,0.2)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      <div className="relative flex-1 flex flex-col lg:flex-row min-h-screen">

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-6 pt-28 pb-12 lg:pb-24">
          <div style={{ maxWidth: 540 }}>

            <motion.p
              className="section-label mb-6"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <span className="accent-line" />
              Android Developer
            </motion.p>

            <h1
              className="font-display font-semibold leading-[0.95]"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#e8f0ff' }}
            >
              <AnimatedTitle text="Mohamed" />
              <br />
              <span style={{ color: '#c8a96e', fontStyle: 'italic' }}>
                <AnimatedTitle text="Nabil." />
              </span>
            </h1>

            <motion.p
              className="mt-7 mb-10"
              style={{
                color: 'rgba(200,216,240,0.75)',
                fontSize: 17,
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              I build modern Android applications using Kotlin and Jetpack Compose.
              Focused on clean architecture (MVVM), performance, and real-world app development.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary"
              >
                View my work
              </button>

              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-sm text-sky-400 hover:text-accent transition"
              >
                Get in touch →
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-14 pt-8 grid grid-cols-3 gap-5"
              style={{
                borderTop: '1px solid rgba(74,128,212,0.15)',
                maxWidth: 360,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.35 }}
            >
              {[
                { value: '2+', label: 'Projects' },
                { value: 'Kotlin', label: 'Main Tech' },
                { value: 'MVVM', label: 'Architecture' },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: 28,
                      color: '#c8a96e',
                      fontWeight: 600,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 9,
                      color: 'rgba(74,128,212,0.55)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Model Mobile */}
        <motion.div
          className="lg:hidden relative w-full"
          style={{ height: '58vw', minHeight: 260, maxHeight: 420 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Suspense fallback={<ModelPlaceholder />}>
            <HeroModel />
          </Suspense>
        </motion.div>

        {/* Model Desktop */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0"
          style={{ width: '52%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Suspense fallback={<ModelPlaceholder />}>
            <HeroModel />
          </Suspense>
        </motion.div>

      </div>
    </section>
  )
}