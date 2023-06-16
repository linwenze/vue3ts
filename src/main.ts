import { createApp } from 'vue'
import Vant from 'vant'
import './style.css'
import App from './App.vue'
import router from './router/index'
const app=createApp(App)
app.use(Vant)
app.use(router)
app.mount('#app')
