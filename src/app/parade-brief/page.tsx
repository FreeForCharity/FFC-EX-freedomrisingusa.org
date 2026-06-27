'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Home } from 'lucide-react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'

const slides = [
  {
    title: '2026 Central Pennsylvania Independence Day Parade',
    subtitle: 'Parade Brief & Information',
    content: (
      <div className="text-center space-y-6">
        <p className="text-2xl font-semibold">July 4th, 2026</p>
        <p className="text-xl">State College, Pennsylvania</p>
        <p className="text-lg text-gray-600 mt-8">Organized by Freedom Rising USA</p>
      </div>
    ),
  },
  {
    title: 'Event Overview',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#002868]">Date &amp; Time</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Date:</strong> July 4th, 2026 (Annual)
              </li>
              <li>
                <strong>Line Up:</strong> 10:00 AM
              </li>
              <li>
                <strong>Parade Start:</strong> 11:00 AM sharp
              </li>
              <li>
                <strong>Duration:</strong> Approximately 2 hours
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-[#BF0A30]">Location</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>City:</strong> State College, PA
              </li>
              <li>
                <strong>Route:</strong> Downtown State College (details to be announced)
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Parade Schedule',
    content: (
      <div className="space-y-4">
        <div className="bg-white border-l-4 border-[#002868] p-4 shadow-sm">
          <p className="font-semibold text-lg">9:00 AM - 10:00 AM</p>
          <p className="text-gray-700">Participant check-in and final preparations</p>
        </div>
        <div className="bg-white border-l-4 border-[#002868] p-4 shadow-sm">
          <p className="font-semibold text-lg">10:00 AM</p>
          <p className="text-gray-700">All participants must be lined up in designated positions</p>
        </div>
        <div className="bg-white border-l-4 border-[#BF0A30] p-4 shadow-sm">
          <p className="font-semibold text-lg">11:00 AM</p>
          <p className="text-gray-700">Parade steps off - DO NOT BE LATE!</p>
        </div>
        <div className="bg-white border-l-4 border-[#002868] p-4 shadow-sm">
          <p className="font-semibold text-lg">11:00 AM - 1:00 PM</p>
          <p className="text-gray-700">Parade route procession</p>
        </div>
        <div className="bg-white border-l-4 border-[#002868] p-4 shadow-sm">
          <p className="font-semibold text-lg">1:00 PM - 2:00 PM</p>
          <p className="text-gray-700">Parade conclusion and cleanup</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Participant Categories',
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#002868]">Veterans &amp; Military</h3>
            <p className="text-gray-700 text-sm">
              Active duty, veterans, and military organizations
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#002868]">
              Schools &amp; Youth Groups
            </h3>
            <p className="text-gray-700 text-sm">
              Marching bands, scouts, sports teams, student organizations
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#002868]">Local Businesses</h3>
            <p className="text-gray-700 text-sm">
              Showcase your business, connect with the community
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#BF0A30]">Community Groups</h3>
            <p className="text-gray-700 text-sm">Civic organizations, clubs, cultural groups</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#BF0A30]">Floats &amp; Vehicles</h3>
            <p className="text-gray-700 text-sm">
              Decorated floats, classic cars, specialty vehicles
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-[#BF0A30]">Entertainment</h3>
            <p className="text-gray-700 text-sm">Performers, musicians, dance troupes</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Safety & Requirements',
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h3 className="font-semibold text-lg mb-2">Important Safety Guidelines</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>All participants must stay within designated parade areas</li>
            <li>Candy may be tossed on the ground in front of spectators</li>
            <li>To prevent injury, please do not throw candy directly at spectators</li>
            <li>All vehicles must pass safety inspection</li>
            <li>First aid stations will be available along the route</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 text-[#002868]">Participant Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Complete registration form by deadline</li>
            <li>Provide proof of insurance for motorized vehicles</li>
            <li>Attend mandatory participant meeting (date to be announced)</li>
            <li>Follow parade marshal instructions at all times</li>
            <li>Maintain family-friendly content and behavior</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Volunteer Opportunities',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-[#002868]">Help Make It Happen!</h3>
          <p className="text-lg text-gray-700">We need volunteers to make this parade a success</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 text-[#002868]">Pre-Parade Tasks</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Route setup and preparation</li>
              <li>Registration assistance</li>
              <li>Marketing and outreach</li>
              <li>Sponsor coordination</li>
            </ul>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 text-[#BF0A30]">Day-of Roles</h4>
            <ul className="space-y-2 text-gray-700">
              <li>Parade marshals</li>
              <li>Safety monitors</li>
              <li>Check-in coordinators</li>
              <li>Crowd management</li>
            </ul>
          </div>
        </div>
        <div className="bg-white border-2 border-[#002868] p-6 rounded-lg text-center">
          <p className="text-lg font-semibold mb-2">Ready to Volunteer?</p>
          <p className="text-gray-700 mb-4">Sign up through our website or contact us directly</p>
          <Link
            href="/#volunteer"
            className="inline-block bg-[#002868] text-white px-6 py-3 rounded-full hover:bg-[#001a4d] transition-colors"
          >
            Volunteer Now
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-[#002868]">Get In Touch</h3>
          <p className="text-lg text-gray-700">Freedom Rising USA</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h4 className="font-semibold text-lg mb-2">Email</h4>
            <a
              href="mailto:contact@freedomrisingusa.org"
              className="text-[#002868] hover:underline"
            >
              contact@freedomrisingusa.org
            </a>
          </div>
          <div className="bg-red-50 p-8 rounded-lg text-center">
            <h4 className="font-semibold text-lg mb-2">Phone</h4>
            <a href="tel:5712576411" className="text-[#BF0A30] hover:underline">
              (571) 257-6411
            </a>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-8">
          <p className="text-sm">
            Thank you for being part of the Central Pennsylvania Independence Day Parade!
          </p>
        </div>
      </div>
    ),
  },
]

export default function ParadeBrief() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-[100px] pb-[54px]">
      <div className="bg-white shadow-md mb-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#002868] hover:text-[#001a4d] transition-colors"
          >
            <Home size={20} />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-xl font-semibold text-[#002868]">2026 Parade Brief</h1>
          <a
            href={assetPath('/Documents/2026-Parade-Brief.pptx')}
            download
            className="flex items-center gap-2 bg-[#002868] text-white px-4 py-2 rounded-lg hover:bg-[#001a4d] transition-colors"
            aria-label="Download Slides"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Download Slides</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 min-h-[500px] mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002868] mb-6 text-center">
              {slides[currentSlide].title}
            </h2>
            {slides[currentSlide].subtitle && (
              <p className="text-xl text-gray-600 mb-6 text-center">
                {slides[currentSlide].subtitle}
              </p>
            )}
            <div className="mt-8">{slides[currentSlide].content}</div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 bg-[#002868] text-white px-6 py-3 rounded-lg hover:bg-[#001a4d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-1 items-center">
              <span className="text-gray-600 mr-2">
                {currentSlide + 1} / {slides.length}
              </span>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group flex h-7 w-7 items-center justify-center rounded-full"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span
                    className={`block h-3 w-3 rounded-full transition-colors ${
                      index === currentSlide
                        ? 'bg-[#002868]'
                        : 'bg-gray-300 group-hover:bg-gray-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 bg-[#002868] text-white px-6 py-3 rounded-lg hover:bg-[#001a4d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#002868] mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`p-3 rounded-lg text-sm transition-colors ${
                    index === currentSlide
                      ? 'bg-[#002868] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
