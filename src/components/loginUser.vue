<template>
  <div class="wrapper">
    <div class="flex justify-between items-center pt-4 pb-3">
      <div class="flex items-center gap-7">
      <a href="#" target="blank">
        <img class=" w-36" :src="mainLogo" alt="">
      </a>
      <searchProduct  class="hidden lg:contents"/>
      </div>
      <div>
        <ul class="flex gap-4 items-center">
          <li><a href="#" target="blank" class="rounded-full w-4 h-4 py-2 px-3 bg-slate-100 hover:text-white hover:transition-all hover:bg-teal-900 transition-all"><i class="pi pi-user lg:mr-1"></i><span class="hidden lg:contents">Account</span></a></li>
          <li class="relative">
            <a href="#" target="blank" class="rounded-full w-4 h-4 py-2 px-3 bg-slate-100 hover:text-white hover:transition-all hover:bg-teal-900 transition-all">
              <i class="pi pi-shopping-cart lg:mr-1"></i>
              <span class="hidden lg:contents">Cart</span>
              <!-- Items Quantity -->
              <div class="rounded-full w-3 h-3 p-2 bg-teal-800 bottom-4 -right-1 text-white border-white border-2 absolute flex justify-center items-center"><span class="text-cart">{{quantity}}</span></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import mainLogo from '../images/mainLogo.svg';
  import searchProduct from '../components/searchProduct.vue';
export default {
  components: {
    mainLogo,
    searchProduct
  },
  data() {
    return {
      mainLogo,
      StoreProducts: {},
      quantity: 4
    }
  }
}
</script>