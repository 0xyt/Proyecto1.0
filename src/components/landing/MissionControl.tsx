'use client'

import { motion } from 'framer-motion'

const connections = [
  { x: 78, y: 18, label: 'Desarrollo', dot: '#6366f1' },
  { x: 22, y: 30, label: 'IA', dot: '#10b981' },
  { x: 65, y: 65, label: 'Automatización', dot: '#06b6d4' },
  { x: 15, y: 55, label: 'Aviación', dot: '#f59e0b' },
]

export function MissionControl() {
  return (
    <section className="min-h-screen flex items-center bg-[#050508] px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[10px] text-white/20 font-mono tracking-[0.25em] uppercase">
            Mission Control
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
            Áreas de enfoque
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square max-w-md mx-auto"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M25 15 L55 5 L72 18 L78 35 L72 55 L60 70 L45 80 L30 78 L18 68 L12 50 L10 32 L15 22 Z"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="44"
                cy="48"
                r="3"
                fill="#10b981"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx="44"
                cy="48"
                r="6"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                animate={{ scale: [1, 1.3, 1] }}
              />

              {connections.map((conn, i) => {
                const sx = 44, sy = 48
                const dx = (conn.x / 100) * 100
                const dy = (conn.y / 100) * 100

                return (
                  <g key={conn.label}>
                    <motion.line
                      x1={sx}
                      y1={sy}
                      x2={dx}
                      y2={dy}
                      stroke={conn.dot}
                      strokeWidth="0.3"
                      strokeDasharray="1 2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
                      viewport={{ once: true }}
                    />
                    <motion.circle
                      cx={dx}
                      cy={dy}
                      r="2.5"
                      fill={conn.dot}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + i * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </g>
                )
              })}
            </svg>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/[0.03] backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/[0.04]"
            >
              <span className="text-[10px] text-white/40 font-mono tracking-wide">
                Santa Cruz · Hub Central
              </span>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {connections.map((conn, i) => (
              <motion.div
                key={conn.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: conn.dot }}
                />
                <div>
                  <p className="text-sm text-white/70">{conn.label}</p>
                  <p className="text-xs text-white/25 mt-0.5">
                    Conexión activa — latencia 12ms
                  </p>
                </div>
                <motion.span
                  className="ml-auto text-[10px] text-white/20 font-mono"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  ● ONLINE
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
