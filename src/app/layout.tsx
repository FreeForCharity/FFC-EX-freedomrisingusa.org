import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { CONSENT_MODE_BOOTSTRAP } from '@/lib/consent-mode'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://freedomrisingusa.org'),
  title: {
    default: 'Freedom Rising USA | Supporting Patriotism in Centre County PA',
    template: '%s | Freedom Rising USA',
  },
  description:
    'Honoring heritage and celebrating service. We celebrate and preserve American holiday traditions, honor veterans, and strengthen community bonds through vibrant events in Centre County, PA.',
  keywords: [
    'nonprofit',
    'charity',
    '4th of July',
    'parade',
    'State College',
    'Centre County',
    'Pennsylvania',
    'patriotism',
    'community',
    'volunteer',
    'donate',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://freedomrisingusa.org/',
    siteName: 'Freedom Rising USA',
    title: 'Freedom Rising USA | Supporting Patriotism in Centre County PA',
    description:
      'Honoring heritage and celebrating service. We celebrate and preserve American holiday traditions, honor veterans, and strengthen community bonds through vibrant events in Centre County, PA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Freedom Rising USA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@freedomrisingusa',
    title: 'Freedom Rising USA | Supporting Patriotism in Centre County PA',
    description:
      'Honoring heritage and celebrating service. We celebrate and preserve American holiday traditions, honor veterans, and strengthen community bonds through vibrant events in Centre County, PA.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://ffcsites.org" />
        <link rel="preconnect" href="https://www.zeffy.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://ffcsites.org" />
        <link rel="dns-prefetch" href="https://www.zeffy.com" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/figma-hero-img.webp`}
          fetchPriority="high"
        />

        {/* Ensure GTM-compatible dataLayer exists as early as possible */}
        <script
          dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];' }}
        />

        {/* Google Consent Mode v2 defaults — MUST run before any Google tag
            (i.e. before the GoogleTagManager component below) so the
            region-scoped defaults are already on the dataLayer when GTM/GA4
            initialise.
            Granted worldwide, denied (cookieless pings) only where Google's
            EU User Consent Policy requires opt-in. See src/lib/consent-mode.ts. */}
        <script dangerouslySetInnerHTML={{ __html: CONSENT_MODE_BOOTSTRAP }} />
        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  )
}
