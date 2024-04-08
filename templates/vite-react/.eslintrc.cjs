module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['@dvdevcz/eslint-config-typescript'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    ignorePatterns: [
        '.eslintrc.js',
        'vite.config.js',
    ],
    settings: {
        'import/resolver': {
            typescript: {
                alias: true,
            },
        },
    },
};
