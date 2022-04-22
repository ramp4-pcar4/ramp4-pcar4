import { markRaw } from 'vue';
import { ExportBasicAPI } from './api';
import ExportBasicAppbarButtonV from './appbar-button.vue';
import ExportBasicScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';
class ExportBasicFixture extends ExportBasicAPI {
    initialized(): void {
        // load sub-fixtures required by the export-basic
        this.$iApi.fixture.add('export-basic-title');
        this.$iApi.fixture.add('export-basic-map');
        this.$iApi.fixture.add('export-basic-legend');
    }

    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component(
            'export-basic-appbar-button',
            ExportBasicAppbarButtonV
        );

        this.$iApi.panel.register(
            {
                id: 'export-basic-panel',
                config: {
                    screens: {
                        'export-basic-screen': markRaw(ExportBasicScreenV)
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '800px'
                    },
                    alertName: 'export-basic.alertName'
                }
            },
            { i18n: { messages } }
        );
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default ExportBasicFixture;
