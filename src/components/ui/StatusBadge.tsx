'use client'

import { motion } from 'framer-motion'

interface StatusBadgeProps {
  status: 'active' | 'completed' | 'paused' | 'planning'
}

const statusConfig = {
  active: { label: 'Activo', color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
  completed: { label: 'Completado', color: '#6366f1', bg: 'rgba(99,102,241,0.12)' },
  paused: { label: 'En pausa', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  planning: { label: 'Planeando', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)' },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ backgroundColor: config.bg, color: config.color }}
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: config.color }}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {config.label}
    </motion.span>
  )
}
