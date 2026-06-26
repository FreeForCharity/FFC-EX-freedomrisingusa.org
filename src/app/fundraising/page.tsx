import type { Metadata } from 'next'
import Link from 'next/link'
import { fundraisers, type Fundraiser } from '@/data/fundraisers'

export const metadata: Metadata = {
  title: 'Fundraising',
  description:
    "Freedom Rising USA's fundraising events and campaigns supporting our mission to celebrate American heritage, honor veterans, and strengthen community in Centre County, PA.",
  alternates: { canonical: '/fundraising' },
}

const statusStyles: Record<Fundraiser['status'], { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-green-100 text-green-800' },
  upcoming: { label: 'Upcoming', className: 'bg-blue-100 text-blue-800' },
  completed: { label: 'Completed', className: 'bg-gray-200 text-gray-700' },
}

export default function FundraisingPage() {
  return (
    <main className="py-[60px]">
      <div className="w-[90%] mx-auto max-w-[1000px]">
        <h1 className="text-[40px] lg:text-[48px] text-center mb-4" id="faustina-font">
          Fundraising
        </h1>
        <p
          className="text-center text-[18px] lg:text-[20px] text-gray-600 max-w-[760px] mx-auto mb-[50px]"
          id="lato-font"
        >
          Every dollar raised supports Freedom Rising USA&apos;s mission to celebrate American
          heritage, honor veterans, and bring our community together. Here are the fundraising
          efforts we&apos;ve run this year.
        </p>

        <div className="space-y-8">
          {fundraisers.map((f) => {
            const status = statusStyles[f.status]
            const isExternal = Boolean(f.link && f.link.startsWith('http'))
            return (
              <article
                key={f.id}
                className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#BF0A30]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h2
                    className="text-[28px] lg:text-[32px] font-[500] text-[#002868]"
                    id="faustina-font"
                  >
                    {f.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${status.className}`}
                    id="lato-font"
                  >
                    {status.label}
                  </span>
                </div>

                <p className="text-[18px] text-gray-700 mb-6" id="lato-font">
                  {f.description}
                </p>

                <div className="bg-[#002868] text-white rounded-lg p-6 mb-6" id="lato-font">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="font-[700] min-w-[90px]">When:</span>
                    <span>{f.period}</span>
                  </div>
                  {f.location && (
                    <div className="flex items-start gap-4">
                      <span className="font-[700] min-w-[90px]">Where:</span>
                      <span>{f.location}</span>
                    </div>
                  )}
                </div>

                {f.details && f.details.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6" id="lato-font">
                    {f.details.map((d) => (
                      <div
                        key={d}
                        className="bg-gray-50 rounded-lg p-3 text-center text-sm text-gray-700 shadow-sm"
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                )}

                {f.link && f.linkLabel && (
                  <div className="text-center">
                    <Link
                      href={f.link}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-block bg-[#BF0A30] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#a00828] transition-colors"
                      id="lato-font"
                    >
                      {f.linkLabel}
                    </Link>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="text-center mt-[50px]">
          <Link href="/" className="text-[#002868] underline text-[18px]" id="lato-font">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
