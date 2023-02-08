<template>
    <panel-screen :panel="panel">
        <template #header> Mouruge Panel </template>

        <template #content>
            <div class="flex flex-col items-center mt-16">
                <img
                    class="my-16"
                    src="https://i.pinimg.com/originals/5f/12/01/5f120106a81b52d9813aabe8d14b1552.gif"
                    alt=""
                    srcset=""
                />
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
// use the simplest syntax to create a Vue component--no decorators or classes, just a plain object
// this will result in the smallest possible bundle size for the fixture
defineProps(['panel']);
</script>

<style scoped></style>
