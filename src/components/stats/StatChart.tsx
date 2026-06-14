'use client'

import { motion } from 'framer-motion'

const data = [
  { label: 'Ene', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 38 },
  { label: 'Abr', value: 55 },
  { label: 'May', value: 48 },
  { label: 'Jun', value: 62 },
  { label: 'Jul', value: 58 },
  { label: 'Ago', value: 72 },
  { label: 'Sep', value: 68 },
  { label: 'Oct', value: 85 },
  { label: 'Nov', value: 78 },
  { label: 'Dic', value: 92 },
]

const prevYear = [
  25, 38, 32, 45, 42, 50, 48, 58, 52, 65, 60, 70,
]

export function StatChart() {
  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <div className="flex items-end justify-between gap-1.5 h-40">
      {data.map((point, i) => {
        const heightPercent = (point.value / maxValue) * 100
        const prevHeight = (prevYear[i] / maxValue) * 100

        return (
          <div key={point.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              className="w-full rounded-sm bg-white/30 relative overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: `${heightPercent}%` }}
              transition={{
                duration: 0.6,
                delay: 0.05 * i,
                ease: [0.32, 0.72, 0, 1],
              }}
              style={{ minHeight: '4px' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + 0.05 * i }}
              />
            </motion.div>
            <motion.div
              className="w-full rounded-sm bg-white/10"
              initial={{ height: 0 }}
              animate={{ height: `${prevHeight}%` }}
              transition={{
                duration: 0.6,
                delay: 0.08 * i,
                ease: [0.32, 0.72, 0, 1],
              }}
              style={{ minHeight: '2px' }}
            />
            <span className="text-[10px] text-white/30 mt-1">{point.label}</span>
          </div>
        )
      })}
    </div>
  )
}
