'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/landing/HeroSection'
import { StickySection } from '@/components/landing/StickySection'
import { ActivitySummary } from './ActivitySummary'
import { Widgets } from './Widgets'

export function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity">
      <div className="snap-start shrink-0">
        <HeroSection />
      </div>
      <div className="shrink-0">
        <StickySection />
      </div>

      <section className="snap-start shrink-0 min-h-screen px-6 py-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <span className="text-[10px] text-white/20 font-mono tracking-[0.25em] uppercase">
              Sistema operativo
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
              Panel de control
            </h2>
          </motion.div>

          <ActivitySummary />
          <Widgets />
        </div>
      </section>
    </div>
  )
}
