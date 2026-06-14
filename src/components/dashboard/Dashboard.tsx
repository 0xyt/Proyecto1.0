'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HeroSection } from '@/components/landing/HeroSection'
import { SystemInitSection } from '@/components/landing/SystemInitSection'
import { MissionControl } from '@/components/landing/MissionControl'
import { ActivitySummary } from './ActivitySummary'
import { Widgets } from './Widgets'

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'init', label: 'Sistema' },
  { id: 'dashboard', label: 'Panel' },
  { id: 'mission', label: 'Control' },
]

export function Dashboard() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const currentSection = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.33, 0.66, 1, 1])

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto snap-y snap-proximity">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500/40 via-indigo-500/40 to-emerald-500/40 z-50 origin-left"
        style={{ scaleX: scrollYProgress, opacity: scrollYProgress }}
      />

      <motion.div
        className="fixed top-4 right-6 z-50 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.03, 0.97, 1], [0, 1, 1, 0]) }}
      >
        <div className="flex items-center gap-1.5">
          {sections.map((_, i) => (
            <motion.div
              key={i}
              className="w-[18px] h-[1px]"
              style={{
                backgroundColor: useTransform(
                  scrollYProgress,
                  [i / sections.length, (i + 1) / sections.length],
                  ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.08)'],
                ),
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="snap-start shrink-0">
        <HeroSection />
      </div>

      <div className="relative shrink-0">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#050508] z-10 pointer-events-none" />
        <SystemInitSection />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent to-[#050508] z-10 pointer-events-none" />
      </div>

      <section className="snap-start shrink-0 relative min-h-screen px-6 py-20 flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center"
          >
            <span className="inline-block text-[10px] text-emerald-400/60 font-mono tracking-[0.25em] uppercase mb-3">
              System online
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-[1.1]">
              Panel de control
            </h2>
            <div className="w-8 h-px bg-white/[0.06] mx-auto mt-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <ActivitySummary />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Widgets />
          </motion.div>
        </div>

        <motion.div
          className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0"
          style={{
            opacity: useTransform(scrollYProgress, [0.45, 0.5], [0, 1]),
          }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        </motion.div>
      </section>

      <div className="relative snap-start shrink-0">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050508] to-transparent z-10 pointer-events-none" />
        <MissionControl />
      </div>
    </div>
  )
}
