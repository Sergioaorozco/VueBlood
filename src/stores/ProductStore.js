import { defineStore } from 'pinia';
import { getDatabase, ref, child, onValue} from "firebase/database";

export const useProductStore = defineStore('productStore', {
  // States
  state:() => {
    return {
      products: []
      }
    },
  actions: {
    pullProducts() {
      const dbRef = ref(getDatabase());
      const pullData = child(dbRef, '/vueshop')
      onValue(pullData, (snapshot) => {
          const data = snapshot.val();
          this.products.push(...data);
      })
    },
    priceFixed(price){
      return Number(price).toLocaleString('en-us', {maximumFractionDigits: 2, minimumFractionDigits:2});
    }
  }
  // Action
  // Getters
})