import { Github, Linkedin, Mail } from 'lucide-react'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/mo7ammednabil', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohamednabil2006/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:mohamednabilmoharm@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 relative" style={{ borderTop: "1px solid rgba(74,128,212,0.1)", background: "rgba(6,13,26,0.6)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display text-ink-100">MN<span className="text-accent">.</span></span>
          <span className="text-ink-700 text-xs">—</span>
          <span className="font-mono text-xs text-ink-600">
            Built with React + Vite
          </span>
        </div>

        <div className="flex items-center gap-5">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ink-600 hover:text-accent transition-colors duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-ink-700">
          © {new Date().getFullYear()} Mohamed Nabil
        </p>
      </div>
    </footer>
  )
}
