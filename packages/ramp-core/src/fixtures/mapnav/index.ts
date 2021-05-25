import MapnavV from './mapnav.vue';
import { MapnavAPI } from './api/mapnav';
import { mapnav } from './store';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv';

class MapnavFixture extends MapnavAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: registering a fixture store module seems like a common action almost every fixture needs; check if this can be automated somehow
        this.$vApp.$store.registerModule('mapnav', mapnav());

        // since this has no panel we need to merge in translations ourselves
        // TODO?: see if giving fixtures a nicer way to merge translations w/o panel makes sense
        Object.entries(messages).forEach(value =>
            this.$vApp.$i18n.mergeLocaleMessage(...value)
        );

        const mapnavInstance = this.extend(MapnavV, {
            store: this.$vApp.$store,
            i18n: this.$vApp.$i18n
        });

        // TODO: the `innerShell` reference will probably get used more than once; consider creating a dedicated ref on `$iApi`;
        const innerShell = this.$vApp.$el.getElementsByClassName(
            'inner-shell'
        )[0];
        innerShell.append(mapnavInstance.$el); /**, innerShell.children[0]);*/
        console.log(innerShell);

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

        // since components used in appbar can be registered after this point, listen to the global component registration event and re-validate items
        // TODO revist. this seems to be self-contained to the mapnav fixture, so ideally can stay as is and not worry about events api.
        this.$iApi.event.on(
            GlobalEvents.COMPONENT,
            this._validateItems.bind(this)
        );
    }

    removed() {
        this.$vApp.$store.unregisterModule('mapnav');
    }
}

export default MapnavFixture;
