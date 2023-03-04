module.exports = {
  root: true,
  plugins: ['@nrwl/nx'],
  overrides: [
    {
      files: ['*.vue', '*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*']
              }
            ]
          }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' }
        ]
      }
    },
    {
      files: ['*.vue'],
      extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        'plugin:@nrwl/nx/typescript'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/multi-word-component-names': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript'],
      rules: {}
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true
      },
      rules: {}
    }
  ]
}
