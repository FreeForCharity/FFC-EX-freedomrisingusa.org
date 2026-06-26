import { fishFry } from './fundraising-events'

export type FundraiserStatus = 'active' | 'completed' | 'upcoming'

export type Fundraiser = {
  id: string
  title: string
  status: FundraiserStatus
  /** Human-readable timeframe, e.g. "Year-round" or "Feb–Apr 2026". */
  period: string
  location?: string
  description: string
  /** Optional bullet details (e.g. the schedule of a recurring event). */
  details?: string[]
  /** Call-to-action link. Omit for completed fundraisers with no live action. */
  link?: string
  linkLabel?: string
}

// Derive the fish-fry timeframe from its schedule so the label can never drift
// out of sync with fundraising-events.ts (e.g. when next year's dates change).
const fishFryDates = fishFry.dates
const stripWeekday = (label: string) => label.replace(/^\w+,\s*/, '')
const fishFryPeriod =
  fishFryDates.length > 0
    ? `Fridays during Lent (${stripWeekday(fishFryDates[0].label)} – ${stripWeekday(
        fishFryDates[fishFryDates.length - 1].label
      )})`
    : 'Fridays during Lent'

// All fundraising efforts, newest/active first. Add new fundraisers here.
export const fundraisers: Fundraiser[] = [
  {
    id: 'independence-day-parade',
    title: 'Independence Day Parade Fund',
    status: 'active',
    period: 'Year-round',
    location: 'State College, PA',
    description:
      'Help us produce the annual Central Pennsylvania Independence Day Parade. Donations support marching bands, floats, road permits, insurance, and the volunteers who make the day possible.',
    link: '/#donate',
    linkLabel: 'Donate to the Parade',
  },
  {
    id: 'lent-friday-fish-fry',
    title: fishFry.title,
    status: 'completed',
    period: fishFryPeriod,
    location: fishFry.location,
    description: fishFry.description,
    details: fishFry.dates.map((d) => `${d.label} · ${d.time}`),
    // Completed for the year — no live ordering link. The event returns next Lent.
  },
]
