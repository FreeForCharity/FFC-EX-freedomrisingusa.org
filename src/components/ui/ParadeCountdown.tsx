'use client'

import { useEffect, useState } from 'react'
import { nextIndependenceDay, type ParadeTiming } from '@/lib/parade'

export default function ParadeCountdown() {
  const [timing, setTiming] = useState<ParadeTiming | null>(null)

  useEffect(() => {
    // Compute on the client only, to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTiming(nextIndependenceDay())
  }, [])

  // Render nothing until mounted (prevents server/client hydration mismatch).
  if (!timing) return null

  return (
    <div
      className="max-w-[800px] mx-auto mb-8 rounded-lg bg-[#BF0A30] text-white text-center px-6 py-4"
      id="lato-font"
      aria-live="polite"
    >
      {timing.isToday ? (
        <p className="text-[20px] lg:text-[24px] font-[600]">
          🎆 The parade is today — Happy Independence Day! 🇺🇸
        </p>
      ) : (
        <p className="text-[20px] lg:text-[24px] font-[600]">
          Just <span className="text-[28px] lg:text-[32px]">{timing.days}</span>{' '}
          {timing.days === 1 ? 'day' : 'days'} until the parade!
        </p>
      )}
    </div>
  )
}
