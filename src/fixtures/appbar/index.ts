import AppbarV from './appbar.vue';
import { AppbarAPI } from './api/appbar';
import { appbar } from './store';
import type { AppbarFixtureConfig } from './store';
import { GlobalEvents, PanelInstance } from '@/api';
import messages from './lang/lang.csv?raw';

// "It's a trap!" -- Admiral Appbar

class AppbarFixture extends AppbarAPI {
    initialized() {
        console.log(`[fixture] ${this.id} initialized`);
    }

    async added() {
        console.log(`[fixture] ${this.id} added`);

        // TODO: registering a fixture store module seems like a common action almost every fixture needs; check if this can be automated somehow
        this.$vApp.$store.registerModule('appbar', appbar());

        // merge in translations since this has no panel
        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );

        const { vNode, destroy, el } = this.mount(AppbarV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.insertBefore(
            el.childNodes[0],
            innerShell.querySelector('.panel-stack')
        );

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: AppbarFixtureConfig | undefined) => this._parseConfig(value)
        );

        const eventHandlers: string[] = [];

        // since components used in appbar can be registered after this point, listen to the global component registration event and re-validate items
        // TODO revisit. this seems to be self-contained to the appbar fixture, so ideally can stay as is and not worry about events api.
        eventHandlers.push(
            this.$iApi.event.on(GlobalEvents.COMPONENT, () => {
                this._parseConfig(this.config);
            })
        );

        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            unwatch();
            eventHandlers.forEach(h => this.$iApi.event.off(h));

            // gracefully remove all buttons first (in case anything is watching for button removal)
            const items: any = { ...this.$vApp.$store.get('appbar/items') };
            const tempItems: string[] = [
                ...(this.$vApp.$store.get('appbar/temporary') as string[])
            ];
            Object.keys(items).forEach(item =>
                this.$iApi.$vApp.$store.dispatch('appbar/removeButton', item)
            );
            tempItems.forEach(item =>
                this.$iApi.$vApp.$store.dispatch('appbar/removeButton', item)
            );

            this.$vApp.$store.unregisterModule('appbar');
            destroy();
        };
    }
}

export default AppbarFixture;
