import { Command } from "commander"

import prompts from "prompts"

import {
  parsePackageName,
  parsePackageVersion,
  parseHomepage,

  loadConfig,
  type PooxConfig, parseAuthor,
} from "@/utility"

/**
 * Register the `create:package` command
 *
 * **Argument**
 * - `name` - The name of the package (required)
 *
 * **Options**
 * - `description` - Project description
 * - `keywords` - Comma-separated keywords for npm search
 * - `license` - License type (MIT, Apache-2.0, etc.)
 * - `homepage` - Homepage or documentation URL
 * - `version` - Initial version (default: 1.0.0)
 * - `author` - Author info in format: Name <email> (url)
 * - `bugs` - Issue tracker or bugs URL
 *
 * **Usage**
 * ```bash
 * # Basic
 * poox create:package example
 *
 * # Description
 * poox create:package example --description "Multi-framework development ecosystem"
 *
 * # Keywords
 * poox create:package example --keywords "ui,components,poox"
 *
 * # License
 * poox create:package example --license "MIT"
 *
 * # Homepage
 * poox create:package example --homepage "https://poox.io"
 *
 * # Version
 * poox create:package example --version "1.2.0"
 *
 * # Author
 * poox create:package example --author "Selçuk Çukur <c.selcuk@poox.io> (https://poox.io)"
 *
 * # Bugs
 * poox create:package example --bugs "c.selcuk@poox.io (https://github.com/pooxlabs/example)"
 * ```
 */
const createPackage = new Command()
  .name("create:package")
  .description("create a new npm package with optional metadata")
  .argument("<name>", "the name of your package")

// Options
createPackage.option("--description <description>", "the description of your package")
createPackage.option("--keywords <keywords>", "the keywords of your package")
createPackage.option("--license <license>", "the license of your package")
createPackage.option("--homepage <homepage>", "the homepage of your package")
createPackage.option("--version <version>", "the version of your package")
createPackage.option("--author <author>", "the author of your package")
createPackage.option("--bugs <bugs>", "the bugs of your package")

// Action
createPackage.action(async (name, options) => {
  const questions: prompts.PromptObject[] = []
  const config: PooxConfig = await loadConfig()

  if (! options.description) {
    questions.push({
      type    : "text",
      name    : "description",
      message : "Package description",
      initial : config?.package?.description || ""
    })
  }

  if (! options.keywords) {
    questions.push({
      type    : "text",
      name    : "keywords",
      message : "Package keywords",
      initial : config?.package?.keywords || ""
    })
  }

  if (! options.license) {
    questions.push({
      type    : "text",
      name    : "license",
      message : "Package license",
      initial : config?.package?.license || "MIT"
    })
  }

  if (! options.homepage) {
    questions.push({
      type    : "text",
      name    : "homepage",
      message : "Package homepage",
      initial : config?.package?.homepage || ""
    })
  }

  if (! options.version) {
    questions.push({
      type    : "text",
      name    : "version",
      message : "Package version",
      initial : config?.package?.version || "0.0.1"
    })
  }

  if (! options.author) {
    questions.push({
      type    : "text",
      name    : "author",
      message : "Package author",
      initial : config?.package?.author?.name && config?.package?.author?.email
        ? `${config.package.author.name} <${config.package.author.email}>${config.package.author.url ? ` (${config.package.author.url})` : ""}`
        : ""
    })
  }

  if (! options.bugs) {
    questions.push({
      type    : "text",
      name    : "bugs",
      message : "Bugs (email or URL)",
      initial : config?.package?.bugs?.email || config?.package?.bugs?.url
        ? `${config.package.bugs.email ?? ""}${config.package.bugs.url ? ` (${config.package.bugs.url})` : ""}`
        : ""
    })
  }

  const answers = questions.length > 0 ? await prompts(questions) : {}

  const result = {
    name        : parsePackageName(name, config?.package?.name),
    description : options.description || answers.description,
    keywords    : options.keywords || answers.keywords,
    license     : options.license || answers.license,
    homepage    : parseHomepage(options.homepage || answers.homepage),
    version     : parsePackageVersion(options.version || answers.version),
    author      : parseAuthor(options.author || answers.author),
    bugs        : options.bugs || answers.bugs,
  }

  console.log(JSON.stringify(result, null, 2))
})

export {
  createPackage
}
