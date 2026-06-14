'use client'

import { ReactNode } from 'react'
import { OSProvider } from '@/hooks/useOS'

export function Providers({ children }: { children: ReactNode }) {
  return <OSProvider>{children}</OSProvider>
}
