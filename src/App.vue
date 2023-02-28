<script>
import loginUser from './components/loginUser.vue';
import shoppingCart from './components/shoppingCart.vue';
export default {
  components: {
    'v-login': loginUser,
    'v-cart': shoppingCart,
  },
  data(){
    return {
      userInfo: {},
      buyItem: false,
    }
  },
}
</script>

<template>
  <div class="flex justify-between flex-col h-screen">
    <div>
      <nav class="border-b-stone-100 border-b-2">
        <v-login/>
      </nav>
      <main class="wrapper mt-2">
        <v-cart/>
      </main>
    </div>
    <footer class="bg-stone-50 py-5 border-t-stone-100 border-t-2 mt-20">
      <div class="wrapper">
        <p class="text-slate-600">VueBlood 2023</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>


</style>
