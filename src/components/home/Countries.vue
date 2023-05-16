<script setup lang="ts">
import { computed } from '@vue/reactivity';
import countriesData from '../../data/Countries'
import { getSearchData } from '@/data/Search';
import { RouterLink } from 'vue-router';
const { countries } = countriesData
const searchData = getSearchData();
const { search, region } = searchData
const filteredCountries = computed(() => {
    if (search.value.length===0) {
        return countries.filter((country) => country.region.toLowerCase().includes(region.value.toLowerCase()))
    } else {
        return countries.filter((country) => country.name.common.toLowerCase().includes(search.value.toLowerCase()))
    }

})
</script>

<template>
    <div v-if="filteredCountries" class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 w-full justify-between gap-20 my-24">
        <RouterLink :to="'/country/' + country.name.common" class="shadow-md overflow-hidden rounded-lg dark:bg-dark-blue" v-for="country in filteredCountries">
            <img class="w-full aspect-[5/3] object-cover" :src="country.flags.svg" :alt="country.flags.alt" />
            <div class="p-10">
                <h2 class="text-[18px] font-extrabold mb-6">
                    {{ country.name.common }}
                </h2>
                <div class="flex flex-col gap-2">
                    <p>
                        <span class="font-semibold">
                            Population:
                        </span>{{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                    </p>
                    <p>
                        <span class="font-semibold">
                            Region:
                        </span>
                        {{ country.region }}
                    </p>
                    <p>
                        <span class="font-semibold">
                            Capital:
                        </span><span v-for="capital in country.capital">{{ capital }}</span>
                    </p>
                </div>
            </div>
        </RouterLink>
    </div>
    <div v-else>
        ...loading
    </div>
</template>