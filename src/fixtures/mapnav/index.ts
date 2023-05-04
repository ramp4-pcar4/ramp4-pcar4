import MapnavV from './mapnav.vue';
import { MapnavAPI } from './api/mapnav';
import { useMapnavStore, type MapnavItemSet } from './store';
import type { MapnavFixtureConfig } from './store';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv?raw';

class MapnavFixture extends MapnavAPI {
    async added() {
        // console.log(`[fixture] ${this.id} added`);

        // since this has no panel we need to merge in translations ourselves
        // TODO?: see if giving fixtures a nicer way to merge translations w/o panel makes sense
        Object.entries(messages).forEach(value =>
            (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
        );

        const { destroy, el } = this.mount(MapnavV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: MapnavFixtureConfig | undefined) => this._parseConfig(value)
        );

        // since components used in appbar can be registered after this point, listen to the global component registration event and re-validate items
        // TODO revist. this seems to be self-contained to the mapnav fixture, so ideally can stay as is and not worry about events api.
        const handler = this.$iApi.event.on(GlobalEvents.COMPONENT, () => {
            this._parseConfig(this.config);
        });

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();
            this.$iApi.event.off(handler);

            // gracefully remove all buttons first (in case anything is watching for button removal)
            const mapnavStore = useMapnavStore(this.$vApp.$pinia);
            const items: MapnavItemSet = { ...mapnavStore.items };
            Object.keys(items).forEach(item => mapnavStore.removeItem(item));
            mapnavStore.$reset();
            destroy();
        };
    }
}

export default MapnavFixture;
