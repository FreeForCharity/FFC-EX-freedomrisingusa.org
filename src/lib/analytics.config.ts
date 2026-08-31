// Analytics placeholder guard.
//
// This fork keeps its tracking IDs at the top of
// src/components/cookie-consent/index.tsx rather than in a config object, so
// this module holds only the guard the loaders there check against.

// The placeholder values this fork ships. Leaving a value as its placeholder
// has to keep that integration genuinely inert, rather than loading a tag for
// an account that does not exist; the X{6,} regex catches any other all-X
// variant.
const PLACEHOLDER_IDS: readonly string[] = [
  'G-XXXXXXXXXX',
  'XXXXXXXXXXXXXXX',
  'XXXXXXXXXX',
  'XXXXXXXX',
]

/**
 * True when an analytics ID has been replaced with a real value. A falsy or
 * whitespace-only value, one of the shipped placeholders, or any obviously
 * templated value counts as NOT configured, so the integration it belongs to
 * stays inert.
 */
export function isConfigured(id: string | undefined | null): boolean {
  if (!id) return false
  const trimmed = id.trim()
  if (!trimmed) return false
  if (PLACEHOLDER_IDS.includes(trimmed)) return false
  if (/X{6,}/.test(trimmed)) return false
  return true
}
