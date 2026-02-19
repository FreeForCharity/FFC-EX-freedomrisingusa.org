import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parade Registration - Central Pennsylvania Independence Day Parade',
  description:
    'Registration information, rules, and regulations for the 2026 Central Pennsylvania 250th Independence Day Parade.',
}

export default function ParadeRegistration() {
  return (
    <div className="min-h-screen bg-gray-50 pt-[100px] pb-[54px]">
      {/* Header */}
      <div className="bg-[#002868] text-white py-12">
        <div className="container mx-auto px-4 max-w-[900px] text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" id="faustina-font">
            Central Pennsylvania Independence Day Parade Registration
          </h1>
          <p className="text-lg md:text-xl opacity-90" id="lato-font">
            Line up for the 2026 Central Pennsylvania 250th Independence Day Parade will start at
            10:00 AM on North and South Burrowes Street. The parade will step off at 11:00 AM Sharp
            and travel backwards up College Avenue for 6 blocks to the Shortlidge Road/Garner Street
            intersection.
          </p>
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/1nOd0d2YLu6hleTL221UL-ULlrw4A0SqLqiNAHwD-G5Y/viewform"
              className="inline-block bg-[#BF0A30] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#a00828] transition-colors"
              id="lato-font"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Your Group Now
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[900px] py-12">
        {/* Rules & Regulations */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002868] mb-6" id="faustina-font">
            Rules &amp; Regulations
          </h2>
          <p className="text-gray-700 mb-6" id="lato-font">
            The mission of the Independence Day Parade is to recognize and honor the Centre Region
            heroes and all activities in the parade should maintain this focus. The following rules
            and regulations are designed to help promote this mission:
          </p>

          <div className="space-y-4 text-gray-700" id="lato-font">
            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                The Parade Committee is the governing authority regarding parade issues and its
                decisions are final. This includes the committee&apos;s right to revise the
                placement of or remove any entry during line-up on parade day. Your unit is
                encouraged to display the American flag following all recognized guidelines. For
                additional information on this, go online to the US Flag Code.
              </p>
            </div>

            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                Signs and banners carried or on floats should reflect the parade&apos;s
                &ldquo;Independence Day Parade&rdquo; theme. Example: &ldquo;ABC Associates Honors
                Our Community Heroes.&rdquo;
              </p>
            </div>

            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                All entries must be in good taste, suitable for a family event and respectful of
                other entrants.
              </p>
            </div>

            <div className="border-l-4 border-[#BF0A30] pl-4 bg-red-50 p-4 rounded-r-lg">
              <p className="font-semibold">
                First priority for a spot in the parade will be given to groups who register by the
                deadline. Late registrations are not guaranteed a spot in the parade. To be
                guaranteed a spot in the parade, all entries must be received no later than June 22,
                2026.
              </p>
            </div>

            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                Elected Officials and candidates for public office are encouraged to participate in
                the parade as citizens only. Likewise, no participating individual or group may
                promote political agendas, wear campaign attire or distribute campaign
                material/literature. Independence Day is an American holiday &ndash; we put
                political differences aside and celebrate our great nation and the heroes it
                produces!
              </p>
            </div>

            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                The use of drugs and alcohol by participants in the parade is strictly prohibited.
              </p>
            </div>
          </div>
        </section>

        {/* Vehicle Requirements */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002868] mb-6" id="faustina-font">
            Vehicle Requirements
          </h2>
          <div className="space-y-3 text-gray-700" id="lato-font">
            <p>Vehicles must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Carry proper insurance and registration (appropriately credentialed to satisfy a
                police officer if you were asked to present such documents).
              </li>
              <li>Provide rides for heroes, veterans or other parade participants if requested.</li>
              <li>Follow all applicable traffic laws.</li>
            </ul>
          </div>
        </section>

        {/* Parade Conduct */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002868] mb-6" id="faustina-font">
            Parade Conduct
          </h2>
          <div className="space-y-4 text-gray-700" id="lato-font">
            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                Units must keep pace with other entrants and maintain a distance of no less than 30
                feet between each unit (2 car lengths).
              </p>
            </div>
            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                Candy may be tossed on the ground in front of spectators. To prevent injury to
                spectators, please do not throw candy directly at them.
              </p>
            </div>
            <div className="border-l-4 border-[#002868] pl-4">
              <p>
                Your organization will be recognized on the Parade website and in the local paper
                &ldquo;thank you&rdquo; advertisement after the event.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="font-semibold text-gray-800">
              Failure to comply with these requirements may result in removal from the parade and
              prohibition from participating in future events.
            </p>
          </div>
        </section>

        {/* Registration Form Info */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002868] mb-6" id="faustina-font">
            What You&apos;ll Need to Register
          </h2>
          <p className="text-gray-700 mb-6" id="lato-font">
            To register your group or organization in the parade, simply fill out the registration
            form. Please read and acknowledge you understand and accept the rules and regulations.
            You will need the following information:
          </p>

          <div className="grid md:grid-cols-2 gap-6" id="lato-font">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-[#002868] mb-3">Organization Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Name of Organization</li>
                <li>Address of Organization</li>
                <li>Primary Contact Name</li>
                <li>Primary Phone Number</li>
                <li>Email Contact</li>
                <li>Day-of-Parade Contact Name &amp; Phone</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-[#BF0A30] mb-3">Group Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Who is in your group (people, animals, vehicles)</li>
                <li>Number of participants, animals, and vehicles</li>
                <li>Size and type of vehicles (for lineup spacing)</li>
                <li>
                  Description of what you will be showcasing (marching unit, color guard, display,
                  motorized vehicles, horses &amp; riders, etc.)
                </li>
                <li>Any special accommodations needed</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-[#002868] p-4 rounded-r-lg">
            <p className="text-gray-700" id="lato-font">
              <strong>Tip:</strong> Prepare a great description of your group &ndash; this will be
              read at the grandstand as you present to the spectators!
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section className="bg-white rounded-lg shadow-md p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002868] mb-6" id="faustina-font">
            What&apos;s Next?
          </h2>
          <div className="text-gray-700 space-y-4" id="lato-font">
            <p>
              You will hear from our Parade Committee by June 30th. The parade will begin at 11 AM
              with main start on the 100 block of Burrowes Street. You will receive notification for
              your group prior to start.
            </p>
            <p>
              Please email DJ Watkins, Parade Director, with parade questions at{' '}
              <a
                href="mailto:DJWatkins@FreedomRisingUSA.org"
                className="text-[#002868] font-semibold hover:underline"
              >
                DJWatkins@FreedomRisingUSA.org
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8">
          <p className="text-lg text-gray-700 mb-6" id="lato-font">
            Thank you for participating to honor the local heroes of Central Pennsylvania.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/1nOd0d2YLu6hleTL221UL-ULlrw4A0SqLqiNAHwD-G5Y/viewform"
              className="inline-block bg-[#BF0A30] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#a00828] transition-colors"
              id="lato-font"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Your Group Now
            </a>
            <Link
              href="/#events"
              className="inline-block bg-[#002868] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#001a4d] transition-colors"
              id="lato-font"
            >
              Back to Parade Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
