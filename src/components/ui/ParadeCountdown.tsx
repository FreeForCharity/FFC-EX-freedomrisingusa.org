'use client'

import { useEffect, useState } from 'react'

/**
 * Days remaining until the next Independence Day (July 4).
 * Computed on the client to avoid hydration mismatch and to stay correct
 * year over year without manual updates.
 */
function daysUntilNextJuly4(now: Date): { days: number; isToday: boolean } {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let target = new Date(now.getFullYear(), 6, 4) // month is 0-indexed; 6 = July
  if (today.getTime() > target.getTime()) {
    target = new Date(now.getFullYear() + 1, 6, 4)
  }
  const msPerDay = 1000 * 60 * 60 * 24
  const days = Math.round((target.getTime() - today.getTime()) / msPerDay)
  return { days, isToday: days === 0 }
}

export default function ParadeCountdown() {
  const [state, setState] = useState<{ days: number; isToday: boolean } | null>(null)

  useEffect(() => {
    // Compute on the client only, to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(daysUntilNextJuly4(new Date()))
  }, [])

  // Render nothing until mounted (prevents server/client hydration mismatch).
  if (!state) return null

  return (
    <div
      className="max-w-[800px] mx-auto mb-8 rounded-lg bg-[#BF0A30] text-white text-center px-6 py-4"
      id="lato-font"
      aria-live="polite"
    >
      {state.isToday ? (
        <p className="text-[20px] lg:text-[24px] font-[600]">
          🎆 The parade is today — Happy Independence Day! 🇺🇸
        </p>
      ) : (
        <p className="text-[20px] lg:text-[24px] font-[600]">
          Just <span className="text-[28px] lg:text-[32px]">{state.days}</span>{' '}
          {state.days === 1 ? 'day' : 'days'} until the parade!
        </p>
      )}
    </div>
  )
}
