import { defineConfig, type Options } from "tsup"

export default defineConfig((options: Options) => ({
  clean     : true,
  dts       : true,
  entry     : [
    "src/index.ts",
    "src/poox.ts"
  ],
  format    : ["esm"],
  sourcemap : true,
  minify    : true,
  treeshake : true,
  ...options
}))
