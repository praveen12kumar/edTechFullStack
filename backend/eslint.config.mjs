import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    {
        ignores: ['node_modules/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'commonjs',
            globals: {
                process: 'readonly',
                console: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            prettier: prettier,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            // Enforce consistent indentation (4 spaces)
            indent: ['error', 4],
            // Enforce single quotes
            quotes: ['error', 'single'],
            // Enforce semicolons
            semi: ['error', 'always'],
            // Enforce unix line breaks (LF)
            'linebreak-style': ['error', 'unix'],
            // Require === and !== (no implicit type conversions)
            eqeqeq: ['error', 'always'],
            // Max line length of 100 characters
            'max-len': ['error', { code: 100 }],
            // Enable Prettier as a lint rule
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                },
            ],
            // Auto-sort imports
            'simple-import-sort/imports': 'error',
            // Auto-sort exports
            'simple-import-sort/exports': 'error',
        },
    },
];
