import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse
} from "next/server"

import {
  type ParsedRequest
} from "@library/proxy/utility"

/**
 * Studio proxy for handling studio subdomain requests
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
 *   // Check if the current domain exists in the studio hostnames set
 *   if (STUDIO_HOSTNAMES.has(parsed.domain)) {
 *     // If it matches, run the blog proxy and return immediately
 *     return StudioProxy(request, event, parsed)
 *   }
 *
 *   // Otherwise, continue with Next.js default handling
 *   return NextResponse.next()
 * }
 * ```
 */
export async function StudioProxy(
  request: NextRequest,
  event: NextFetchEvent,
  parsed: ParsedRequest
): Promise<NextResponse> {
  // Internally rewrite the request to serve content from  `/studio.poox.io{fullPath}`
  return NextResponse.rewrite(new URL(`/studio.poox.io${parsed.fullPath}`, request.url))
}
