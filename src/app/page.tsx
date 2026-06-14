'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TopBar } from '@/components/os/TopBar'
import { Dock } from '@/components/os/Dock'
import { Window } from '@/components/os/Window'
import { Dashboard } from '@/components/dashboard/Dashboard'
import { ProjectsPanel } from '@/components/projects/ProjectsPanel'
import { ResourceCenter } from '@/components/resources/ResourceCenter'
import { StatsPanel } from '@/components/stats/StatsPanel'
import { VisualTerminal } from '@/components/terminal/VisualTerminal'
import { ProfilePanel } from '@/components/profile/ProfilePanel'
import { useOS } from '@/hooks/useOS'

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050508]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        className="text-center"
      >
        <motion.div
          className="text-5xl mb-4 select-none"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ◉
        </motion.div>
        <motion.h1
          className="text-2xl font-semibold text-white/80 tracking-widest"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          OSCAR OS
        </motion.h1>
        <motion.p
          className="text-xs text-white/20 mt-4 font-mono"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Inicializando sistema...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-500/8 blur-[120px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}

function OSContent() {
  const { windows, isWindowOpen } = useOS()

  return (
    <>
      <BackgroundEffects />
      <TopBar />
      <Dashboard />
      <Dock />

      <Window id="projects" title="Proyectos" icon="⊞">
        <ProjectsPanel />
      </Window>

      <Window id="resources" title="Centro de Recursos" icon="⊡">
        <ResourceCenter />
      </Window>

      <Window id="stats" title="Estadísticas" icon="◈">
        <StatsPanel />
      </Window>

      <Window id="terminal" title="Terminal" icon="⌘">
        <VisualTerminal />
      </Window>

      <Window id="profile" title="Perfil" icon="◎" className="max-w-2xl">
        <ProfilePanel />
      </Window>
    </>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" />
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen relative"
        >
          <OSContent />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
