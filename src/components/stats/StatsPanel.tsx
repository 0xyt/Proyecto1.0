'use client'

import { motion } from 'framer-motion'
import { stats } from '@/data/content'
import { StatChart } from './StatChart'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
} as const

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
} as const

export function StatsPanel() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white">Estadísticas</h2>
        <p className="text-sm text-white/40 mt-1">
          Métricas y rendimiento del sistema
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-6">Resumen de Métricas</h3>
          <div className="space-y-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <motion.div
                    className={`w-2 h-2 rounded-full ${stat.trend === 'up' ? 'bg-emerald-400' : 'bg-red-400'}`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-white/90">{stat.value}</span>
                  <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {stat.trend === 'up' ? '+' : '-'}{stat.change}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-6">Tendencia</h3>
          <StatChart />
          <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-white/[0.03]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <span className="text-xs text-white/40">Este mes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/10" />
              <span className="text-xs text-white/40">Mes anterior</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
