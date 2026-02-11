export interface PooxConfig {
  package?: {
    /**
     * Package name prefix (e.g., "@poox/*")
     */
    name?: string

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
    bugs?: {
      email?: string
      url?: string
    }
  }
}

export function defineConfig(config: PooxConfig): PooxConfig {
  return config
}
