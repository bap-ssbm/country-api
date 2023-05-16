<script setup lang="ts">
import { getSearchData } from '@/data/Search';


const searchData = getSearchData();
const { search, region } = searchData;


</script>

<template>
  <div class="flex justify-between flex-col md:flex-row gap-14">
    <div class="relative flex-grow max-w-[600px]">
      <input  
      @input="region=''"
      v-model="search"
        class="dark:bg-dark-blue focus:outline-none py-5 px-20 font-Nunito-Sans rounded-md text-[14px] w-full shadow-lg"
        placeholder="Search for a country...">
      <i class="fa-solid fa-magnifying-glass absolute left-7 top-[50%] translate-y-[-50%]"></i>
    </div>
    <select
    v-model="region"
    @change="search=''"
      class="dark:bg-dark-blue py-3 px-5 focus:border-none focus:outline-none group-optional:bg-white font-Nunito-Sans w-fit cursor-pointer shadow-lg rounded-lg">
      <option value="" disabled selected>Filter by Region</option>
      <option value="Africa">
        Africa
      </option>
      <option value="America">
        America
      </option>
      <option value="Asia">
        Asia
      </option>
      <option value="Europe">
        Europe
      </option>
      <option value="Oceania">
        Oceania
      </option>
    </select>

  </div>
</template>