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
              <div v-if="productStore.cartItems.length != 0" class="rounded-full w-3 h-3 p-2 bg-teal-800 bottom-4 -right-1 text-white border-white border-2 absolute flex justify-center items-center"><span class="text-cart">{{productStore.cartItems.length}}</span></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <section v-if="showCart" class="relative hidden lg:block">
      <!-- Cart modal information -->
        <div class="arrowUp z-20"></div>
        <div class="absolute w-96 h-auto min-h-20 bg-white px-4 py-4 flex justify-center flex-col z-10 right-0 rounded-md">
          <p class="self-left">Cart Items</p>
          <div v-if="productStore.cartItems.length">
            <ul class="px-2">
              <li v-for="item in productStore.cartItems" :key="item.id" class="flex justify-between items-center border-b-[1px] text-slate-500 text-sm py-2 mt-1">{{item.name}}
                <div class="flex items-center gap-2">
                  <span class="">${{productStore.priceFixed(item.price)}}</span>
                  <span @click="removeItems(item)" class="flex justify-center items-center w-5 h-5 hover:bg-slate-500 rounded-full transition-all hover:text-white border-[1px] border-slate-500 p-0.5">
                    <i class="cancel pi pi-times"></i>
                  </span>
                </div>
              </li>
              <li class="mt-6 mb-4 font-bold text-lg text-slate-500">Order Total<span class="float-right font-normal">${{productStore.priceFixed(totalCart())}}</span></li>
            </ul>
              <checkoutButton class="w-full" :value="productStore.wompiFormat(totalCart())"/>
          </div>
          <Message class="my-0" :closable=false v-else>There are no items in your cart.</Message>
        </div>
          <!-- Close Cart -->
        <div  @click="closeCart" class="overlay"></div>
      </section>
      <section class="lg:hidden block">
        <Dialog header="Cart Items" :breakpoints="{'960px': '75vw', '640px': '90vw'}" :style="{width:'50vw'}" @update:visible="closeCart">
          <div v-if="productStore.cartItems.length" class="mt-3">
            <ul class="px-2">
              <li v-for="item in productStore.cartItems" :key="item.id" class="flex justify-between items-center border-b-[1px] text-slate-500 text-sm py-2 mt-1">{{item.name}}
                <div class="flex items-center gap-2">
                  <span>${{productStore.priceFixed(item.price)}}</span>
                  <span @click="removeItems(item)" class="flex justify-center items-center w-5 h-5 hover:bg-slate-500 rounded-full transition-all hover:text-white border-[1px] border-slate-500 p-0.5">
                    <i class="cancel pi pi-times"></i>
                  </span>
                </div>
              </li>
              <li class="mt-6 mb-4 font-bold text-lg text-slate-500">Order Total<span class="float-right font-normal">${{productStore.priceFixed(totalCart())}}</span></li>
            </ul>
              <checkoutButton class="w-full" :value="productStore.wompiFormat(totalCart())"/>
          </div>
          <Message class="my-0" :closable=false v-else>There are no items in your cart.</Message>
        </Dialog>
        <div @click="closeCart" :class="{overlay: showCart}"></div>
      </section>

  </div>
</template>
<script setup>
import { useProductStore } from '../stores/ProductStore.js';
import mainLogo from '../images/mainLogo.svg';
import {ref, reactive } from 'vue'
import Message from 'primevue/message';
import checkoutButton from '../components/checkoutButton.vue';
import searchProduct from '../components/searchProduct.vue';
import Dialog from 'primevue/dialog';
const productStore = useProductStore();
productStore.priceFixed();
productStore.wompiFormat();


function totalCart() {
  if(productStore.cartItems.length) {
   return productStore.cartItems.map(item => item.price).reduce((acc, curr) => acc + curr)
  }
}

function removeItems(item) {
  productStore.removeItems(item)
}

let showCart = ref(false);
function displayCart(){ showCart.value = true; };
function closeCart() { showCart.value = false; };


</script>;

<style scoped>
  .p-message { margin: 3px 0;}
  .cancel.pi { font-size: 8px; }
  .arrowUp {
  width: 0; 
  height: 0; 
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 12px solid white;
  position: absolute;
  right: 25px;
  top: -11px;
}
</style>