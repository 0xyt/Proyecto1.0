'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const cityFacts = [
  { label: 'Población', value: '1.6M+', desc: 'Municipio de Santa Cruz' },
  { label: 'Fundación', value: '1561', desc: '26 de febrero, Ñuflo de Chaves' },
  { label: 'Altitud', value: '416 m', desc: 'Llanos orientales de Bolivia' },
  { label: 'Clima', value: 'Tropical', desc: 'Promedio 25 °C todo el año' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
} as const

const factItem = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' as const } },
} as const

export function CitySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 0.1, 0.25], [60, 60, 0])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 0, 1])
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.95])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.8, 0.8, 0.3])
  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex items-center bg-[#050508]"
    >
      <motion.div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-indigo-500/10 blur-[120px]"
        style={{ opacity: glowOpacity }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.6, 0.2]) }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.08, 0.15, 0.15, 0.08]) }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.04]"
          style={{ rotate: ringRotate }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.03]"
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.02]"
          style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="text-[10px] text-white/30 font-mono tracking-[0.25em] uppercase mb-3"
          >
            Santa Cruz de la Sierra
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.32, 0.72, 0, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tight"
          >
            La ciudad que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              nunca duerme
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-sm text-white/30 mt-4 max-w-md leading-relaxed"
          >
            Fundada en 1561 por Ñuflo de Chaves, es la ciudad más poblada de Bolivia
            y el motor económico del país. Conocida por su clima tropical y su gente cálida.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-30px' }}
            className="grid grid-cols-2 gap-3 mt-8"
          >
            {cityFacts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={factItem}
                whileHover={{ y: -3, scale: 1.02 }}
                className="rounded-xl border border-white/[0.03] bg-white/[0.03] p-4 hover:bg-white/[0.06] transition-all duration-200"
              >
                <p className="text-lg font-semibold text-white">{fact.value}</p>
                <p className="text-xs text-white/50 mt-0.5 font-medium">{fact.label}</p>
                <p className="text-[10px] text-white/25 mt-0.5">{fact.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          style={{ y: imageY, rotate: imageRotate, scale: imageScale }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 0.6, 0.6, 0.2]) }}
          />
          <motion.div
            className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10"
            whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src="/Catedral.png"
              alt="Catedral de Santa Cruz de la Sierra"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 rounded-2xl ring-1 ring-white/[0.08] z-20 pointer-events-none"
            />
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border border-white/[0.04] pointer-events-none"
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
          />
          <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 rounded-full border border-white/[0.03] pointer-events-none"
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
          />
        </motion.div>
      </div>
    </section>
  )
}
