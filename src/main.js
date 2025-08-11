import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/css/base.css'
import '@/assets/css/font.css'

createApp(App).use(createPinia()).use(router).mount('#app')
