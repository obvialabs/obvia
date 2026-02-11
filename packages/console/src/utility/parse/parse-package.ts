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

export function parsePackageVersion(raw: string, defaultVersion = "0.0.1"): string {
  // Trim whitespace from the beginning and end of the raw input
  const trimmed = raw.trim()

  // Regex for valid semver (basic check: 1.2.3, 1.2.3-alpha, 1.2.3+build)
  const semverRegex = /^(\d+)\.(\d+)\.(\d+)(-[0-9A-Za-z-.]+)?(\+[0-9A-Za-z-.]+)?$/

  // If the input matches semver, return it
  if (semverRegex.test(trimmed)) {
    return trimmed
  }

  // If not valid, fall back to default version
  return defaultVersion
}
