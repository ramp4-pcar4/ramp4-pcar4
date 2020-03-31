import AppbarV from './appbar.vue';
import { AppbarAPI } from './api/appbar';
import { appbar } from './store/index';

class AppbarFixture extends AppbarAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('appbar', appbar());

        const appbarInstance = this.extend(AppbarV, { store: this.$vApp.$store });

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.insertBefore(appbarInstance.$el, innerShell.children[0]);

        // when other fixtures need access to appbar API, they can do it directly on the fixture object
        // `this.$iApi.fixture.get<AppbarFixture>('appbar').setConfig()`

        // this is a bit more complicated than access it directly on the global `$iApi` (`this.$iApi.setConfig()`),
        // but the above approach doesn't pollute a global, provides an easy way to check if fixture exists and gives you intellisense

        await this.setConfig(this.$vApp.$store.get('config/getFixtureConfig', 'appbar'));
    }

    removed() {
        this.$vApp.$store.unregisterModule('appbar');
    }
}

export default AppbarFixture;
