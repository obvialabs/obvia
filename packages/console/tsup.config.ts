import { copyFileSync } from "fs"
import { defineConfig, type Options } from "tsup"

export default defineConfig((options: Options) => ({
  clean     : true,
  dts       : true,
  entry     : ["src/**/*.ts"],
  format    : ["esm"],
  sourcemap : true,
  minify    : true,
  target    : "ESNext",
  outDir    : "dist",
  treeshake : true,
  ...options,
  onSuccess: async () => {
    copyFileSync("src/tailwind.css", "dist/tailwind.css")
  },
}))
