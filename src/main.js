import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/css/base.css'
import '@/assets/css/font.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios // axios를 전역변수로 등록 - option api 방식일 경우 this.$axios로 사용 가능
app.use(createPinia()).use(router).mount('#app')
