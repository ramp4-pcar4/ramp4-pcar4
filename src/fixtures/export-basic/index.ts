import { markRaw } from 'vue';
import { ExportBasicAPI } from './api';
import ExportBasicAppbarButtonV from './appbar-button.vue';
import ExportBasicScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';
import ExportBasicTitleFixture from '../export-basic-title';
import ExportBasicMapFixture from '../export-basic-map';
import ExportBasicLegendFixture from '../export-basic-legend';

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
        // TODO: remove appbar button (blocked by #882)

        // remove sub fixtures
        this.$iApi.fixture
            .get<ExportBasicTitleFixture>('export-basic-title')
            ?.remove();
        this.$iApi.fixture
            .get<ExportBasicMapFixture>('export-basic-map')
            ?.remove();
        this.$iApi.fixture
            .get<ExportBasicLegendFixture>('export-basic-legend')
            ?.remove();

        this.$iApi.panel.remove('export-basic-panel');
    }
}

export default ExportBasicFixture;
