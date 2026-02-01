import React from 'react'

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

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-[800px] mx-auto border-2 border-[#BF0A30]">
          <h2 className="text-[32px] font-[500] mb-4 text-center text-[#002868]" id="faustina-font">
            Lent Friday Fish Fry
          </h2>

          <div className="space-y-4 text-[18px] mb-6" id="lato-font">
            <p className="text-center text-[20px] font-[400]">
              Join us for our annual Lent Friday Fish Fry fundraising event! Enjoy delicious fish
              and chips while supporting Freedom Rising USA&apos;s mission.
            </p>

            <div className="bg-[#002868] text-white rounded-lg p-6 mt-6">
              <h3 className="text-[24px] font-[500] mb-4 text-center" id="faustina-font">
                Event Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <span className="font-[700] min-w-[100px]">Location:</span>
                  <span>American Legion Post 245, State College, PA</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-[700] min-w-[100px]">When:</span>
                  <span>Fridays during Lent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.zeffy.com/en-US/ticketing/lent-friday-fish-fry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#002868] text-white px-8 py-4 rounded-full text-[20px] font-[500] hover:bg-[#001a4d] transition-colors shadow-md"
              id="lato-font"
              aria-label="Order Fish & Chips tickets for Lent Friday Fish Fry event (opens in new tab)"
            >
              Order Fish & Chips
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default FundraisingEvents
