'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const subtitleWords = 'Building Digital Experiences From Santa Cruz, Bolivia'.split(' ')

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

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute -top-80 -right-40 w-[900px] h-[900px] rounded-full bg-indigo-500/15 blur-[160px]"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />
      <motion.div
        className="absolute -bottom-80 -left-40 w-[800px] h-[800px] rounded-full bg-purple-500/15 blur-[160px]"
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
        className="text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-4"
        >
          <span className="text-xs sm:text-sm text-white/20 font-mono tracking-[0.35em] uppercase">
            OSCAR OS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.85] tracking-tight"
        >
          OSCAR
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/50">
            OS
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-x-[0.4em] gap-y-1"
        >
          {subtitleWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.5,
                delay: 1.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg md:text-xl text-white/25 font-light"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
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
