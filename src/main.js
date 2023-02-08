// Components import
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Importing Styles
import './style.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Initialize PrimeVue and Vue
const pinia = createPinia();
export default pinia;
const vue = createApp(App);
vue
  .use(pinia)
  .use(PrimeVue)
  .mount("#app");

