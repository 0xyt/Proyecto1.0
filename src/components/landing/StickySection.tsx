'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    tag: 'Construyendo',
    title: 'Productos digitales',
    desc: 'Desde Santa Cruz de la Sierra, Bolivia, creamos software con estándares globales.',
  },
  {
    tag: 'Automatizando',
    title: 'Procesos inteligentes',
    desc: 'Integraciones, bots y flujos que transforman la manera de trabajar.',
  },
  {
    tag: 'Explorando',
    title: 'IA + Aviación',
    desc: 'Dos pasiones convergentes: inteligencia artificial y tecnología aeronáutica.',
  },
]

export function StickySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 2])

  const step0op = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0, 1, 1, 0])
  const step0y = useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [12, 0, 0, -6])

  const step1op = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.58], [0, 1, 1, 0])
  const step1y = useTransform(scrollYProgress, [0.25, 0.35, 0.5, 0.58], [12, 0, 0, -6])

  const step2op = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 1], [0, 1, 1, 1])
  const step2y = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 1], [12, 0, 0, 0])

  const glowIndices = [0, 1, 2] as const
  const glowValues = glowIndices.map(
    (i) => useTransform(
      scrollYProgress,
      [i * 0.3, i * 0.3 + 0.15, (i + 1) * 0.3 - 0.05],
      [0.2, 0.6, 0.2],
    ),
  )

  return (
    <section ref={sectionRef} className="relative h-[400vh]">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]"
          style={{ opacity: glowValues[0] }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"
          style={{ opacity: glowValues[1] }}
        />
      </div>

      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10" style={{ willChange: 'transform' }}>
            {steps.map((step, i) => {
              const opacities = [step0op, step1op, step2op]
              const ys = [step0y, step1y, step2y]

              return (
                <motion.div
                  key={step.tag}
                  style={{
                    opacity: opacities[i],
                    y: ys[i],
                    willChange: 'transform, opacity',
                  }}
                  className="absolute top-0 left-0 right-0"
                >
                  <span className="text-[10px] text-white/30 font-mono tracking-[0.2em] uppercase">
                    {step.tag}
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 leading-[1.1] tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-sm text-white/30 mt-4 max-w-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              viewport={{ once: true }}
              className="mt-52 flex flex-wrap gap-2"
            >
              {['Desarrollo Web', 'IA', 'Automatización', 'Aviación'].map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-lg bg-white/[0.03] text-xs text-white/40"
                >
                  {cat}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            style={{ y: imageY, rotate: imageRotate, willChange: 'transform' }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-cyan-500/15 blur-2xl"
              style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.5, 0.5, 0.1]) }}
            />
            <div
              className="relative w-full max-w-sm aspect-[3/4] overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <img
                src="/Catedral.png"
                alt="Catedral de Santa Cruz de la Sierra"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
