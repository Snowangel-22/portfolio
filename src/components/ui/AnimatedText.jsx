import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedText({ items = [], interval = 2000 }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length)
    }, interval)
    return () => clearInterval(timer)
  }, [items.length, interval])

  const slideVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.4 }}
        className="text-accent italic"
      >
        {items[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}
