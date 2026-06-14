'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/content'
import { ProgressBar } from '@/components/ui/ProgressBar'

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

export function ProfilePanel() {
  return (
    <div className="p-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto space-y-6"
      >
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/[0.04] flex items-center justify-center text-3xl select-none flex-shrink-0"
          >
            ◎
          </motion.div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold text-white">Oscar</h2>
            <p className="text-sm text-white/40 mt-1">Full-Stack Developer & UI/UX Designer</p>
            <p className="text-xs text-white/30 mt-3 max-w-md leading-relaxed">
              Creando experiencias digitales con enfoque en diseño premium, rendimiento
              y usabilidad. Especializado en React, TypeScript y sistemas de diseño.
            </p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
              {['Frontend', 'Backend', 'Design', 'DevOps'].map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] text-xs text-white/50"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-6">Habilidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">{skill.name}</span>
                  <span className="text-xs text-white/30">{skill.level}%</span>
                </div>
                <ProgressBar value={skill.level} color="#6366f1" />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="rounded-2xl border border-white/[0.03] bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white/80 mb-4">Experiencia</h3>
          <div className="space-y-4">
            {[
              {
                role: 'Senior Frontend Engineer',
                company: 'TechCorp',
                period: '2023 — Presente',
                description: 'Liderando el desarrollo de plataformas SaaS con React y TypeScript.',
              },
              {
                role: 'Full-Stack Developer',
                company: 'StartupXYZ',
                period: '2021 — 2023',
                description: 'Desarrollo de aplicaciones web full-stack con Node.js y React.',
              },
              {
                role: 'UI Designer & Developer',
                company: 'AgencyCo',
                period: '2019 — 2021',
                description: 'Diseño y desarrollo de interfaces para clientes empresariales.',
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative pl-5 border-l border-white/[0.03] group hover:border-white/[0.08] transition-colors"
              >
                <div className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                <h4 className="text-sm font-medium text-white/80">{exp.role}</h4>
                <p className="text-xs text-white/50 mt-0.5">{exp.company}</p>
                <p className="text-xs text-white/30 mt-1">{exp.description}</p>
                <span className="text-[10px] text-white/20 mt-1 block">{exp.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
