'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/freedomrisingusa', label: 'Facebook' },
    { icon: FaXTwitter, href: 'https://x.com/freedomrisingusa', label: 'X (Twitter)' },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/company/freedomrisingusa/',
      label: 'LinkedIn',
    },
    {
      icon: FaGithub,
      href: 'https://github.com/FreeForCharity/freedomrisingusa.org',
      label: 'GitHub',
    },
  ]
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: About */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">About Freedom Rising USA</h3>

          <div className="space-y-4">
            <p className="text-[16px] font-[400]" id="lato-font">
              Freedom Rising USA is a 501(c)(3) nonprofit organization dedicated to supporting
              patriotism in Centre County, PA. Our primary mission is to support and raise funds for
              the 4th of July parade in State College, PA.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'Mission', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Events', href: '/#events' },
              { name: 'Donate', href: '/#donate' },
              { name: 'Volunteer', href: '/#volunteer' },
              { name: 'FAQ', href: '/#faq' },
              { name: 'Team', href: '/#team' },
              {
                name: 'Parade Information',
                href: '/#events',
              },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Policies</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                {
                  name: 'Donation Policy',
                  href: '/donation-policy',
                },
                {
                  name: 'Privacy Policy',
                  href: '/privacy-policy',
                },
                {
                  name: 'Cookie Policy',
                  href: '/cookie-policy',
                },
                {
                  name: 'Terms of Service',
                  href: '/terms-of-service',
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-6">
            <h4 className="text-[28px] text-white">Documentation</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              <li>
                <a
                  href={assetPath('/Documents/IRS-Letter.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500] flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-orange-500" />
                  IRS 501(c)(3) Status Letter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">E-mail</p>
                <a
                  href="mailto:info@freedomrisingusa.org"
                  className="font-[500] text-[15px] hover:text-cyan-400 transition-colors break-all"
                  id="aria-font"
                >
                  info@freedomrisingusa.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Call Us</p>
                <a
                  href="tel:8145551234"
                  className="font-[500] text-[16px] hover:text-cyan-400 transition-colors"
                  id="aria-font"
                >
                  (814) 555-1234
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=State+College+PA+16803"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
              className="flex items-start gap-3 hover:opacity-80 transition-opacity"
            >
              <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Address</p>
                <p className="font-[500] text-[16px]" id="aria-font">
                  State College, PA 16803
                </p>
              </div>
            </a>

            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>
          © {currentYear} All Rights Reserved by Freedom Rising USA - A 501(c)(3) Non-Profit
          Organization
        </p>
      </div>
    </footer>
  )
}

export default Footer
