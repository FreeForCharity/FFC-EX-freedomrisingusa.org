import React from 'react'
import Link from 'next/link'
import { pressArticles } from '@/data/press-coverage'

const FEATURED_COUNT = 3

const InTheNews = () => {
  const latest = pressArticles.slice(0, FEATURED_COUNT)

  return (
    <div id="news" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-6"
          id="faustina-font"
        >
          In the News
        </h1>
        <p
          className="text-center text-[18px] lg:text-[20px] max-w-[760px] mx-auto mb-[50px]"
          id="lato-font"
        >
          Local media are talking about Freedom Rising USA and the Central Pennsylvania Independence
          Day Parade. Here&apos;s the latest coverage.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {latest.map((article) => (
            <article
              key={article.id}
              className="bg-white border-2 border-[#002868] rounded-lg p-6 flex flex-col"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800"
                  id="lato-font"
                >
                  {article.outlet}
                </span>
                <span className="text-sm text-gray-600" id="lato-font">
                  {article.date}
                </span>
              </div>
              <h2 className="text-[22px] font-[500] text-[#002868] grow" id="faustina-font">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#BF0A30] transition-colors"
                >
                  {article.headline}
                </a>
              </h2>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/in-the-news"
            className="inline-block bg-[#BF0A30] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#a00828] transition-colors"
            id="lato-font"
          >
            See All Press Coverage
          </Link>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default InTheNews
