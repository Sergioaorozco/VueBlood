<template>
  <div>
    <form class="flex items-center w-96">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="w-full">
            <AutoComplete class="w-[500px]" v-model="selectedProduct" optionLabel="name" :suggestions="suggestions" @complete="search">
                <template #option="slotProps">
                    <div class="flex items-center">
                        <img :alt="slotProps.option.name" :src="slotProps.option.thumbnail" class="w-10 rounded-full mr-2" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </AutoComplete>
    </div>
            <!-- <input @input="filterData" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products"> -->
        </div>
    </form>
  </div>
</template>

<script setup>
import AutoComplete from 'primevue/autocomplete';

import { ref } from 'vue';
import { useProductStore } from '../stores/ProductStore.js';
const productStore = useProductStore();
let items = ref(productStore.products);
let selectedProduct = ref()
const suggestions = ref();

const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            suggestions.value = [...items.value];
        } else {
            suggestions.value = items.value.filter((item) => {
                return item.name.toLowerCase().includes(event.query.toLowerCase());
            });
        }
    }, 150);
}
</script>
<style scoped>
:deep().p-autocomplete-input { width: 500px !important; }
</style>

