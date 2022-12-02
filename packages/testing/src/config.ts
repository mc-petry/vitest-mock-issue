import { defineConfig } from 'vitest/config'

export async function defineTestConfig() {
  return defineConfig({
    test: {
      setupFiles: ['@my-app/testing/setup/framer-motion'],
      globals: true,
      deps: {
        inline: [/my-app/],
      }
    },
  })
}
