'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { terminalCommands } from '@/data/content'

export function VisualTerminal() {
  const [input, setInput] = useState('')
  const [logs, setLogs] = useState(terminalCommands.slice(0, 3))
  const [isLoading, setIsLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  const handleCommand = (value: string) => {
    const cmd = value.trim().toLowerCase()
    const found = terminalCommands.find((c) => c.command.startsWith(cmd))

    if (found) {
      setIsLoading(true)
      setTimeout(() => {
        setLogs((prev) => [...prev, found])
        setIsLoading(false)
      }, 400)
    } else if (cmd === 'clear') {
      setLogs([])
    } else if (cmd === 'help') {
      const helpOutput = `Comandos disponibles:\n  ${terminalCommands.map((c) => c.command).join('\n  ')}\n  clear — limpiar terminal\n  help — mostrar ayuda`
      setLogs((prev) => [
        ...prev,
        {
          command: cmd,
          output: helpOutput,
          timestamp: new Date(),
        },
      ])
    } else if (cmd) {
      setLogs((prev) => [
        ...prev,
        {
          command: cmd,
          output: `bash: ${cmd}: comando no encontrado`,
          timestamp: new Date(),
        },
      ])
    }
    setInput('')
  }

  return (
    <div className="p-6 font-mono">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-white/40">oscar@dev — ~/oscar-os</span>
      </div>

      <div className="space-y-2 mb-4 max-h-60 overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div
              key={`${log.command}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 text-xs">➜</span>
                <span className="text-white/50 text-xs">~</span>
                <span className="text-white/80 text-xs">{log.command}</span>
              </div>
              <pre className="text-xs text-white/50 pl-5 leading-relaxed whitespace-pre-wrap">
                {log.output}
              </pre>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 pl-5"
          >
            <span className="text-xs text-white/30 animate-pulse">Ejecutando</span>
            <motion.span
              className="text-xs text-white/30"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.div>
        )}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCommand(input)
        }}
        className="flex items-center gap-2 border-t border-white/[0.06] pt-4"
      >
        <span className="text-emerald-400 text-xs">➜</span>
        <span className="text-white/50 text-xs">~</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-xs text-white/80 placeholder-white/20"
          placeholder="Escribe un comando (help para ayuda)..."
          autoFocus
        />
      </form>
    </div>
  )
}
