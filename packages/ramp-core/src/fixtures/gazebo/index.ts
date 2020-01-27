import { Fixture } from '@/store/modules/fixtures';

class Gazebo implements Fixture {
    id: string = 'Gazebo';

    added(): void {
        console.log(`[fixture] ${this.id} added`);
    }
}

export default new Gazebo();
