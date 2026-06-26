'use client'

import { useEffect, useState } from 'react'
import { nextIndependenceDay } from '@/lib/parade'

/**
 * Renders the full date of the next July 4 (e.g. "Saturday, July 4, 2026"),
 * derived on the client so it stays accurate year over year without manual
 * edits. Falls back to a year-agnostic label for the server render so there is
 * no hydration mismatch.
 */
export default function ParadeDate({ fallback = 'July 4th' }: { fallback?: string }) {
  const [label, setLabel] = useState(fallback)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLabel(nextIndependenceDay().dateLabel)
  }, [])

  return <>{label}</>
}
