import { APIScope, InstanceAPI } from './internal';
import { Panel } from '@/store/modules/panel';

export class PanelAPI extends APIScope {
    add(value: Panel): PanelItemAPI {
        this.vApp.$store.set('panel/ADD_PANEL!', { value });

        return new PanelItemAPI(this.iApi, value);
    }

    get(id: string): PanelItemAPI {
        const panel = this.vApp.$store.get<Panel>(`panel/items@${id}`);

        if (!panel) {
            throw Error('no panel with such id');
        }

        return new PanelItemAPI(this.iApi, panel);
    }

    get pinned(): string | null {
        return this.vApp.$store.get<string | null>('panel/pinned')!;
    }
}

export class PanelItemAPI extends APIScope {
    readonly _panel: Panel;

    constructor(iApi: InstanceAPI, panel: Panel) {
        super(iApi);

        this._panel = panel;
    }

    pin(value: boolean): this {
        this.vApp.$store.set('panel/pinned', value ? this._panel.id : null);

        console.log('dfds');

        return this;
    }
}
