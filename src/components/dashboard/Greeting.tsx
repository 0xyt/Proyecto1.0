'use client'

import { motion } from 'framer-motion'
import { getGreeting } from '@/lib/utils'

export function Greeting() {
  const greeting = getGreeting()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <motion.span
        className="text-xs text-white/40 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        $ whoami
      </motion.span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-2 leading-tight">
        {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">Oscar</span>
      </h1>
      <p className="text-base sm:text-lg text-white/40 mt-2 font-light">
        Bienvenido a tu sistema operativo personal.
      </p>
    </motion.div>
  )
}
