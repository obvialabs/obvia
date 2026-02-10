import type { NextRequest } from "next/server"

import kleur from "kleur"

/**
 * Formats a proxy log message
 *
 * **Parameters**
 * - `name` – Name of the middleware
 * - `request` - Next.js incoming request
 * - `parsed` - Parsed request metadata
 *
 * **Usage**
 * ```ts
 * // Import the log formatter function
 * import { proxyLog } from "@pooxlabs/utility"
 *
 * // Log a proxy request
 * proxyLog("Name", request, parsed)
 * ```
 */
export function proxyLog(
  name: string,
  request: NextRequest,
  parsed: any
) {
  // Timestamp
  const time = new Date().toLocaleString()

  // Domain
  const domain = parsed.domain

  console.log(
    // Timestamp + Tag
    kleur.gray(`[${time}]`) + " " + kleur.cyan().bold("[Proxy]") + " " +
    // Middleware
    kleur.yellow().bold(name) + " → " +
    // Method
    `Method = ${kleur.green().bold(request.method)} | ` +
    // Domain
    `Domain = ${kleur.magenta(domain)} | ` +
    // Path
    `Path = ${kleur.blue().bold(request.nextUrl?.pathname ?? "")} ` +
    // Rewrite
    `→ (${kleur.gray(`${parsed.domain || ""}${parsed.fullPath || "-"}`)})`
  )
}
