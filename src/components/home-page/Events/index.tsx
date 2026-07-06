import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ParadeCountdown from '@/components/ui/ParadeCountdown'
import ParadeDate from '@/components/ui/ParadeDate'

const Events = () => {
  return (
    <div id="events" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Events &amp; Celebrations
        </h1>

        {/* Independence Day Parade — Featured */}
        <div className="mb-12">
          <h2 className="text-[32px] font-[400] text-center mb-6" id="faustina-font">
            Independence Day Parade
          </h2>
          <div className="text-center mb-8">
            <p className="text-[20px] lg:text-[25px] font-[500] mb-4" id="lato-font">
              Join us for the annual Central Pennsylvania Independence Day Parade!
            </p>
            <p className="text-[18px] lg:text-[20px] font-[400]" id="lato-font">
              Celebrate American independence with your community. The parade features local
              businesses, organizations, schools, marching bands, floats, and more!
            </p>
          </div>

          <figure className="max-w-[800px] mx-auto mb-8">
            <Image
              src="/Images/Parade-2026.webp"
              alt="An inflatable bald eagle wearing an Uncle Sam hat rides atop a truck down South Allen Street, with crowds lining the sidewalks, during the 2026 Independence Day Parade in State College"
              width={993}
              height={658}
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
            <figcaption className="text-center text-[16px] text-gray-600 mt-3" id="lato-font">
              The 2026 Independence Day Parade on South Allen Street in downtown State College
            </figcaption>
          </figure>

          <ParadeCountdown />

          <div className="bg-[#002868] text-white rounded-lg p-8 mb-8 max-w-[800px] mx-auto">
            <h3 className="text-[28px] font-[500] mb-6 text-center" id="faustina-font">
              Parade Information
            </h3>
            <div className="space-y-4 text-[18px]" id="lato-font">
              <div className="flex items-start gap-4">
                <span className="font-[700] min-w-[100px]">Date:</span>
                <span>
                  <ParadeDate />
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-[700] min-w-[100px]">Location:</span>
                <span>State College, PA</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-[700] min-w-[100px]">Time:</span>
                <span>Line up at 10:00 AM, the parade steps off at 11:00 AM sharp</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/parade-brief"
                className="inline-block bg-white text-[#002868] px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-gray-100 transition-colors"
                id="lato-font"
              >
                View Parade Brief
              </Link>
              <Link
                href="/parade-registration"
                className="inline-block bg-[#BF0A30] text-white px-8 py-3 rounded-full text-[18px] font-[500] hover:bg-[#a00828] transition-colors"
                id="lato-font"
              >
                Register to Participate
              </Link>
              <Link
                href="/#donate"
                className="inline-block bg-[#F5C045] text-[#002868] px-8 py-3 rounded-full text-[18px] font-[600] hover:bg-[#e0ad33] transition-colors"
                id="lato-font"
              >
                Donate to the Parade
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
              <h3 className="text-[24px] font-[500] text-[#002868] mb-4" id="faustina-font">
                Watch the Parade
              </h3>
              <p className="text-[16px]" id="lato-font">
                Bring your family and friends to enjoy the parade. Arrive early to get a good
                viewing spot along the parade route!
              </p>
            </div>

            <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
              <h3 className="text-[24px] font-[500] text-[#002868] mb-4" id="faustina-font">
                Participate
              </h3>
              <p className="text-[16px]" id="lato-font">
                Businesses, organizations, and community groups are welcome to participate. Contact
                us for entry information and requirements.
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

        {/* Veteran & Military Family Support */}
        <div className="mb-12">
          <h2 className="text-[32px] font-[400] text-center mb-6" id="faustina-font">
            Veteran and Military Family Support
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#002868] rounded-lg p-6">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Gold Star Family Dinner
              </h3>
              <p className="text-[16px]" id="lato-font">
                Honoring the families of fallen service members with a special dinner recognizing
                their sacrifice and service.
              </p>
            </div>
            <div className="bg-white border-2 border-[#002868] rounded-lg p-6">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Blue Star Family Day
              </h3>
              <p className="text-[16px]" id="lato-font">
                Celebrating and supporting the families of active-duty service members in our
                community.
              </p>
            </div>
            <div className="bg-white border-2 border-[#002868] rounded-lg p-6">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Enlistment Recognition
              </h3>
              <p className="text-[16px]" id="lato-font">
                Recognizing and honoring community members who have made the commitment to serve in
                our armed forces.
              </p>
            </div>
            <div className="bg-white border-2 border-[#002868] rounded-lg p-6">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Support for Local Veterans&apos; Organizations
              </h3>
              <p className="text-[16px]" id="lato-font">
                Partnering with and supporting local veterans&apos; organizations to strengthen
                their impact in the community.
              </p>
            </div>
          </div>
        </div>

        {/* Community Celebrations */}
        <div className="mb-8">
          <h2 className="text-[32px] font-[400] text-center mb-6" id="faustina-font">
            Community Celebrations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Holiday Flag Raisings
              </h3>
              <p className="text-[16px]" id="lato-font">
                Flag raising ceremonies at Pine Hall Cemetery to honor our nation on patriotic
                holidays.
              </p>
            </div>
            <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Memorial Day Services
              </h3>
              <p className="text-[16px]" id="lato-font">
                Services at Shiloh Church and Pine Hall Cemetery honoring those who gave the
                ultimate sacrifice.
              </p>
            </div>
            <div className="bg-white border-2 border-[#BF0A30] rounded-lg p-6 text-center">
              <h3 className="text-[22px] font-[500] text-[#002868] mb-3" id="faustina-font">
                Flag Day
              </h3>
              <p className="text-[16px]" id="lato-font">
                Flag Day celebration at American Legion Post 245 commemorating the adoption of the
                United States flag.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Events
