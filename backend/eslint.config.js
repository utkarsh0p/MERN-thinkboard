import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // change to "commonjs" if using require()
      globals: globals.node, // backend uses Node globals
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules,

      'no-unused-vars': 'warn',
      'prettier/prettier': 'error', // run prettier inside ESLint
    },
  },
];
