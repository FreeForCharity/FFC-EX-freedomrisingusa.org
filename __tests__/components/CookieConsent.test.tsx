import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import CookieConsent from '../../src/components/cookie-consent'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('CookieConsent component', () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  it('should show cookie banner on first visit', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        expect(screen.queryByText(/cookies/i)).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  })

  it('should display banner when no preferences are saved', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        const banner = screen.queryByText(/cookies/i)
        expect(banner).toBeInTheDocument()
      },
      { timeout: 2000 }
    )
  })

  it('should not show banner if preferences are already saved', () => {
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({
        necessary: true,
        functional: true,
        analytics: false,
        marketing: false,
      })
    )

    render(<CookieConsent />)

    // Banner should not appear immediately if consent is already saved
    const banner = screen.queryByText(/We use cookies/i)
    expect(banner).not.toBeInTheDocument()
  })

  it('should have a link to privacy policy', async () => {
    render(<CookieConsent />)

    await waitFor(
      () => {
        const privacyLinks = screen.queryAllByText(/Privacy Policy/i)
        expect(privacyLinks.length).toBeGreaterThanOrEqual(1)
      },
      { timeout: 2000 }
    )
  })

  it('should not have accessibility violations when visible', async () => {
    const { container } = render(<CookieConsent />)

    await waitFor(
      async () => {
        const banner = screen.queryByText(/cookies/i)
        if (banner) {
          const results = await axe(container)
          expect(results).toHaveNoViolations()
        }
      },
      { timeout: 2000 }
    )
  })
})

describe('CookieConsent Google Consent Mode integration', () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  afterEach(() => {
    // This site has a real GA4 measurement ID, so the direct loader runs here
    // and defines `gtag` as a global FUNCTION DECLARATION — a non-configurable
    // binding that `delete` throws on. Fall back to overwriting it; the code
    // under test checks `typeof window.gtag !== 'function'`, so an undefined
    // value reads as absent either way.
    try {
      delete window.gtag
    } catch {
      ;(window as { gtag?: unknown }).gtag = undefined
    }
    // The loader skips itself when its script tag is already present, so leave
    // the document as clean as it was found.
    document
      .querySelectorAll('script[src*="googletagmanager.com/gtag"]')
      .forEach((el) => el.remove())
  })

  it('pushes a gtag consent update when restoring a stored choice on load', async () => {
    const gtag = jest.fn()
    window.gtag = gtag
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, functional: true, analytics: true, marketing: false })
    )

    render(<CookieConsent />)

    await waitFor(() => {
      expect(gtag).toHaveBeenCalledWith(
        'consent',
        'update',
        expect.objectContaining({
          analytics_storage: 'granted',
          ad_storage: 'denied',
          security_storage: 'granted',
        })
      )
    })
  })

  it('pushes a denied gtag consent update when the stored choice declined tracking', async () => {
    const gtag = jest.fn()
    window.gtag = gtag
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, functional: true, analytics: false, marketing: false })
    )

    render(<CookieConsent />)

    await waitFor(() => {
      expect(gtag).toHaveBeenCalledWith(
        'consent',
        'update',
        expect.objectContaining({
          analytics_storage: 'denied',
          ad_storage: 'denied',
        })
      )
    })
  })

  it('loads GA4 for the configured ID, and nothing for the ones left as placeholders', async () => {
    // Unlike the rest of the fleet this site has a real GA4 property, so the
    // direct loader is expected to fire: Consent Mode gates cookie STORAGE by
    // region, not whether the tag loads. Its Meta Pixel and Clarity IDs are
    // still the shipped placeholders, and those must stay inert — loading a
    // tag for an account that does not exist is a third-party request made on
    // a visitor's behalf for nothing.
    render(<CookieConsent />)

    await waitFor(() => {
      expect(screen.queryByText(/cookies/i)).toBeInTheDocument()
    })

    expect(
      document.querySelector('script[src*="googletagmanager.com/gtag/js?id=G-FHVLZGB0CY"]')
    ).not.toBeNull()
    expect(document.querySelector('script[src*="fbevents.js"]')).toBeNull()
    expect(document.querySelector('script[src*="clarity.ms"]')).toBeNull()
  })

  it('deletes non-granted categories’ cookies on load, even without a prior stored grant', async () => {
    // Under the regional Consent Mode defaults, Google tags can set cookies
    // BEFORE the visitor makes any choice (outside the EEA/UK/CH). Applying
    // a denying choice must therefore delete per category on every apply,
    // not only on withdrawal of a previously stored grant.
    document.cookie = '_ga=stale-regional-default'
    document.cookie = '_fbp=stale-regional-default'
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, functional: true, analytics: false, marketing: false })
    )

    render(<CookieConsent />)

    await waitFor(() => {
      expect(document.cookie).not.toContain('_ga=')
      expect(document.cookie).not.toContain('_fbp=')
    })
  })

  it('does not load Clarity or Meta Pixel without an explicit grant', async () => {
    localStorageMock.setItem(
      'cookie-consent',
      JSON.stringify({ necessary: true, functional: true, analytics: false, marketing: false })
    )

    render(<CookieConsent />)

    expect(document.querySelector('script[src*="clarity.ms"]')).toBeNull()
    expect(document.querySelector('script[src*="fbevents.js"]')).toBeNull()
  })
})
