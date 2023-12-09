module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  globals: {
    window: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'prettier',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    'no-trailing-spaces': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-multi-spaces': 'error',
    'react/function-component-definition': [
      2,
      {
        'namedComponents': 'arrow-function'
      }
    ],
    'arrow-body-style': 'off',
  },
};
