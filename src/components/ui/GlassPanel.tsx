'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  className?: string
}

export function GlassPanel({ children, className = '', ...props }: GlassPanelProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
