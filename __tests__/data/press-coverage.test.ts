import { pressArticles } from '../../src/data/press-coverage'

// Deterministic parser for the fixed "Month D, YYYY" display format —
// `new Date(string)` on non-ISO input is implementation-dependent and
// could make the ordering assertion flaky across runtimes.
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function parseDisplayDate(date: string): number | null {
  const match = /^([A-Za-z]+) (\d{1,2}), (\d{4})$/.exec(date)
  if (!match) return null
  const monthIndex = MONTHS.indexOf(match[1])
  if (monthIndex === -1) return null
  return Date.UTC(Number(match[3]), monthIndex, Number(match[2]))
}

describe('press coverage data', () => {
  it('has at least one article', () => {
    expect(pressArticles.length).toBeGreaterThan(0)
  })

  it('has unique ids', () => {
    const ids = pressArticles.map((a) => a.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has non-empty required fields on every article', () => {
    for (const article of pressArticles) {
      expect(article.headline.trim()).not.toBe('')
      expect(article.outlet.trim()).not.toBe('')
      expect(article.date.trim()).not.toBe('')
      expect(article.excerpt.trim()).not.toBe('')
    }
  })

  it('links every article to an external https URL', () => {
    for (const article of pressArticles) {
      expect(article.url).toMatch(/^https:\/\//)
    }
  })

  it('has "Month D, YYYY" dates ordered newest first', () => {
    const times = pressArticles.map((a) => parseDisplayDate(a.date))
    for (const time of times) {
      expect(time).not.toBeNull()
    }
    for (let i = 1; i < times.length; i++) {
      expect(times[i - 1]).toBeGreaterThanOrEqual(times[i]!)
    }
  })
})
