<template>
  <form action="https://checkout.wompi.co/p/" method="GET">
  <!-- OBLIGATORIOS -->
  <input type="hidden" name="public-key" value="pub_test_28DzHMDJ4Qa1lFtPXYlif3MO3R0GXktf" />
  <input type="hidden" name="currency" value="COP" />
  <input type="hidden" name="amount-in-cents" :value="value" />
  <input type="hidden" name="reference" :value="randomRef()" />
  <button type="sumbit" href="#" class="px-4 py-1 w-full rounded-full text-center bg-teal-600 text-white hover:bg-teal-900">Checkout</button>
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