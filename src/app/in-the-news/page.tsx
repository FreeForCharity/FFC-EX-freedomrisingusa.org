import type { Metadata } from 'next'
import Link from 'next/link'
import { pressArticles } from '@/data/press-coverage'

export const metadata: Metadata = {
  title: 'In the News',
  description:
    'Media coverage of Freedom Rising USA and our events, including the annual Central Pennsylvania Independence Day Parade in State College, PA.',
  alternates: { canonical: '/in-the-news' },
}

export default function InTheNewsPage() {
  return (
    <main className="py-[60px]">
      <div className="w-[90%] mx-auto max-w-[1000px]">
        <h1 className="text-[40px] lg:text-[48px] text-center mb-4" id="faustina-font">
          In the News
        </h1>
        <p
          className="text-center text-[18px] lg:text-[20px] text-gray-600 max-w-[760px] mx-auto mb-[50px]"
          id="lato-font"
        >
          Press coverage of Freedom Rising USA and our events, from the founding of our nonprofit to
          the annual Central Pennsylvania Independence Day Parade. Each headline links to the full
          story on the outlet&apos;s website.
        </p>

        <div className="space-y-8">
          {pressArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#002868]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800"
                  id="lato-font"
                >
                  {article.outlet}
                </span>
                <span className="text-sm text-gray-600" id="lato-font">
                  {article.date}
                  {article.author && ` · By ${article.author}`}
                </span>
              </div>

              <h2
                className="text-[24px] lg:text-[28px] font-[500] text-[#002868] mb-4"
                id="faustina-font"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BF0A30] transition-colors"
                >
                  {article.headline}
                </a>
              </h2>

              <p className="text-[18px] text-gray-700 mb-6" id="lato-font">
                {article.excerpt}
              </p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#BF0A30] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#a00828] transition-colors"
                id="lato-font"
              >
                Read on {article.outlet}
              </a>
            </article>
          ))}
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
