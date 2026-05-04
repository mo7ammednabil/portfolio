import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
      x: direction === 'left' ? 28 : direction === 'right' ? -28 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      },
    },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
    >
      {children}
    </motion.div>
  )
}
