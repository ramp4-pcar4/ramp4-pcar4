import { DynamicHelpSection } from './help-state';
export declare const useHelpStore: import('pinia').StoreDefinition<"help", Pick<{
    location: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    dynamicSections: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[], DynamicHelpSection[] | {
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[]>;
    addDynamicSection: (section: DynamicHelpSection) => void;
    removeDynamicSection: (id: string) => void;
}, "location" | "dynamicSections">, Pick<{
    location: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    dynamicSections: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[], DynamicHelpSection[] | {
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[]>;
    addDynamicSection: (section: DynamicHelpSection) => void;
    removeDynamicSection: (id: string) => void;
}, never>, Pick<{
    location: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    dynamicSections: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[], DynamicHelpSection[] | {
        id: string;
        markdown: import('./help-state').DynamicHelpMarkdown;
    }[]>;
    addDynamicSection: (section: DynamicHelpSection) => void;
    removeDynamicSection: (id: string) => void;
}, "addDynamicSection" | "removeDynamicSection">>;
