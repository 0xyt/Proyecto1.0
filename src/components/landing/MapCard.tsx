'use client'

import { motion } from 'framer-motion'

export function MapCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[260px] mx-auto"
    >
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 backdrop-blur-sm">
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-[#0d1b2a] via-[#1b2838] to-[#0d1b2a]">
          <svg
            viewBox="-60 -20 160 200"
            className="w-full h-full opacity-30"
            fill="none"
            stroke="white"
            strokeWidth="0.8"
          >
            <path d="M20 10 Q30 5 40 8 Q55 12 60 20 Q65 28 58 35 Q50 42 42 38 Q35 34 28 38 Q20 42 15 35 Q10 28 12 20 Q14 12 20 10Z" />
            <path d="M22 14 Q28 12 35 15 Q40 18 38 22 Q36 26 30 25 Q24 24 22 20 Q20 16 22 14Z" />
            <path d="M15 35 Q20 30 28 32 Q35 34 32 40 Q28 46 22 44 Q16 42 15 38 Q14 36 15 35Z" />
            <path d="M55 15 Q60 12 65 18 Q68 24 62 28 Q56 32 52 26 Q48 20 52 16 Q54 14 55 15Z" />
          </svg>
          <motion.div
            className="absolute"
            style={{ top: '52%', left: '48%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.4 }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-emerald-400/20 absolute -top-0.5 -left-0.5"
              animate={{ scale: [1, 2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-white/50 font-medium">Santa Cruz</p>
            <p className="text-[9px] text-white/25">Bolivia</p>
          </div>
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  )
}
