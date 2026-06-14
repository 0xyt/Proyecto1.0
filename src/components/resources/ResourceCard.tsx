'use client'

import { motion } from 'framer-motion'
import { Resource } from '@/types'

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      layout
      initial={{ opacity: 0, y: 15 } as const}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="group block rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-4 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-sm text-white/40 group-hover:bg-white/[0.1] transition-colors flex-shrink-0">
          {resource.isFavorite ? '★' : '⊡'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-white/80 truncate">{resource.name}</h3>
            <span className="text-xs text-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">↗</span>
          </div>
          <p className="text-xs text-white/40 mt-1 line-clamp-1">{resource.description}</p>
          <span className="inline-block mt-2 px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] text-white/30 uppercase tracking-wider">
            {resource.category}
          </span>
        </div>
      </div>
    </motion.a>
  )
}
