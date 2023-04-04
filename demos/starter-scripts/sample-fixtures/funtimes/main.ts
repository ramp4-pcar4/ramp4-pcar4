import screen from './screen.vue';
import { markRaw } from 'vue';
import { useFuntimesStore } from './store';

export class FuntimesFixture {
    added(): void {
        (this as any).$iApi.panel.register(
            {
                id: 'funtimes',
                config: {
                    screens: { 'funtimes-s1': markRaw(screen) },
                    button: {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" /></svg>`,
                        tooltip: 'funtimes'
                    },
                    alertName: 'funtimes'
                }
            },
            {
                i18n: {
                    messages: {
                        en: {
                            funtimes: 'Funtimes',
                            'funtimes.info':
                                'This is a custom panel designed to showcase an external store. Every two seconds or so, a random string of characters will appear below!'
                        },
                        fr: {
                            funtimes: '[FR] Funtimes',
                            'funtimes.info':
                                '[FR] This is a custom panel designed to showcase an external store. Every two seconds or so, a random string of characters will appear below!'
                        }
                    }
                }
            }
        );

        const funtimesStore = useFuntimesStore((this as any).$vApp.$pinia);
        setInterval(() => funtimesStore.addItem(), 2000);
    }

    removed() {
        // console.log(`[fixture] ${this.id} removed`);

        if ((this as any).$iApi.fixture.get('appbar')) {
            const appbarStore = (this as any).$iApi.useStore('appbar');
            appbarStore.removeButton('funtimes');
        }

        (this as any).$iApi.panel.remove('funtimes');
        const funtimesStore = useFuntimesStore((this as any).$vApp.$pinia);
        funtimesStore.$reset();
    }
}
