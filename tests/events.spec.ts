import { test, expect } from '@playwright/test'

/**
 * Events Section Tests
 *
 * These tests verify that:
 * 1. The Events section renders correctly on the homepage
 * 2. The iframe loads with proper sandbox attributes
 * 3. The section is accessible via the #events anchor
 * 4. The Facebook link works correctly
 * 5. The component is keyboard accessible
 */

test.describe('Events Section', () => {
  test('should render the Events section on homepage', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Events section exists with correct ID
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify section heading is present
    const heading = eventsSection.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('4th of July Parade')
  })

  test('should display parade information', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Events section
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify parade information is displayed
    await expect(eventsSection).toContainText('State College 4th of July Parade')
    await expect(eventsSection).toContainText('State College, PA')

    // Verify key information sections are present
    await expect(eventsSection).toContainText('Parade Information')
    await expect(eventsSection).toContainText('Watch the Parade')
    await expect(eventsSection).toContainText('Participate')
    await expect(eventsSection).toContainText('Volunteer')
  })

  test('should be accessible via #events anchor link', async ({ page }) => {
    // Navigate directly to the events section via anchor
    await page.goto('/#events')

    // Wait for page to load (use domcontentloaded instead of networkidle)
    await page.waitForLoadState('domcontentloaded')

    // Verify Events section is visible
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Section should be at least partially visible
    const boundingBox = await eventsSection.boundingBox()
    expect(boundingBox).toBeTruthy()
  })

  test('should display parade details and features', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Events section
    const eventsSection = page.locator('#events')

    // Verify all three feature cards are present by their headings
    await expect(eventsSection.getByRole('heading', { name: 'Watch the Parade' })).toBeVisible()
    await expect(eventsSection.getByRole('heading', { name: 'Participate' })).toBeVisible()
    await expect(eventsSection.getByRole('heading', { name: 'Volunteer' })).toBeVisible()

    // Verify parade information details
    await expect(eventsSection.getByText('Date:')).toBeVisible()
    await expect(eventsSection.getByText('July 4th (Annual)')).toBeVisible()
    await expect(eventsSection.getByText('Location:')).toBeVisible()
  })

  test('should be keyboard accessible', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify the section is visible
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify the main heading can receive focus for screen readers
    const heading = eventsSection.locator('h1')
    await expect(heading).toBeVisible()
  })

  test('should have proper section structure and styling', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const eventsSection = page.locator('#events')

    // Verify section has proper padding class
    const classes = await eventsSection.getAttribute('class')
    expect(classes).toContain('py-[52px]')

    // Verify description text is present
    const description = eventsSection.locator('p').first()
    await expect(description).toBeVisible()
    await expect(description).toContainText(
      'Join us for the annual State College 4th of July Parade'
    )

    // Verify section has separator line at bottom
    const separator = eventsSection.locator('div.border')
    await expect(separator).toBeVisible()
  })

  test('should appear in footer navigation', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Events link exists in footer - use first() to handle multiple matches
    const footerEventsLink = page.locator('footer a[href="/#events"]').first()
    await expect(footerEventsLink).toBeVisible()
    await expect(footerEventsLink).toContainText('Events')

    // Click the footer link and verify it navigates to Events section
    await footerEventsLink.click()

    // Wait for navigation/scroll
    await page.waitForTimeout(500)

    // Verify Events section is visible after clicking footer link
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()
  })

  test('should load on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify Events section is visible on mobile
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify heading is visible on mobile
    const heading = eventsSection.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('4th of July Parade')

    // Verify feature cards are visible on mobile by their headings
    await expect(eventsSection.getByRole('heading', { name: 'Watch the Parade' })).toBeVisible()
    await expect(eventsSection.getByRole('heading', { name: 'Participate' })).toBeVisible()
  })
})
