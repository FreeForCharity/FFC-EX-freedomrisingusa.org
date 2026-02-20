import React from 'react'

const CORE_VALUES = [
  {
    label: 'Unity',
    icon: '🤝',
    color: '#002868',
  },
  {
    label: 'Gratitude',
    icon: '🎖️',
    color: '#2A6682',
  },
  {
    label: 'Service',
    icon: '⭐',
    color: '#BF0A30',
  },
  {
    label: 'Freedom',
    icon: '🇺🇸',
    color: '#002868',
  },
]

const Mission = () => {
  return (
    <div id="mission" className="py-[52px]">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px]"
          id="faustina-font"
        >
          Honoring heritage and celebrating service
        </h1>
        <p
          className="font-[500] text-[20px] leading-[150%] tracking-[0] text-center"
          id="lato-font"
        >
          Our mission is to celebrate and preserve the rich traditions of American holidays and the
          values they represent – unity, gratitude, service, and freedom. We seek to foster a deep
          appreciation by organizing vibrant community events that celebrate our shared American
          heritage. We are dedicated to honoring the brave service of our veterans, providing
          support to veterans groups, and creating meaningful experiences that educate and inspire
          future generations. Through our initiatives, we aim to strengthen community bonds, promote
          patriotism, and ensure that the sacrifices of our veterans are recognized and celebrated.
          Guided by respect, patriotism, and service, we bring people together to recognize the
          past, uplift the present, and inspire future generations to carry forward the spirit of
          America.
        </p>
        <div
          className="mt-[50px] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto"
          aria-label="Core values"
          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
        >
          {CORE_VALUES.map((value) => (
            <div
              key={value.label}
              className="flex flex-col items-center gap-3 rounded-xl p-6 shadow-md"
              style={{ border: `2px solid ${value.color}` }}
              aria-label={value.label}
            >
              <span className="text-[40px]" role="img" aria-hidden="true">
                {value.icon}
              </span>
              <span
                className="font-[600] text-[18px] tracking-wide uppercase"
                style={{ color: value.color }}
              >
                {value.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#2B627B]"></div>
    </div>
  )
}

export default Mission
