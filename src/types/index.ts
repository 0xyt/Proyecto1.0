export interface WindowState {
  id: string
  title: string
  icon: string
  isOpen: boolean
  order: number
}

export interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'completed' | 'paused' | 'planning'
  progress: number
  techs: string[]
  color: string
}

export interface Resource {
  id: string
  name: string
  description: string
  url: string
  category: string
  isFavorite: boolean
}

export interface StatItem {
  label: string
  value: string
  change: number
  trend: 'up' | 'down'
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface CommandLog {
  command: string
  output: string
  timestamp: Date
}
