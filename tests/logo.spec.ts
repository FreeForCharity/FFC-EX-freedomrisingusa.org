import { test, expect } from '@playwright/test'

/**
 * Logo and Image Visibility Tests
 *
 * These tests verify that critical images are present and visible on the homepage:
 * 1. Header logo (top left corner) - validates the Freedom Rising USA branding
 * 2. Hero section image - validates the decorative hero image is displayed
 *
 * Note: The current implementation uses:
 * - Header logo: Placeholder image /Images/logo-placeholder.png with alt="Freedom Rising USA"
 * - Hero image: Local image /Images/figma-hero-img.png with alt="Hero image"
 */

test.describe('Logo and Image Visibility', () => {
  test('should display logo in header', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the logo in the Header
    // The logo is in a Link element that points to "/" with img alt="Freedom Rising USA"
    const headerLogo = page.locator('header a[href="/"] img[alt="Freedom Rising USA"]')

    // Verify the logo exists
    await expect(headerLogo).toBeVisible()

    // Verify the logo has the correct alt text
    await expect(headerLogo).toHaveAttribute('alt', 'Freedom Rising USA')
  })

  test('should display hero section image', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the hero image
    const heroImage = page.locator('img[alt="Hero image"]')

    // Verify the image exists
    await expect(heroImage).toBeVisible()

    // Verify the image has the correct alt text
    await expect(heroImage).toHaveAttribute('alt', 'Hero image')
  })

  test('both header logo and hero image should be present on the same page', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find both images
    const headerLogo = page.locator('header a[href="/"] img[alt="Freedom Rising USA"]')
    const heroImage = page.locator('img[alt="Hero image"]')

    // Verify both are visible simultaneously
    await expect(headerLogo).toBeVisible()
    await expect(heroImage).toBeVisible()
  })
})
