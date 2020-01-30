import { Fixture } from '@/store/modules/fixture';

class Gazebo extends Fixture {
    added(): void {
        console.log(`[fixture] ${this.id} added`);
    }
}

export default new Gazebo('gazebo');
