import { createApp } from 'vue'
import './assets/main.css'
import '@/styles/global.scss'
import '@/styles/theme.css'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
