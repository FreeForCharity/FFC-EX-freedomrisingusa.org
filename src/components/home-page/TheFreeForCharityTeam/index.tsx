import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

const index = () => {
  return (
    <div id="team" className="py-[50px]">
      <h1
        className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
        id="faustina-font"
      >
        The Freedom Rising USA Board
      </h1>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center mb-[50px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member1.webp"
            name="[Board President - TBD]"
            title="President of the Board"
            linkedinUrl="#placeholder-linkedin"
          />
          <TeamMemberCard
            imageUrl="/Images/member2.webp"
            name="[Board Vice President - TBD]"
            title="Vice President"
            linkedinUrl="#placeholder-linkedin"
          />
          <TeamMemberCard
            imageUrl="/Images/member3.webp"
            name="[Board Secretary - TBD]"
            title="Secretary"
            linkedinUrl="#placeholder-linkedin"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member4.webp"
            name="[Board Treasurer - TBD]"
            title="Treasurer"
            linkedinUrl="#placeholder-linkedin"
          />
          <TeamMemberCard
            imageUrl="/Images/member5.webp"
            name="[Board Member - TBD]"
            title="Member at Large"
            linkedinUrl="#placeholder-linkedin"
          />
        </div>
      </div>
    </div>
  )
}

export default index
