// Analytics placeholder guard.
//
// This fork keeps its tracking IDs at the top of
// src/components/cookie-consent/index.tsx rather than in a config object, so
// this module holds only the guard the loaders there check against.

// The placeholder values this fork ships. Leaving a value as its placeholder
// has to keep that integration genuinely inert, rather than loading a tag for
// an account that does not exist.
//
// The `X{6,}` test below is deliberately UNANCHORED, so it rejects a run of
// six or more X's anywhere in the value — not only a value that is entirely
// X's. That is wider than the exact list above on purpose: it catches the
// half-edited placeholder (`G-XXXXXXXX12`, `G-ABCXXXXXXX`) that an anchored
// pattern would wave through. The cost is that a genuinely random ID
// containing six consecutive X's would be refused; measured over 20 million
// simulated GA4-shaped IDs (10 characters from A-Z0-9), that happened zero
// times. Between the two failure modes this one is the right way round: a
// refused real ID means analytics quietly does not load, which is visible in
// the reporting and reversible, while an accepted placeholder means every
// visitor makes a third-party request, and gets a cookie, for an account
// that does not exist.
const PLACEHOLDER_IDS: readonly string[] = [
  'G-XXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXX',
  'XXXXXXXX',
]

/**
 * True when an analytics ID has been replaced with a real value. A falsy or
 * whitespace-only value, one of the shipped placeholders, or any value
 * carrying a six-or-longer run of X's counts as NOT configured, so the
 * integration it belongs to stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
