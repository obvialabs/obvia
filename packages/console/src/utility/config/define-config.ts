/**
 * Poox CLI configuration interface
 *
 * This type describes the shape of the configuration object
 * that can be exported from `poox.config.ts`, `poox.config.js`,
 * or `poox.config.mjs`.
 *
 * All fields are optional, so you can provide only what you need.
 */
export interface PooxConfig {
  package?: {

    /**
     * Author information for the package
     */
    author?: {
      /** Author's full name */
      name?: string
      /** Author's email address */
      email?: string
      /** Author's personal or project URL */
      url?: string
    }


    /**
     * Package name (e.g., "@poox/labs")
     */
    name?: string

    /**
     * Project description
     */
    description?: string

    /**
     * Comma-separated keywords for npm search
     */
    keywords?: string

    /**
     * License type (MIT, Apache-2.0, etc.)
     */
    license?: string

    /**
     * Homepage or documentation URL
     */
    homepage?: string

    /**
     * Initial version (default: "1.0.0")
     */
    version?: string

    /**
     * Issue tracker or bugs URL/email
     */
    bugs?: string
  }
}

export function defineConfig(config: PooxConfig): PooxConfig {
  return config
}
