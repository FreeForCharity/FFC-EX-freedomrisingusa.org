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
    period: 'Fridays during Lent (Feb 20 – Apr 3, 2026)',
    location: fishFry.location,
    description: fishFry.description,
    details: fishFry.dates.map((d) => `${d.label} · ${d.time}`),
    // Completed for the year — no live ordering link. The event returns next Lent.
  },
]
