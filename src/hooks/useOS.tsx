'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { WindowState } from '@/types'

interface OSContextType {
  windows: WindowState[]
  toggleWindow: (id: string) => void
  closeWindow: (id: string) => void
  isWindowOpen: (id: string) => boolean
}

const defaultWindows: WindowState[] = [
  { id: 'dashboard', title: 'Dashboard', icon: '◉', isOpen: true, order: 0 },
  { id: 'projects', title: 'Proyectos', icon: '⊞', isOpen: false, order: 1 },
  { id: 'resources', title: 'Recursos', icon: '⊡', isOpen: false, order: 2 },
  { id: 'stats', title: 'Estadísticas', icon: '◈', isOpen: false, order: 3 },
  { id: 'terminal', title: 'Terminal', icon: '⌘', isOpen: false, order: 4 },
  { id: 'profile', title: 'Perfil', icon: '◎', isOpen: false, order: 5 },
]

const OSContext = createContext<OSContextType | null>(null)

export function OSProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>(defaultWindows)

  const toggleWindow = useCallback((id: string) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, isOpen: !w.isOpen } : w
      )
    )
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows(prev =>
      prev.map(w => (w.id === id ? { ...w, isOpen: false } : w))
    )
  }, [])

  const isWindowOpen = useCallback(
    (id: string) => windows.find(w => w.id === id)?.isOpen ?? false,
    [windows]
  )

  return (
    <OSContext.Provider value={{ windows, toggleWindow, closeWindow, isWindowOpen }}>
      {children}
    </OSContext.Provider>
  )
}

export function useOS() {
  const context = useContext(OSContext)
  if (!context) throw new Error('useOS must be used within an OSProvider')
  return context
}
