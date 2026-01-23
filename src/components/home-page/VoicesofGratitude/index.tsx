'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: '[Parade Supporter - TBD]',
      text: `"The 4th of July parade brings our community together and creates lasting memories for families. We're proud to support Freedom Rising USA's mission."`,
      rating: 5,
    },
    {
      name: '[Local Business Owner - TBD]',
      text: '"Participating in the State College 4th of July parade is a highlight of our year. The patriotic spirit and community involvement is incredible."',
      rating: 5,
    },
    {
      name: '[Parade Volunteer - TBD]',
      text: `"Volunteering for the parade is so rewarding. Seeing the joy on children's faces and bringing the community together to celebrate our nation's independence is priceless."`,
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll behavior
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <>
      <div className="py-[30px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Voices of Gratitude
        </h1>
        <div className="bg-[#2A6682] ">
          <div className="w-[90%] mx-auto">
            <div className="w-full mx-auto lg:p-8">
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Slider Container */}
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div
                        className={`lg:p-8 text-white transition-all duration-500 ${
                          index === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                        style={{ minHeight: '200px' }}
                      >
                        <p className="text-center font-[400] text-[28px] mb-3" id="fauna-font">
                          {testimonial.name}
                        </p>
                        <div className="flex justify-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Image
                              key={i}
                              src="/Svgs/start-icon.svg"
                              width={29}
                              height={29}
                              alt="start icon"
                              className="mx-[5px]"
                            ></Image>
                          ))}
                        </div>

                        <p className="text-center text-[21px] font-[400]" id="fauna-font">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 py-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentIndex
                          ? 'w-3 h-3 bg-[#D9D9D9] scale-150'
                          : 'w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <style jsx>{`
              .scale-0 {
                transform: scale(0.95);
                opacity: 0;
              }
            `}</style>
          </div>
        </div>
      </div>
    </>
  )
}
