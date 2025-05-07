import { markRaw } from 'vue';
import { DrawAPI } from './api/drawApi';
import DrawV from './draw.vue';
import messages from './lang/lang.csv?raw';
import { GlobalEvents } from '@/api';

class DrawFixture extends DrawAPI {
    async init() {
        // Mount a new instance of the component
        const { el } = this.mount(DrawV, {
            app: this.$element
        });

        // Add it to the DOM
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // Add language messages
        Object.entries(messages).forEach(value => this.$iApi.$i18n.mergeLocaleMessage(...value));

        // Register icons
        this.$iApi.component('point-icon', markRaw(import('./icons/point-icon.vue')));
        this.$iApi.component('line-icon', markRaw(import('./icons/line-icon.vue')));
        this.$iApi.component('polygon-icon', markRaw(import('./icons/polygon-icon.vue')));
        this.$iApi.component('circle-icon', markRaw(import('./icons/circle-icon.vue')));
        this.$iApi.component('rectangle-icon', markRaw(import('./icons/rectangle-icon.vue')));

        this._parseConfig(this.config);
    }

    async added() {
        // Register for language and config changes
        this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            this.init();
        });
    }
}

export default DrawFixture;
