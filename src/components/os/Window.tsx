'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'
import { useOS } from '@/hooks/useOS'

interface WindowProps {
  id: string
  title: string
  icon: string
  children: ReactNode
  className?: string
}

const windowVariants = {
  initial: (id: string) => {
    const positions: Record<string, { x: number; y: number }> = {
      projects: { x: 0, y: 60 },
      resources: { x: 0, y: -60 },
      stats: { x: 60, y: 0 },
      terminal: { x: -60, y: 0 },
      profile: { x: 0, y: 60 },
    }
    const pos = positions[id] || { x: 0, y: 40 }
    return {
      opacity: 0,
      scale: 0.95,
      x: pos.x,
      y: pos.y,
    }
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    },
  },
  exit: (id: string) => {
    const positions: Record<string, { x: number; y: number }> = {
      projects: { x: 0, y: 40 },
      resources: { x: 0, y: -40 },
      stats: { x: 40, y: 0 },
      terminal: { x: -40, y: 0 },
      profile: { x: 0, y: 40 },
    }
    const pos = positions[id] || { x: 0, y: 30 }
    return {
      opacity: 0,
      scale: 0.95,
      x: pos.x,
      y: pos.y,
      transition: { duration: 0.2, ease: 'easeIn' as const },
    }
  },
} as const

export function Window({ id, title, icon, children, className = '' }: WindowProps) {
  const { isWindowOpen, closeWindow } = useOS()
  const open = isWindowOpen(id)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => closeWindow(id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            custom={id}
            variants={windowVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`relative w-full max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/[0.08] bg-black/70 backdrop-blur-2xl shadow-2xl shadow-black/50 ${className}`}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => closeWindow(id)}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors"
                  />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-white/50 select-none">{icon}</span>
                <span className="text-sm text-white/70 font-medium select-none">{title}</span>
              </div>
            </div>
            <div className="overflow-y-auto max-h-[calc(85vh-48px)] custom-scrollbar">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
