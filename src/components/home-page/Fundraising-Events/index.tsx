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

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-[900px] mx-auto border-2 border-[#BF0A30]">
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
                  <span className="font-[700] min-w-[120px]">Location:</span>
                  <span>American Legion Post 245, 1950 Pine Hall Rd, State College, PA 16801</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-[700] min-w-[120px]">Pickup Time:</span>
                  <span>Fridays during Lent, 4:30 PM &ndash; 5:30 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-4">
              <h3 className="text-[20px] font-[500] mb-3 text-[#002868]" id="faustina-font">
                Upcoming Dates
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3" id="lato-font">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Feb 20</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Feb 27</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Mar 6</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Mar 13</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Mar 20</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Mar 27</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <p className="font-[600] text-[#002868]">Fri, Apr 3</p>
                  <p className="text-sm text-gray-600">4:30 &ndash; 5:30 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-4">
              <p className="text-gray-800" id="lato-font">
                <strong>Note for Legion Members:</strong> American Legion Post 245 is open to
                members at regular hours throughout the week. The dates and times listed above are
                specifically for the Freedom Rising USA fundraiser pickup window. Pre-orders through
                Zeffy are picked up between 4:30 and 5:30 on the day ordered. Nonrefundable if not
                picked up.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.zeffy.com/en-US/ticketing/lent-friday-fish-fry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#002868] text-white px-8 py-4 rounded-full text-[20px] font-[500] hover:bg-[#001a4d] transition-colors shadow-md"
              id="lato-font"
            >
              Order Fish &amp; Chips
            </a>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default FundraisingEvents
