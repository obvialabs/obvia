import type { NextRequest } from "next/server"

export interface ParsedRequest {
  /** The normalized domain name extracted from the request */
  domain: string
  /** The pathname portion of the URL */
  path: string
  /** The full path including query string */
  fullPath: string
  /** The first segment of the path, decoded for non-ASCII characters */
  key: string
  /** The entire path without the leading slash, decoded for non-ASCII characters */
  fullKey: string
  /** Query parameters represented as an object */
  searchParams: Record<string, string>
  /** Raw query string including the leading "?" if present */
  searchParamsRaw: string
}

/**
 * Parse a next.js request into structured metadata
 *
 * **Parameters**
 * - `request` - The next request object provided by next.js middleware or route handlers
 *
 * **Usage**
 * ```ts
 * // Import parse utility function
 * import { parse } from "@library/proxy/utility"
 *
 * // Parse the incoming request
 * const {
 *   domain,
 *   path,
 *   fullPath,
 *   key,
 *   fullKey,
 *   searchParams,
 *   searchParamsRaw
 * } = parse(request)
 *
 * // Normalized domain (e.g. "poox.io")
 * console.log(domain)
 *
 * // Pathname only (e.g. "/profile/settings")
 * console.log(path)
 *
 * // Path + query string (e.g. "/profile/settings?utm_source=srylius")
 * console.log(fullPath)
 *
 * // First path segment (e.g. "profile")
 * console.log(key)
 *
 * // Entire path without leading slash (e.g. "profile/settings")
 * console.log(fullKey)
 *
 * // Query parameters as an object (e.g. { utm_source: "poox" })
 * console.log(searchParams)
 *
 * // Raw query string (e.g. "?utm_source=poox")
 * console.log(searchParamsRaw)
 * ```
 */
export function parse(request: NextRequest): ParsedRequest {
  // Extract domain from request headers (e.g., poox.io, www.poox.io)
  let domain = request.headers.get("host") ?? ""

  // Extract pathname from the URL (e.g., /stats/github)
  let path = new URL(request.nextUrl.toString())

  // Normalize domain: remove "www." prefix and convert to lowercase
  domain = domain.replace(/^www\./, "").toLowerCase()

  // Extract query parameters as both string and object
  const parameters = path.searchParams.toString()
  const searchParams = Object.fromEntries(path.searchParams)
  const searchParamsRaw = parameters.length > 0 ? `?${parameters}` : ""

  // Combine path and query string into fullPath (e.g., /stats/srylius?utm_source=github)
  let fullPath = `${path.pathname}${searchParamsRaw}`

  // Extract the first path segment as key (e.g., /stats/srylius → "stats")
  const segments = path.pathname.split("/").filter(Boolean)
  const key = decodeURIComponent(segments[0] ?? "")

  // Extract fullKey: entire path without leading slash (e.g., /srylius/repo → "srylius/repo")
  const fullKey = decodeURIComponent(path.pathname.slice(1))

  return {
    domain          : domain,
    path            : path.pathname,
    fullPath        : fullPath,
    key             : key,
    fullKey         : fullKey,
    searchParams    : searchParams,
    searchParamsRaw : searchParamsRaw
  } as ParsedRequest
}
