import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="What is Freedom Rising USA?">
            <p className="mb-[30px]">
              Freedom Rising USA is a 501(c)(3) nonprofit organization dedicated to supporting
              patriotism in Centre County, PA. Our primary mission is to support and raise funds for
              the annual 4th of July parade in State College, PA.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What does Freedom Rising USA do?">
            <p className="mb-[30px]">
              We organize, coordinate, and raise funds for the 4th of July parade in State College,
              PA. This includes working with local businesses, community groups, and volunteers to
              create a memorable celebration of American independence for families throughout Centre
              County.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I support the 4th of July parade?">
            <p className="mb-[30px]">
              There are several ways to support our mission: You can make a financial donation to
              help cover parade costs, volunteer your time to help organize and run the parade, or
              participate in the parade with your business or community group. Every contribution
              helps make our celebration bigger and better!
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="When is the 4th of July parade?">
            <p className="mb-[30px]">
              The parade is held annually on or around July 4th in State College, PA. Specific dates
              and times are announced several months in advance. Check our Events section or contact
              us directly for the most current information.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Can my business or organization participate in the parade?">
            <p className="mb-[30px]">
              Absolutely! We welcome participation from local businesses, community organizations,
              schools, and groups of all kinds. The parade is a community celebration, and we
              encourage everyone to get involved. Contact us to learn more about parade entry
              requirements and registration.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How are donations used?">
            <p className="mb-[30px]">
              All donations go directly toward supporting the 4th of July parade. This includes
              costs for permits, insurance, safety equipment, promotional materials, entertainment,
              and other necessary expenses to put on a safe and exciting parade for our community.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Is Freedom Rising USA a registered charity?">
            <p className="mb-[30px]">
              Yes, Freedom Rising USA is a registered 501(c)(3) nonprofit organization. All
              donations are tax-deductible to the extent allowed by law. We can provide donation
              receipts for your tax records.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I volunteer?">
            <p className="mb-[30px]">
              We always need volunteers to help with parade planning, setup, coordination on parade
              day, and cleanup. Whether you can commit a few hours or want to be involved in the
              planning process, we&apos;d love to have your help. Contact us through our volunteer
              form to get started.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where can I find more information about the parade route and schedule?">
            <p className="mb-[30px]">
              Detailed parade information, including the route, schedule, and any road closures, is
              typically published on our website and social media channels about one month before
              the parade. You can also contact us directly for the most up-to-date information.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I contact Freedom Rising USA?">
            <p>
              You can reach us by email at info@freedomrisingusa.org or by phone at (814) 555-1234.
              We&apos;re based in State College, PA and welcome questions, suggestions, and
              inquiries about the parade or our organization.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
