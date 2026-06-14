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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -120])
  const ringRotation = useTransform(scrollYProgress, [0, 0.4], [0, 360])
  const ringScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.15])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.2], [0.15, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])
  const bgGlowScale = useTransform(scrollYProgress, [0, 0.2], [1, 2])
  const bgGlowOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 0])
  const greeting = getGreeting()

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[100px]"
        style={{ scale: bgGlowScale, opacity: bgGlowOpacity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px]"
        style={{ scale: bgGlowScale, opacity: bgGlowOpacity }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: ringOpacity }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border border-white/[0.04]"
          style={{ rotate: ringRotation, scale: ringScale }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full border border-white/[0.03]"
          style={{
            rotate: useTransform(scrollYProgress, [0, 0.4], [0, -240]),
            scale: ringScale,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-white/[0.02]"
          style={{
            rotate: useTransform(scrollYProgress, [0, 0.4], [0, 180]),
            scale: ringScale,
          }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="text-center px-6 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="mb-6"
        >
          <span className="text-xs text-white/30 font-mono tracking-[0.2em] uppercase">
            OSCAR OS v1.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.9] tracking-tight"
        >
          {greeting.split(' ').map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + i * 0.06,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="inline-block mr-[0.15em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
            Oscar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="text-base sm:text-lg text-white/30 mt-6 font-light max-w-md mx-auto leading-relaxed"
        >
          Sistema operativo personal — diseño, desarrollo y experiencia.
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.span
          className="text-xs text-white/20 font-mono tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          DESCUBRE
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/40"
            animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
