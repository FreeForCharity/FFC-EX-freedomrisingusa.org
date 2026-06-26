export type ParadeTiming = {
  /** Whole days until the next July 4 (0 on the day itself). */
  days: number
  isToday: boolean
  /** Full date label for the next July 4, e.g. "Saturday, July 4, 2026". */
  dateLabel: string
}

/**
 * Timing for the next Independence Day (July 4) relative to `now`.
 *
 * Day math uses UTC date-only timestamps so it is unaffected by daylight-saving
 * transitions (the gap between two local midnights can be 23 or 25 hours, which
 * would otherwise produce an off-by-one count). The date label is likewise
 * formatted in UTC so it always reads as July 4 regardless of the viewer's zone.
 */
export function nextIndependenceDay(now: Date = new Date()): ParadeTiming {
  const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  let year = now.getFullYear()
  let targetUTC = Date.UTC(year, 6, 4) // month index 6 = July
  if (todayUTC > targetUTC) {
    year += 1
    targetUTC = Date.UTC(year, 6, 4)
  }
  const days = Math.round((targetUTC - todayUTC) / 86_400_000)
  const dateLabel = new Date(targetUTC).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
  return { days, isToday: days === 0, dateLabel }
}
