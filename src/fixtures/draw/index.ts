import { markRaw } from 'vue';

import { GlobalEvents } from '@/api';

import { useAppbarStore } from '../appbar/store';
import { useHelpStore } from '../help/store';
import { DrawAPI } from './api/drawApi';
import DrawV from './draw.vue';
import './help.css';
import { DRAW_HELP_MARKDOWN, DRAW_HELP_SECTION_ID } from './help';
import messages from './lang/lang.csv?raw';
import { DRAW_IMPORT_PANEL_ID, DRAW_SETTINGS_PANEL_ID, DRAW_SHAPE_DETAILS_PANEL_ID } from './settings';
import { useDrawStore } from './store';

class DrawFixture extends DrawAPI {
    private unregisterIdentifyGeometryProvider?: () => void;
    private eventHandlers: string[] = [];
    private destroyDrawComponent?: () => void;

    private registerHelpSection() {
        const helpStore = useHelpStore(this.$vApp.$pinia);
        helpStore.addDynamicSection({
            id: DRAW_HELP_SECTION_ID,
            markdown: DRAW_HELP_MARKDOWN
        });
    }

    private unregisterHelpSection() {
        const helpStore = useHelpStore(this.$vApp.$pinia);
        helpStore.removeDynamicSection(DRAW_HELP_SECTION_ID);
    }

    async init() {
        // Add language messages
        Object.entries(messages).forEach(value => this.$iApi.$i18n.mergeLocaleMessage(...value));
        this._parseConfig(this.config);

        const panelsToRegister: Record<string, any> = {};
        if (!this.$iApi.panel.get(DRAW_SETTINGS_PANEL_ID)) {
            panelsToRegister[DRAW_SETTINGS_PANEL_ID] = {
                screens: {
                    'draw-settings-screen': () => markRaw(import('./draw-defaults-screen.vue'))
                },
                style: {
                    width: '350px'
                },
                button: {
                    tooltip: 'draw.defaults.title',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1a7.28 7.28 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.18-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z"/></svg>'
                },
                alertName: 'draw.defaults.title'
            };
        }

        if (!this.$iApi.panel.get(DRAW_SHAPE_DETAILS_PANEL_ID)) {
            panelsToRegister[DRAW_SHAPE_DETAILS_PANEL_ID] = {
                screens: {
                    'draw-shape-details-screen': () => markRaw(import('./shape-inspector-screen.vue'))
                },
                style: {
                    width: '350px'
                },
                button: {
                    tooltip: 'draw.inspector.title',
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 10h2v7h-2v-7zm0-3h2v2h-2V7zm1-5a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/></svg>'
                },
                alertName: 'draw.inspector.title'
            };
        }

        if (!this.$iApi.panel.get(DRAW_IMPORT_PANEL_ID)) {
            panelsToRegister[DRAW_IMPORT_PANEL_ID] = {
                screens: {
                    'draw-import-shape-screen': () => markRaw(import('./import-shape-screen.vue'))
                },
                style: {
                    width: '350px'
                },
                alertName: 'draw.import.title'
            };
        }

        if (Object.keys(panelsToRegister).length) {
            this.$iApi.panel.register(panelsToRegister, { i18n: { messages } });
            this.handlePanelTeleports([DRAW_SETTINGS_PANEL_ID, DRAW_SHAPE_DETAILS_PANEL_ID, DRAW_IMPORT_PANEL_ID]);
        }

        // Register only the icons for enabled draw types
        const drawStore = useDrawStore(this.$vApp.$pinia);
        drawStore.supportedTypes.forEach(typeCfg => {
            const name = `${typeCfg.type}-icon`;
            this.$iApi.component(name, markRaw(import(`./icons/${typeCfg.type}-icon.vue`)));
        });

        // Mount a new instance of the component
        this.destroyDrawComponent?.();
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const drawHost = document.createElement('div');
        innerShell.appendChild(drawHost);
        const { destroy } = this.mount(DrawV, {
            element: drawHost,
            app: this.$element
        });
        this.destroyDrawComponent = () => {
            destroy();
            drawHost.remove();
        };
    }

    async added() {
        if (!this.unregisterIdentifyGeometryProvider) {
            this.unregisterIdentifyGeometryProvider = this.$iApi.geo.map.registerIdentifyGeometryProvider(this);
        }

        this.registerHelpSection();

        // Re-initialize on map create or config change
        if (!this.eventHandlers.length) {
            if (this.$iApi.geo.map.created) {
                void this.init();
            } else {
                this.eventHandlers.push(
                    this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                        void this.init();
                    })
                );
            }
            this.eventHandlers.push(
                this.$iApi.event.on(GlobalEvents.FIXTURE_ADDED, fixture => {
                    if (fixture.id === 'help') {
                        this.registerHelpSection();
                    }
                })
            );
        }
    }

    removed() {
        this.unregisterIdentifyGeometryProvider?.();
        this.unregisterIdentifyGeometryProvider = undefined;
        this.eventHandlers.forEach(handler => this.$iApi.event.off(handler));
        this.eventHandlers = [];
        this.unregisterHelpSection();
        this.destroyDrawComponent?.();
        this.destroyDrawComponent = undefined;

        if (this.$iApi.fixture.exists('appbar')) {
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            appbarStore.removeButton(DRAW_SETTINGS_PANEL_ID);
            appbarStore.removeButton(DRAW_SHAPE_DETAILS_PANEL_ID);
            appbarStore.removeButton(DRAW_IMPORT_PANEL_ID);
        }
        this.$iApi.panel.remove(DRAW_SETTINGS_PANEL_ID);
        this.$iApi.panel.remove(DRAW_SHAPE_DETAILS_PANEL_ID);
        this.$iApi.panel.remove(DRAW_IMPORT_PANEL_ID);
    }
}

export default DrawFixture;
