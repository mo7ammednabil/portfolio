/**
 * HeroModel.jsx — DOM wrapper
 * Tracks mouse globally, passes as ref to scene.
 * Larger canvas on mobile (55vw min-height instead of 45vw).
 * Vignette updated for sky palette.
 */
import { useRef, useEffect, useState, useCallback, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const ModelScene = lazy(() => import('./ModelScene'))

function isWebGLAvailable() {
  try {
    const c = document.createElement('canvas')
    return !!(window.WebGLRenderingContext &&
      (c.getContext('webgl') || c.getContext('experimental-webgl')))
  } catch { return false }
}

function CanvasLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(74,128,212,0.35)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function HeroModel() {
  const mouseNorm = useRef({ x: 0, y: 0 })
  const [webglOk]  = useState(() => typeof window !== 'undefined' && isWebGLAvailable())
  const [isMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)
  const [visible,   setVisible] = useState(false)

  const onMouseMove = useCallback((e) => {
    mouseNorm.current = {
      x: (e.clientX / window.innerWidth)  * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    }
  }, [])

  const onTouchMove = useCallback((e) => {
    if (!e.touches[0]) return
    mouseNorm.current = {
      x: (e.touches[0].clientX / window.innerWidth)  * 2 - 1,
      y: (e.touches[0].clientY / window.innerHeight) * 2 - 1,
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    const t = setTimeout(() => setVisible(true), 200)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      clearTimeout(t)
    }
  }, [onMouseMove, onTouchMove])

  if (!webglOk) return null

  return (
    <motion.div
      className="w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Ambient glow behind model */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none', zIndex: 0,
      }}>
        <div style={{
          width: '60%', height: '60%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,128,212,0.12) 0%, transparent 70%)',
          filter: 'blur(36px)',
          animation: 'heroPulse 5s ease-in-out infinite',
        }} />
      </div>

      {/* Canvas */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        <Suspense fallback={<CanvasLoader />}>
          <ModelScene mouseNorm={mouseNorm} isMobile={isMobile} />
        </Suspense>
      </div>

      {/* Edge vignette — sky toned */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 88% 88% at 50% 50%,
            transparent 38%,
            rgba(6,13,26,0.55) 72%,
            rgba(6,13,26,0.92) 100%)
        `,
        pointerEvents: 'none', zIndex: 2,
      }} />
    </motion.div>
  )
}
