'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/landing/HeroSection'
import { StickySection } from '@/components/landing/StickySection'
import { ActivitySummary } from './ActivitySummary'
import { Widgets } from './Widgets'

export function Dashboard() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StickySection />

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto space-y-10">
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
