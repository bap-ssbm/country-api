<script setup lang="ts">
import {useDark, useToggle} from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <button class="flex gap-5 items-center" @click="toggleDark()">
        <i class="fa-solid fa-moon -rotate-12"></i> <span>Dark Mode</span>
    </button>

</template>
