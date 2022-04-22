import { ComponentCustomProperties } from 'vue';
import { storeType } from '@/store'; // path to store file
import { InstanceAPI } from './api';
import { FormulateGlobalInstance } from '@braid/vue-formulate';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: storeType;

        $iApi: InstanceAPI;

        iApi: InstanceAPI;

        $formulate: FormulateGlobalInstance;
    }
}
