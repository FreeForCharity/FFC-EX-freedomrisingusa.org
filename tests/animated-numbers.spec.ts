import { test, expect } from '@playwright/test'

/**
 * Animated Numbers Tests
 *
 * These tests verify that the Results section numbers animate correctly
 * when scrolled into view. Updated for Freedom Rising USA parade content.
 */

test.describe('Parade Impact Animated Numbers', () => {
  // Helper selector for ResultCard components - uses the distinctive border class
  // to identify the card containing a specific description
  const getResultCard = (page: import('@playwright/test').Page, description: string) =>
    page.locator(`div.border-\\[\\#F58629\\]:has(p:text-is("${description}"))`)

  test('should display the Parade Impact section with all four statistics', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the Parade Impact section heading
    const resultsHeading = page.locator('h1:has-text("Parade Impact")')
    await expect(resultsHeading).toBeVisible()

    // Scroll to the Results section
    await resultsHeading.scrollIntoViewIfNeeded()

    // Verify all four result cards are present with placeholder values
    await expect(getResultCard(page, 'Parade participants').locator('h1')).toContainText('[TBD]', {
      timeout: 5000,
    })
    await expect(getResultCard(page, 'Volunteer hours').locator('h1')).toContainText('[TBD]')
    await expect(
      getResultCard(page, 'Community members in attendance').locator('h1')
    ).toContainText('[TBD]')
    await expect(getResultCard(page, 'Local businesses participating').locator('h1')).toContainText(
      '[TBD]'
    )
  })

  test('should display the section heading with TBD year', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify the heading includes TBD placeholder for year
    const resultsHeading = page.locator('h1:has-text("Parade Impact - [Year - TBD]")')
    await expect(resultsHeading).toBeVisible()
  })

  test('should display correct descriptions for each statistic', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify all parade-related descriptions are present
    await expect(page.locator('text=Parade participants')).toBeVisible()
    await expect(page.locator('text=Volunteer hours')).toBeVisible()
    await expect(page.locator('text=Community members in attendance')).toBeVisible()
    await expect(page.locator('text=Local businesses participating')).toBeVisible()
  })

  test('should display placeholder values in all result cards', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Scroll to results section
    const resultsHeading = page.locator('h1:has-text("Parade Impact")')
    await resultsHeading.scrollIntoViewIfNeeded()

    // All cards should show [TBD] as placeholder
    const allTBDValues = page.locator('div.border-\\[\\#F58629\\] h1:has-text("[TBD]")')
    await expect(allTBDValues).toHaveCount(4)
  })
})
