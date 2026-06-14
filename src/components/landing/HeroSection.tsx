'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.1])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8])
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.4])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute -top-80 -right-40 w-[900px] h-[900px] rounded-full bg-indigo-500/12 blur-[160px]"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />
      <motion.div
        className="absolute -bottom-80 -left-40 w-[800px] h-[800px] rounded-full bg-purple-500/12 blur-[160px]"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="text-center px-6"
      >
        <div className="mb-3">
          <span className="text-xs text-white/15 font-mono tracking-[0.35em] uppercase opacity-0">
            OSCAR OS
          </span>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white leading-[0.8] tracking-tight select-none">
          OSCAR
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/70 to-white/40">
            OS
          </span>
        </h1>

        <div className="flex items-center justify-center gap-2 mt-6">
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-xs text-white/15 font-mono tracking-wider uppercase">
            System dormant
          </span>
        </div>
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-40 pointer-events-none font-mono text-[10px] text-white/15 tracking-widest"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
      >
        01 · 04
      </motion.div>

      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/15 font-mono tracking-wider mb-1">
          Scroll para iniciar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <motion.div
            className="w-0.5 h-1.5 rounded-full bg-white/20"
            animate={{ y: [0, 4, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
