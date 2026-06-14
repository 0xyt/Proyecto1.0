'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/landing/HeroSection'
import { CitySection } from '@/components/landing/CitySection'
import { ActivitySummary } from './ActivitySummary'
import { Widgets } from './Widgets'

export function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section className="snap-start min-h-screen shrink-0">
        <HeroSection />
      </section>
      <section className="snap-start min-h-screen shrink-0">
        <CitySection />
      </section>
      <section className="snap-start min-h-screen shrink-0 flex items-center px-6 py-8">
        <div className="max-w-7xl mx-auto w-full space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <ActivitySummary />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Widgets />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
