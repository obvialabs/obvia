export function parsePackageName(raw: string, prefix?: string): string {
  // Trim whitespace from the beginning and end of the raw input
  const trimmed = raw.trim()

  // If a prefix is defined
  if (prefix && prefix.length > 0) {
    const safe = trimmed
      // Convert the name to lowercase
      .toLowerCase()
      // Remove any characters that are not letters, numbers, hyphen, or underscore
      // (slashes are removed because prefix already provides the scope separator)
      .replace(/[^a-z0-9-_]/g, "")

    // Return the final package name with prefix applied
    return `${prefix}/${safe}`
  }

  // If no prefix is defined:
  // - Keep the user-provided name as-is (except trimming and lowercasing)
  // - Slashes are preserved so users can manually provide scoped names
  return trimmed.toLowerCase()
}

export function parsePackageVersion(raw: string, fallback = "0.0.1"): string {
  // Trim whitespace from the beginning and end of the raw input
  const trimmed = raw.trim()

  // Regex for valid semver (basic check: 1.2.3, 1.2.3-alpha, 1.2.3+build)
  const semverRegex = /^(\d+)\.(\d+)\.(\d+)(-[0-9A-Za-z-.]+)?(\+[0-9A-Za-z-.]+)?$/

  // If the input matches semver, return it
  if (semverRegex.test(trimmed)) {
    return trimmed
  }

  // If not valid, fall back to default version
  return fallback
}

export function parseHomepage(raw: string, fallback = "https://example.com"): string {
  // Trim whitespace from the beginning and end of the raw input
  const trimmed = raw.trim()

  // Basic regex for valid URL (http/https)
  const urlRegex = /^(https?:\/\/[^\s/$.?#].[^\s]*)$/

  // If the input matches URL pattern, return it
  if (urlRegex.test(trimmed)) {
    return trimmed
  }

  // If not valid, fall back to default homepage
  return fallback
}

interface Author {
  name: string
  email?: string
  url?: string
}

export function parseAuthor(raw: string, fallback: Author = { name: "Unknown Author" }): Author {
  // Trim whitespace
  const trimmed = raw.trim()

  // Regex: Name <email> (url)
  const authorRegex = /^(.+?)(?:\s*<([^<>]+)>)?(?:\s*\((https?:\/\/[^\s)]+)\))?$/

  const match = trimmed.match(authorRegex)

  if (match) {
    const [, name, email, url] = match
    return {
      name: name.trim(),                // sadece isim
      email: email ? email.trim() : undefined, // e-posta varsa
      url: url ? url.trim() : undefined       // url varsa
    }
  }

  // Fallback
  return fallback
}
