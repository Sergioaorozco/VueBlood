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
    buyNewItem() {
      this.newItem = true 
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
        <img class="w-full object-cover h-full" src="..\images\Banner.jpg" alt="">
      </figure>
    </a>
    <section>
      <h2 class="text-xl font-medium text-slate-600 mt-4 mb-4">Recent Products</h2>
      <p-message v-show="newItem" :life=6000 :sticky='false' severity="success">You successfully added this item to the cart.</p-message>
      <div class="lg:grid lg:grid-cols-4 flex gap-6 overflow-auto">
        <!-- Article for the Store -->
        <article v-for="item in productStore.products" :key="item.id" class="bg-slate-50 hover:bg-slate-100 rounded-lg px-4 py-3 flex justify-between flex-col">
          <a href="#" target="blank">
            <figure class="h-32 w-auto lg:h-60 m-auto rounded-md overflow-hidden self-center">
                <img class="w-full object-contain h-full hover:scale-110 transition-all" :src="item.image" alt="headphones">
            </figure>
          </a>
          <!-- Image and Price for mobile -->
          <div class="lg:hidden">
            <p class="mt-1 text-xs text-slate-500">{{item.category}}</p>
            <p class="font-bold text-sm text-slate-600 text-ellipsis overflow-hidden truncate w-[15ch]">{{item.title}}</p>
            <div class="flex justify-between items-center">
              <p class="text-slate-500">${{priceFixed(item.price)}}</p>
              <div class="flex">
                <a @click="buyNewItem" class="flex w-4 h-4 lg:w-48 p-4 bg-emerald-800 items-center justify-center text-white text-center rounded-full"><i class="pi pi-shopping-bag"></i></a>
              </div>
            </div>
          </div>
          <!-- Image and Price for Web -->
          <div class=" hidden lg:contents">
            <div>
              <div class="mt-2 flex justify-between items-center">
                <p class="font-bold text-sm text-slate-600 text-ellipsis overflow-hidden truncate">{{item.title}}</p>
              </div>
                <p class="text-xs text-slate-500">{{item.category}}</p>
                <div class="mt-3 flex justify-between items-center">
                <a  @click="buyNewItem" class="block py-2 px-2 w-2/3 bg-emerald-800 hover:bg-emerald-900 text-white text-center rounded-full select-none"><i class="hidden lg:contents pi pi-shopping-bag mr-2"></i>Add to Cart</a>
                <p class="text-slate-500 text-lg font-bold">${{priceFixed(item.price)}}</p>
                </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

