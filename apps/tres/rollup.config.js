import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    preserveModules: true,
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json"
    }),
    nodeResolve({
      preferBuiltins: true,
      extensions: ['.js', '.ts']
    })
  ]
}