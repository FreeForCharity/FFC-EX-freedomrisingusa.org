import React from 'react'
import { SustainableFundingCard } from '@/components/ui/SustainableFundingCard'

const Home: React.FC = () => {
  return (
    <div className="pb-[30px]">
      <div className="w-[90%] mx-auto lg:px-[20px] max-w-[1280px]">
        <div>
          <h1
            className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[30px]"
            id="faustina-font"
          >
            Why Support Freedom Rising USA
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <SustainableFundingCard
              imageUrl="/Svgs/sustainable-funding.svg"
              title="Community Celebration"
              text="The 4th of July parade brings together families, businesses, and organizations to celebrate American independence and foster community spirit in Centre County."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Long-Term-Impact.svg"
              title="Lasting Memories"
              text="By supporting the parade, you help create cherished memories for children and families that will last a lifetime, building a tradition of patriotic celebration."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Goal-of-$1,000,000.svg"
              title="Annual Event Funding"
              text="Your contributions ensure we can cover the costs of permits, insurance, safety equipment, and entertainment to put on a safe and exciting parade each year."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Be-a-Champion.svg"
              title="Be a Patriotic Champion"
              text="By supporting Freedom Rising USA, you become an essential part of celebrating our nation's values and bringing the community together in patriotic spirit."
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Home
