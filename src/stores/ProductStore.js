import { defineStore } from 'pinia';
import { getDatabase, ref, child, onValue} from "firebase/database";

export const useProductStore = defineStore('productStore',{
  // States
  state:() => {
    return {
      products: [],
      cartItems: []
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
    },
    addedToCart(item){
      const itemIndex = this.cartItems.findIndex(ci => ci.id == item.id)
      return (itemIndex == -1) && this.cartItems.push({...item});
      
    },
    removeItems(item){
      const itemIndex = this.cartItems.indexOf(item);
      return (itemIndex !== -1) && this.cartItems.splice(itemIndex, 1);
    }
  }
})