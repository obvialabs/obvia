/**
 * The name of the application, used for branding and display purposes
 *
 * **Syntax**
 * - `string` – A human-readable name for the app, shown in interface and metadata
 *
 * **Usage**
 * ```ts
 * // Import the current application name
 * import { APP_NAME } from "@pooxlabs/utility"
 *
 * // Build a custom welcome message
 * const welcomeMessage = `Welcome to ${APP_NAME}!`
 *
 * // Redirect user to an app-specific landing page
 * return Response.redirect(`/landing?app=${APP_NAME}`)
 *
 * // Example: logging the current application name
 * console.log("Current application name:", APP_NAME)
 * ```
 */
export const APP_NAME: string = process.env.NEXT_PUBLIC_APP_NAME || "Poox"

/**
 * The current environment the app is running in
 *
 * **Syntax**
 * - `string` – Accepted environment identifier (development, preview, production)
 *
 * **Value**
 * - `development` – Local development mode with logging and dev tools
 * - `preview` – Staging or preview deployments for **QA** and **UAT**
 * - `production` – Live environment with optimized performance
 *
 * **Usage**
 * ```ts
 * // Import the current environment
 * import { APP_ENV } from "@pooxlabs/utility"
 *
 * // Enable dev tools only in development
 * if (APP_ENV === "development") {
 *   enableDevTools()
 * }
 *
 * // Redirect user to an environment-specific landing page
 * return Response.redirect(`/landing?env=${APP_ENV}`)
 *
 * // Example: logging the current environment
 * console.log("Current app environment:", APP_ENV)
 * ```
 */
export const APP_ENV: string = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NEXT_PUBLIC_APP_ENV ||  "production"

/**
 * The current version of the application
 *
 * **Syntax**
 * - `string` – Semantic version string used for diagnostics, cache busting, or display
 *
 * **Usage**
 * ```ts
 * // Import the current application version
 * import { APP_VERSION } from "@pooxlabs/utility"
 *
 * // Build a custom version message
 * const versionMessage = `Application v${APP_VERSION}`
 *
 * // Redirect a user to an app-specific landing page with version info
 * return Response.redirect(`/landing?version=${APP_VERSION}`)
 *
 * // Example: using a version in a cache key
 * const cacheKey = `assets-${APP_VERSION}`
 *
 * // Example: logging the current application version
 * console.log("Current application version:", APP_VERSION)
 * ```
 */
export const APP_VERSION: string = process.env.NEXT_PUBLIC_APP_VERSION || "0.0.1"

/**
 * Debug mode flag, used to enable developer-only features
 *
 * **Syntax**
 * - `string` – Accepted debug mode flag identifier
 *
 * **Value**
 * - `true` – Enables debug mode with developer-only features
 * - `false` – Disables debug mode for optimized production behavior
 *
 * **Usage**
 * ```ts
 * import { APP_DEBUG } from "@pooxlabs/utility"
 *
 * // Enable verbose logging only in debug mode
 * if (APP_DEBUG === "true") {
 *   console.debug("Debug mode enabled")
 * }
 *
 * // Conditionally show developer-only UI
 * const showDevPanel = APP_DEBUG === "true"
 *
 * // Redirect to debug dashboard
 * if (APP_DEBUG === "true") {
 *   return Response.redirect("/debug/dashboard")
 * }
 *
 * // Logging the current debug flag
 * console.log("Current debug flag:", APP_DEBUG)
 * ```
 */
export const APP_DEBUG: string = process.env.NEXT_PUBLIC_APP_DEBUG || "true"

/**
 * The base URL of the application, used for routing, API calls, and client-server communication
 *
 * **Syntax**
 * - `string` – A valid URL string pointing to the deployed app instance or local development server
 *
 * **Usage**
 * ```ts
 * import { APP_URL } from "@pooxlabs/utility"
 *
 * // Example: API health check
 * const health = await fetch(`${APP_URL}/api/health`).then(r => r.json())
 *
 * // Example: redirect to app base
 * return Response.redirect(APP_URL)
 *
 * // Example: build a dynamic route
 * const onboardingHref = `${APP_URL}/onboarding/step`
 *
 * // Example: logging the current app base URL
 * console.log("Current app base URL:", APP_URL)
 * ```
 */
export const APP_URL: string = process.env.NEXT_PUBLIC_APP_URL || "https://poox.dev:9000"

/**
 * The base host of the application, used for routing, API calls, and client-server communication
 *
 * **Syntax**
 * - `string` — A valid host string pointing to the deployed app instance or local development server
 *
 * **Usage**
 * ```ts
 * import { APP_HOST } from "@pooxlabs/utility"
 *
 * // Example: API health check
 * const health = await fetch(`http://${APP_HOST}/api/health`).then(r => r.json())
 *
 * // Example: redirect to app base
 * return Response.redirect(`http://${APP_HOST}`)
 *
 * // Example: build a dynamic route
 * const onboardingHref = `http://${APP_HOST}/onboarding/step`
 *
 * // Example: logging the current app host
 * console.log("Current app host:", APP_HOST)
 * ```
 */
export const APP_HOST: string = process.env.NEXT_PUBLIC_APP_DOMAIN || "poox.dev:9000"

/**
 * The base URL for serving static assets such as images, fonts, and scripts
 *
 * **Syntax**
 * - `string` – A valid URL string pointing to the asset host, CDN, or local development server
 *
 * **Usage**
 * ```ts
 * import { APP_ASSET_URL } from "@pooxlabs/utility"
 *
 * // Example: build asset path
 * const logoSrc = `${APP_ASSET_URL}/logo.png`
 *
 * // Example: preload font
 * const fontHref = `${APP_ASSET_URL}/fonts/main.woff2`
 *
 * // Example: redirect to asset CDN dashboard
 * return Response.redirect(`${APP_ASSET_URL}/dashboard`)
 *
 * // Example: logging the current asset host URL
 * console.log("Current asset host URL:", APP_ASSET_URL)
 * ```
 */
export const APP_ASSET_URL: string = process.env.NEXT_PUBLIC_ASSET_URL || "https://cdn.poox.io"

/**
 * The base URL for accessing user-uploaded content and persistent storage resources
 *
 * **Syntax**
 * - `string` – A valid URL string pointing to the storage backend, object store, or local development endpoint
 *
 * **Usage**
 * ```ts
 * import { APP_STORAGE_URL } from "@pooxlabs/utility"
 *
 * // Example: build storage path
 * const avatarUrl = `${APP_STORAGE_URL}/uploads/avatar.png`
 *
 * // Example: redirect to storage dashboard
 * return Response.redirect(`${APP_STORAGE_URL}/dashboard`)
 *
 * // Example: use storage URL in a fetch call
 * const files = await fetch(`${APP_STORAGE_URL}/api/files`).then(r => r.json())
 *
 * // Example: logging the current storage host URL
 * console.log("Current storage host URL:", APP_STORAGE_URL)
 * ```
 */
export const APP_STORAGE_URL: string = process.env.NEXT_PUBLIC_STORAGE_URL || "https://cdn.poox.io"

/**
 * The default locale of the application
 *
 * **Syntax**
 * - `string` – Locale code used for i18n, routing, and language-specific configuration
 *
 * **Value**
 * - `tr` - Turkish Language (LTR)
 * - `en` - English Language (LTR)
 * - `de` - German Language (LTR)
 * - `fr` - French Language (LTR)
 * - `ru` - Russian Language (LTR)
 * - `ar` - Arabic Language (RTL)
 *
 * **Usage**
 * ```ts
 * // Import the current application locale
 * import { APP_LOCALE } from "@pooxlabs/utility"
 *
 * // Example: check current locale
 * console.log("Current application locale:", APP_LOCALE)
 *
 * // Example: use locale in routing
 * const localizedPath = `/${APP_LOCALE}/onboarding/step`
 * ```
 */
export const APP_LOCALE: string = process.env.NEXT_PUBLIC_APP_LOCALE || "tr"

/**
 * The set of supported application locales
 *
 * **Syntax**
 * - `Set<string>` – A collection of locale codes used for i18n, routing, and language-specific configuration
 *
 * **Value**
 * - `tr` - Turkish Language (LTR)
 * - `en` - English Language (LTR)
 * - `de` - German Language (LTR)
 * - `fr` - French Language (LTR)
 * - `ru` - Russian Language (LTR)
 * - `ar` - Arabic Language (RTL)
 *
 * **Usage**
 * ```ts
 * // Import the supported locales
 * import { APP_LOCALES, APP_LOCALE } from "@pooxlabs/utility"
 *
 * // Check if a locale is supported
 * if (APP_LOCALES.has(userLocale)) {
 *   console.log(`Locale ${userLocale} is supported`)
 * } else {
 *   console.log(`Falling back to default locale: ${APP_LOCALE}`)
 * }
 *
 * // Iterate over supported locales (modern for...of)
 * for (const locale of APP_LOCALES.values()) {
 *   console.log("Available locale:", locale)
 * }
 *
 * // Convert to array if needed
 * const localeArray = Array.from(APP_LOCALES)
 * console.log("Locales as array:", localeArray)
 *
 * // Using forEach directly on the Set
 * APP_LOCALES.forEach(locale => {
 *   console.log("Locale via forEach:", locale)
 * })
 * ```
 */
export const APP_LOCALES = new Set<string>([
  "tr",
  "en",
  "de",
  "fr",
  "ru",
  "ar"
])

/**
 * The default currency of the application
 *
 * **Syntax**
 * - `string` — ISO 4217 currency code used for i18n, formatting, and financial operations
 *
 * **Value**
 * - `TRY` - Turkish Lira (Right)
 * - `USD` - English Language (Left)
 * - `EUR` - German Language (Left)
 * - `GBP` - French Language (Left)
 *
 * **Usage**
 * ```ts
 * // Import the current application currency
 * import { APP_CURRENCY } from "@pooxlabs/utility"
 *
 * // Check current currency
 * console.log("Current application currency:", APP_CURRENCY)
 *
 * // Format a price
 * const formatted = new Intl.NumberFormat("tr-TR", {
 *   style: "currency",
 *   currency: APP_CURRENCY
 * }).format(199.99)
 * ```
 */
export const APP_CURRENCY: string = process.env.NEXT_PUBLIC_APP_CURRENCY || "TRY"

/**
 * The set of supported application currencies
 *
 * **Syntax**
 * - `Set<string>` — A collection of ISO 4217 currency codes used for i18n, formatting, and financial operations
 *
 * **Values**
 * - `TRY` — Turkish Lira
 * - `USD` — US Dollar
 * - `EUR` — Euro
 * - `GBP` — British Pound
 *
 * **Usage**
 * ```ts
 * // Import the supported currencies
 * import { APP_CURRENCIES, APP_CURRENCY } from "@pooxlabs/utility"
 *
 * // Check if a currency is supported
 * if (APP_CURRENCIES.has(userCurrency)) {
 *   console.log(`Currency ${userCurrency} is supported`)
 * } else {
 *   console.log(`Falling back to default currency: ${APP_CURRENCY}`)
 * }
 *
 * // Iterate over supported currencies
 * for (const currency of APP_CURRENCIES.values()) {
 *   console.log("Available currency:", currency)
 * }
 *
 * // Convert to array if needed
 * const currencyArray = Array.from(APP_CURRENCIES)
 * console.log("Currencies as array:", currencyArray)
 *
 * // Using forEach directly on the Set
 * APP_CURRENCIES.forEach(currency => {
 *   console.log("Currency via forEach:", currency)
 * })
 * ```
 */
export const APP_CURRENCIES = new Set<string>([
  "TRY",
  "USD",
  "EUR",
  "GBP"
])

/**
 * The default timezone of the application
 *
 * **Syntax**
 * - `string` — Timezone identifier used for date/time formatting, scheduling, and server-client consistency
 *
 * **Usage**
 * ```ts
 * // Import the current application timezone
 * import { APP_TIMEZONE } from "@pooxlabs/utility"
 *
 * // Check current timezone
 * console.log("Current application timezone:", APP_TIMEZONE)
 *
 * // Format a date in the current timezone
 * const formatted = new Intl.DateTimeFormat("en-US", {
 *   timeZone: APP_TIMEZONE,
 *   dateStyle: "full",
 *   timeStyle: "long"
 * }).format(new Date())
 *
 * // Use timezone in scheduling logic
 * const meeting = new Date().toLocaleString("tr-TR", { timeZone: APP_TIMEZONE })
 * ```
 */
export const APP_TIMEZONE: string = process.env.NEXT_PUBLIC_APP_TIMEZONE || "UTC"
