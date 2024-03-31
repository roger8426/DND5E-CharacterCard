import { createApp } from 'vue'
import './assets/all.scss'
import router from "./router/index";
import App from './App.vue'

createApp(App).use(router).mount('#app')
