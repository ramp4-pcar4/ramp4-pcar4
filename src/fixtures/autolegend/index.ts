import { ConfigState, ConfigStore } from '@/store/modules/config';
import { AutolegendAPI } from './api/autolegend';

class AutolegendFixture extends AutolegendAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        // if legend is defined in starting fixtures, wait for it to load, otherwise add the legend fixture
        if (
            (
                this.$vApp.$store.get(
                    ConfigStore.getStartingFixtures
                ) as Array<string>
            ).includes('legend')
        ) {
            this.$iApi.fixture.isLoaded('legend').then(() => {
                this.addLayerItems();
            });
        } else {
            this.$iApi.fixture.add('legend').then(() => {
                this.addLayerItems();
            });
        }
    }
}

export default AutolegendFixture;
