<script setup>
import { useProductStore } from '../stores/ProductStore.js';
const productStore= useProductStore();
productStore.pullProducts();
</script>

<script>
import Message from 'primevue/message';

export default {
  components: {
    "p-message": Message,
  },
  data() {
    return {
      newItem: false,
    }
  },
  methods: {
    buyNewItem(item) {
      this.newItem = true 
      console.log(item)
      try {
      }
      finally {
        setTimeout(() => {
          this.newItem = false;
        }, 7000)
      }
    },
    priceFixed(price){
      return Number(price).toLocaleString('en-us', {maximumFractionDigits: 2, minimumFractionDigits:2})
    }
  }
}

</script>

<template>
  <div class="mt-4">
    <a href="#" target="blank">
      <figure class="rounded-lg overflow-hidden w-full h-36 lg:h-auto">
        <img class="w-full object-cover h-full" src="..\images\BannerShop.jpg" alt="">
      </figure>
    </a>
    <section>
      <h2 class="text-xl font-medium text-slate-600 mt-4 mb-4">Recent Products</h2>
      <p-message v-show="newItem" :life=6000 :sticky='false' severity="success">You successfully added this item to the cart.</p-message>
      <div class="lg:grid lg:grid-cols-4 flex gap-x-5 lg:gap-x-10 gap-y-14 overflow-auto">
        <!-- Article for the Store -->
        <article v-for="item in productStore.products" :key="item.id" class="bg-[#eeeeee] rounded-lg flex justify-between flex-col">
          <a href="#" target="blank">
            <figure class="h-32 w-auto lg:h-60 m-auto rounded-md overflow-hidden self-center">
                <img class="w-full object-contain h-full hover:scale-110 transition-all" :src="item.thumbnail" alt="headphones">
            </figure>
          </a>
          <!-- Image and Price for mobile -->
          <div class="lg:hidden px-3">
            <p class="mt-2 font-bold text-sm text-slate-600 text-ellipsis overflow-hidden truncate w-[15ch]">{{item.name}}</p>
            <span class="flex gap-2 py-1">
              <p v-for="tag in item.category" :key="tag.id" class="px-1.5 bg-[#c9c9c9] py-0.5 rounded-md text-[10px] text-slate-500">{{tag}}</p>
            </span>
            <div class="flex justify-between items-center mb-3">
              <p class="text-slate-500">${{priceFixed(item.price)}}</p>
              <div class="flex">
                <a @click="buyNewItem" data-store="item" class="flex w-4 h-4 lg:w-48 p-4 bg-teal-600 transition-all items-center justify-center text-white text-center rounded-full"><i class="pi pi-shopping-bag"></i></a>
              </div>
            </div>
          </div>
          <!-- Image and Price for Web -->
          <div class=" hidden lg:contents">
            <div class="px-4">
              <div class="mt-2 flex justify-between items-center">
                <p class="font-bold text-sm text-slate-600 text-ellipsis overflow-hidden truncate">{{item.name}}</p>
              </div>
              <span class="flex gap-2 py-1">
                <p v-for="tag in item.category" :key="tag.id" class="px-1.5 bg-[#c9c9c9] py-0.5 rounded-md text-[10px] text-slate-500">{{tag}}</p>
              </span>
                <div class="mt-4 mb-5 flex justify-between items-center">
                  <a  @click="buyNewItem" class="block py-1 w-3/5 bg-teal-600 border-teal-900 transition-all hover:bg-emerald-900 text-white text-center rounded-full select-none"><i class="hidden lg:contents pi pi-shopping-bag mr-2"></i>Add to Cart</a>
                  <p class="text-slate-500 text-lg font-bold">${{priceFixed(item.price)}}</p>
                </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>

