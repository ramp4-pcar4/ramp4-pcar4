import { markRaw } from 'vue';
import { useDrawStore } from './store';
import { DrawAPI } from './api/drawApi';
import DrawV from './draw.vue';
import messages from './lang/lang.csv?raw';
import { GlobalEvents } from '@/api';

class DrawFixture extends DrawAPI {
    async init() {
        // Add language messages
        Object.entries(messages).forEach(value => this.$iApi.$i18n.mergeLocaleMessage(...value));
        this._parseConfig(this.config);

        // Register only the icons for enabled draw types
        const drawStore = useDrawStore(this.$vApp.$pinia);
        drawStore.supportedTypes.forEach(typeCfg => {
            const name = `${typeCfg.type}-icon`;
            this.$iApi.component(name, markRaw(import(`./icons/${typeCfg.type}-icon.vue`)));
        });

        // Mount a new instance of the component
        const { el } = this.mount(DrawV, {
            app: this.$element
        });

        // Add it to the DOM
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    async added() {
        // Re-initialize on map create or config change
        this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            this.init();
        });
    }
}

export default DrawFixture;
