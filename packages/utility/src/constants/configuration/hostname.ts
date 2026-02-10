import { APP_HOST } from "@pooxlabs/utility"

/**
 * A set of allowed hostnames for **api** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `api.[domain]` - for production environment
 * - `api-preview.[domain]` - for preview environment
 * - `api.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { API_HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (API_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return ApiMiddleware(request)
 * }
 * ```
 */
export const API_HOSTNAMES = new Set([
  `api.${APP_HOST}`,
  `api-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **blog** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `blog.[domain]` - for production environment
 * - `blog-preview.[domain]` - for preview environment
 * - `blog.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { BLOG_HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (BLOG_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return BlogMiddleware(request)
 * }
 * ```
 */
export const BLOG_HOSTNAMES = new Set([
  `blog.${APP_HOST}`,
  `blog-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **ui** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string[]>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `ui.[domain]` - for production environment
 * - `ui-preview.[domain]` - for preview environment
 * - `ui.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { UI_HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (UI_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return UiMiddleware(request)
 * }
 * ```
 */
export const UI_HOSTNAMES = new Set([
  `ui.${APP_HOST}`,
  `ui-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **studio** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application can recognize and respond to
 *
 * **Value**
 * - `studio.[domain]` - for production environment
 * - `studio-preview.[domain]` - for preview environment
 * - `studio.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { STUDIO_HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (STUDIO_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return StudioMiddleware(request)
 * }
 * ```
 */
export const STUDIO_HOSTNAMES = new Set([
  `studio.${APP_HOST}`,
  `studio-preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for **web** access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { WEB_HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (WEB_HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return WebMiddleware(request)
 * }
 * ```
 */
export const WEB_HOSTNAMES = new Set([
  `${APP_HOST}`,
  `preview.${APP_HOST}`
])

/**
 * A set of allowed hostnames for access, used for domain validation
 *
 * **Syntax**
 * - `Set<string>` – A collection of valid hostnames that the application may recognize or respond to
 *
 * **Value**
 * - `[domain]` - for production environment
 * - `preview.[domain]` - for preview environment
 * - `*.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the set of allowed hostnames
 * import { HOSTNAMES } from "@pooxlabs/utility"
 *
 * // Check if the request originated from a valid hostname
 * if (HOSTNAMES.has(domain)) {
 *    // Handle the request here
 *    return WebMiddleware(request)
 * }
 * ```
 */
export const HOSTNAMES = [
  ...API_HOSTNAMES,
  ...BLOG_HOSTNAMES,
  ...UI_HOSTNAMES,
  ...STUDIO_HOSTNAMES,
  ...WEB_HOSTNAMES
]
