import { ComponentCustomProperties } from 'vue';
import { storeType } from '@/store'; // path to store file
import { InstanceAPI } from './api';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: storeType;

        $iApi: InstanceAPI;
    }
}
