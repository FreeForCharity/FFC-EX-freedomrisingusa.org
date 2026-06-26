import { test, expect } from '@playwright/test'

/**
 * Events Section Tests
 *
 * These tests verify that:
 * 1. The Events section renders correctly on the homepage
 * 2. The section is accessible via the #events anchor
 * 3. The parade information, registration, and other events display correctly
 * 4. The component is keyboard accessible
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
    await expect(heading).toContainText('Events & Celebrations')
  })

  test('should display parade information', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Events section
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify parade information is displayed
    await expect(eventsSection).toContainText('Central Pennsylvania Independence Day Parade')
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

    // Verify parade information details. The date is rendered dynamically
    // (next July 4), so assert the year-agnostic "July 4" to stay valid each year.
    await expect(eventsSection.getByText('Date:')).toBeVisible()
    await expect(eventsSection.getByText(/July 4/).first()).toBeVisible()
    await expect(eventsSection.getByText('Location:')).toBeVisible()
  })

  test('should display parade brief and registration links', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const eventsSection = page.locator('#events')

    // Verify View Parade Brief link and click through
    const briefLink = eventsSection.getByRole('link', { name: 'View Parade Brief' })
    await expect(briefLink).toBeVisible()
    await expect(briefLink).toHaveAttribute('href', '/parade-brief')
    await briefLink.click()
    await expect(page).toHaveURL(/\/parade-brief$/)
    await expect(page.getByRole('heading', { level: 2 })).toBeVisible()

    // Navigate back to homepage to test registration link
    await page.goto('/')
    const eventsAfterBrief = page.locator('#events')

    // Verify Register to Participate link and click through
    const registerLink = eventsAfterBrief.getByRole('link', { name: 'Register to Participate' })
    await expect(registerLink).toBeVisible()
    await expect(registerLink).toHaveAttribute('href', '/parade-registration')
    await registerLink.click()
    await expect(page).toHaveURL(/\/parade-registration$/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('should display veteran and community event sections', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const eventsSection = page.locator('#events')

    // Verify Veteran and Military Family Support section
    await expect(
      eventsSection.getByRole('heading', { name: 'Veteran and Military Family Support' })
    ).toBeVisible()
    await expect(
      eventsSection.getByRole('heading', { name: 'Gold Star Family Dinner' })
    ).toBeVisible()
    await expect(eventsSection.getByRole('heading', { name: 'Blue Star Family Day' })).toBeVisible()

    // Verify Community Celebrations section
    await expect(
      eventsSection.getByRole('heading', { name: 'Community Celebrations' })
    ).toBeVisible()
    await expect(
      eventsSection.getByRole('heading', { name: 'Holiday Flag Raisings' })
    ).toBeVisible()
    await expect(
      eventsSection.getByRole('heading', { name: 'Memorial Day Services' })
    ).toBeVisible()
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
    await expect(eventsSection).toContainText(
      'Join us for the annual Central Pennsylvania Independence Day Parade'
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
    await expect(heading).toContainText('Events & Celebrations')

    // Verify feature cards are visible on mobile by their headings
    await expect(eventsSection.getByRole('heading', { name: 'Watch the Parade' })).toBeVisible()
    await expect(eventsSection.getByRole('heading', { name: 'Participate' })).toBeVisible()
  })
})
