import { defineStore } from 'pinia';
// Products in Our app

export const useProductStore = defineStore('productStore', {
  // States
  state:() => {
    return {
      products: []
      }
    },
  actions: {
    async pullProducts() {
      const response = await fetch('https://fakestoreapi.com/products')
      let items = await response.json();
      return this.products.push(...items);
    }
  }
  // Action
  // Getters
})