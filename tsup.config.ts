import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['server'],
  outDir: 'dist/server',
  target: 'node22',
  format: ['cjs'],
  clean: true,
  minify: true,
  external: ['lightningcss', 'esbuild', 'vite'],
  noExternal: ['express', 'sirv', 'compression'],
})
