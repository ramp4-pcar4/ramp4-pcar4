import Vue from 'vue';

import { Fixture } from '@/store/modules/fixture';
import { Panel } from '@/store/modules/panel';

import P1Screen1V from './p1-screen-1.vue';
import P1Screen2V from './p1-screen-2.vue';
import P2Screen1V from './p2-screen-1.vue';

class Gazebo extends Fixture {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        const screens = [
            { id: 'p-1-screen-1', component: P1Screen1V },
            { id: 'p-1-screen-2', component: P1Screen2V }
        ];

        const p1 = new Panel('p1', screens, { id: 'p-1-screen-1' });
        const p2 = new Panel('p2', [{ id: 'p-2-screen-1', component: P2Screen1V }], { id: 'p-2-screen-1' });

        const pApi1 = this.iApi.panel.add(p1);
        const pApi2 = this.iApi.panel.add(p2);

        pApi2.pin(true);
    }
}

export default new Gazebo('gazebo');
