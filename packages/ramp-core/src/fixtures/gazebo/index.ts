import { Fixture } from '@/store/modules/fixture';

class Gazebo implements Fixture {
    id: string = 'Gazebo';

    added(): void {
        console.log(`[fixture] ${this.id} added`);
    }
}

export default new Gazebo();
