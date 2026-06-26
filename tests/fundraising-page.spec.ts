import { test, expect, type Page } from '@playwright/test'

/**
 * Fundraising Page Tests (/fundraising)
 *
 * These tests verify that:
 * 1. The dedicated /fundraising page renders with its heading
 * 2. Both fundraisers (active parade fund + completed fish fry) are listed
 * 3. Status badges and the parade donate CTA render correctly
 * 4. The page is reachable from the footer and links back home
 * 5. The page renders on a mobile viewport
 *
 * NOTE: The local preview server (`serve -s out`) uses SPA fallback, so a hard
 * navigation to /fundraising returns the homepage shell. To match the suite's
 * existing convention (and how a visitor actually reaches the page), we navigate
 * from the homepage and click the footer link for client-side routing.
 */

async function gotoFundraising(page: Page) {
  await page.goto('/')
  // Wait for the app to settle/hydrate so the click triggers client-side routing
  // rather than a full navigation (which the SPA-fallback preview can't resolve).
  await page.waitForLoadState('networkidle')
  // Dismiss the cookie-consent banner so it doesn't intercept the footer link
  // (it is fixed to the bottom and overlaps the footer on small viewports).
  const acceptCookies = page.getByRole('button', { name: 'Accept All' })
  if (await acceptCookies.isVisible().catch(() => false)) {
    await acceptCookies.click()
  }
  const footerLink = page.locator('footer a[href="/fundraising"]').first()
  await footerLink.scrollIntoViewIfNeeded()
  await footerLink.click()
  await expect(page).toHaveURL(/\/fundraising$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Fundraising' })).toBeVisible()
}

test.describe('Fundraising Page', () => {
  test('should render the fundraising page heading', async ({ page }) => {
    await gotoFundraising(page)
  })

  test('should list both fundraisers with status badges', async ({ page }) => {
    await gotoFundraising(page)

    // Active parade fund
    await expect(page.getByRole('heading', { name: 'Independence Day Parade Fund' })).toBeVisible()
    await expect(page.getByText('Active', { exact: true })).toBeVisible()

    // Completed fish fry
    await expect(page.getByRole('heading', { name: 'Lent Friday Fish Fry' })).toBeVisible()
    await expect(page.getByText('Completed', { exact: true })).toBeVisible()
  })

  test('should show the donate CTA for the active parade fund', async ({ page }) => {
    await gotoFundraising(page)

    const donateLink = page.getByRole('link', { name: 'Donate to the Parade' })
    await expect(donateLink).toBeVisible()
    await expect(donateLink).toHaveAttribute('href', '/#donate')
  })

  test('should link back to the homepage', async ({ page }) => {
    await gotoFundraising(page)

    const backLink = page.getByRole('link', { name: '← Back to Home' })
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/')
  })

  test('should be reachable from the footer', async ({ page }) => {
    // gotoFundraising navigates via the footer link (dismissing the cookie
    // banner first), so it doubles as the footer-reachability check and keeps
    // navigation consistent with the other tests.
    await gotoFundraising(page)
  })

  test('should render on a mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await gotoFundraising(page)

    await expect(page.getByRole('heading', { name: 'Independence Day Parade Fund' })).toBeVisible()
  })
})
