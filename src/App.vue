<script setup>
import loginUser from './components/loginUser.vue';
import shoppingCart from './components/shoppingCart.vue';
import { useProductStore } from './stores/ProductStore.js';

</script>
<script>
export default {
  components: {
    'v-login': loginUser,
    'v-cart': shoppingCart,
  },
  data(){
    return {
      userInfo: {},
      cartArray: [],
      buyItem: false,
    }
  },
}
</script>

<template>
  <div>
    <nav class="border-b-stone-100 border-b-2">
      <v-login/>
    </nav>
    <main class="wrapper mt-4">
      <v-cart/>
    </main>
  </div>
</template>

<style scoped>


</style>
