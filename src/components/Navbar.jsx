import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_ITEMS } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(['about', 'skills', 'projects', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(6,13,26,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(74,128,212,0.12)' : '1px solid transparent',
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg text-ink-100 hover:text-accent transition-colors duration-300"
          >
            MN<span className="text-accent">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '')
              return (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              )
            })}
            <a
              href="https://drive.google.com/file/d/1Lp3agtmqSWxcWhRHGx2pNiN9MePHBq4k/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-5"
            >
              Resume
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-ink-200 hover:text-accent transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: "rgba(6,13,26,0.97)", backdropFilter: "blur(20px)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="font-display text-3xl transition-colors" style={{ color: "#c8d8f0" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1Lp3agtmqSWxcWhRHGx2pNiN9MePHBq4k/view?usp=drive_link"
              className="btn-primary mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Résumé
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
