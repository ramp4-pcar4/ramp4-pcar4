import AppbarV from './appbar.vue';
import { AppbarAPI } from './api/appbar';
import { useAppbarStore } from './store';
import type { AppbarFixtureConfig } from './store';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv?raw';

// "It's a trap!" -- Admiral Appbar

class AppbarFixture extends AppbarAPI {
    initialized() {
        // console.log(`[fixture] ${this.id} initialized`);
    }

    async added() {
        // console.log(`[fixture] ${this.id} added`);

        // merge in translations since this has no panel
        Object.entries(messages).forEach(value =>
            (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
        );

        const { destroy, el } = this.mount(AppbarV, {
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
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();
            eventHandlers.forEach(h => this.$iApi.event.off(h));

            // gracefully remove all buttons first (in case anything is watching for button removal)
            const items: any = { ...appbarStore.items };
            const tempItems: string[] = [...appbarStore.temporary];
            Object.keys(items).forEach(item => appbarStore.removeButton(item));
            tempItems.forEach(item => appbarStore.removeButton(item));
            destroy();

            // reset the store
            appbarStore.$reset();
        };
    }
}

export default AppbarFixture;
