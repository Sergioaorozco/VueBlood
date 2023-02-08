<template>
  <div class="wrapper">
    <div class="flex justify-between items-center pt-4 pb-3">
      <div class="flex items-center gap-7">
      <a href="#" target="blank">
        <img class=" w-36" :src="mainLogo" alt="">
      </a>
      <searchProduct class="hidden lg:contents"/>
      </div>
      <div>
        <ul class="flex gap-4 items-center">
          <li><a href="#" target="blank" class="rounded-full w-4 h-4 py-2 px-3 bg-slate-100 hover:text-white hover:transition-all hover:bg-teal-900 transition-all"><i class="pi pi-user lg:mr-1"></i><span class="hidden lg:contents">Account</span></a></li>
          <li class="relative">
            <a @click="displayCart" target="blank" class="select-none rounded-full w-4 h-4 py-2 px-3 bg-slate-100 hover:text-white hover:transition-all hover:bg-teal-900 transition-all">
              <i class="pi pi-shopping-cart lg:mr-1"></i>
              <span class="hidden lg:contents">Cart</span>
              <!-- Items Quantity -->
              <div class="rounded-full w-3 h-3 p-2 bg-teal-800 bottom-4 -right-1 text-white border-white border-2 absolute flex justify-center items-center"><span class="text-cart">{{quantity}}</span></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <section v-if="showCart" class="relative hidden md:block">
      <!-- Cart modal information -->
        <div class="absolute w-96 h-auto min-h-20 bg-white px-4 py-4 flex justify-center flex-col z-10 right-1 rounded-md">
          <p class="self-left">Cart Items</p>
          <div v-if="selectedItems.length">
            <ul class="px-2">
              <li v-for="item in selectedItems" :key="item.id" class="flex justify-between items-center border-b-[1px] text-slate-500 text-sm py-2 mt-1">{{item.product}}
                <div class="flex items-center gap-2">
                  <span class="">${{productStore.priceFixed(33)}}</span>
                  <span class="flex justify-center items-center w-5 h-5 hover:bg-slate-500 rounded-full transition-all hover:text-white border-[1px] border-slate-500 p-0.5">
                    <i class="cancel pi pi-times"></i>
                  </span>
                </div>
              </li>
              <li class="mt-6 mb-4 font-bold text-lg text-slate-500">Order Total<span class="float-right font-normal">${{productStore.priceFixed(100)}}</span></li>
            </ul>
            <div class="mt-2 flex gap-3 justify-between">
              <a href="#" class="px-4 py-1 w-full rounded-full text-center bg-teal-600 text-white" target="_blank">Let's pay</a>
              <a href="#" class="px-5 py-1 w-full rounded-full text-center bg-slate-700 text-white" target="_blank">See the Cart</a>
            </div>
          </div>
          <Message class="my-0" :closable=false v-else>There is no items in your cart</Message>
        </div>
          <!-- Close Cart -->
        <div  @click="closeCart" class="overlay"></div>
      </section>
  </div>
</template>
<script setup>
import { useProductStore } from '../stores/ProductStore.js';
const productStore = useProductStore();
productStore.pullProducts();
productStore.priceFixed();
</script>

<script>
  import mainLogo from '../images/mainLogo.svg';
  import Message from 'primevue/message';
  import searchProduct from '../components/searchProduct.vue';
  export default {
  components: {
    mainLogo,
    searchProduct,
    Message
  },
  data() {
    return {
      mainLogo,
      StoreProducts: {},
      quantity: 4,
      selectedItems: [],
      showCart: false
    }
  },
  methods: {
    displayCart(){ this.showCart = true; },
    closeCart() {this.showCart = false; },
  }
}
</script>;

<style scoped>
  .p-message { margin: 0;}
  .cancel.pi { font-size: 10px; }
</style>