import type { NextFetchEvent, NextRequest } from "next/server"

import {
  ApiProxy,
  BlogProxy,
  StudioProxy,
  UiProxy,
  WebProxy,
} from "@library/proxy"

import {
  API_HOSTNAMES,
  BLOG_HOSTNAMES,
  STUDIO_HOSTNAMES,
  UI_HOSTNAMES,
  WEB_HOSTNAMES,
  proxyLog,
} from "@pooxlabs/utility"

import type { ParsedRequest } from "@library/proxy/utility"

/** Type definition for a proxy function used in the proxy layer */
type ProxyFn = (request: NextRequest, event: NextFetchEvent, parsed?: ParsedRequest) => Response | Promise<Response>

/** Resolver interface definition */
interface Resolver {
  // Human‑readable identifier for the proxy
  name: string

  // A Set<string> containing all domain hostnames that should be routed to this proxy
  hostnames: Set<string>

  // The actual proxy function (MiddlewareFn) that processes the request when the domain matches
  proxy: ProxyFn
}

/** Resolver registry for domain → proxy routing */
const resolvers: Resolver[] = [
  { name: "API", hostnames: API_HOSTNAMES, proxy: ApiProxy },
  { name: "Blog", hostnames: BLOG_HOSTNAMES, proxy: BlogProxy },
  { name: "Studio", hostnames: STUDIO_HOSTNAMES, proxy: StudioProxy },
  { name: "UI", hostnames: UI_HOSTNAMES, proxy: UiProxy },
  { name: "Web", hostnames: WEB_HOSTNAMES, proxy: WebProxy },
]

/**
 * Resolves the proxy function to run based on the incoming request's domain
 *
 * **Parameters**
 * - `reqquest` - Next.js incoming request (used for request manipulation)
 * - `event` - Next.js fetch event (used for background tasks)
 * - `parsed` - Parsed request metadata (domain, path, query, etc.)
 *
 * **Usage**
 * ```ts
 * // Import the utility function
 * import { resolveProxy } from "@library/proxy/utility"
 *
 * // Use it in your proxy layer
 * export default async function proxy(request: NextRequest, event: NextFetchEvent) {
 *    // Parse the incoming request
 *    const parsed = parse(request)
 *
 *    // Run the proxy function
 *    return resolveProxy(request, event, parsed)
 * }
 * ```
 */
export function resolveProxy(request: NextRequest, event: NextFetchEvent, parsed?: ParsedRequest) {
  // Iterate over the resolver registry
  for (const { name, hostnames, proxy } of resolvers) {
    // Check if the current domain matches any of the hostnames in the resolver registry
    if (hostnames.has(parsed.domain)) {
      // Log the event to the console
      proxyLog(name, request, parsed)

      // Run the proxy function
      return proxy(request, event, parsed)
    }
  }

  // Log the event to the console
  proxyLog("Unknown", request, parsed)

  // Return a 404 response
  return new Response("Not found", { status: 404 })
}
