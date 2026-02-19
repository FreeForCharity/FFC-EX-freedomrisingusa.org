import React from 'react'
import { fishFry } from '@/data/fundraising-events'

const FundraisingEvents = () => {
  return (
    <div id="fundraising-events" className="py-[52px] bg-gray-50">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Fundraising Events
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-[900px] mx-auto border-2 border-[#BF0A30]">
          <h2 className="text-[32px] font-[500] mb-4 text-center text-[#002868]" id="faustina-font">
            {fishFry.title}
          </h2>

          <div className="space-y-4 text-[18px] mb-6" id="lato-font">
            <p className="text-center text-[20px] font-[400]">{fishFry.description}</p>

            <div className="bg-[#002868] text-white rounded-lg p-6 mt-6">
              <h3 className="text-[24px] font-[500] mb-4 text-center" id="faustina-font">
                Event Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="font-[700] min-w-[120px]">Location:</span>
                  <span>{fishFry.location}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-[700] min-w-[120px]">Pickup Time:</span>
                  <span>{fishFry.pickupTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-4">
              <h3 className="text-[20px] font-[500] mb-3 text-[#002868]" id="faustina-font">
                Upcoming Dates
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3" id="lato-font">
                {fishFry.dates.map((date) => (
                  <div key={date.label} className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <p className="font-[600] text-[#002868]">{date.label}</p>
                    <p className="text-sm text-gray-600">{date.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
              <p className="text-gray-800" id="lato-font">
                <strong>Note for Legion Members:</strong> {fishFry.legionNote}
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={fishFry.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#002868] text-white px-8 py-4 rounded-full text-[20px] font-[500] hover:bg-[#001a4d] transition-colors shadow-md"
              id="lato-font"
              aria-label={`${fishFry.orderLabel} (opens in a new tab)`}
            >
              {fishFry.orderLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default FundraisingEvents
