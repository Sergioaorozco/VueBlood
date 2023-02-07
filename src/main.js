// Components import
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

// Importing Styles
import './style.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Initialize PrimeVue and Vue
const vue = createApp(App);
  vue
  .use(PrimeVue)
  .use(ToastService)
  .mount("#app");

// Use of the components

