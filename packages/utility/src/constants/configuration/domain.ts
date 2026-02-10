import {
  APP_ENV,
  APP_HOST
} from "@pooxlabs/utility"

/**
 * The domain name of the **api**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the API server for the current deployment context
 *
 * **Value**
 * - `protocol://api.[domain]` - for production environment
 * - `protocol://api-preview.[domain]` - for preview environment
 * - `protocol://api.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { API_DOMAIN } from "@pooxlabs/utility"
 *
 * // Build a link to a custom api page
 * const apiCustomHref = new URL("/onboarding/step", API_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", API_DOMAIN)
 *
 * // Example: logging the current environment domain
 * console.log("Current api domain:", API_DOMAIN)
 * ```
 */
export const API_DOMAIN =
  APP_ENV === "production"
    ? `https://api.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://api-preview.${APP_HOST}`
      : `https://api.${APP_HOST}`

/**
 * The domain name of the **blog**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the blog server for the current deployment context
 *
 * **Value**
 * - `protocol://blog.[domain]` - for production environment
 * - `protocol://blog-preview.[domain]` - for preview environment
 * - `protocol://blog.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { BLOG_DOMAIN } from "@pooxlabs/utility"
 *
 * // Build a link to a custom blog page
 * const blogCustomHref = new URL("/onboarding/step", BLOG_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", BLOG_DOMAIN)
 *
 * // Example: logging the current environment domain
 * console.log("Current blog domain:", BLOG_DOMAIN)
 * ```
 */
export const BLOG_DOMAIN =
  APP_ENV === "production"
    ? `https://blog.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://blog-preview.${APP_HOST}`
      : `https://blog.${APP_HOST}`

/**
 * The domain name of the **ui**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the career server for the current deployment context
 *
 * **Value**
 * - `protocol://ui.[domain]` - for production environment
 * - `protocol://ui-preview.[domain]` - for preview environment
 * - `protocol://ui.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { UI_DOMAIN } from "@pooxlabs/utility"
 *
 * // Build a link to a UI career page
 * const uiCustomHref = new URL("/onboarding/step", UI_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", UI_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current UI domain:", UI_DOMAIN)
 * ```
 */
export const UI_DOMAIN =
  APP_ENV === "production"
    ? `https://ui.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://ui-preview.${APP_HOST}`
      : `https://ui.${APP_HOST}`

/**
 * The domain name of the **studio**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string pointing to the developer server for the current deployment context
 *
 * **Value**
 * - `protocol://studio.[domain]` - for production environment
 * - `protocol://studio-preview.[domain]` - for preview environment
 * - `protocol://studio.poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { STUDIO_DOMAIN } from "@pooxlabs/utility"
 *
 * // Build a link to a custom studio page
 * const studioCustomHref = new URL("/onboarding/step", STUDIO_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", STUDIO_DOMAIN)
 *
 * // Logging the current environment domain
 * console.log("Current dev domain:", STUDIO_DOMAIN)
 * ```
 */
export const STUDIO_DOMAIN =
  APP_ENV === "production"
    ? `https://studio.${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://studio-preview.${APP_HOST}`
      : `https://studio.${APP_HOST}`

/**
 * The domain name of the **web**, dynamically resolved based on the current environment
 *
 * **Syntax**
 * - `string` – A valid domain string used for routing, client-server communication, and environment-specific configuration
 *
 * **Value**
 * - `protocol://[domain]` - for production environment
 * - `protocol://preview.[domain]` - for preview environment
 * - `protocol://poox.dev:9000` - for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain name
 * import { WEB_DOMAIN } from "@pooxlabs/utility"
 *
 * // Build a link to a custom web page
 * const webCustomHref = new URL("/onboarding/step", WEB_DOMAIN)
 *
 * // Redirect user to the correct environment domain
 * return Response.redirect("/", WEB_DOMAIN)
 *
 * // Example: logging the current environment domain
 * console.log("Current web domain:", WEB_DOMAIN)
 * ```
 */
export const WEB_DOMAIN =
  APP_ENV === "production"
    ? `https://${APP_HOST}`
    : APP_ENV === "preview"
      ? `https://preview.${APP_HOST}`
      : `https://${APP_HOST}`

/**
 * Collection of all application domain constants, dynamically resolved based on the current environment.
 *
 * **Syntax**
 * - `string[]` – An array of valid domain strings used for routing, client-server communication, and environment-specific configuration.
 *
 * **Value**
 * - `protocol://[*]` – for production environment
 * - `protocol://*-preview.[*]` – for preview environment
 * - `protocol://*:9000` – for development environment
 *
 * **Usage**
 * ```ts
 * // Import the current environment domain names
 * import { DOMAINS } from "@pooxlabs/utility"
 *
 * // Checking if the current host is allowed to access the application
 * const currentHost = window.location.origin
 *
 * // If the current host is allowed, proceed with the rest of the logic
 * if (DOMAINS.includes(currentHost)) {
 *   // The current host is allowed, so we can proceed with the rest of the logic
 *   console.log("Valid domain:", currentHost)
 * } else {
 *   // The current host is not allowed, so we should redirect the user to a valid domain
 *   console.warn("Invalid domain:", currentHost)
 * }
 *
 * // API request validation: ensure the target URL starts with an allowed domain
 * function isAllowedDomain(url: string) {
 *   // Check if the URL starts with one of the allowed domains
 *   return DOMAINS.some(domain => url.startsWith(domain))
 * }
 *
 * // Checking if a given URL is allowed to access the application
 * console.log(isAllowedDomain("https://ui.poox.dev")) // true
 *
 * // Environment-based redirect: choose the correct domain depending on environment
 * const redirectDomain =
 *   process.env.NODE_ENV === "production"
 *     ? "https://ui.poox.io"
 *     : "https://ui.poox.dev:9000"
 *
 * // Redirect the user to the correct domain
 * window.location.href = redirectDomain
 *
 * // Checking if a given preview domain is valid
 * const previewDomain = "https://feature-preview.poox.io"
 *
 * // Check if the preview domain is valid
 * if (DOMAINS.includes(previewDomain)) {
 *   // The preview domain is valid, so we can proceed with the rest of the logic
 *   console.log("Preview domain is valid:", previewDomain)
 * }
 * ```
 */
export const DOMAINS: readonly Domain[] = [
  API_DOMAIN,
  BLOG_DOMAIN,
  UI_DOMAIN,
  STUDIO_DOMAIN,
  WEB_DOMAIN
] as const

/**
 * The type of all application domain constants
 */
export type Domain =
  | typeof API_DOMAIN
  | typeof BLOG_DOMAIN
  | typeof UI_DOMAIN
  | typeof STUDIO_DOMAIN
  | typeof WEB_DOMAIN
