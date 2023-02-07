<script>
import loginUser from './components/loginUser.vue'
import shoppingCart from './components/shoppingCart.vue'
import Message from 'primevue/message';
import Toast from 'primevue/toast';

export default {
  components: {
    'v-login': loginUser,
    'v-cart': shoppingCart,
    "p-message": Message,
    'p-toast': Toast
  },
  data(){
    return {
      userInfo: {},
      cartArray: [],
      buyItem: false,
    }
  },
  methods: {
    handleUserSubmit(user){
      console.log(user)
    }
  },
  watch: {
    // cartArray(){}
  }
}
</script>

<template>
  <div>
    <nav class="border-b-stone-100 border-b-2">
      <v-login/>
    </nav>
    <main class="wrapper mt-4">
      <p-message v-if="buyItem" :life=6000 :sticky='false' severity="success">You successfully added this item to the cart.</p-message>
      <v-cart/>
    </main>
  </div>
</template>

<style scoped>


</style>
