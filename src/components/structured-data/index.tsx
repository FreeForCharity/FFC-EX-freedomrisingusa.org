const SITE_URL = 'https://freedomrisingusa.org'

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'NGO',
        name: 'Freedom Rising USA',
        url: SITE_URL,
        logo: `${SITE_URL}/web-app-manifest-512x512.png`,
        description:
          'Freedom Rising USA is a 501(c)(3) nonprofit organization dedicated to honoring heritage and celebrating service in Centre County, PA.',
        email: 'contact@freedomrisingusa.org',
        telephone: '+1-571-257-6411',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'State College',
          addressRegion: 'PA',
          postalCode: '16803',
          addressCountry: 'US',
        },
        sameAs: [
          'https://www.facebook.com/freedomrisingusa',
          'https://x.com/USFreedomRising',
          'https://www.linkedin.com/company/freedomrisingusa/',
        ],
      }}
    />
  )
}

export function ParadeEventJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: '2026 Central Pennsylvania Independence Day Parade',
        description:
          'Annual Independence Day parade in downtown State College, PA, organized by Freedom Rising USA to honor veterans and celebrate American heritage.',
        startDate: '2026-07-04T11:00:00-04:00',
        endDate: '2026-07-04T13:00:00-04:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        url: `${SITE_URL}/parade-brief`,
        location: {
          '@type': 'Place',
          name: 'Downtown State College',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'State College',
            addressRegion: 'PA',
            postalCode: '16803',
            addressCountry: 'US',
          },
        },
        organizer: {
          '@type': 'NGO',
          name: 'Freedom Rising USA',
          url: SITE_URL,
        },
        isAccessibleForFree: true,
      }}
    />
  )
}
