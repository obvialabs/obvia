import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse
} from "next/server"

import {
  type ParsedRequest
} from "@library/proxy/utility"

/**
 * API proxy for handling api subdomain requests
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
 *   // Check if the current domain exists in the api hostnames set
 *   if (API_HOSTNAMES.has(parsed.domain)) {
 *     // If it matches, run the api proxy and return immediately
 *     return ApiProxy(request, event, parsed)
 *   }
 *
 *   // Otherwise, continue with Next.js default handling
 *   return NextResponse.next()
 * }
 * ```
 */
export async function ApiProxy(
  request: NextRequest,
  event: NextFetchEvent,
  parsed: ParsedRequest
): Promise<NextResponse> {
  // Internally rewrite the request to serve content from `/api${fullPath}`
  return NextResponse.rewrite(new URL(`/api${parsed.fullPath}`, request.url))
}
