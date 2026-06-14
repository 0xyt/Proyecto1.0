'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/landing/HeroSection'
import { SystemInitSection } from '@/components/landing/SystemInitSection'
import { MissionControl } from '@/components/landing/MissionControl'
import { ActivitySummary } from './ActivitySummary'
import { Widgets } from './Widgets'

export function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-proximity">
      <div className="snap-start shrink-0">
        <HeroSection />
      </div>
      <div className="shrink-0">
        <SystemInitSection />
      </div>

      <section className="snap-start shrink-0 min-h-screen px-6 py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <span className="text-[10px] text-emerald-400/60 font-mono tracking-[0.25em] uppercase">
              System online
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
              Panel de control
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <ActivitySummary />
          </motion.div>

          <Widgets />
        </div>
      </section>

      <div className="snap-start shrink-0">
        <MissionControl />
      </div>
    </div>
  )
}
