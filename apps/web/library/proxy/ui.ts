import {
  type NextFetchEvent,
  type NextRequest,
  NextResponse
} from "next/server"

import {
  type ParsedRequest
} from "@library/proxy/utility"

/**
 * UI proxy for handling UI subdomain requests
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
 *   // Check if the current domain exists in the UI hostnames set
 *   if (UI_HOSTNAMES.has(parsed.domain)) {
 *     // If it matches, run the blog proxy and return immediately
 *     return UiProxy(request, event, parsed)
 *   }
 *
 *   // Otherwise, continue with Next.js default handling
 *   return NextResponse.next()
 * }
 * ```
 */
export async function UiProxy(
  request: NextRequest,
  event: NextFetchEvent,
  parsed: ParsedRequest
): Promise<NextResponse> {
  // Internally rewrite the request to serve content from  `/ui.poox.io{fullPath}`
  return NextResponse.rewrite(new URL(`/ui.poox.io${parsed.fullPath}`, request.url))
}
