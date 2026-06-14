'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

const modules = [
  { label: 'Development', desc: 'React · Next.js · TypeScript' },
  { label: 'AI', desc: 'Machine Learning · Computer Vision' },
  { label: 'Automation', desc: 'Workflows · Bots · Integration' },
  { label: 'Aviation', desc: 'Drones · Navigation · Systems' },
]

export function SystemInitSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const imageY = useTransform(scrollYProgress, [0.4, 0.9], ['100%', '2%'])
  const imageOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.9], [0, 1, 1])

  const headerReveal = useTransform(scrollYProgress, [0, 0.08], [0, 100])
  const headerMask = useMotionTemplate`linear-gradient(to right, white ${headerReveal}%, transparent ${headerReveal}%)`

  const subtitleReveal = useTransform(scrollYProgress, [0.7, 0.85], [0, 100])
  const subtitleMask = useMotionTemplate`linear-gradient(to right, white ${subtitleReveal}%, transparent ${subtitleReveal}%)`

  const catedralGlow = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 1])

  const moduleStates = modules.map((_, i) => {
    const start = 0.1 + i * 0.08
    const end = start + 0.06
    const baseFilter = useTransform(scrollYProgress, (v: number) => {
      const p = Math.max(0, Math.min(1, (v - start) / (end - start)))
      return `blur(${(1 - p) * 6}px)`
    })
    return {
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [8, 0]),
      filter: baseFilter,
      active: useTransform(scrollYProgress, [end - 0.02, end + 0.04], [0, 1]),
    }
  })

  const acentosReveal = useTransform(scrollYProgress, [0.7, 0.95], [0, 100])
  const acentosMask = useMotionTemplate`linear-gradient(to right, white ${acentosReveal}%, transparent ${acentosReveal}%)`

  return (
    <section ref={sectionRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-500/8 blur-[120px]"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.2]) }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[120px]"
            style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.5, 0.2]) }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              style={{ WebkitMaskImage: headerMask, maskImage: headerMask }}
              className="text-xs text-white/30 font-mono tracking-[0.25em] uppercase mb-8"
            >
              INITIALIZING SYSTEM...
            </motion.p>

            <div className="space-y-5">
              {modules.map((mod, i) => {
                const { opacity, y: yVal, active } = moduleStates[i]

                return (
                  <motion.div
                    key={mod.label}
                    style={{ opacity, y: yVal }}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: useTransform(active, [0, 1], [
                            'rgba(255,255,255,0.15)',
                            '#10b981',
                          ]),
                          boxShadow: useTransform(active, [0, 1], [
                            '0 0 0px rgba(16,185,129,0)',
                            '0 0 8px rgba(16,185,129,0.5)',
                          ]),
                        }}
                      />
                      <motion.span
                        className="text-base sm:text-lg font-medium"
                        style={{
                          color: useTransform(active, [0, 1], [
                            'rgba(255,255,255,0.4)',
                            'rgba(255,255,255,0.9)',
                          ]),
                        }}
                      >
                        {mod.label}
                      </motion.span>
                    </div>
                    <motion.p
                      className="text-xs ml-7"
                      style={{
                        color: useTransform(active, [0, 1], [
                          'rgba(255,255,255,0.15)',
                          'rgba(255,255,255,0.3)',
                        ]),
                      }}
                    >
                      {mod.desc}
                    </motion.p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              style={{ WebkitMaskImage: subtitleMask, maskImage: subtitleMask }}
              className="mt-16"
            >
              <motion.p
                className="text-[10px] text-white/20 font-mono tracking-[0.25em] uppercase mb-2"
                style={{ opacity: useTransform(scrollYProgress, [0.7, 0.8], [0, 1]) }}
              >
                FROM
              </motion.p>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-[1.1]"
                style={{ opacity: useTransform(scrollYProgress, [0.75, 0.88], [0, 1]) }}
              >
                Santa Cruz
                <br />
                <span className="text-white/50 font-light">de la Sierra, Bolivia</span>
              </motion.h2>
            </motion.div>

            <motion.div
              style={{ WebkitMaskImage: acentosMask, maskImage: acentosMask }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {['Desarrollo Web', 'IA', 'Automatización', 'Aviación'].map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-[10px] text-white/30 tracking-wide"
                >
                  {cat}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end h-[70vh]"
            style={{ y: imageY, opacity: imageOpacity, willChange: 'transform' }}
          >
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl"
              style={{ opacity: catedralGlow }}
            />
            <div
              className="relative w-full max-w-sm h-full flex items-end"
              style={{ willChange: 'transform' }}
            >
              <img
                src="/Catedral.png"
                alt="Catedral Metropolitana de Santa Cruz"
                className="w-full h-auto max-h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
