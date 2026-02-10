import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse
} from "next/server"

import {
  type ParsedRequest
} from "@library/proxy/utility"

/**
 * Blog proxy for handling blog subdomain requests
 *
 * **Parameters**
 * - `request` - Next.js incoming request (used for request manipulation)
 * - `event` - Next.js fetch event (used for background tasks)
 * - `parsed` - Parsed request metadata (domain, path, query, etc.)
 *
 * **Usage**
 * ```ts
 * export default async function proxy(request: NextRequest, event: NextFetchEvent) {
 *   // Parse the incoming request
 *   const parsed = parse(request)
 *
 *   // Check if the current domain exists in the blog hostnames set
 *   if (BLOG_HOSTNAMES.has(parsed.domain)) {
 *     // If it matches, run the blog proxy and return immediately
 *     return BlogProxy(request, event, parsed)
 *   }
 *
 *   // Otherwise, continue with Next.js default handling
 *   return NextResponse.next()
 * }
 * ```
 */
export async function BlogProxy(
  request: NextRequest,
  event: NextFetchEvent,
  parsed: ParsedRequest
): Promise<NextResponse> {
  // Internally rewrite the request to serve content from  `/blog.poox.io{fullPath}`
  return NextResponse.rewrite(new URL(`/blog.poox.io${parsed.fullPath}`, request.url))
}
