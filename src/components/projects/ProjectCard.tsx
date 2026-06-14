'use client'

import { motion } from 'framer-motion'
import { Project } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ProgressBar } from '@/components/ui/ProgressBar'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 } as const}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group rounded-2xl border border-white/[0.03] bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
          style={{ backgroundColor: `${project.color}20` }}
        >
          <span style={{ color: project.color }}>⊞</span>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <h3 className="text-base font-semibold text-white mb-1.5">{project.name}</h3>
      <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <ProgressBar value={project.progress} color={project.color} />
          <span className="text-xs text-white/30 tabular-nums w-9 text-right">
            {project.progress}%
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/[0.04] text-xs text-white/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
