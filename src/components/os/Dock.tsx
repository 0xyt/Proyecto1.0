'use client'

import { motion } from 'framer-motion'
import { useOS } from '@/hooks/useOS'

const icons: Record<string, string> = {
  dashboard: '◉',
  projects: '⊞',
  resources: '⊡',
  stats: '◈',
  terminal: '⌘',
  profile: '◎',
}

export function Dock() {
  const { windows, toggleWindow, isWindowOpen } = useOS()

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl border border-white/[0.04] bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-black/40">
        {windows.map((w) => (
          <motion.button
            key={w.id}
            onClick={() => toggleWindow(w.id)}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`relative flex items-center justify-center w-12 h-12 rounded-xl text-lg transition-colors duration-200 ${
              isWindowOpen(w.id)
                ? 'bg-white/[0.1] text-white'
                : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
            }`}
          >
            <span className="select-none">{icons[w.id]}</span>
            {isWindowOpen(w.id) && (
              <motion.span
                layoutId="dock-indicator"
                className="absolute -bottom-1 w-1 h-1 rounded-full bg-white"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg bg-white/[0.08] backdrop-blur-xl text-xs text-white/70 whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 5 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
            >
              {w.title}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  )
}
