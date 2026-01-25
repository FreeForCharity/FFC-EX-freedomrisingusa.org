'use client'

import React from 'react'
import AnimatedNumber from '@/components/ui/AnimatedNumber'

interface ResultCardProps {
  title: string
  description: string
}

const ResultCard: React.FC<ResultCardProps> = ({ title, description }) => {
  // Extract numeric value from strings like "Over 200", "More than 15,000", etc.
  const numericMatch = title.match(/[\d,]+/)
  const numericValue = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ''), 10) : NaN

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[300px] px-[20px] flex items-center justify-center border-[5px] border-[#F58629] rounded-[20px] shadow-[0px_16px_16px_0px_#11253E0F]">
        <h1 className="text-[64px] font-[400]" id="faustina-font">
          {!isNaN(numericValue) ? (
            <>
              <AnimatedNumber value={numericValue} />+
            </>
          ) : (
            title
          )}
        </h1>
      </div>
      <p className="text-center text-[25px] font-[400] mt-[20px]" id="lato-font">
        {description}
      </p>
    </div>
  )
}

export default ResultCard
