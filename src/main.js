// Components import
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { initializeApp,  } from "firebase/app";
// import firebase from 'firebase'
import App from './App.vue';
import PrimeVue from 'primevue/config';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_VUE_KEY,
  authDomain: import.meta.env.VITE_VUE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_VUE_DB_URL,
  projectId: import.meta.env.VITE_VUE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_VUE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_VUE_MSG_ID,
  appId: import.meta.env.VITE_VUE_APP_ID,
  measurementId: import.meta.env.VITE_VUE_MEASUREMENT_ID
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

