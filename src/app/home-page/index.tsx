import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportFreeForCharity from '@/components/home-page/SupportFreeForCharity'
import EndowmentFeatures from '@/components/home-page/Endowment-Features'
import OurPrograms from '@/components/home-page/Our-Programs'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import Results2023 from '@/components/home-page/Results-2023'
import TheFreeForCharityTeam from '@/components/home-page/TheFreeForCharityTeam'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import Events from '@/components/home-page/Events'
// Seasonal fundraiser (Lent Friday Fish Fry) — finished for the year.
// Component and data (src/data/fundraising-events.ts) are kept; re-enable next Lent season.
// import FundraisingEvents from '@/components/home-page/Fundraising-Events'

const index = () => {
  return (
    <div>
      <Hero />
      {/* 4th of July parade — featured as the current site highlight before the event */}
      <Events />
      <Mission />
      <Results2023 />
      <VolunteerwithUs />
      {/* Fish fry fundraiser is seasonal (Lent) and over for the year; re-enable next season.
      <FundraisingEvents /> */}
      <SupportFreeForCharity />
      <EndowmentFeatures />
      <OurPrograms />
      <FrequentlyAskedQuestions />
      <TheFreeForCharityTeam />
    </div>
  )
}

export default index
