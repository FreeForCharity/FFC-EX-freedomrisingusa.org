import { test, expect } from '@playwright/test'

/**
 * Copyright Notice Tests
 *
 * These tests verify that the copyright notice in the footer:
 * 1. Contains the copyright symbol (©)
 * 2. Displays the current year
 * 3. Renders the complete copyright text
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Get the current year
    const currentYear = new Date().getFullYear()

    // Find the footer paragraph containing the copyright text
    const footerText = page.locator('footer p:has-text("All Rights Reserved")')

    // Verify the copyright notice is visible
    await expect(footerText).toBeVisible()

    // Verify it contains the copyright symbol and current year
    await expect(footerText).toContainText(`© ${currentYear}`)

    // Verify the complete copyright text is present
    await expect(footerText).toContainText(
      'All Rights Reserved by Freedom Rising USA - A 501(c)(3) Non-Profit Organization'
    )
  })

  test('should display organization name in copyright notice', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the copyright notice
    const copyrightText = page.locator(
      'footer p:has-text("All Rights Reserved by Freedom Rising USA")'
    )

    // Verify the copyright notice is visible
    await expect(copyrightText).toBeVisible()

    // Verify it contains the organization name
    await expect(copyrightText).toContainText('Freedom Rising USA')

    // Verify it mentions 501(c)(3) status
    await expect(copyrightText).toContainText('501(c)(3)')
  })
})
