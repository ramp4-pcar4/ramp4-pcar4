import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHelpStore = defineStore('help', () => {
    const location = ref<string>('./help/');
    return { location };
});
