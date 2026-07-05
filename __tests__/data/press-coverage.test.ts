import { pressArticles } from '../../src/data/press-coverage'

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

  it('has parseable dates ordered newest first', () => {
    const times = pressArticles.map((a) => new Date(a.date).getTime())
    for (const time of times) {
      expect(Number.isNaN(time)).toBe(false)
    }
    for (let i = 1; i < times.length; i++) {
      expect(times[i - 1]).toBeGreaterThanOrEqual(times[i])
    }
  })
})
