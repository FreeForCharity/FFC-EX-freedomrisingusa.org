import React from 'react'
import Image from 'next/image'
import OrangeFaqItem from '@/components/ui/OrangeFaqItem'
import ApplicationFormButton from '@/components/ui/ApplicationFormButton'

const index = () => {
  return (
    <div id="programs" className="py-[52px]">
      <div className="w-[90%] lg:px-[20px] mx-auto">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Our Programs
        </h1>

        <div className="lg:pl-[50px]">
          <div className="mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/FFC-Domains.svg" alt="Parade Planning" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400] " id="lato-font">
              Parade Planning
            </h1>
          </div>
          <p className="text-[25px] font-[400] " id="lato-font">
            We coordinate all aspects of the annual 4th of July parade in State College, PA,
            including permits, route planning, participant coordination, and safety measures.
          </p>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Route Planning">
            <ul className="list-disc list-inside">
              <li className="">
                For Participants: Clear route maps and instructions to ensure smooth participation
                in the parade
              </li>
              <li className="">
                For Spectators: Published parade route information to help families find the best
                viewing locations
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Permits & Safety">
            <ul className="list-disc list-inside">
              <li className="">
                For Participants: Properly permitted event ensuring legal compliance and safety
              </li>
              <li className="">
                For Community: Coordinated road closures and traffic management for public safety
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Participant Coordination">
            <ul className="list-disc list-inside">
              <li className="">
                For Businesses & Organizations: Streamlined registration process and clear
                participation guidelines
              </li>
              <li className="">
                For Parade Day: Organized lineup and timing to create a smooth, enjoyable parade
                experience
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/FFC-Hosting.svg" alt="Community Engagement" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Community Engagement
            </h1>
          </div>
          <p className="text-[25px] font-[400]  " id="lato-font">
            Building patriotic spirit and community connections through inclusive celebration of
            American independence:
          </p>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Local Business Participation">
            <ul className="list-disc list-inside">
              <li className="">
                For Businesses: Opportunity to showcase your business and connect with the community
              </li>
              <li className="">
                For Community: Support for local commerce and community partnerships
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Schools & Youth Groups">
            <ul className="list-disc list-inside">
              <li className="">
                For Students: Hands-on civic engagement and patriotic education through parade
                participation
              </li>
              <li className="">
                For Families: Creating lasting memories and teaching values of citizenship and
                community service
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Veterans Recognition">
            <ul className="list-disc list-inside">
              <li className="">
                For Veterans: Honoring service and sacrifice with special recognition in the parade
              </li>
              <li className="">
                For Community: Showing appreciation and respect for those who served our nation
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/FFC-Consulting.svg" alt="Fundraising" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Fundraising & Support
            </h1>
          </div>
          <p className="text-[25px] font-[400]  " id="lato-font">
            Raising funds to cover parade costs and ensure a high-quality celebration for Centre
            County families year after year.
          </p>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Individual Donations">
            <ul className="list-disc list-inside">
              <li className="">
                For Donors: Tax-deductible contributions supporting patriotic community celebration
              </li>
              <li className="">
                For the Parade: Funding for permits, insurance, safety equipment, and entertainment
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Business Sponsorships">
            <ul className="list-disc list-inside">
              <li className="">
                For Sponsors: Community visibility and recognition for supporting local events
              </li>
              <li className="">
                For the Parade: Sustained funding enabling year-over-year parade improvements
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Volunteer Support">
            <ul className="list-disc list-inside">
              <li className="">
                For Volunteers: Meaningful community service and parade coordination experience
              </li>
              <li className="">
                For the Organization: Reduced operational costs through dedicated volunteer support
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="lg:w-[90%] mx-auto text-center pb-[54px] pt-[20px]">
          <h1 className="text-[36px] font-[400] pt-[22px] pb-[30px]" id="lato-font">
            Get Involved Today
          </h1>

          <div className="flex items-center justify-center gap-4">
            <a
              href="#volunteer"
              className="bg-[#2A6682] text-white px-8 py-4 rounded-full text-[20px] font-[500] hover:bg-[#1f4d5f] transition-colors"
              id="lato-font"
            >
              Volunteer
            </a>
            <a
              href="#donate"
              className="bg-[#BF0A30] text-white px-8 py-4 rounded-full text-[20px] font-[500] hover:bg-[#9a0826] transition-colors"
              id="lato-font"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
