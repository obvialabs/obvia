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
