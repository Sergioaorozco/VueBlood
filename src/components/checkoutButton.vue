<template>
  <form class="mt-2 flex gap-3 justify-between" action="https://checkout.wompi.co/p/" method="GET">
  <!-- OBLIGATORIOS -->
  <input type="hidden" name="public-key" value="pub_test_28DzHMDJ4Qa1lFtPXYlif3MO3R0GXktf" />
  <input type="hidden" name="currency" value="COP" />
  <input type="hidden" name="amount-in-cents" :value="value" />
  <input type="hidden" name="reference" :value="randomRef()" />
  <button type="sumbit" href="#" class="px-4 py-1 w-full rounded-full text-center bg-teal-600 text-white hover:bg-teal-900">Checkout</button>
  <button href="#" class="px-5 py-1 w-full rounded-full text-center border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-all border-2" target="_blank">See the Cart</button>
  </form>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props: {
    value: "",
  },
  methods: {
    randomRef() {
      let uniqueId = Math.floor(Math.random() * Date.now());
      const formatuUID = `UUID-${uniqueId}`
      return formatuUID;
    }
  }

}
</script>