import { markRaw } from 'vue';
import { ExportV1API } from './api';
import ExportV1AppbarButtonV from './appbar-button.vue';
import ExportV1ScreenV from './screen.vue';

import messages from './lang/lang.csv';
class ExportV1Fixture extends ExportV1API {
    initialized(): void {}

    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // TODO: move loading sub-fixtures to the `initialized` hook when it's available
        // load sub-fixtures required by the export-v1
        this.$iApi.fixture.add('export-v1-title');
        this.$iApi.fixture.add('export-v1-map');
        this.$iApi.fixture.add('export-v1-legend');

        this.$iApi.component('export-v1-appbar-button', ExportV1AppbarButtonV);

        this.$iApi.panel.register(
            {
                id: 'export-v1-panel',
                config: {
                    screens: { 'export-v1-screen': markRaw(ExportV1ScreenV) },
                    style: {
                        'flex-grow': '1',
                        'max-width': '800px'
                    }
                }
            },
            { i18n: { messages } }
        );
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default ExportV1Fixture;

export { ExportV1SubFixture } from './api';
