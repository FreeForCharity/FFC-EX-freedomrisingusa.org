import type { Metadata } from 'next'
import ParadeBriefClient from './ParadeBriefClient'

export const metadata: Metadata = {
  title: '2026 Parade Brief | Freedom Rising USA',
  description:
    '2026 Central Pennsylvania Independence Day Parade information including schedule, participant categories, safety requirements, and volunteer opportunities.',
}

export default function ParadeBriefPage() {
  return <ParadeBriefClient />
}
