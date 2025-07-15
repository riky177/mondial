import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    plugins: ['unused-imports', 'simple-import-sort'],
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'ignore',
        },
      ],
      'simple-import-sort/imports': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignorePatterns: ['node_modules/', 'public/', '.next/'],
  }),
];
export default eslintConfig;
