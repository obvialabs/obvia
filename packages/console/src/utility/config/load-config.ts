import fs from "fs"
import path from "path"
import { pathToFileURL } from "url"

import type { PooxConfig } from "@/utility"

const CONFIG_FILES = ["poox.config.ts", "poox.config.js", "poox.config.mjs"]

export async function loadConfig(configPath?: string): Promise<PooxConfig> {
  const cwd = process.cwd()
  const resolvedPath = configPath
    ? path.resolve(cwd, configPath)
    : CONFIG_FILES.map(file => path.resolve(cwd, file))
      .find(filePath => fs.existsSync(filePath))

  if (resolvedPath) {
    // 🔑 Mutlak yolu file:// URL’ye çeviriyoruz
    const fileUrl = pathToFileURL(resolvedPath).href
    const configModule = await import(fileUrl)
    return configModule.default || configModule
  }

  return {} as PooxConfig
}
