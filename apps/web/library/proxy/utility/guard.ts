import { type NextRequest, NextResponse } from 'next/server'

/**
 * Authentication guard utility function
 *
 * **Props**
 * - `request` - The incoming Next.js request object
 * - `fullPath` - The full URL path of the request (e.g. `/profile/settings`)
 * - `path` - The normalized path segment of the request (e.g. `/profile`)
 * - `session` - Session cookie object retrieved from the request
 * - `domain` - The base domain used for redirects (e.g. `studio.poox.io` or `poox.io`)
 * - `publicRoutes` - An array of route paths that should be accessible without authentication
 *
 * **Usage**
 * ```ts
 * // Call the guard function to check authentication and route access
 * const response = guard(request, fullPath, path, cookies, domain, publicRoutes)
 *
 * // If the guard returned a response (redirect or next), immediately return it
 * if (response) return response
 * ```
 */
export function guard(
  request: NextRequest,
  fullPath: string,
  path: string,
  session: any,
  domain: string,
  exclude: string[] = []
): NextResponse | null {
  // Check if the current path is public
  const isPublic = exclude?.includes(path)

  // If no session cookie and the route is not public, redirect to log in
  if (!session && !isPublic) {
    return NextResponse.redirect(
      new URL(
        // Append ?next=fullPath if not on root, so user returns after login
        `${domain}/login${path === "/" ? "" : `?next=${encodeURIComponent(fullPath)}`}`,
        request.url,
      )
    )
  }

  return null
}
