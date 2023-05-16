<script lang="ts">
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
export default{
  components:{
    Navbar
  }
}
</script>

<template>
  <main class="min-h-screen bg-Very-Light-Gray dark:bg-very-dark-blue-dark">
    <Navbar/>
    <div class="px-[5%] py-20">
      <RouterView :key="$route.fullPath"/>
    </div>
    
  </main>
</template>

<style scoped></style>
