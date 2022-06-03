import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import date from '@/use/date-format'
import './main.min.css'

createApp(App)
  .use(store)
  .use(date)
  .mount('#app')
