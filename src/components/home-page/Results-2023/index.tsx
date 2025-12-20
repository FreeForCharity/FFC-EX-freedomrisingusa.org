import React from 'react'
import ResultCard from '@/components/ui/ResultCard'

const index = () => {
  return (
    <div id="results">
      <div className="w-[90%] mx-auto py-[52px] lg:px-[20px]">
        <h1
          className="mt-[2px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px]  text-center mb-[40px]"
          id="faustina-font"
        >
          Parade Impact - [Year - TBD]
        </h1>
        <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          <ResultCard title="[TBD]" description="Parade participants" />
          <ResultCard title="[TBD]" description="Volunteer hours" />
          <ResultCard title="[TBD]" description="Community members in attendance" />
          <ResultCard title="[TBD]" description="Local businesses participating" />
        </div>
      </div>
    </div>
  )
}

export default index
