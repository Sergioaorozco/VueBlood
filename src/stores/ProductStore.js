import { defineStore } from 'pinia';
// Products in Our app
let products = [];
async function fetchProductsJSON() {
  const response = await fetch('https://fakestoreapi.com/products')
  let items = await response.json();
  return products.push(...items)
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