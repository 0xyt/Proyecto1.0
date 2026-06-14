'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'

export function TopBar() {
  const [time, setTime] = useState(new Date())
  const [battery] = useState(87)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <motion.span
            className="text-sm font-semibold text-white/90 tracking-wide select-none"
            whileHover={{ scale: 1.02 }}
          >
            OSCAR OS
          </motion.span>
          <span className="text-xs text-white/30 hidden sm:inline">
            —
          </span>
          <span className="text-xs text-white/40 hidden sm:inline">
            v1.0
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <div className="w-4 h-2.5 rounded-sm border border-white/20 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white/30 rounded-sm"
                initial={{ width: '0%' }}
                animate={{ width: `${battery}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span>{battery}%</span>
          </div>
          <span className="text-xs text-white/50 tabular-nums">
            {formatDate(time)}
          </span>
        </div>
      </div>
    </motion.header>
  )
}
