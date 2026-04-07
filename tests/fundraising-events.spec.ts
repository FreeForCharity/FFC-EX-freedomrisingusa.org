import { test, expect } from '@playwright/test'

/**
 * Fundraising Events Section Tests
 *
 * These tests verify that:
 * 1. The Fundraising Events section renders correctly on the homepage
 * 2. The Real Good BBQ heading is visible
 * 3. Event details (location) are displayed
 * 4. External link to Zeffy ticketing platform works correctly
 * 5. Section is accessible via #fundraising-events anchor
 * 6. Component displays correctly on mobile viewport
 * 7. Section has proper structure and styling (bg-gray-50, py-[52px])
 */

test.describe('Fundraising Events Section', () => {
  test('should render the Fundraising Events section on homepage', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Fundraising Events section exists with correct ID
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Verify section heading is present
    const heading = fundraisingEventsSection.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Fundraising Events')
  })

  test('should display Real Good BBQ heading', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Fundraising Events section
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Verify Real Good BBQ heading is displayed
    const bbqHeading = fundraisingEventsSection.getByRole('heading', {
      name: 'Real Good BBQ',
    })
    await expect(bbqHeading).toBeVisible()
  })

  test('should display event details (location)', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Fundraising Events section
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Verify Event Details heading
    await expect(
      fundraisingEventsSection.getByRole('heading', { name: 'Event Details' })
    ).toBeVisible()

    // Verify location information
    await expect(fundraisingEventsSection).toContainText('Location:')
    await expect(fundraisingEventsSection).toContainText(
      'American Legion Post 245, 1950 Pine Hall Rd, State College, PA 16801'
    )
  })

  test('should have external link to Zeffy ticketing platform with correct attributes', async ({
    page,
  }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Locate the Fundraising Events section
    const fundraisingEventsSection = page.locator('#fundraising-events')

    // Find the BBQ Ticket Sales link
    const orderLink = fundraisingEventsSection.getByRole('link', {
      name: /BBQ Ticket Sales/i,
    })
    await expect(orderLink).toBeVisible()

    // Verify link has correct href
    await expect(orderLink).toHaveAttribute(
      'href',
      'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq'
    )

    // Verify link opens in new tab
    await expect(orderLink).toHaveAttribute('target', '_blank')

    // Verify link has proper security attributes
    await expect(orderLink).toHaveAttribute('rel', 'noopener noreferrer')

    // Verify link text
    await expect(orderLink).toContainText('BBQ Ticket Sales')
  })

  test('should be accessible via #fundraising-events anchor link', async ({ page }) => {
    // Navigate directly to the fundraising events section via anchor
    await page.goto('/#fundraising-events')

    // Wait for page to load
    await page.waitForLoadState('domcontentloaded')

    // Verify Fundraising Events section is visible
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Section should be at least partially visible
    const boundingBox = await fundraisingEventsSection.boundingBox()
    expect(boundingBox).toBeTruthy()
  })

  test('should display correctly on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Fundraising Events section
    await page.locator('#fundraising-events').scrollIntoViewIfNeeded()

    // Verify Fundraising Events section is visible on mobile
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Verify heading is visible on mobile
    const heading = fundraisingEventsSection.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Fundraising Events')

    // Verify event name is visible
    await expect(
      fundraisingEventsSection.getByRole('heading', { name: 'Real Good BBQ' })
    ).toBeVisible()

    // Verify order button is visible and accessible on mobile
    const orderLink = fundraisingEventsSection.getByRole('link', {
      name: /BBQ Ticket Sales/i,
    })
    await expect(orderLink).toBeVisible()
  })

  test('should have proper section structure and styling', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const fundraisingEventsSection = page.locator('#fundraising-events')

    // Verify section has proper padding class
    const classes = await fundraisingEventsSection.getAttribute('class')
    expect(classes).toContain('py-[52px]')

    // Verify section has gray background
    expect(classes).toContain('bg-gray-50')

    // Verify description text is present
    await expect(fundraisingEventsSection).toContainText(
      'Get your tickets for our Real Good BBQ fundraiser'
    )
    await expect(fundraisingEventsSection).toContainText(
      "Enjoy great food while supporting Freedom Rising USA's mission"
    )

    // Verify section has separator line at bottom
    const separator = fundraisingEventsSection.locator('div.border')
    await expect(separator).toBeVisible()
  })

  test('should be keyboard accessible', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Fundraising Events section
    await page.locator('#fundraising-events').scrollIntoViewIfNeeded()

    // Verify the section is visible
    const fundraisingEventsSection = page.locator('#fundraising-events')
    await expect(fundraisingEventsSection).toBeVisible()

    // Verify the main heading can receive focus for screen readers
    const heading = fundraisingEventsSection.locator('h1')
    await expect(heading).toBeVisible()

    // Verify the Order button is keyboard accessible
    const orderLink = fundraisingEventsSection.getByRole('link', {
      name: /BBQ Ticket Sales/i,
    })
    await expect(orderLink).toBeVisible()

    // Tab to the link (simulate keyboard navigation)
    await orderLink.focus()
    const isFocused = await orderLink.evaluate((el) => el === document.activeElement)
    expect(isFocused).toBeTruthy()
  })

  test('should display event details in proper card structure', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const fundraisingEventsSection = page.locator('#fundraising-events')

    // Verify the event card has proper styling
    const eventCard = fundraisingEventsSection.locator('.bg-white.rounded-lg.shadow-lg')
    await expect(eventCard).toBeVisible()

    // Verify the card has a border
    const cardClasses = await eventCard.getAttribute('class')
    expect(cardClasses).toContain('border-2')
    expect(cardClasses).toContain('border-[#BF0A30]')

    // Verify event details box has proper styling - use first() to get the details box specifically
    const detailsBox = fundraisingEventsSection.locator('.bg-\\[\\#002868\\]').first()
    await expect(detailsBox).toBeVisible()

    // Verify details box contains location
    await expect(detailsBox).toContainText('Location:')
  })
})
