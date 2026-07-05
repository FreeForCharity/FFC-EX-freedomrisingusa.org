import { test, expect, type Page } from '@playwright/test'
import { pressArticles } from '../src/data/press-coverage'

/**
 * In the News Page Tests (/in-the-news)
 *
 * These tests verify that:
 * 1. The dedicated /in-the-news page renders with its heading
 * 2. Every press article from src/data/press-coverage.ts is listed
 * 3. Article links open the original story in a new tab
 * 4. The page is reachable from the footer and links back home
 * 5. The page renders on a mobile viewport
 *
 * NOTE: The local preview server (`serve -s out`) uses SPA fallback, so a hard
 * navigation to /in-the-news returns the homepage shell. To match the suite's
 * existing convention (and how a visitor actually reaches the page), we navigate
 * from the homepage and click the footer link for client-side routing.
 */

async function gotoInTheNews(page: Page) {
  await page.goto('/')
  // Dismiss the cookie-consent banner if it appears. It is fixed to the bottom
  // and can overlap/intercept the footer link, especially on small viewports.
  // Waiting for the button to be clickable also confirms the app has hydrated,
  // so the footer click does client-side routing (which the SPA-fallback preview
  // needs) rather than a full navigation. We avoid `networkidle`, which never
  // settles in CI because of long-lived analytics requests.
  await page
    .getByRole('button', { name: 'Accept All' })
    .click({ timeout: 15000 })
    .catch(() => {})
  const footerLink = page.locator('footer a[href="/in-the-news"]').first()
  await footerLink.scrollIntoViewIfNeeded()
  await footerLink.click()
  await expect(page).toHaveURL(/\/in-the-news$/)
  await expect(page.getByRole('heading', { level: 1, name: 'In the News' })).toBeVisible()
}

test.describe('In the News Page', () => {
  test('should render the in-the-news page heading', async ({ page }) => {
    await gotoInTheNews(page)
  })

  test('should list every press article', async ({ page }) => {
    await gotoInTheNews(page)

    for (const article of pressArticles) {
      await expect(page.getByRole('heading', { name: article.headline })).toBeVisible()
    }
  })

  test('should link each article to the original story in a new tab', async ({ page }) => {
    await gotoInTheNews(page)

    for (const article of pressArticles) {
      const link = page.getByRole('link', { name: article.headline })
      await expect(link).toHaveAttribute('href', article.url)
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
    }
  })

  test('should link back to the homepage', async ({ page }) => {
    await gotoInTheNews(page)

    const backLink = page.getByRole('link', { name: '← Back to Home' })
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/')
  })

  test('should be reachable from the footer', async ({ page }) => {
    // gotoInTheNews navigates via the footer link (dismissing the cookie
    // banner first), so it doubles as the footer-reachability check and keeps
    // navigation consistent with the other tests.
    await gotoInTheNews(page)
  })

  test('should render on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await gotoInTheNews(page)

    await expect(page.getByRole('heading', { name: pressArticles[0].headline })).toBeVisible()
  })

  test('should be reachable from the desktop header navigation', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('button', { name: 'Accept All' })
      .click({ timeout: 15000 })
      .catch(() => {})

    const navLink = page.locator('header nav a[href="/in-the-news"]').first()
    await expect(navLink).toBeVisible()
    await navLink.click()
    await expect(page).toHaveURL(/\/in-the-news$/)
    await expect(page.getByRole('heading', { level: 1, name: 'In the News' })).toBeVisible()
  })

  test('should be reachable from the mobile header menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    await page
      .getByRole('button', { name: 'Accept All' })
      .click({ timeout: 15000 })
      .catch(() => {})

    await page.getByRole('button', { name: 'Open menu' }).click()
    // The desktop nav renders the same link but is display-hidden on mobile,
    // so filter to the visible one inside the opened mobile menu.
    const mobileNavLink = page.locator('header a[href="/in-the-news"]:visible').first()
    await expect(mobileNavLink).toBeVisible()
    await mobileNavLink.click()
    await expect(page).toHaveURL(/\/in-the-news$/)
    await expect(page.getByRole('heading', { level: 1, name: 'In the News' })).toBeVisible()
  })
})

test.describe('Home Page News Teaser', () => {
  test('should show the latest press headlines with a link to full coverage', async ({ page }) => {
    await page.goto('/')
    await page
      .getByRole('button', { name: 'Accept All' })
      .click({ timeout: 15000 })
      .catch(() => {})

    const newsSection = page.locator('#news')
    await newsSection.scrollIntoViewIfNeeded()
    await expect(newsSection).toBeVisible()

    // The teaser features the newest articles from the shared data file.
    for (const article of pressArticles.slice(0, 3)) {
      await expect(newsSection.getByRole('heading', { name: article.headline })).toBeVisible()
    }

    const seeAll = newsSection.getByRole('link', { name: 'See All Press Coverage' })
    await expect(seeAll).toBeVisible()
    await seeAll.click()
    await expect(page).toHaveURL(/\/in-the-news$/)
    await expect(page.getByRole('heading', { level: 1, name: 'In the News' })).toBeVisible()
  })
})
