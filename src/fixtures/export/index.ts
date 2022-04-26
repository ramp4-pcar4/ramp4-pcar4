import { markRaw } from 'vue';
import { ExportAPI } from './api/export';
import { xport } from './store/index';
import ExportAppbarButtonV from './appbar-button.vue';
import ExportScreenV from './screen.vue';
import messages from './lang/lang.csv?raw';

/* import sub fixtures */
import type ExportLegendFixture from '../export-legend';
import type ExportMapFixture from '../export-map';
import type ExportTitleFixture from '../export-title';
import type ExportNorthArrowFixture from '../export-northarrow';
import type ExportScalebarFixture from '../export-scalebar';

class ExportFixture extends ExportAPI {
    initialized(): void {
        // load sub-fixtures required by the export
        this.$iApi.fixture.add('export-title');
        this.$iApi.fixture.add('export-map');
        this.$iApi.fixture.add('export-legend');
        this.$iApi.fixture.add('export-northarrow');
        this.$iApi.fixture.add('export-scalebar');
    }

    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('export-appbar-button', ExportAppbarButtonV);

        // store module intializer function is called "xport" instead of "export" because export is a reserved keyword
        this.$vApp.$store.registerModule('export', xport());

        this.$iApi.panel.register(
            {
                id: 'export-panel',
                config: {
                    screens: {
                        'export-screen': markRaw(ExportScreenV)
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '800px'
                    },
                    alertName: 'export.alertName'
                }
            },
            { i18n: { messages } }
        );

        // parse export section of config and store in the config store
        this._parseConfig(this.config);
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: remove appbar button (blocked by #882)
            unwatch();
            // remove sub fixtures
            this.$iApi.fixture
                .get<ExportTitleFixture>('export-title')
                ?.remove();
            this.$iApi.fixture.get<ExportMapFixture>('export-map')?.remove();
            this.$iApi.fixture
                .get<ExportLegendFixture>('export-legend')
                ?.remove();
            this.$iApi.fixture
                .get<ExportNorthArrowFixture>('export-northarrow')
                ?.remove();
            this.$iApi.fixture
                .get<ExportScalebarFixture>('export-scalebar')
                ?.remove();

            this.$iApi.panel.remove('export-panel');
            this.$vApp.$store.unregisterModule('export');
        };
    }
}

export default ExportFixture;
