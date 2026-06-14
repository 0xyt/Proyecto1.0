'use client'

import { motion } from 'framer-motion'

const connections = [
  { x: 78, y: 18, label: 'Desarrollo', dot: '#6366f1', desc: 'React · Next.js · TypeScript' },
  { x: 22, y: 30, label: 'IA', dot: '#10b981', desc: 'Machine Learning · Computer Vision' },
  { x: 65, y: 65, label: 'Automatización', dot: '#06b6d4', desc: 'Workflows · Bots · Integrations' },
  { x: 15, y: 55, label: 'Aviación', dot: '#f59e0b', desc: 'Drones · Navigation · Systems' },
]

export function MissionControl() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050508] px-6 py-20 overflow-hidden">
      <div className="fixed bottom-6 right-6 z-40 pointer-events-none font-mono text-[10px] text-white/15 tracking-widest">
        04 · 04
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <span className="text-[10px] text-white/20 font-mono tracking-[0.25em] uppercase">
            Mission Control
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2 leading-[1.1]">
            Áreas de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300/60">
              enfoque
            </span>
          </h2>
          <div className="w-8 h-px bg-white/[0.06] mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                r="8"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
                animate={{ scale: [1, 1.4, 1] }}
              />
              <motion.circle
                cx="44"
                cy="48"
                r="12"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.15"
                strokeDasharray="1 3"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
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
                      strokeWidth="0.4"
                      strokeDasharray="1.5 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      transition={{ duration: 1, delay: 1 + i * 0.15, ease: 'easeInOut' }}
                      viewport={{ once: true }}
                    />
                    <motion.circle
                      cx={dx}
                      cy={dy}
                      r="2.5"
                      fill={conn.dot}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 + i * 0.15 }}
                      viewport={{ once: true }}
                    />
                  </g>
                )
              })}
            </svg>

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/[0.04] backdrop-blur-md rounded-xl px-4 py-2 border border-emerald-500/10 shadow-lg shadow-emerald-500/5"
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-emerald-300/80 font-mono tracking-wide">
                  Santa Cruz · Hub Central
                </span>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {connections.map((conn, i) => (
              <motion.div
                key={conn.label}
                initial={{ opacity: 0, x: -15, filter: 'blur(6px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.4, delay: 1.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.04)' }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
              >
                <motion.div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: conn.dot, boxShadow: `0 0 12px ${conn.dot}40` }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white/80">{conn.label}</p>
                  <p className="text-xs text-white/25 mt-0.5 truncate">{conn.desc}</p>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <motion.div
                    className="w-1 h-1 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <span className="text-[10px] font-mono text-emerald-400/70 tracking-wider">
                    ONLINE
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
