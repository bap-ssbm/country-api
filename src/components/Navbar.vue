<template>
    <nav class="dark:bg-dark-blue bg-white flex justify-between px-[5%] py-8 shadow-md">
        <RouterLink class="md:text-[23px] font-[800]" to="/">
            Where in the world?
        </RouterLink>
        <DarkMode/>
    </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DarkMode from './DarkMode.vue';

</script>
