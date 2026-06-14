'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import { ProjectCard } from './ProjectCard'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
} as const

export function ProjectsPanel() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">Proyectos</h2>
          <p className="text-sm text-white/40 mt-1">
            {projects.length} proyectos en total
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 rounded-xl bg-white/[0.05] text-white/70 text-sm font-medium hover:bg-white/[0.1] transition-colors"
        >
          + Nuevo
        </motion.button>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  )
}
