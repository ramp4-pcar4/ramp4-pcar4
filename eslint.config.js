import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginCypress from 'eslint-plugin-cypress/flat';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}']
    },
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/tests/**', '**/*.d.ts']
    },
    {
        rules: {
            'vue/script-setup-uses-vars': 'error',
            'vue/multi-word-component-names': 'off'
        }
    },
    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    {
        ...pluginCypress.configs.recommended,
        files: [
            '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
            'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
            'cypress/support/**/*.{js,ts,jsx,tsx}'
        ]
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'vue/multi-word-component-names': 'off'
        }
    },
    skipFormatting
];
