// Components import
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// import firebase from 'firebase'
import App from './App.vue';
import PrimeVue from 'primevue/config';

// SDK Information
const firebaseConfig = {
  apiKey: "AIzaSyC4PG0KkCwepCOOAJSB-XqXnRyPibj9978",
  authDomain: "vueshop-3dd1a.firebaseapp.com",
  databaseURL: "https://vueshop-3dd1a-default-rtdb.firebaseio.com",
  projectId: "vueshop-3dd1a",
  storageBucket: "vueshop-3dd1a.appspot.com",
  messagingSenderId: "916696338688",
  appId: "1:916696338688:web:158f5e4c50c238457023e5",
  measurementId: "G-PYYZ0KCBEY"
};

// Importing Styles
import './style.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Initialize PrimeVue, Firebase and Vue
const app = initializeApp(firebaseConfig);

const pinia = createPinia();
const vue = createApp(App);
vue
  .use(pinia)
  .use(PrimeVue)
  .mount("#app");

