import React from 'react'
import Image from 'next/image'
import OrangeFaqItem from '@/components/ui/OrangeFaqItem'
import ApplicationFormButton from '@/components/ui/ApplicationFormButton'

const VOLUNTEER_URL =
  'https://www.idealist.org/en/volunteer-opportunity/a606cbae2be344b69beff812dac6e11c-parade-marshal-freedom-rising-usa-state-college'

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
                <Image src="/Svgs/FFC-Domains.svg" alt="Independence Day Parade" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400] " id="lato-font">
              Independence Day Parade
            </h1>
          </div>
          <p className="text-[25px] font-[400] " id="lato-font">
            We coordinate all aspects of the annual Independence Day parade in Central Pennsylvania,
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

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image
                  src="/Svgs/FFC-Hosting.svg"
                  alt="Veteran and Military Family Support"
                  fill
                ></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Veteran and Military Family Support
            </h1>
          </div>
          <p className="text-[25px] font-[400]  " id="lato-font">
            Honoring and supporting those who have served our nation and their families through
            meaningful programs and recognition.
          </p>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Gold Star Family Dinner">
            <ul className="list-disc list-inside">
              <li className="">
                For Gold Star Families: A heartfelt dinner honoring families who have lost a loved
                one in military service
              </li>
              <li className="">
                For Community: An opportunity to show gratitude and support for the ultimate
                sacrifice
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Blue Star Family Day">
            <ul className="list-disc list-inside">
              <li className="">
                For Blue Star Families: Recognition and celebration for families with members
                currently serving in the military
              </li>
              <li className="">
                For Community: Building connections and showing appreciation for active-duty service
                members and their families
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Enlistment Recognition">
            <ul className="list-disc list-inside">
              <li className="">
                For New Enlistees: Public recognition and celebration of those beginning their
                military service
              </li>
              <li className="">
                For Community: Honoring the commitment and courage of our newest service members
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Support for Local Veteran's Organizations">
            <ul className="list-disc list-inside">
              <li className="">
                For Veteran Organizations: Partnership and collaboration to support veteran programs
                and initiatives
              </li>
              <li className="">
                For Veterans: Enhanced access to resources, support, and community connections
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#2A6682] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/FFC-Consulting.svg" alt="Community Celebrations" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Community Celebrations
            </h1>
          </div>
          <p className="text-[25px] font-[400]  " id="lato-font">
            Bringing our community together to honor our nation&apos;s history and those who have
            served through meaningful ceremonies and celebrations.
          </p>
        </div>

        {/* faqs  */}
        <div>
          <OrangeFaqItem title="Holiday Flag Raisings at Pine Hall Cemetery">
            <ul className="list-disc list-inside">
              <li className="">
                For Community Members: Participation in ceremonial flag raisings honoring national
                holidays at Pine Hall Cemetery
              </li>
              <li className="">
                For Veterans: Recognition and remembrance of service through patriotic ceremony
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Memorial Day Services at Shiloh Church and Pine Hall Cemetery">
            <ul className="list-disc list-inside">
              <li className="">
                For Attendees: Solemn services honoring those who made the ultimate sacrifice for
                our nation
              </li>
              <li className="">
                For Community: Preserving tradition and teaching younger generations about sacrifice
                and service
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Flag Day at American Legion Post 245">
            <ul className="list-disc list-inside">
              <li className="">
                For Veterans and Community: Celebration of our nation&apos;s flag with ceremony and
                education at American Legion Post 245
              </li>
              <li className="">
                For Families: Learning about the history and significance of the American flag
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

        <div className="lg:w-[90%] mx-auto text-center pb-[54px] pt-[20px]">
          <h1 className="text-[36px] font-[400] pt-[22px] pb-[30px]" id="lato-font">
            Get Involved Today
          </h1>

          <div className="flex items-center justify-center gap-4">
            <a
              href={VOLUNTEER_URL}
              target="_blank"
              rel="noopener noreferrer"
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
