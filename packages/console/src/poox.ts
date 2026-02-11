#!/usr/bin/env node
import { Command } from "commander"

// Commands
import { createPackage } from "@/commands/create-package"

// Utility
import { pooxSupport } from "@/commands/utility/support"

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

  poox.addCommand(createPackage)

  poox.configureHelp({
    formatHelp: (cmd, helper) => {
      pooxSupport(cmd)

      return ""
    }
  })

  //
  poox.parse()
}

main()
