import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFuntimesStore = defineStore('funtimes', () => {
    const items = ref<Array<string>>([]);

    function addItem() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let counter = 0;
        let result = '';
        const length = Math.floor(Math.random() * 23 + 10);
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
            counter += 1;
        }
        items.value.push(result);
    }

    return { items, addItem };
});
