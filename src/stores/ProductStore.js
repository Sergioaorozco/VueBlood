import { defineStore } from 'pinia';
// Products in Our app
let products = [];
async function fetchProductsJSON() {
  const response = await fetch('https://dummyjson.com/products');
  let items = await response.json();
  products.push(...items.products)
}
fetchProductsJSON();

export const useProductStore = defineStore('productStore', {
  // States
  state:() => {
    return {
      products
      }
    },
  // Action
  // Getters
})