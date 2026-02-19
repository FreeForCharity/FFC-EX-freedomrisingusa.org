import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parade Brief - 2026 Central Pennsylvania Independence Day Parade',
  description:
    'View the 2026 Central Pennsylvania Independence Day Parade brief including event overview, schedule, participant categories, safety requirements, and volunteer opportunities.',
}

export default function ParadeBriefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
