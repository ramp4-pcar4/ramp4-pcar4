import AppbarV from './appbar.vue';
import { AppbarAPI } from './api/appbar';
import { appbar } from './store';
import { GlobalEvents } from '@/api';

class AppbarFixture extends AppbarAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: registering a fixture store module seems like a common action almost every fixture needs; check if this can be automated somehow
        this.$vApp.$store.registerModule('appbar', appbar());

        const appbarInstance = this.extend(AppbarV, { store: this.$vApp.$store });

        // TODO: the `innerShell` reference will probably get used more than once; consider creating a dedicated ref on `$iApi`;
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.insertBefore(appbarInstance.$el, innerShell.children[0]);

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

        // since components used in appbar can be registered after this point, listen to the global component registration event and re-validate items
        // TODO revist. this seems to be self-contained to the appbar fixture, so ideally can stay as is and not worry about events api.
        this.$iApi.event.on(GlobalEvents.COMPONENT, this._validateItems.bind(this));
    }

    removed() {
        this.$vApp.$store.unregisterModule('appbar');
    }
}

export default AppbarFixture;
