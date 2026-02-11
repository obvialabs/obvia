import { Command } from "commander"

import prompts from "prompts"

import {
  parsePackageName,
  loadConfig,
  type PooxConfig, parsePackageVersion
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
 * poox create:package @poox/package
 *
 * # With description
 * poox create:package @poox/package --description "Multi-framework development ecosystem"
 *
 * # With keywords
 * poox create:package @poox/package --keywords "ui,components,poox"
 *
 * # With license
 * poox create:package @poox/package --license MIT
 *
 * # With homepage
 * poox create:package @poox/package --homepage "https://poox.io"
 *
 * # With version
 * poox create:package @poox/package --version 1.2.0
 *
 * # With author
 * poox create:package @poox/package --author "Selçuk Çukur <selcukcukur@outlook.com.tr> (https://selcukcukur.com.tr)"
 *
 * # With bugs e-mail and URL
 * poox create:package @poox/package --bugs "selcukcukur@outlook.com.tr (https://github.com/pooxlabs/package/issues)"
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

  if (!options.description) {
    questions.push({
      type    : "text",
      name    : "description",
      message : "Package description",
      initial : config?.package?.description || ""
    })
  }

  if (!options.keywords) {
    questions.push({
      type    : "text",
      name    : "keywords",
      message : "Package keywords",
      initial : config?.package?.keywords || ""
    })
  }

  if (!options.license) {
    questions.push({
      type    : "text",
      name    : "license",
      message : "Package license",
      initial : config?.package?.license || "MIT"
    })
  }

  if (!options.homepage) {
    questions.push({
      type    : "text",
      name    : "homepage",
      message : "Package homepage",
      initial : config?.package?.homepage || ""
    })
  }

  if (!options.version) {
    questions.push({
      type    : "text",
      name    : "version",
      message : "Package version",
      initial : config?.package?.version || "0.0.1"
    })
  }

  if (!options.author) {
    questions.push({
      type    : "text",
      name    : "author",
      message : "Package author",
      initial : config?.package?.author?.name && config?.package?.author?.email
        ? `${config.package.author.name} <${config.package.author.email}>${config.package.author.url ? ` (${config.package.author.url})` : ""}`
        : ""
    })
  }

  if (!options.bugs) {
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
    homepage    : options.homepage || answers.homepage,
    version     : parsePackageVersion(options.version || answers.version),
    author      : options.author || answers.author,
    bugs        : options.bugs || answers.bugs,
  }

})

export {
  createPackage
}
