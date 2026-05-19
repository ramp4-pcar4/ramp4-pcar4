import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { DynamicHelpSection } from './help-state';

export const useHelpStore = defineStore('help', () => {
    const location = ref<string>('./help/');
    const dynamicSections = ref<DynamicHelpSection[]>([]);

    function addDynamicSection(section: DynamicHelpSection) {
        const existingSectionIndex = dynamicSections.value.findIndex(value => value.id === section.id);
        if (existingSectionIndex === -1) {
            dynamicSections.value.push(section);
            return;
        }

        dynamicSections.value.splice(existingSectionIndex, 1, section);
    }

    function removeDynamicSection(id: string) {
        const existingSectionIndex = dynamicSections.value.findIndex(section => section.id === id);
        if (existingSectionIndex !== -1) {
            dynamicSections.value.splice(existingSectionIndex, 1);
        }
    }

    return { location, dynamicSections, addDynamicSection, removeDynamicSection };
});
