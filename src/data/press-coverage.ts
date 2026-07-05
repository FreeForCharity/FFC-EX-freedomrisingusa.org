export type PressArticle = {
  id: string
  headline: string
  outlet: string
  /** Human-readable publication date, e.g. "July 4, 2026". */
  date: string
  author?: string
  /** Short summary in our own words — never republish article text (copyright). */
  excerpt: string
  url: string
}

// Press coverage of Freedom Rising USA and its events, newest first.
// Add new articles at the top. Link and summarize only — do not copy
// article text or photos.
export const pressArticles: PressArticle[] = [
  {
    id: 'statecollege-parade-250th',
    headline: "Independence Day Parade in State College Celebrates America's 250th",
    outlet: 'StateCollege.com',
    date: 'July 4, 2026',
    excerpt:
      "Coverage of the 99th annual parade on America's 250th birthday — the first run by Freedom Rising USA — with about four dozen organizations marching along College Avenue and Commander D.J. Watkins on the group's nonpartisan mission.",
    url: 'https://www.statecollege.com/articles/community/independence-day-parade-in-state-college-celebrates-americas-250th/',
  },
  {
    id: 'statecollege-parade-rolls-on',
    headline: "New Organization Ensures State College's July 4 Parade Rolls On",
    outlet: 'StateCollege.com',
    date: 'July 1, 2026',
    author: 'Geoff Rushton',
    excerpt:
      'A feature on the founding of Freedom Rising USA — formed out of Nittany American Legion Post 245 and led by President D.J. Watkins and Vice President Mitch DeLong — and how the new 501(c)(3) kept the 99th annual parade on the calendar.',
    url: 'https://www.statecollege.com/articles/community/new-organization-ensures-state-colleges-july-4-parade-rolls-on/',
  },
  {
    id: 'statecollege-july4-guide',
    headline: 'What to Know About Fourth of July Celebrations Around Centre County',
    outlet: 'StateCollege.com',
    date: 'June 29, 2026',
    author: 'Geoff Rushton',
    excerpt:
      "Centre County's July 4 event guide, naming Freedom Rising USA as the nonpartisan nonprofit sponsoring and organizing the State College parade, with the route and step-off details.",
    url: 'https://www.statecollege.com/articles/community/what-to-know-about-fourth-of-july-celebrations-around-centre-county/',
  },
  {
    id: 'wjac-tourism-funds',
    headline: 'Centre County Tourism Funds Help State College Fourth of July Parade Move Forward',
    outlet: 'WJAC-TV',
    date: 'June 24, 2026',
    author: 'Gary Sinderson',
    excerpt:
      'TV news coverage of Freedom Rising USA receiving a Centre County tourism grant to help cover parade costs, keeping the Fourth of July parade on track after funding became an issue.',
    url: 'https://wjactv.com/news/local/centre-county-tourism-funds-help-state-college-fourth-of-july-parade-move-forward',
  },
  {
    id: 'statecollege-tourism-grants',
    headline: 'Centre County Tourism Grant Program Awards Record $1.15M',
    outlet: 'StateCollege.com',
    date: 'June 24, 2026',
    author: 'Geoff Rushton',
    excerpt:
      "Reporting on the county's record tourism grant awards, quoting Vice President Mitch DeLong on Freedom Rising USA stepping forward to organize the parade and its vision for the parade's approaching centennial.",
    url: 'https://www.statecollege.com/articles/community/centre-county-tourism-grant-program-awards-record-1-15m/',
  },
]
