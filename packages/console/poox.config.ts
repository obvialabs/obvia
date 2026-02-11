import { defineConfig, type PooxConfig } from "@pooxlabs/console"

export default defineConfig({
  package : {
    name        : "@pooxlabs",
    description : "",
    keywords    : "",

    license     : "MIT",
    homepage    : "https://poox.io",
    version     : "1.0.0",

    author    : {
      name  : "Selçuk Çukur",
      email : "selcukcukur@outlook.com.tr",
      url   : "https://selcukcukur.com.tr"
    },
    bugs      : {
      email   : "security@poox.io",
      url     : "https://github.com/pooxlabs/poox/issues"
    },
  }
} satisfies PooxConfig)
