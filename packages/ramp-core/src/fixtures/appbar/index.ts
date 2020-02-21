import Vue from 'vue';

import { FixtureConfigHelper } from '@/store/modules/fixture';

import AppbarV from './appbar.vue';
import { AppbarAPI } from './api/appbar';
import { appbar } from './store/index';

class AppbarFixture extends FixtureConfigHelper {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        const fixture = this.$iApi.fixture.get(this.id)!;

        this.vApp.$store.registerModule('appbar', appbar());

        this.$iApi.emit('appbarApi', new AppbarAPI(this.$iApi));

        const appbarInstance = new (Vue.extend(AppbarV))({
            iApi: this.$iApi,
            propsData: { fixture }
        });

        appbarInstance.$mount();
        const innerShell = this.vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.insertBefore(appbarInstance.$el, innerShell.children[0]);

        await this.$iApi.appbar.set(this.vApp.$store.get('config/getFixtureConfig', 'appbar'));
    }

    removed() {
        this.$iApi.appbar = null;
        this.vApp.$store.unregisterModule('appbar');
    }
}

export default new AppbarFixture('appbar');
