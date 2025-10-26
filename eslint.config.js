import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // 忽略文件配置
  {
    ignores: ['node_modules/**', 'dist/**', '*.config.js', 'pnpm-lock.yaml'],
  },
  // JavaScript 基础配置
  js.configs.recommended,
  // TypeScript 文件配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    rules: {
      // TypeScript ESLint 推荐规则
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      // Prettier 集成
      'prettier/prettier': 'error',
      // 通用规则
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  // JavaScript 文件配置
  {
    files: ['**/*.js', '**/*.mjs'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      // Prettier 集成
      'prettier/prettier': 'error',
      // 通用规则
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  // Prettier 配置覆盖
  prettierConfig,
]
