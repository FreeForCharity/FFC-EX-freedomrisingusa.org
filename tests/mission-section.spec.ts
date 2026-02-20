import { test, expect } from '@playwright/test'

/**
 * Mission Section Tests
 *
 * These tests verify that the mission section displays the core values
 * and mission content on the homepage.
 */

test.describe('Mission Section', () => {
  test('should display mission heading and text', async ({ page }) => {
    await page.goto('/')

    const missionSection = page.locator('#mission')
    await expect(missionSection).toBeVisible()

    await expect(
      missionSection.getByText('Honoring heritage and celebrating service')
    ).toBeVisible()

    await expect(missionSection.getByText(/Our mission is to celebrate/)).toBeVisible()
  })

  test('should display core values', async ({ page }) => {
    await page.goto('/')

    const valuesContainer = page.locator('[aria-label="Core values"]')
    await expect(valuesContainer).toBeVisible()

    for (const value of ['Unity', 'Gratitude', 'Service', 'Freedom']) {
      await expect(valuesContainer.getByText(value)).toBeVisible()
    }
  })
})
