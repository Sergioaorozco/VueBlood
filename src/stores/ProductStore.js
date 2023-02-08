import { defineStore } from 'pinia';
// import axios from 'axios';
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
      const response = await fetch('https://fakestoreapi.com/products?limit=10')
      let items = await response.json();
      return this.products.push(...items);
    },
    priceFixed(price){
      return Number(price).toLocaleString('en-us', {maximumFractionDigits: 2, minimumFractionDigits:2});
    }
  }
  // Action
  // Getters
})