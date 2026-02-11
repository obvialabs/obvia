import { Command } from "commander"

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

})

export {
  createPackage
}
