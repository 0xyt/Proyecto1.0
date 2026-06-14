'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { resources } from '@/data/content'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StatusBadge } from '@/components/ui/StatusBadge'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
} as const

export function Widgets() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-black/20 p-6 hover:bg-white/[0.03] transition-all duration-200">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold text-white/80">Proyectos Recientes</h2>
          <span className="text-xs text-white/30">{projects.length} total</span>
        </div>
        <div className="space-y-4">
          {projects.slice(0, 4).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-4 group"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: project.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/70 truncate">{project.name}</span>
                  <StatusBadge status={project.status} />
                </div>
                <div className="mt-2">
                  <ProgressBar value={project.progress} color={project.color} />
                </div>
              </div>
              <span className="text-xs text-white/30 tabular-nums w-10 text-right">
                {project.progress}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-black/20 p-6 hover:bg-white/[0.03] transition-all duration-200">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-sm font-semibold text-white/80">Recursos Rápidos</h2>
          <span className="text-xs text-white/30">favoritos</span>
        </div>
        <div className="space-y-3">
          {resources.filter((r) => r.isFavorite).map((resource, i) => (
            <motion.a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-xs text-white/40 group-hover:bg-white/[0.1] transition-colors">
                ★
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/70 truncate">{resource.name}</p>
                <p className="text-xs text-white/30 truncate">{resource.description}</p>
              </div>
              <span className="text-xs text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
