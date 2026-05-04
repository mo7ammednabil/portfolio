import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import FadeIn from './FadeIn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    // هنا ممكن بعدين تربطه بـ EmailJS أو backend
    await new Promise((r) => setTimeout(r, 1200))

    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6 sky-panel">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <FadeIn>
              <p className="section-label mb-6">
                <span className="accent-line" />
                Contact
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="font-display text-5xl md:text-6xl text-ink-100 leading-tight">
                Let’s build<br />
                <em className="text-accent">something great</em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 text-ink-400 leading-relaxed">
                I'm currently looking for internship and junior Android opportunities.
                If you have a role, project, or collaboration in mind, feel free to reach out.
              </p>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.3}>
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'mohamednabilmoharm@gmail.com',
                    href: 'mailto:mohamednabilmoharm@gmail.com',
                  },
                  {
                    icon: Github,
                    label: 'GitHub',
                    value: 'github.com/mo7ammednabil',
                    href: 'https://github.com/mo7ammednabil',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/mohamednabil2006',
                    href: 'https://www.linkedin.com/in/mohamednabil2006',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Egypt',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-sky-700 flex items-center justify-center text-accent flex-shrink-0">
                      <Icon size={14} />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-ink-600 uppercase tracking-wider">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-300 text-sm hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-ink-300 text-sm">{value}</span>
                      )}
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