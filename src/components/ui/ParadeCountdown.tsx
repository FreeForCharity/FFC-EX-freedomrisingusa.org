'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { nextIndependenceDay, type ParadeTiming } from '@/lib/parade'

// For this many days after July 4, celebrate the parade that just happened
// (with a link to press coverage) instead of counting down to next year.
export const POST_PARADE_WINDOW_DAYS = 14

export default function ParadeCountdown() {
  const [timing, setTiming] = useState<ParadeTiming | null>(null)

  useEffect(() => {
    // Compute on the client only, to avoid a server/client hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTiming(nextIndependenceDay())
  }, [])

  // Render nothing until mounted (prevents server/client hydration mismatch).
  if (!timing) return null

  const justHappened =
    !timing.isToday &&
    timing.daysSincePrevious >= 1 &&
    timing.daysSincePrevious <= POST_PARADE_WINDOW_DAYS

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
      ) : justHappened ? (
        <p className="text-[20px] lg:text-[24px] font-[600]">
          🎆 Thank you for celebrating with us — the {timing.previousYear} parade{' '}
          <Link href="/in-the-news" className="underline hover:text-[#F5C045] transition-colors">
            made the news
          </Link>
          !
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
