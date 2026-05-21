import pluginVue from 'eslint-plugin-vue';
import { configureVueProject, defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

configureVueProject({
    rootDir: import.meta.dirname,
    scriptLangs: ['ts'],
    tsSyntaxInTemplates: true
});

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/tests/**', '**/*.d.ts']
    },
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}']
    },
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        name: 'app/rules',
        files: ['**/*.{ts,mts,tsx,vue}'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-this-alias': 'off',
            'vue/multi-word-component-names': 'off'
        }
    },
    skipFormatting
);
