<template>
    <panel-screen :panel="panel">
        <template #header>
            {{
                //@ts-ignore
                $iApi.$i18n.t('funtimes')
            }}
        </template>

        <template #content>
            <p>
                {{
                    //@ts-ignore
                    $iApi.$i18n.t('funtimes.info')
                }}
            </p>
            <div v-for="item in items">
                <div v-truncate class="item">
                    {{ item }}
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFuntimesStore } from './store';

defineProps(['panel']);

const funtimesStore = useFuntimesStore();

const items = computed(() => funtimesStore.items);
</script>

<style scoped>
.item {
    margin-top: 12px;
    border: 2px solid black;
    padding: 5px;
    text-align: center;
    cursor: pointer;
}
</style>
