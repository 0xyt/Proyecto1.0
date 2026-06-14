'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { getGreeting } from '@/lib/utils'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.92])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.15])
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -80])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 0.8])
  const glowScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.3])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  const greeting = getGreeting()

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full bg-indigo-500/15 blur-[140px]"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />
      <motion.div
        className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-purple-500/15 blur-[140px]"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0.08, 0.2]) }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.015]" />
      </motion.div>

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="text-center px-6 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="mb-5"
        >
          <span className="text-[10px] text-white/25 font-mono tracking-[0.25em] uppercase">
            OSCAR OS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.9] tracking-tight"
        >
          {greeting},{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/60">
            Oscar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="text-sm sm:text-base text-white/25 mt-5 font-light max-w-sm mx-auto leading-relaxed"
        >
          Productos digitales, automatizaciones y experiencias web.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-0.5 h-1.5 rounded-full bg-white/30"
            animate={{ y: [0, 4, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
