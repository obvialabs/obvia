import { Command } from "commander"

import kleur from "kleur"

function header(program: Command) {
  console.clear()
  console.log(kleur.bold().blue(`\nPoox Console [v${program.version() || "1.0.0"}]`))
  console.log(kleur.gray("Universal CLI to create and manage projects, frameworks, and environments\n"))
}

function usage(program: Command) {
  console.log(kleur.bold().yellow("Usage :"))
  console.log(`  ${kleur.green(program.name())} ${kleur.cyan("command [options] [arguments]")}\n`)
}

// Print global options
function global(program: Command) {
  console.log(kleur.bold().yellow("Global Options:"))
  program.options.forEach(opt => {
    console.log(`  ${kleur.cyan(opt.flags)} ${opt.description || ""}`)
  })
  console.log("")
}

// Group commands by prefix
function groupCommands(program: Command): Record<string, Command[]> {
  const groups: Record<string, Command[]> = {}
  program.commands.forEach(cmd => {
    const fullName = cmd.name()
    const group = fullName.includes(":") ? fullName.split(":")[0] : fullName
    if (!groups[group]) groups[group] = []
    groups[group].push(cmd)
  })
  return groups
}

// Print commands artisan-style
function commands(program: Command, showOptions = false) {

  const groups = groupCommands(program)

  Object.entries(groups).forEach(([group, cmds]) => {
    console.log(kleur.bold().yellow(group))

    const longest = Math.max(...cmds.map(c => c.name().length))

    cmds.forEach(cmd => {
      const fullName = cmd.name()
      const desc = cmd.description() || ""
      const padded = fullName.padEnd(longest + 2) // minimal spacing
      console.log(`  ${kleur.green(padded)}${desc}`)

      if (showOptions && cmd.options.length > 0) {
        cmd.options.forEach(opt => {
          console.log(`      ${kleur.cyan(opt.flags)} ${opt.description}`)
        })
      }
    })

    console.log("")
  })
}

// Main support function
export function pooxSupport(program: Command, showOptions = false) {
  header(program)
  usage(program)

  if (showOptions)
    global(program)

  commands(program, showOptions)
}
