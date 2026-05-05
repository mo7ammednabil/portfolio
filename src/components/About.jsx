import FadeIn from './FadeIn'
import { useRef } from 'react'

export default function About() {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 20
    const rotateY = (x - centerX) / 20

    cardRef.current.style.transform = `
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
      scale(1.03)
    `

    // glow follow cursor
    cardRef.current.style.setProperty('--x', `${x}px`)
    cardRef.current.style.setProperty('--y', `${y}px`)
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`
  }

  return (
    <section id="about" className="py-32 px-6 sky-panel">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <FadeIn>
              <p className="section-label mb-6">
                <span className="accent-line" />
                About
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl text-ink-100 leading-tight">
                Building modern<br />
                <em className="text-accent">Mobile apps.</em>
              </h2>
            </FadeIn>

            {/* Interactive Image */}
            <FadeIn delay={0.2}>
              <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="mt-12 relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden transition duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >

                {/* glow يتبع الماوس */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(
                        circle at var(--x, 50%) var(--y, 50%), 
                        rgba(200,169,110,0.25),
                        transparent 40%
                      )
                    `,
                  }}
                />

                {/* الصورة */}
                <img
                  src="/my_photo.png"
                  alt="Mohamed Nabil"
                  className="w-full h-full object-cover"
                />

                {/* overlay cinematic */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-black/40" />

                {/* border */}
                <div className="absolute inset-0 border border-sky-400/20 rounded-2xl pointer-events-none" />

              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="lg:pt-20 space-y-6 text-ink-300 leading-relaxed">

            <FadeIn delay={0.15}>
              <p>
                I'm a Computer Science student and Mobile Developer focused on
                building modern mobile applications for both Android and iOS using Kotlin, Flutter, and React Native.
                I enjoy creating clean, scalable apps with strong architecture and
                smooth user experiences.
              </p>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p>
                I have experience working with MVVM architecture, REST APIs, and
                Firebase services including authentication and real-time data.
                I also build cross-platform apps using Flutter and React Native.
              </p>
            </FadeIn>

            <FadeIn delay={0.29}>
              <p>
                I'm passionate about writing maintainable code, improving performance,
                and continuously learning new technologies in mobile development.
              </p>
            </FadeIn>

            <FadeIn delay={0.36}>
              <p className="text-ink-400 text-sm font-mono tracking-wide">
                Currently open to internships and junior Android roles.
              </p>
            </FadeIn>

            {/* Quick facts */}
            <FadeIn delay={0.43}>
              <div
                className="pt-6 grid grid-cols-2 gap-4 border-t"
                style={{ borderColor: "rgba(74,128,212,0.15)" }}
              >
                {[
                  ['Based in', 'Egypt'],
                  ['University', 'Damanhour University'],
                  ['Focus', 'Android (Kotlin, Compose)'],
                  ['Tech', 'Firebase, REST APIs, MVVM'],
                ].map(([key, value]) => (
                  <div key={key}>
                    <div className="font-mono text-xs text-ink-600 uppercase tracking-wider">
                      {key}
                    </div>
                    <div className="text-ink-200 text-sm mt-1">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}