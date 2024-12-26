import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'

export default tseslint.config({ ignores: ['dist'] }, pluginReact.configs.flat.recommended, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  settings: { react: { version: 'detect' } },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: importPlugin,
    prettier,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'no-console': ['warn', { allow: ['error', 'warn', 'debug'] }],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'import/no-duplicates': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
        pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
})
