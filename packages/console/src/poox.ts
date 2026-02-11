#!/usr/bin/env node
import { Command } from "commander"

import {
  createApp,
  createPackage
} from "@pooxlabs/console"

import { pooxSupport } from "@pooxlabs/console"

// Handle termination signals gracefully
process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
  const poox = new Command()
    .name("poox")
    .description("add items from registries to your project")
    .version("0.0.1", "--version", "display the version number")

    // Options
    .option("--debug", "enable debug mode with verbose logging")
    .option("--framework <name>", "specify framework (react, vue, next, svelte)")
    .option("--tailwind", "include tailwind css setup")
    .option("--docker", "generate docker configuration for the project")

  poox.addCommand(createApp)
  poox.addCommand(createPackage)

  poox.configureHelp({
    formatHelp: (cmd, helper) => {
      pooxSupport(cmd)

      return ""
    }
  })

  poox.parse()
}

main()
