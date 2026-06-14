'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
} as const

export function ActivitySummary() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          whileHover={{ y: -2, scale: 1.01 }}
          className="rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-4 transition-colors hover:border-white/[0.12] hover:bg-white/[0.05]"
        >
          <p className="text-xs text-white/40 font-medium uppercase tracking-wider">
            {stat.label}
          </p>
          <p className="text-lg sm:text-xl font-semibold text-white mt-1.5">
            {stat.value}
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: stat.trend === 'up' ? 0 : 180 }}
              className={`text-xs ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}
            >
              ↑
            </motion.span>
            <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
              {stat.change}%
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
