'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number
  color?: string
}

export function ProgressBar({ value, color = '#6366f1' }: ProgressBarProps) {
  return (
    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      />
    </div>
  )
}
