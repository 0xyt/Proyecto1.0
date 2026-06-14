'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { resources } from '@/data/content'
import { ResourceCard } from './ResourceCard'

const categories = ['Todos', 'Desarrollo', 'Diseño', 'Productividad']

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
} as const

export function ResourceCenter() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [showFavorites, setShowFavorites] = useState(false)

  const filtered = resources.filter((r) => {
    if (showFavorites && !r.isFavorite) return false
    if (activeCategory !== 'Todos' && r.category !== activeCategory) return false
    return true
  })

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">Centro de Recursos</h2>
          <p className="text-sm text-white/40 mt-1">
            {filtered.length} recursos disponibles
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-white/[0.1] text-white'
                : 'bg-white/[0.03] text-white/40 hover:text-white/60 hover:bg-white/[0.06]'
            }`}
          >
            {cat}
          </motion.button>
        ))}
        <div className="w-px h-5 bg-white/[0.06] mx-1" />
        <motion.button
          onClick={() => setShowFavorites(!showFavorites)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            showFavorites
              ? 'bg-white/[0.1] text-white'
              : 'bg-white/[0.03] text-white/40 hover:text-white/60 hover:bg-white/[0.06]'
          }`}
        >
          ★ Favoritos
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${showFavorites}`}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
