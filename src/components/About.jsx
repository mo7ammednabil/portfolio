import FadeIn from './FadeIn'

export default function About() {
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
                <em className="text-accent">Android apps.</em>
              </h2>
            </FadeIn>

            {/* Avatar Image */}
            <FadeIn delay={0.2}>
              <div className="mt-12 relative w-full max-w-xs aspect-square overflow-hidden rounded-2xl group">

                {/* Glow خلفي */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#c8a96e]/20 to-transparent blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />

                {/* الصورة */}
                <img
                  src="/my_photo.png"
                  alt="Mohamed Nabil"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay cinematic */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-black/40" />

                {/* Border */}
                <div className="absolute inset-0 border border-sky-400/20 rounded-2xl pointer-events-none" />

              </div>
            </FadeIn>

          </div>

          {/* Right */}
          <div className="lg:pt-20 space-y-6 text-ink-300 leading-relaxed">

            <FadeIn delay={0.15}>
              <p>
                I'm a Computer Science student and Android Developer focused on
                building modern mobile applications using Kotlin and Jetpack Compose.
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
                  ['Tech', 'Firebase, REST APIs'],
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