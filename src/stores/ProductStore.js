import { defineStore } from 'pinia';
import axios from 'axios';
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
    //   const response = await fetch('https://fakestoreapi.com/products?limit=10')
    //   let items = await response.json();
    //   return this.products.push(...items);
    
    const options = {
      method: 'GET',
      url: 'https://amazon-product-reviews-keywords.p.rapidapi.com/product/search',
      params: {keyword: 'iphone', country: 'US', category: 'aps'},
      headers: {
        'X-RapidAPI-Key': 'bc2a1b6975mshf963868f2f09482p183802jsn59306543f071',
        'X-RapidAPI-Host': 'amazon-product-reviews-keywords.p.rapidapi.com'
      }
    };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }
  }
  // Action
  // Getters
})