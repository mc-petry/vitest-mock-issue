import * as fs from 'node:fs'
import * as path from 'node:path'
import { defineConfig } from 'tsup'

const setupFilesDir = './src/setup-files'
const setupFiles = fs
  .readdirSync(setupFilesDir, { withFileTypes: true })
  .map(({ name }) => path.parse(name))
  .filter(({ ext }) => ext === '.ts')
  .reduce((prev, { name, base }) => {
    prev[`setup/${name}`] = `${setupFilesDir}/${base}`
    return prev
  }, {} as Record<string, string>)

export default defineConfig((options) => ({
  entry: {
    index: './src/exports.ts',
    config: './src/config.ts',
    ...setupFiles,
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: !options.watch,
  minify: !options.watch,
}))
