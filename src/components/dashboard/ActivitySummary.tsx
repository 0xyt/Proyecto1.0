'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const parseNum = (s: string) => parseFloat(s.replace(/[$,]/g, ''))
const extractSuffix = (s: string) => s.replace(/[\d,.]/g, '')

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
} as const

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' as const } },
} as const

export function ActivitySummary() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
    >
      {stats.map((stat) => {
        const num = parseNum(stat.value)
        const suffix = extractSuffix(stat.value)
        const prefix = stat.value.startsWith('$') ? '$' : ''

        return (
          <motion.div
            key={stat.label}
            variants={item}
            whileHover={{ y: -3, scale: 1.01 }}
            className="rounded-xl border border-white/[0.03] bg-white/[0.03] p-5 transition-all duration-200 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <p className="text-xs text-white/40 font-medium uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-lg sm:text-xl font-semibold text-white mt-1.5 tabular-nums">
              <AnimatedCounter to={num} suffix={suffix} prefix={prefix} decimals={suffix === '%' ? 2 : 0} />
            </p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className={`text-xs ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.trend === 'up' ? '↑' : '↓'}
              </span>
              <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}%
              </span>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
