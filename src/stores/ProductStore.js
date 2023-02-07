import { defineStore } from 'pinia';
// Products in Our app
let products = fetch('https://dummyjson.com/products').then(res => res.json())

export const useProductStore = defineStore("productStore", {
  // States
  state: () => {
    return {
      products,
    }
  }
  // Action
  // Getters
} )