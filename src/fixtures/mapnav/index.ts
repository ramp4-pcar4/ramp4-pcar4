import MapnavV from './mapnav.vue';
import { MapnavAPI } from './api/mapnav';
import { mapnav } from './store';
import type { MapnavFixtureConfig } from './store';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv?raw';

class MapnavFixture extends MapnavAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: registering a fixture store module seems like a common action almost every fixture needs; check if this can be automated somehow
        this.$vApp.$store.registerModule('mapnav', mapnav());

        // since this has no panel we need to merge in translations ourselves
        // TODO?: see if giving fixtures a nicer way to merge translations w/o panel makes sense
        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );

        const { vNode, destroy, el } = this.mount(MapnavV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        this._parseConfig(this.config);
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: MapnavFixtureConfig | undefined) => this._parseConfig(value)
        );

        // since components used in appbar can be registered after this point, listen to the global component registration event and re-validate items
        // TODO revist. this seems to be self-contained to the mapnav fixture, so ideally can stay as is and not worry about events api.
        let handler = this.$iApi.event.on(GlobalEvents.COMPONENT, () => {
            this._parseConfig(this.config);
        });

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            unwatch();
            this.$iApi.event.off(handler);

            // gracefully remove all buttons first (in case anything is watching for button removal)
            let items: any = { ...this.$vApp.$store.get('mapnav/items') };
            Object.keys(items).forEach(item =>
                this.$iApi.$vApp.$store.dispatch('mapnav/removeItem', item)
            );

            this.$vApp.$store.unregisterModule('mapnav');
            destroy();
        };
    }
}

export default MapnavFixture;
