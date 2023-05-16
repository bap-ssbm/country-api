<script setup lang="ts">
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { ref, computed } from 'vue';
import { type CountryType } from '../data/Countries'
import countriesData from '../data/Countries'
const router = useRouter()
const route = useRoute()
const country = ref(countriesData.countries.find(country => country.name.common === route.params.country))
console.log(route.params.country)
const nativeName =  computed(()=>{
    const nativeName = Object.keys(country.value?.name.nativeName)[Object.keys(country.value?.name.nativeName).length-1]
    const nativeNameValue = country.value?.name.nativeName[nativeName].common
    return nativeNameValue
})
    
const borderCountries = computed(() => {
    let countriesToReturn = [] as string[]
    if (country.value?.borders) {

        country.value?.borders.forEach(border => {
            let newcountry = countriesData.countries.find(country => country.cca3 === border)
            if (newcountry) {
                countriesToReturn.push(newcountry?.name.common)
            }
        });
       console.log('completed')
    }
   
    return countriesToReturn
})

interface Currency {
    name: string;
    symbol: string;
}

</script>

<template>
    <div class="text-[16px]" v-if="country">
        <button class="dark:bg-dark-blue py-3 px-10 rounded-lg flex gap-5 items-center shadow-lg bg-white mb-24" @click="router.back">
            <i class="fa-solid fa-arrow-left"></i> Back
        </button>
        <div class="flex w-full max-w-[1200px] mx-auto flex-col lg:flex-row gap-10 justify-between lg:items-center">
            <img class="flex-grow w-full lg:w-auto" :src="country.flags.png">
            <div class="lg:w-[55%] lg:pl-[5%] flex flex-col gap-10">
                <h1 class="text-[23px] font-extrabold">
                    {{ country.name.common }}
                </h1>
                <div class="flex flex-col md:flex-row gap-16 lg:justify-between">
                    <div class="space-y-2">
                        <p>
                            <span class="font-semibold mr-3" >Native Name:</span><span>{{ nativeName }}</span>
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Population:</span>
                            
                            <span>
                                {{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
                            </span>
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Region:</span>
                            <span>
                                {{ country.region }}
                            </span>
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Sub Region:</span> 
                            <span  v-if="country.subregion" >
                                {{ country.subregion }}
                            </span>
                            <span v-else>
                                none
                            </span>
                            
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Capital:</span> 
                            <span v-if="country.capital" v-for="capital in country.capital">
                            {{ capital }}
                            </span>
                            <span v-else>
                                none
                            </span>
                        </p>
                    </div>
                    <div class="space-y-2">
                        <p>
                            <span class="font-semibold mr-3">Top Level Domain:</span> 
                            <span v-for="tld in country.tld">{{ tld
                            }}</span>
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Currencies:</span>
                            <span v-if="country.currencies" v-for="(currency, index) in Object.values(country.currencies)"
                                :key="country.currencies.name">
                                <span v-if="index === (Object.values(country.currencies).length - 1)">
                                    {{ (currency as Currency).name }}
                                </span>
                                <span v-else>
                                    {{ (currency as Currency).name }},
                                </span>
                            </span>
                            <span v-else>
                                none
                            </span>
                        </p>
                        <p>
                            <span class="font-semibold mr-3">Languages:</span>
                            <span v-for="(lng, index) in Object.values(country.languages)" :key="country.languages">
                                <span v-if="index === (Object.values(country.languages).length - 1)">
                                    {{ lng }}
                                </span>
                                <span v-else>
                                    {{ lng }},
                                </span>
                            </span>
                        </p>
                    </div>


                </div>
                <div class="mt-10">
                    <div class="flex  flex-col md:flex-row gap-5 md:items-center">
                        <span class="font-semibold whitespace-nowrap">Border Countries:</span>
                        <div class="flex flex-wrap gap-10">
                            <RouterLink :to="'/country/'+ country" class="px-10 py-1 dark:bg-dark-blue shadow-md rounded-md bg-white" v-if="borderCountries.length > 0" v-for="country in borderCountries">

                                {{ country }}


                            </RouterLink>
                            <div v-else>
                                None
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
