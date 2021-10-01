module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential', //
        '@vue/prettier',
        '@vue/typescript'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-dupe-class-members': 'off', // `no-dupe-class-members` complains when function overloads are used
        'no-useless-escape': 'off'
    },
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
