import React from 'react'

const Events = () => {
  return (
    <div id="events" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          4th of July Parade
        </h1>

        <div className="text-center mb-8">
          <p className="text-[20px] lg:text-[25px] font-[500] mb-4" id="lato-font">
            Join us for the annual State College 4th of July Parade!
          </p>
          <p className="text-[18px] lg:text-[20px] font-[400]" id="lato-font">
            Celebrate American independence with your community. The parade features local
            businesses, organizations, schools, marching bands, floats, and more!
          </p>
        </div>

        <div className="bg-[#002868] text-white rounded-lg p-8 mb-8 max-w-[800px] mx-auto">
          <h2 className="text-[32px] font-[500] mb-6 text-center" id="faustina-font">
            Parade Information
          </h2>
          <div className="space-y-4 text-[18px]" id="lato-font">
            <div className="flex items-start gap-4">
              <span className="font-[700] min-w-[100px]">Date:</span>
              <span>July 4th (Annual)</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-[700] min-w-[100px]">Location:</span>
              <span>State College, PA</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-[700] min-w-[100px]">Time:</span>
              <span>Details announced closer to the event</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
            <h3 className="text-[24px] font-[500] text-[#002868] mb-4" id="faustina-font">
              Watch the Parade
            </h3>
            <p className="text-[16px]" id="lato-font">
              Bring your family and friends to enjoy the parade. Arrive early to get a good viewing
              spot along the parade route!
            </p>
          </div>

          <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
            <h3 className="text-[24px] font-[500] text-[#002868] mb-4" id="faustina-font">
              Participate
            </h3>
            <p className="text-[16px]" id="lato-font">
              Businesses, organizations, and community groups are welcome to participate. Contact us
              for entry information and requirements.
            </p>
          </div>

          <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
            <h3 className="text-[24px] font-[500] text-[#002868] mb-4" id="faustina-font">
              Volunteer
            </h3>
            <p className="text-[16px]" id="lato-font">
              Help make the parade a success! We need volunteers for setup, coordination, safety,
              and cleanup. Sign up to volunteer today!
            </p>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Events
