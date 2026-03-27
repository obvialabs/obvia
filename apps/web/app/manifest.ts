import { MetadataRoute } from "next"

/**
 * Provides install prompts, splash screen, icons, and theme configuration
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  return {
    // Full name of the application (used in install prompts)
    name              : "Obvia",

    // Short name (used when space is limited, e.g. app icon labels)
    short_name        : "Obvia",

    // Description of the app (shown in install prompts and app stores)
    description       : "A next‑gen design system with end‑to‑end capabilities — interface, console, fonts, icons and studio — built for clarity, scalability, and elegance.",

    // Start URL when the app is launched (entry point of the PWA)
    start_url         : "/",

    // Display mode: "standalone" makes the PWA look like a native app (no browser UI)
    display           : "standalone",

    // Background color used while the app is loading or on splash screen
    background_color  : "#111",

    // Theme color for the browser UI (address bar, task switcher, etc.)
    theme_color       : "#00b773",

    // Icons used by the PWA (different sizes for devices and contexts)
    icons             : [
      {
        src     : "https://cdn.obvia.studio/obvia/amblem.svg",
        sizes   : "any",
        type    : "image/svg+xml",
        purpose : "any",
      },
      {
        src     : "https://cdn.obvia.studio/obvia/manifest-192x192.png",
        sizes   : "192x192",
        type    : "image/png",
        purpose : "maskable",
      },
      {
        src     : "https://cdn.obvia.studio/obvia/manifest-256x256.png",
        sizes   : "256x256",
        type    : "image/png",
        purpose : "maskable",
      },
      {
        src     : "https://cdn.obvia.studio/obvia/manifest-512x512.png",
        sizes   : "512x512",
        type    : "image/png",
        purpose : "maskable",
      }
    ]
  }
}
