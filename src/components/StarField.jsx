/**
 * StarField.jsx — animated star background
 * Pure CSS/canvas approach: one <canvas> painted once,
 * then two layers of CSS-animated star "sheets" for parallax.
 * Zero JS per frame after mount. Extremely cheap.
 */
import { useEffect, useRef } from 'react'

const STAR_COUNT = 160

function generateStars(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,      // vw %
    y: Math.random() * 100,      // vh %
    r: Math.random() * 1.4 + 0.3,
    opacity: Math.random() * 0.6 + 0.2,
    dur: Math.random() * 6 + 4,  // twinkle duration
    delay: Math.random() * 8,
  }))
}

const NEAR   = generateStars(60)   // larger, faster drift
const FAR    = generateStars(100)  // tiny, slower

export default function StarField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Sky gradient */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 120% 80% at 50% 0%,
            #0b1a3b 0%,
            #0d1f4a 25%,
            #0a1628 55%,
            #060d1a 100%
          )
        `,
      }} />

      {/* Nebula clouds — purely decorative glows */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 70% 40% at 15% 30%,  rgba(99,120,210,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 85% 15%,  rgba(130,80,200,0.06) 0%, transparent 65%),
          radial-gradient(ellipse 80% 35% at 50% 80%,  rgba(60,100,180,0.05) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 70% 55%,  rgba(80,140,220,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* Far stars — slow twinkle */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {FAR.map((s, i) => (
            <style key={i}>{`
              .sf${i} {
                animation: twinkle${i % 8} ${s.dur}s ${s.delay}s ease-in-out infinite;
              }
              @keyframes twinkle${i % 8} {
                0%,100% { opacity: ${s.opacity * 0.4}; r: ${s.r}; }
                50%     { opacity: ${s.opacity};       r: ${s.r * 1.3}; }
              }
            `}</style>
          ))}
        </defs>
        {FAR.map((s, i) => (
          <circle
            key={i}
            className={`sf${i}`}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r * 0.7}
            fill="white"
            opacity={s.opacity * 0.5}
          />
        ))}
      </svg>

      {/* Near stars — slightly brighter, gentle drift */}
      <svg
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          animation: 'starDrift 90s linear infinite',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {NEAR.map((s, i) => (
          <circle
            key={i}
            cx={`${s.x}%`}
            cy={`${s.y}%`}
            r={s.r}
            fill="white"
            opacity={s.opacity}
            style={{
              animation: `twinkleN${i % 5} ${s.dur}s ${s.delay}s ease-in-out infinite`,
            }}
          />
        ))}
        <defs>
          {[0,1,2,3,4].map(n => (
            <style key={n}>{`
              @keyframes twinkleN${n} {
                0%,100% { opacity: ${0.15 + n * 0.08}; }
                ${30 + n * 10}% { opacity: ${0.6 + n * 0.07}; }
              }
            `}</style>
          ))}
        </defs>
      </svg>

      {/* Shooting star — CSS only */}
      <div style={{
        position: 'absolute',
        top: '18%', left: '-5%',
        width: 120, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(180,210,255,0.9), transparent)',
        borderRadius: 1,
        animation: 'shoot 12s 3s ease-out infinite',
        transformOrigin: 'left center',
      }} />
      <div style={{
        position: 'absolute',
        top: '42%', left: '-5%',
        width: 80, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(200,190,255,0.7), transparent)',
        borderRadius: 1,
        animation: 'shoot 18s 9s ease-out infinite',
        transformOrigin: 'left center',
      }} />

      <style>{`
        @keyframes starDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-2%); }
        }
        @keyframes shoot {
          0%   { transform: translateX(0)    translateY(0)   rotate(25deg); opacity: 0; }
          2%   { opacity: 1; }
          15%  { transform: translateX(110vw) translateY(30vh) rotate(25deg); opacity: 0; }
          100% { transform: translateX(110vw) translateY(30vh) rotate(25deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
