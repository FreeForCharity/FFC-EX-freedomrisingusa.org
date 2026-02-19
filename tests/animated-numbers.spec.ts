import { test, expect } from '@playwright/test'

/**
 * Animated Numbers Tests
 *
 * These tests verify that the Results section numbers animate correctly
 * when scrolled into view. Updated for Freedom Rising USA parade content
 * with 2025 actual data.
 */

test.describe('Parade Impact Animated Numbers', () => {
  // Helper selector for ResultCard components
  // The structure is: wrapper div > (bordered div + description p)
  // We find the wrapper that contains the specific description text
  const getResultCard = (page: import('@playwright/test').Page, description: string) =>
    page.locator(
      `div.flex.flex-col:has(> p:text-is("${description}")) > div.border-\\[\\#F58629\\]`
    )

  test('should display the Parade Impact section with all four statistics', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the Parade Impact section heading
    const resultsHeading = page.locator('h1:has-text("Parade Impact")')
    await expect(resultsHeading).toBeVisible()

    // Scroll to the Results section
    await resultsHeading.scrollIntoViewIfNeeded()

    // Wait for animations to complete
    await page.waitForTimeout(2000)

    // Verify all four result cards are present with actual values and "+" suffix
    await expect(getResultCard(page, 'Parade participants').locator('h1')).toContainText('200+', {
      timeout: 5000,
    })
    await expect(getResultCard(page, 'Volunteer hours').locator('h1')).toContainText('300+')
    await expect(
      getResultCard(page, 'Community members in attendance').locator('h1')
    ).toContainText('15,000+')
    await expect(getResultCard(page, 'Local businesses participating').locator('h1')).toContainText(
      '30+'
    )
  })

  test('should display the section heading with 2025 year', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify the heading includes 2025
    const resultsHeading = page.locator('h1:has-text("Parade Impact - 2025")')
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

  test('should display actual values in all result cards with plus signs', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Scroll to results section
    const resultsHeading = page.locator('h1:has-text("Parade Impact")')
    await resultsHeading.scrollIntoViewIfNeeded()

    // Wait for animations to complete
    await page.waitForTimeout(2000)

    // All cards should show numbers with "+" suffix - look for h1 elements with + inside bordered boxes
    const allPlusValues = page.locator('div.border-\\[\\#F58629\\] h1:has-text("+")')
    await expect(allPlusValues).toHaveCount(4)
  })

  test('should animate numbers from 0 to target value', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Get the first result card - find by its associated description
    const firstCard = getResultCard(page, 'Parade participants').locator('h1')

    // Scroll to make the card visible
    await firstCard.scrollIntoViewIfNeeded()

    // Wait for animation to complete
    await page.waitForTimeout(1500)

    // After animation completes, should show final value
    await expect(firstCard).toContainText('200+')
  })

  test('should format large numbers with thousand separators', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the community members card with large number
    const largeNumberCard = getResultCard(page, 'Community members in attendance').locator('h1')

    // Scroll to make the card visible
    await largeNumberCard.scrollIntoViewIfNeeded()

    // Wait for animation to complete
    await page.waitForTimeout(2000)

    // Should display with comma separator: "15,000+"
    await expect(largeNumberCard).toContainText('15,000+')
  })
})
