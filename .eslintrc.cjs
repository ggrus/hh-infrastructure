module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@hh.ru/eslint-config',
  ],
  "overrides": [
    {
        "files": "*.{ts,tsx}",
        "extends": "@hh.ru/eslint-config/typescript",
    },
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
