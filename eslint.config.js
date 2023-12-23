// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  gitignore: true,
  markdown: true,
  ignores: [
    'dist',
    'tsconfig.json',
  ],
}, {
  rules: {
    'no-console': 0,
  },
})
