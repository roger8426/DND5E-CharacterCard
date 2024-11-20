import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import './assets/all.scss'

createApp(App).use(router).mount('#app')
