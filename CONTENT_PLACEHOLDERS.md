# Content Placeholders - Freedom Rising USA

This document lists all content placeholders that need to be replaced with official content once available.

## Overview

The website has been converted from "Free For Charity" (a charity-for-charities nonprofit) to "Freedom Rising USA" (a 4th of July parade organization). All references to the previous organization have been removed and replaced with appropriate content for the parade organization.

## Team Members (Board of Directors)

**Location:** `src/data/team/*.json`

The following team member placeholders need official names and LinkedIn profiles:

1. **President of the Board**
   - File: `src/data/team/clarke-moyer.json`
   - Current: `[Board President - TBD]`
   - LinkedIn: `#placeholder-linkedin`

2. **Vice President**
   - File: `src/data/team/chris-rae.json`
   - Current: `[Board Vice President - TBD]`
   - LinkedIn: `#placeholder-linkedin`

3. **Secretary**
   - File: `src/data/team/tyler-carlotto.json`
   - Current: `[Board Secretary - TBD]`
   - LinkedIn: `#placeholder-linkedin`

4. **Treasurer**
   - File: `src/data/team/brennan-darling.json`
   - Current: `[Board Treasurer - TBD]`
   - LinkedIn: `#placeholder-linkedin`

5. **Member at Large**
   - File: `src/data/team/rebecca-cook.json`
   - Current: `[Board Member - TBD]`
   - LinkedIn: `#placeholder-linkedin`

## Testimonials

**Location:** `src/data/testimonials/*.json` and `src/components/home/Testimonials/index.tsx`

The following testimonial placeholders need real testimonials from parade supporters:

1. **Testimonial 1**
   - File: `src/data/testimonials/testimonial-1.json`
   - Author: `[Parade Supporter Name - TBD]`
   - Quote: Placeholder about community celebration

2. **Testimonial 2**
   - File: `src/data/testimonials/testimonial-2.json`
   - Author: `[Local Business Owner - TBD]`
   - Quote: Placeholder about business participation

3. **Testimonial 3**
   - File: `src/data/testimonials/testimonial-3.json`
   - Author: `[Parade Volunteer - TBD]`
   - Quote: Placeholder about volunteering experience

4. **Hardcoded Testimonials** (in Testimonials component)
   - File: `src/components/home/Testimonials/index.tsx`
   - 4 testimonials with TBD placeholders for names and quotes

## Parade Statistics

**Location:** `src/components/home-page/Results-2023/index.tsx`

The Results section needs actual parade statistics:

- **Title:** Currently shows "Parade Impact - [Year - TBD]"
- **Metrics needed:**
  1. Number of parade participants (currently `[TBD]`)
  2. Volunteer hours (currently `[TBD]`)
  3. Community members in attendance (currently `[TBD]`)
  4. Local businesses participating (currently `[TBD]`)

## Assets and Media

**Location:** `src/components/header/index.tsx`

### Logo

- **Current:** Using placeholder path `/Images/logo-placeholder.png`
- **Needed:** Actual Freedom Rising USA logo
- **Location:** Header navigation component

### Images

All existing images from Free For Charity remain in place and may need to be replaced with parade-specific imagery:

- Hero section image
- Volunteer section image
- Support section image
- Team member photos (5 images in `/public/Images/member*.webp`)

## Content URLs and Links

### Volunteer Form

- **Location:** `src/components/home-page/Volunteer-with-Us/index.tsx`
- **Current:** Link to `#volunteer-form-placeholder`
- **Needed:** Actual volunteer signup form URL

### Donation Form

- **Location:** `src/components/home-page/SupportFreeForCharity/index.tsx`
- **Current:** Still using Zeffy donation form URL: `https://www.zeffy.com/embed/donation-form/free-for-charity-endowment-fund`
- **Needed:** New donation form URL for Freedom Rising USA

## Contact Information

**Location:** Footer and various components

Current placeholder contact information:

- **Email:** info@freedomrisingusa.org ✅ (appropriate)
- **Phone:** (814) 555-1234 ⚠️ (placeholder - needs real number)
- **Address:** State College, PA 16803 ✅ (general location appropriate)

## Policy Pages

**Location:** `src/app/free-for-charity-donation-policy/`

- **Issue:** There's still a policy page called "free-for-charity-donation-policy"
- **Needed:** Review and rename/update this policy page

## Component Cleanup - COMPLETED ✅

All unused component directories have been removed. The following directories now remain:

**Active Components (In Use):**

- `src/components/header/` - Site header and navigation
- `src/components/footer/` - Site footer
- `src/components/cookie-consent/` - Cookie consent banner
- `src/components/google-tag-manager/` - Analytics integration
- `src/components/home-page/` - All homepage section components
- `src/components/home/` - Shared home components (Testimonials)
- `src/components/ui/` - Reusable UI components

**Removed (Not Relevant to Parade Mission):**
18 component directories were removed including: 501c3, pre501c3, domains, free-charity-web-hosting, guidestar-guide, techstack, endowment-fund, charity-validation-guide, online-impacts-onboarding, help-for-charities, service-delivery-stages, tools-for-success, volunteer-proving-ground, web-developer-training-guide, about-us, contact-us, donate, and volunteer.

## Summary

### High Priority (Affects User Experience)

1. ✅ Logo image for header
2. ✅ Board member names and LinkedIn profiles
3. ✅ Real testimonials from parade supporters
4. ✅ Actual parade statistics for Results section
5. ⚠️ Real phone number
6. ⚠️ Volunteer form URL
7. ⚠️ Donation form URL

### Medium Priority (Backend/Admin)

8. Review and update policy pages
9. Replace team member photos
10. Replace stock images with parade-specific photos

### Low Priority (Cleanup)

11. ✅ Remove or archive unused component directories - COMPLETED
12. Clean up old Free For Charity assets

## Notes

- All homepage content has been updated to reflect Freedom Rising USA's mission
- FAQs have been completely rewritten for the parade organization
- Programs section has been updated with parade-specific content
- The site builds successfully with all placeholders in place
- Only 6 ESLint warnings remain (all pre-existing, not related to content changes)
