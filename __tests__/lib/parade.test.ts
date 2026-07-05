import { nextIndependenceDay } from '../../src/lib/parade'

describe('nextIndependenceDay', () => {
  it('counts down to July 4 of the current year before the holiday', () => {
    const timing = nextIndependenceDay(new Date(2026, 5, 24)) // June 24, 2026
    expect(timing.days).toBe(10)
    expect(timing.isToday).toBe(false)
    expect(timing.dateLabel).toContain('July 4, 2026')
    expect(timing.previousYear).toBe(2025)
    expect(timing.daysSincePrevious).toBe(355)
  })

  it('reports the parade day itself as today', () => {
    const timing = nextIndependenceDay(new Date(2026, 6, 4)) // July 4, 2026
    expect(timing.days).toBe(0)
    expect(timing.isToday).toBe(true)
    expect(timing.previousYear).toBe(2026)
    expect(timing.daysSincePrevious).toBe(0)
  })

  it('rolls over to next year after the holiday and tracks days since', () => {
    const timing = nextIndependenceDay(new Date(2026, 6, 5)) // July 5, 2026
    expect(timing.days).toBe(364)
    expect(timing.isToday).toBe(false)
    expect(timing.dateLabel).toContain('July 4, 2027')
    expect(timing.previousYear).toBe(2026)
    expect(timing.daysSincePrevious).toBe(1)
  })

  it('keeps counting days since the previous parade later in the month', () => {
    const timing = nextIndependenceDay(new Date(2026, 6, 18)) // July 18, 2026
    expect(timing.previousYear).toBe(2026)
    expect(timing.daysSincePrevious).toBe(14)
  })
})
