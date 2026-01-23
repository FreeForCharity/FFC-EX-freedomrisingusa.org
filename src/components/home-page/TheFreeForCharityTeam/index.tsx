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
            imageUrl="/Images/dj-watkins.jpg"
            name="Donald J Watkins"
            title="President"
            linkedinUrl="https://www.linkedin.com/in/dj-watkins"
          />
          <TeamMemberCard
            imageUrl="/Images/mitch-delong.jpg"
            name="Mitch DeLong"
            title="Vice President"
            linkedinUrl="https://www.linkedin.com/in/mitchdelong"
          />
          <TeamMemberCard
            imageUrl="/Images/lauri-delong.jpg"
            name="Lauri DeLong"
            title="Secretary"
            linkedinUrl="https://www.linkedin.com/in/laurie-delong-016845258/"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/carol-king.png"
            name="Carol King"
            title="Treasurer"
            linkedinUrl="https://www.linkedin.com/in/carol-king-b308395a"
          />
          <TeamMemberCard
            imageUrl="/Images/clarke-moyer.jpg"
            name="Clarke Moyer"
            title="Member at Large"
            linkedinUrl="https://www.linkedin.com/in/clarkemoyer"
          />
        </div>
      </div>
    </div>
  )
}

export default index
